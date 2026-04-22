"use client";

import { type FormEvent, useState } from "react";

type CtfFlagSubmissionProps = {
  expectedFlag: string;
  isComingSoon: boolean;
};

export default function CtfFlagSubmission({
  expectedFlag,
  isComingSoon,
}: CtfFlagSubmissionProps) {
  const [submittedFlag, setSubmittedFlag] = useState("");
  const [submissionState, setSubmissionState] = useState<
    "idle" | "correct" | "incorrect"
  >("idle");

  function handleFlagSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isComingSoon) {
      return;
    }

    const normalizedFlag = submittedFlag.trim();
    setSubmissionState(
      normalizedFlag === expectedFlag ? "correct" : "incorrect",
    );
  }

  return (
    <div className="mb-8 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/60 p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Submit Flag</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {isComingSoon
              ? "Flag submission will unlock when this challenge is available."
              : "Enter the recovered flag to validate your solve."}
          </p>
        </div>
        {isComingSoon && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 dark:bg-amber-500/15 dark:text-amber-300">
            Coming Soon
          </span>
        )}
      </div>

      <form onSubmit={handleFlagSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Enter the recovered flag
          </span>
          <input
            type="text"
            value={submittedFlag}
            onChange={(event) => {
              setSubmittedFlag(event.target.value);
              if (submissionState !== "idle") {
                setSubmissionState("idle");
              }
            }}
            placeholder={isComingSoon ? "Unavailable until release" : "CTF{...}"}
            disabled={isComingSoon}
            aria-disabled={isComingSoon}
            className={`w-full rounded-lg border bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 dark:bg-gray-900 dark:text-gray-100 ${
              submissionState === "correct"
                ? "border-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18),0_0_24px_rgba(34,197,94,0.22)] dark:border-green-400 dark:shadow-[0_0_0_4px_rgba(74,222,128,0.18),0_0_28px_rgba(74,222,128,0.18)]"
                : submissionState === "incorrect"
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 focus:border-blue-500 dark:border-gray-700"
            } disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-gray-950 dark:disabled:text-gray-600`}
          />
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={isComingSoon}
            className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:bg-gray-400"
          >
            Submit Flag
          </button>
          {submissionState === "incorrect" && !isComingSoon && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Incorrect flag. Try again.
            </p>
          )}
          {submissionState === "correct" && !isComingSoon && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Correct flag submitted.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
