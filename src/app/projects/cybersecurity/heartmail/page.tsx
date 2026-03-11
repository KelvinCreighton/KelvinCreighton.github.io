"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeartMailProjectPage() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <main className="flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects/cybersecurity"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Cybersecurity Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">
          HTCOTB2026 CTF: HeartMail 1.0
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Hack The Computer Open The Box - Basic SQL with ssh server login 💘
        </p>
      </div>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          It’s the early days of the internet with screeching dialup tones and
          simple webmail interfaces that feel new and fragile. You’ve been
          working late, preparing something that will spread further than anyone
          expects…
          <br />
          <br />
          Inside this old mail client are conversations, attachments, and
          careless exchanges between people who assumed no one else was
          watching. Somewhere in the noise lies what you need before everything
          goes live.
          <br />
          <br />
          Find it.
        </p>

        <div className="flex gap-4 mb-8">
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
          <a
            href="https://github.com/KelvinCreighton/HTCOTB-CTF-2026"
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
            <strong>Topic:</strong> Basic SQL Injection & SSH Login
            <br />
            <strong>Difficulty:</strong> Medium
            <br />
            <strong>Points:</strong> 500
            <br />
            <strong>Flag Format:</strong> <code>HTCOTB&#123;...&#125;</code>
          </p>
        </div>

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
              <p>
                1. Navigate to the webmail application and locate the search
                bar.
              </p>
              <p>
                2. Input a basic SQL injection payload to bypass the query
                filter and reveal hidden emails. Type: <code>' OR 1=1 --</code>
              </p>
              <p>
                3. Look through the newly revealed emails. You should find a
                message containing an SSH private key.
              </p>
              <p>
                4. Copy the entire SSH private key into a new file on your
                machine, named <code>heartmailserver_key</code>.
              </p>
              <p>
                5. Set the appropriate permissions for the key file to ensure
                it's secure enough for the SSH client to use: <br />
                <code>chmod 600 heartmailserver_key</code>
              </p>
              <p>
                6. Connect to the server using the key: <br />
                <code>
                  ssh -i heartmailserver_key heartmailserver@[server2ip]
                </code>
              </p>
              <p>
                7. Once inside the server, retrieve the flag by running: <br />
                <code>cat special/flag.txt</code>
              </p>
              <p>
                8. The server will output the flag:{" "}
                <code>HTCOTB&#123;Lovely_PrivateKey_4Me&#125;</code>
              </p>

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
    </main>
  );
}
