"use client";
import { Download, Play, X, ArrowUp } from "lucide-react";
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
        <h2>{file ? "Score & playback" : "Interactive simulation"}</h2>
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
            {active ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Play size={18} aria-hidden="true" />
            )}
          </button>
          {file && (
            <a className="button" href={file} download>
              <Download aria-hidden="true" /> Download MusicXML
            </a>
          )}
        </div>
      </div>
      {!active && preview && (
        <div className="demo-preview-image">
          <BlurImage
            src={preview}
            alt={
              file
                ? "Preview of the score notation"
                : "Preview of the 2D robotic arm simulation, with a target point and inverse-kinematics arm"
            }
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
              Close and return to the article{" "}
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
