import { wicysChallenges } from "@/app/projects/cybersecurity/wicys-ctf-data";
import CtfFlagSubmission from "@/components/CtfFlagSubmission";
import InProgressNotice from "@/components/InProgressNotice";
function inline(text: string) {
  return text
    .split(/(`[^`]+`)/g)
    .map((p, i) =>
      p.startsWith("`") && p.endsWith("`") ? (
        <code key={i}>{p.slice(1, -1)}</code>
      ) : (
        p
      ),
    );
}
export default function WicysCtfPage({
  challengeId,
}: {
  challengeId: keyof typeof wicysChallenges;
}) {
  const challenge = wicysChallenges[challengeId];
  const downloads = challenge.downloadFiles ?? [];
  const comingSoon = downloads.length === 0;
  return (
    <article className="project-body article-content">
      <section>
        <h2>The challenge</h2>
        {challenge.description.map((p) => (
          <p key={p}>{inline(p)}</p>
        ))}
      </section>
      <section>
        <h2>Challenge details</h2>
        <dl className="challenge-details">
          <div>
            <dt>Topic</dt>
            <dd>{challenge.topic}</dd>
          </div>
          <div>
            <dt>Difficulty</dt>
            <dd>{challenge.difficulty}</dd>
          </div>
          <div>
            <dt>Points</dt>
            <dd>{challenge.points}</dd>
          </div>
          <div>
            <dt>Flag format</dt>
            <dd>
              <code>{challenge.flagFormat}</code>
            </dd>
          </div>
        </dl>
        {comingSoon ? (
          <InProgressNotice message="This challenge is still being finalized. The playable release is not available yet." />
        ) : (
          <div className="case-actions">
            {downloads.map((d) => (
              <a
                className="button"
                href={d.href}
                download={d.filename}
                key={d.href}
              >
                {d.label} ↓
              </a>
            ))}
          </div>
        )}
        <a
          className="text-link"
          href="https://github.com/KelvinCreighton/WICYS-Cross-Chapter-CTF-2026"
          target="_blank"
          rel="noreferrer"
        >
          Challenge source on GitHub ↗
        </a>
      </section>
      <CtfFlagSubmission
        expectedFlag={challenge.expectedFlag}
        isComingSoon={comingSoon}
      />
      <details className="solution-toggle">
        <summary>Reveal solution · spoilers</summary>
        <ol>
          {challenge.solutionSteps.map((step) => (
            <li key={step}>{inline(step)}</li>
          ))}
        </ol>
      </details>
    </article>
  );
}
