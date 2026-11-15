"use client";
import dynamic from "next/dynamic";
import BlurImage from "@/components/BlurImage";
import { useRef, useState } from "react";
const SheetMusicViewer = dynamic(
  () => import("@/components/SheetMusicViewer"),
  { ssr: false, loading: () => <p role="status">Loading score viewer…</p> },
);
const RoboticArmSimulator = dynamic(
  () => import("@/components/RoboticArmSimulator"),
  { ssr: false, loading: () => <p role="status">Loading simulator…</p> },
);
export default function InteractiveProject({
  file,
  preview,
}: {
  file?: string;
  preview?: string;
}) {
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <section className="demo-frame interactive-surface" id="interactive-demo">
      <div className="demo-preview">
        <p className="eyebrow">
          {file
            ? "Music / Score & playback"
            : "Numerical methods / Interactive model"}
        </p>
        <h2>
          {file
            ? "Read it. Play it. Listen closely."
            : "Move the arm. Inspect the method."}
        </h2>
        <p>
          {file
            ? "Open the score to see the notation and use the playback controls. Audio starts only when you press Play."
            : "Compare Newton’s method and Broyden’s method with the original simulation controls."}
        </p>
        <div className="intro-actions">
          <button
            className="button"
            ref={buttonRef}
            aria-expanded={active}
            onClick={() => setActive(!active)}
          >
            {active ? "Close" : "Open"} {file ? "score" : "simulation"}{" "}
            <span>{active ? "×" : "↗"}</span>
          </button>
          {file && (
            <a className="text-link" href={file} download>
              Download MusicXML ↓
            </a>
          )}
        </div>
      </div>
      {!active && preview && (
        <div className="score-preview">
          <BlurImage
            src={preview}
            alt="Preview of the score notation"
            fill
            sizes="(max-width: 760px) 90vw, 900px"
          />
        </div>
      )}
      {active && (
        <div className="interactive-content">
          {file ? <SheetMusicViewer file={file} /> : <RoboticArmSimulator />}
          <div className="demo-toolbar">
            <button
              onClick={() => {
                setActive(false);
                buttonRef.current?.focus();
              }}
            >
              Close and return to the article ↑
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
