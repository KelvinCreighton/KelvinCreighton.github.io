"use client";

import Link from "next/link";
import { useState } from "react";

import { wicysChallenges } from "@/app/projects/cybersecurity/wicys-ctf-data";
import CtfFlagSubmission from "@/components/CtfFlagSubmission";
import InProgressNotice from "@/components/InProgressNotice";
import ProjectPager from "@/components/ProjectPager";

type WicysCtfPageProps = {
  challengeId: keyof typeof wicysChallenges;
};

function renderInlineCode(text: string) {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={`${part}-${index}`}
          className="rounded-md bg-gray-200/70 dark:bg-gray-800/70 px-1.5 py-0.5 text-[0.95em] font-inherit text-inherit"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export default function WicysCtfPage({ challengeId }: WicysCtfPageProps) {
  const [showSolution, setShowSolution] = useState(false);
  const challenge = wicysChallenges[challengeId];
  const githubUrl =
    "https://github.com/KelvinCreighton/WICYS-Cross-Chapter-CTF-2026";
  const challengeDownloads = challenge.downloadFiles ?? [];
  const isComingSoon = challengeDownloads.length === 0;

  return (
    <main className="flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects/cybersecurity"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Cybersecurity Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">{challenge.title}</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          {challenge.subtitle}
        </p>
      </div>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <div className="mb-8 space-y-4 text-gray-700 dark:text-gray-300">
          {challenge.description.map((paragraph) => (
            <p key={paragraph}>{renderInlineCode(paragraph)}</p>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          {challengeDownloads.length > 0 ? (
            challengeDownloads.map((download) => (
              <a
                key={download.href}
                href={download.href}
                download={download.filename}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                {download.label}
              </a>
            ))
          ) : (
            <div className="relative group">
              <button
                disabled
                className="px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed opacity-60 font-medium flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Coming Soon
              </button>
              <div className="absolute left-0 bottom-full mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                This challenge will be available soon
              </div>
            </div>
          )}
          <a
            href={githubUrl}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code (GitHub)
          </a>
        </div>

        <h2 className="text-2xl font-bold mb-4">Challenge Details</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
          <p>
            <strong>Topic:</strong> {challenge.topic}
            <br />
            <strong>Difficulty:</strong> {challenge.difficulty}
            <br />
            <strong>Points:</strong> {challenge.points}
            <br />
            <strong>Flag Format:</strong>{" "}
            <code className="rounded-md bg-gray-200/70 dark:bg-gray-800/70 px-1.5 py-0.5 text-[0.95em] font-inherit text-inherit">
              {challenge.flagFormat}
            </code>
          </p>
        </div>

        {isComingSoon && (
          <InProgressNotice message="This WICYS challenge is still being finalized, so the full playable release is not available yet." />
        )}

        <CtfFlagSubmission
          expectedFlag={challenge.expectedFlag}
          isComingSoon={isComingSoon}
        />

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Solution</h2>

          {!showSolution ? (
            <button
              onClick={() => setShowSolution(true)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors font-medium flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Show Solution Spoiler
            </button>
          ) : (
            <div className="space-y-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-950 p-6 rounded-lg animate-in fade-in duration-300">
              {challenge.solutionSteps.map((step, index) => (
                <p key={step}>
                  {index + 1}. {renderInlineCode(step)}
                </p>
              ))}

              <button
                onClick={() => setShowSolution(false)}
                className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Hide Solution
              </button>
            </div>
          )}
        </div>
      </div>

      <ProjectPager
        category="cybersecurity"
        currentPath={`/projects/cybersecurity/${challenge.slug}`}
      />
    </main>
  );
}
