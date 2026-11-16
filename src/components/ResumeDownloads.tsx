"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
export default function ResumeDownloads() {
  const params = useSearchParams();
  const router = useRouter();
  const [preview, setPreview] = useState(false);
  const type =
    params.get("focus") === "cybersecurity" ? "cybersecurity" : "embedded";
  const url = `/resume-${type}.pdf`;
  return (
    <aside className="resume-downloads">
      <p className="eyebrow">Take a copy</p>
      <h2>Resume</h2>
      <label htmlFor="resume-focus" className="control-label">
        Resume focus
      </label>
      <select
        id="resume-focus"
        value={type}
        onChange={(e) =>
          router.push(`/resume?focus=${e.target.value}`, { scroll: false })
        }
      >
        <option value="embedded">Embedded systems</option>
        <option value="cybersecurity">Cybersecurity</option>
      </select>
      <p>Two versions, tailored to the role.</p>
      <a
        className="button"
        href={url}
        download={`Kelvin_Creighton_${type}.pdf`}
      >
        Download PDF ↓
      </a>
      <a className="text-link" href={url} target="_blank" rel="noreferrer">
        Open PDF in a new tab ↗
      </a>
      <button
        className="text-link"
        aria-expanded={preview}
        aria-controls="resume-preview"
        onClick={() => setPreview(!preview)}
      >
        {preview ? "Hide" : "Show"} embedded preview {preview ? "−" : "+"}
      </button>
      {preview && (
        <div id="resume-preview" className="resume-preview">
          <object
            data={url}
            type="application/pdf"
            aria-label={`${type} resume PDF`}
          >
            <p>
              Your browser cannot display the PDF here.{" "}
              <a href={url}>Open the resume</a>.
            </p>
          </object>
        </div>
      )}
      <div className="resume-alternates">
        <p>Direct downloads</p>
        <a href="/resume-embedded.pdf" download>
          Embedded systems PDF ↓
        </a>
        <a href="/resume-cybersecurity.pdf" download>
          Cybersecurity PDF ↓
        </a>
      </div>
    </aside>
  );
}
