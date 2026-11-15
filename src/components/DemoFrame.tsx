"use client";
import { useEffect, useRef, useState } from "react";
export default function DemoFrame({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [slow, setSlow] = useState(false);
  const launchRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!active || loaded) return;
    const timeout = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(timeout);
  }, [active, loaded]);
  return (
    <section
      id="interactive-demo"
      className="demo-frame interactive-surface"
      aria-label={`${title} interactive demo`}
    >
      {active ? (
        <>
          <div className="demo-toolbar">
            <span>{title}</span>
            <a href={src} target="_blank" rel="noreferrer">
              Open in a new tab ↗
            </a>
            <button
              onClick={() => {
                setActive(false);
                setLoaded(false);
                setSlow(false);
                setTimeout(() => launchRef.current?.focus(), 0);
              }}
            >
              Close demo ×
            </button>
          </div>
          <p className="demo-message" role="status">
            {loaded
              ? "Click inside the demo to use its controls. Use Tab to move between the demo and page controls."
              : slow
                ? "This is taking longer than expected. Try opening the demo in a new tab."
                : "Loading demo…"}
          </p>
          <iframe
            src={src}
            title={title}
            onLoad={() => setLoaded(true)}
            allowFullScreen
            style={{
              width: "100%",
              height: "min(75vh, 720px)",
              minHeight: 400,
              border: 0,
            }}
          />
          <div className="demo-toolbar">
            <button
              onClick={() => {
                setActive(false);
                setLoaded(false);
                setTimeout(() => launchRef.current?.focus(), 0);
              }}
            >
              Stop and return to the article ↑
            </button>
          </div>
        </>
      ) : (
        <div className="demo-preview">
          <p className="eyebrow">Interactive project</p>
          <h2>Try {title}</h2>
          <p>
            A keyboard and a larger screen give the best experience. The
            original controls and instructions are preserved below.
          </p>
          <div className="intro-actions">
            <button
              className="button"
              ref={launchRef}
              onClick={() => setActive(true)}
            >
              Launch demo <span>↗</span>
            </button>
            <a
              className="text-link"
              href={src}
              target="_blank"
              rel="noreferrer"
            >
              Open separately ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
