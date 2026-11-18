"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ResumeDownloads() {
  const params = useSearchParams();
  const router = useRouter();
  const previewRef = useRef<HTMLElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const type =
    params.get("focus") === "cybersecurity" ? "cybersecurity" : "embedded";
  const url = `/resume-${type}.pdf`;
  const label = type === "embedded" ? "Embedded systems" : "Cybersecurity";

  useEffect(() => {
    const updateFullscreen = () =>
      setIsFullscreen(document.fullscreenElement === previewRef.current);
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await previewRef.current?.requestFullscreen();
    }
  };

  return (
    <aside className="resume-downloads">
      <h2>Resume</h2>
      <label htmlFor="resume-focus" className="control-label">
        Resume type
      </label>
      <select
        id="resume-focus"
        value={type}
        onChange={(event) =>
          router.push(`/resume?focus=${event.target.value}`, { scroll: false })
        }
      >
        <option value="embedded">Embedded systems</option>
        <option value="cybersecurity">Cybersecurity</option>
      </select>
      <div className="resume-viewer-actions">
        <a className="button" href={url} download={`Kelvin_Creighton_${type}.pdf`}>
          Download PDF
        </a>
        <button
          className="button resume-fullscreen-button"
          type="button"
          onClick={toggleFullscreen}
          aria-label={`${isFullscreen ? "Exit" : "Enter"} fullscreen resume preview`}
        >
          {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        </button>
      </div>
      <section
        ref={previewRef}
        className="resume-preview"
        aria-label={`${label} resume preview`}
      >
        <iframe
          key={url}
          src={`${url}#zoom=70&pagemode=none`}
          title={`${label} resume PDF`}
        />
      </section>
    </aside>
  );
}
