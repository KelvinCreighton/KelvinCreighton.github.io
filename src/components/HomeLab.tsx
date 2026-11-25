"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import BlurImage from "@/components/BlurImage";

const RoboticArmSimulator = dynamic(
  () => import("@/components/RoboticArmSimulator"),
  {
    ssr: false,
    loading: () => (
      <p className="lab-loading" role="status">
        Loading the simulator…
      </p>
    ),
  },
);

/**
 * The homepage's live demo. The poster costs nothing until someone asks for
 * the simulator; then the real component loads in place, with the same
 * controls as on the project page.
 */
export default function HomeLab() {
  const [running, setRunning] = useState(false);
  const launch = useRef<HTMLButtonElement>(null);
  const stage = useRef<HTMLDivElement>(null);

  return (
    <div className="lab-console" data-running={running}>
      <div className="lab-console-bar">
        <span className="lab-status">
          <span className="lab-status-light" aria-hidden="true" />
          {running ? "Running in your browser" : "Ready"}
        </span>
        <span className="lab-console-title">Robotic arm: inverse kinematics</span>
        {running ? (
          <button
            type="button"
            className="lab-bar-button"
            onClick={() => {
              setRunning(false);
              requestAnimationFrame(() => launch.current?.focus());
            }}
          >
            <X aria-hidden="true" />
            Stop
          </button>
        ) : (
          <Link className="lab-bar-button" href="/projects/engineering/robotic-arm-simulation">
            Read the write-up
          </Link>
        )}
      </div>
      {running ? (
        <div className="lab-stage" ref={stage} tabIndex={-1}>
          <RoboticArmSimulator />
        </div>
      ) : (
        <div className="lab-poster">
          <BlurImage
            src="/images/projects/robotic-arm-simulation-title.webp"
            alt="The 2D robotic arm simulation, reaching for a target point"
            fill
            sizes="(max-width: 900px) 92vw, 760px"
          />
          <div className="lab-poster-overlay">
            <button
              ref={launch}
              type="button"
              className="button primary lab-launch"
              onClick={() => {
                setRunning(true);
                requestAnimationFrame(() => stage.current?.focus());
              }}
            >
              <Play aria-hidden="true" />
              Launch the simulator
            </button>
            <p>Runs entirely in your browser. Nothing loads until you press it.</p>
          </div>
        </div>
      )}
    </div>
  );
}
