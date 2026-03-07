'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CupidPortalProjectPage() {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link href="/projects/cybersecurity" className="text-sm text-gray-500 hover:underline self-start mb-4">
          &larr; Back to Cybersecurity Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">HTCOTB2026 CTF: Cupid's Secret Message</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Hack The Computer Open The Box - Valentines + ILOVEYOU Virus Themed Web CTF Challenge 💘
        </p>
      </div>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Cupid's old message portal is floating around online, quietly delivering Valentine notes from years past.
          <br/>
          …but it feels unlikely Cupid built this perfectly.
          <br/>
          Take a look around and see what other messages might be hiding nearby. One of them definitely wasn't meant for you.
        </p>

        <div className="flex gap-4 mb-8">
          <a 
            href="#" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Challenge
          </a>
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
            <strong>Topic:</strong> Insecure Direct Object Reference (IDOR)<br/>
            <strong>Difficulty:</strong> Easy<br/>
            <strong>Points:</strong> 300<br/>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              Show Solution Spoiler
            </button>
          ) : (
            <div className="space-y-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-950 p-6 rounded-lg animate-in fade-in duration-300">
              <p>
                1. Navigate to the application and click the "Open Message" button.
              </p>
              <p>
                2. Observe the URL in your browser's address bar. It will look something like this: <code>/message?id=14</code>
              </p>
              <p>
                3. The application uses the <code>id</code> parameter to fetch messages from its backend. Because there is no authorization check ensuring you are only allowed to read the randomly generated ID, this creates an Insecure Direct Object Reference (IDOR) vulnerability.
              </p>
              <p>
                4. Modify the URL parameter to other numbers. For instance, change it to <code>/message?id=1</code>, <code>/message?id=2</code>, etc. You can manually fuzz this or use a tool like Burp Suite Intruder (more advanced).
              </p>
              <p>
                5. Eventually, by testing common edge-case numbers or simply iterating downward, test <code>/message?id=0</code>.
              </p>
              <p>
                6. The server will return the hidden message containing the flag: <code>HTCOTB&#123;cupid_shared_the_wrong_message&#125;</code>
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