"use client";

import { useState } from "react";

export default function ResumePage() {
  const [resumeType, setResumeType] = useState<"cybersecurity" | "embedded">("cybersecurity");
  
  const resumeUrl = resumeType === "cybersecurity" ? "/resume-cybersecurity.pdf" : "/resume-embedded.pdf";
  const downloadName = resumeType === "cybersecurity" ? "Kelvin_Resume_Cybersecurity.pdf" : "Kelvin_Resume_Embedded.pdf";

  return (
    <main className="animate-page-enter max-w-4xl mx-auto px-4 md:px-0 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Resume</h1>
          <select 
            value={resumeType} 
            onChange={(e) => setResumeType(e.target.value as "cybersecurity" | "embedded")}
            className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="cybersecurity">Cybersecurity</option>
            <option value="embedded">Embedded Systems</option>
          </select>
        </div>
        <div className="flex gap-4">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-85 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium py-2 px-4 rounded transition-colors"
          >
            View Fullscreen
          </a>
          <a
            href={resumeUrl}
            download={downloadName}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="w-full h-[80vh] rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <object
          key={resumeUrl}
          data={resumeUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-4 md:p-8 bg-gray-50 dark:bg-gray-900 text-center">
            <p className="mb-4">
              It looks like your browser doesn&apos;t support built-in PDFs.
            </p>
            <a
              href={resumeUrl}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Click here to download the PDF instead.
            </a>
          </div>
        </object>
      </div>
    </main>
  );
}
