import type { ReactNode } from "react";

type AchievementCardProps = {
  title: string;
  subtitle: string;
  meta: string;
  status?: string;
  description: string;
  bullets?: string[];
};

type AchievementSectionProps = {
  title: string;
  description: string;
  badge?: string;
  children: ReactNode;
};

function AchievementCard({
  title,
  subtitle,
  meta,
  status,
  description,
  bullets,
}: AchievementCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-gray-85 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="border-b border-gray-200/80 bg-white/40 px-5 py-4 dark:border-gray-800 dark:bg-gray-800/40">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {meta}
            </p>
            <h2 className="mt-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {title}
            </h2>
            <p className="mt-1 text-sm font-medium text-blue-700 dark:text-blue-300">
              {subtitle}
            </p>
          </div>
          {status ? (
            <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-200">
              {status}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {bullets ? (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

function AchievementSection({
  title,
  description,
  badge,
  children,
}: AchievementSectionProps) {
  return (
    <section className="w-full">
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-gray-200 pb-4 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
        {badge ? (
          <span className="shrink-0 rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
            {badge}
          </span>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export default function AchievementsPage() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <a
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Projects
        </a>
        <h1 className="text-4xl font-bold">Achievements</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-3xl">
          Certifications, competition results, and other accomplishments in one
          place. Use this page as a portfolio-ready record of credentials and
          CTF placements.
        </p>
      </div>

      <div className="flex flex-col gap-12 w-full max-w-5xl">
        <AchievementSection
          title="Certificates"
          description="Security certifications, vendor credentials, and training completions."
          badge="1 entry"
        >
          <div className="grid grid-cols-1 gap-8 w-full">
            <AchievementCard
              title="Cisco Rapid Incident Response V7"
              subtitle="Certificate code: 9998169300KC"
              meta="Certificate"
              status="Active"
              description="Cisco incident response certification currently listed as your only certificate."
              bullets={[
                "Certificate code: 9998169300KC",
                "Use this card later to add issue date, verification link, and any related coursework or exam details.",
              ]}
            />
          </div>
        </AchievementSection>

        <AchievementSection
          title="CTF Accomplishments"
          description="Placement records, competition participation, and notable challenge-solving outcomes."
          badge="Competition history"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <AchievementCard
              title="National Cybersecurity Consortium (NCC) CTF"
              subtitle="Web Exploitation, LLM Prompt Injection"
              meta="CTF"
              status="2nd Place"
              description="National final CTF with CHADS representing the University of Alberta."
              bullets={[
                "Placed 2nd nationally among university teams from across Canada in NCC’s Capture the Flag competition.",
                "Exploited a leaking API endpoint to extract password hashes, then cracked them to escalate access and retrieve the flag.",
                "Bypassed LLM-based identity verification by crafting a prompt injection that convinced the model to accept a fabricated user ID, escalating to unauthorized higher-privilege access.",
              ]}
            />
            <AchievementCard
              title="CyberSci Regionals 2025"
              subtitle="Team CHADS B-Team"
              meta="CTF"
              status="5th Place"
              description="Regional competition with a strong finishing performance against top teams from across the region."
              bullets={[
                "Placed 5th with CHADS B-Team in CyberSci Regionals 2025.",
                "Finished narrowly behind 4th and 3rd place, with the team pushing until the final minute.",
                "First CyberSci competition experience and a major step forward in cybersecurity depth and confidence.",
              ]}
            />
            <AchievementCard
              title="SAIT: Alice in PWNderland"
              subtitle="Team CHADS"
              meta="CTF"
              status="4th Place"
              description="In-person CTF with a strong overall showing and several solved challenges."
              bullets={[
                "Placed 4th at SAIT’s Alice in PWNderland CTF.",
                "Solved challenges across physical security, network forensics, IoT security, and logic puzzles.",
                "The team made a sunrise trip to Calgary and back, making the placement a memorable one.",
              ]}
            />
            <AchievementCard
              title="IlluminatiCTF"
              subtitle="National bracket"
              meta="CTF"
              status="3rd Place"
              description="Online national competition with the CHADS team from the University of Alberta."
              bullets={[
                "Placed 3rd nationally and 6th overall.",
                "Participated in a mix of easy, intermediate, and hard challenges.",
                "A strong team event that reinforced long-term interest in cybersecurity competition.",
              ]}
            />
            <AchievementCard
              title="WiCyS CTF 2026"
              subtitle="University of Alberta / Team CHADS"
              meta="CTF"
              status="Participation"
              description="A major team competition where the CHADS team represented the University of Alberta."
              bullets={[
                "Shared participation in the WiCyS Cross Chapter CTF with a broad challenge set.",
                "Add the exact placement, date, and team name here when you want to turn this into a full record.",
                "Good placeholder spot for additional podium finishes or team summaries.",
              ]}
            />
            <AchievementCard
              title="HTCOTB 2026"
              subtitle="Challenge creator / competitor"
              meta="CTF"
              status="Participation"
              description="A custom CTF event where you contributed as both competitor and challenge creator."
              bullets={[
                "Add the exact placement or team result here if you want to log it as a formal achievement.",
                "Useful for highlighting challenge development, participation, and team contribution.",
              ]}
            />
          </div>
        </AchievementSection>
      </div>
    </main>
  );
}
