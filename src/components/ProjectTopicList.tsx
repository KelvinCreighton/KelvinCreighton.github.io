"use client";

import { useEffect, useRef, useState } from "react";

const GAP = 6;

/** One row of topic chips, showing only as many as fit the card's width. */
export default function ProjectTopicList({ topics }: { topics: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(topics.length);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fitTopics = () => {
      const availableWidth = container.clientWidth;
      let usedWidth = 0;
      let fitCount = 0;

      for (let index = 0; index < topics.length; index += 1) {
        const topic = measureRefs.current[index];
        if (!topic) continue;
        const nextWidth =
          topic.getBoundingClientRect().width + (index ? GAP : 0);
        if (usedWidth + nextWidth > availableWidth) break;
        usedWidth += nextWidth;
        fitCount += 1;
      }

      setVisibleCount((current) => (current === fitCount ? current : fitCount));
    };

    fitTopics();
    // Chip widths change once the web font arrives.
    document.fonts?.ready.then(fitTopics);
    const observer = new ResizeObserver(fitTopics);
    observer.observe(container);
    return () => observer.disconnect();
  }, [topics]);

  if (!topics.length) return null;
  return (
    <div
      className="project-card-topics"
      aria-label={`Project topics: ${topics.join(", ")}`}
      title={topics.join(" · ")}
      ref={containerRef}
    >
      {topics.slice(0, visibleCount).map((topic) => (
        <span className="project-card-topic" key={topic}>
          {topic}
        </span>
      ))}
      <span className="project-card-topics-measure" aria-hidden="true">
        {topics.map((topic, index) => (
          <span
            className="project-card-topic"
            key={topic}
            ref={(element) => {
              measureRefs.current[index] = element;
            }}
          >
            {topic}
          </span>
        ))}
      </span>
    </div>
  );
}
