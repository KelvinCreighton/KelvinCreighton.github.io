"use client";
import { Play, ExternalLink, X, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "@/components/BlurImage";
export default function DemoFrame({
  src,
  title,
  preview,
}: {
  src: string;
  title: string;
  preview: string;
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
            <h2 className="demo-toolbar-title">Try {title}</h2>
            <a href={src} target="_blank" rel="noreferrer">
              Open in a new tab <ExternalLink size={16} aria-hidden="true" />
            </a>
            <button
              onClick={() => {
                setActive(false);
                setLoaded(false);
                setSlow(false);
                setTimeout(() => launchRef.current?.focus(), 0);
              }}
            >
              Close demo <X size={16} aria-hidden="true" />
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
              Stop and return to the article{" "}
              <ArrowUp size={16} aria-hidden="true" />
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
              <Play aria-hidden="true" /> Launch demo
            </button>
            <a
              className="text-link"
              href={src}
              target="_blank"
              rel="noreferrer"
            >
              Open separately <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
          <figure className="game-preview">
            <Image src={preview} alt={`${title} gameplay preview`} fill sizes="(max-width: 760px) 90vw, 820px" />
          </figure>
        </div>
      )}
    </section>
  );
}
