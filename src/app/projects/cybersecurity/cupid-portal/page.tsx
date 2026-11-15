import CtfFlagSubmission from "@/components/CtfFlagSubmission";
import InProgressNotice from "@/components/InProgressNotice";

export default function CupidPortalProjectPage() {
  const expectedFlag = "HTCOTB{cupid_shared_the_wrong_message}";
  const isComingSoon = true;

  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Hack The Computer Open The Box - Valentines + ILOVEYOU Virus Themed
          Web CTF Challenge 💘
        </p>
      </div>

      <div className="w-full max-w-4xl bg-gray-85 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Cupid&apos;s old message portal is floating around online, quietly
          delivering Valentine notes from years past.
          <br />
          <br />
          …but it feels unlikely Cupid built this perfectly.
          <br />
          <br />
          Take a look around and see what other messages might be hiding nearby.
          One of them definitely wasn&apos;t meant for you.
        </p>

        <h2 className="text-2xl font-bold mb-4">Challenge Details</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
          <p>
            <strong>Topic:</strong> Insecure Direct Object Reference (IDOR)
            <br />
            <strong>Difficulty:</strong> Easy
            <br />
            <strong>Points:</strong> 300
            <br />
            <strong>Flag Format:</strong> <code>HTCOTB&#123;...&#125;</code>
          </p>
        </div>

        {isComingSoon && (
          <InProgressNotice message="This HTCOTB challenge is still being finalized, so the full playable release is not available yet." />
        )}

        <CtfFlagSubmission
          expectedFlag={expectedFlag}
          isComingSoon={isComingSoon}
        />

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Solution</h2>

          <details className="solution-toggle">
            <summary>Reveal solution · spoilers</summary>(
            <div className="space-y-4 text-gray-700 dark:text-gray-300 bg-gray-85 dark:bg-gray-950 p-6 rounded-lg animate-in fade-in duration-300">
              <p>
                1. Navigate to the application and click the &quot;Open
                Message&quot; button.
              </p>
              <p>
                2. Observe the URL in your browser&apos;s address bar. It will
                look something like this: <code>/message?id=14</code>
              </p>
              <p>
                3. The application uses the <code>id</code> parameter to fetch
                messages from its backend. Because there is no authorization
                check ensuring you are only allowed to read the randomly
                generated ID, this creates an Insecure Direct Object Reference
                (IDOR) vulnerability.
              </p>
              <p>
                4. Modify the URL parameter to other numbers. For instance,
                change it to <code>/message?id=1</code>,{" "}
                <code>/message?id=2</code>, etc. You can manually fuzz this or
                use a tool like Burp Suite Intruder (more advanced).
              </p>
              <p>
                5. Eventually, by testing common edge-case numbers or simply
                iterating downward, test <code>/message?id=0</code>.
              </p>
              <p>
                6. The server will return the hidden message containing the
                flag:{" "}
                <code>HTCOTB&#123;cupid_shared_the_wrong_message&#125;</code>
              </p>
            </div>
            )
          </details>
        </div>
      </div>
    </div>
  );
}
