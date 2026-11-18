"use client";

import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ResumeDownloads() {
  const previewRef = useRef<HTMLElement>(null);
  const [type, setType] = useState<"embedded" | "cybersecurity">("embedded");
  const url = `/resume-${type}.pdf`;
  const label = type === "embedded" ? "Embedded systems" : "Cybersecurity";

  return (
    <aside className="resume-downloads">
      <h2>Resume</h2>
      <label htmlFor="resume-focus" className="control-label">
        Resume type
      </label>
      <select
        id="resume-focus"
        value={type}
        onChange={(event) => setType(event.target.value as typeof type)}
      >
        <option value="embedded">Embedded systems</option>
        <option value="cybersecurity">Cybersecurity</option>
      </select>
      <div className="resume-viewer-actions">
        <a className="button" href={url} download={`Kelvin_Creighton_${type}.pdf`}>
          Download PDF
        </a>
        <a
          className="text-link"
          href={`${url}#zoom=80&pagemode=none`}
          target="_blank"
          rel="noreferrer"
        >
          Open separately <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
      <section
        ref={previewRef}
        className="resume-preview"
        aria-label={`${label} resume preview`}
      >
        <iframe
          key={url}
          src={`${url}#zoom=80&pagemode=none`}
          title={`${label} resume PDF`}
        />
      </section>
    </aside>
  );
}
