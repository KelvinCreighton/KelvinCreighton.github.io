import CtfFlagSubmission from "@/components/CtfFlagSubmission";
import InProgressNotice from "@/components/InProgressNotice";

export default function HeartMailProjectPage() {
  const expectedFlag = "HTCOTB{Lovely_PrivateKey_4Me}";
  const isComingSoon = true;

  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Hack The Computer Open The Box - Basic SQL with ssh server login 💘
        </p>
      </div>

      <div className="w-full max-w-4xl bg-gray-85 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          It&apos;s the early days of the internet with screeching dialup tones
          and simple webmail interfaces that feel new and fragile. You’ve been
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
                1. Navigate to the webmail application and locate the search
                bar.
              </p>
              <p>
                2. Input a basic SQL injection payload to bypass the query
                filter and reveal hidden emails. Type:{" "}
                <code>&apos; OR 1=1 --</code>
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
                it&apos;s secure enough for the SSH client to use: <br />
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
            </div>
            )
          </details>
        </div>
      </div>
    </div>
  );
}
