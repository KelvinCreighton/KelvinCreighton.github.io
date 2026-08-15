"use client";

import { useEffect, useState, type ReactNode } from "react";
import BlurImage from "@/components/BlurImage";

type AchievementCardProps = {
  title: string;
  subtitle: string;
  date: string;
  meta: string;
  status?: string;
  description: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  onImageClick?: (image: string, alt: string) => void;
};

type AchievementSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function AchievementCard({
  title,
  subtitle,
  date,
  meta,
  status,
  description,
  bullets,
  image,
  imageAlt,
  onImageClick,
}: AchievementCardProps) {
  const altText = imageAlt ?? title;
  return (
    <article className="group flex self-start flex-col overflow-hidden rounded-xl bg-gray-85 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {image ? (
        <button
          type="button"
          onClick={() => onImageClick?.(image, altText)}
          className="relative aspect-video w-full bg-gray-85 p-3 text-left dark:bg-gray-800"
          aria-label={`Open larger view of ${altText}`}
        >
            <BlurImage
              src={image}
              alt={altText}
              className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Click to enlarge
          </span>
        </button>
      ) : null}
      <div className="flex flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm italic text-gray-500 dark:text-gray-400">
              {meta}
            </p>
            <h2 className="mt-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {title}
            </h2>
            <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
              {subtitle}
            </p>
            <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
              {date}
            </p>
          </div>
          {status ? (
            <span className="shrink-0 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-200">
              {status}
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
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
  children,
}: AchievementSectionProps) {
  return (
    <section className="w-full">
      <div className="mb-8 flex flex-col gap-3 border-b border-gray-200 pb-4 dark:border-gray-800 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400 md:text-base">
            {description}
          </p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function AchievementsPage() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!modalImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalImage(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalImage]);

  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <a
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Projects
        </a>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          Achievements
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl">
          Certifications completed and CTF results earned through competition
          and hands-on security work.
        </p>
      </div>

      <div className="flex flex-col gap-14 w-full max-w-5xl">
        <AchievementSection
          title="Certificates"
          description="Security certifications, vendor credentials, and training completed."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
            <AchievementCard
              title="Cisco Rapid Incident Response V7"
              subtitle="Incident response workshop and lab"
              date="July 2026"
              meta="Certificate"
              status="Active"
              description="Cisco XDR incident response workshop focused on investigation, containment, and eradication workflows."
              image="/images/cisco-rapid-incident-response-v7.webp"
              imageAlt="Cisco Rapid Incident Response V7 certificate"
              bullets={[
                "Certificate code: 9998169300KC",
                "The session combined lecture and lab work centered on XDR investigation, threat hunting, analysis of the attack chain, and tracing how incidents developed.",
                "Used Cisco security tooling to correlate endpoint and email threat data, prioritize incidents by risk, and practice response workflows in a lab.",
              ]}
              onImageClick={(src, alt) => setModalImage({ src, alt })}
            />
          </div>
        </AchievementSection>

        <AchievementSection
          title="CTF Accomplishments"
          description="Placement records, competition participation, and challenge solving from events competed in."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
            <AchievementCard
              title="National Cybersecurity Consortium (NCC) CTF"
              subtitle="Web Exploitation, LLM Prompt Injection"
              date="June 2026"
              meta="CTF"
              status="2nd Place"
              description="Competed in the NCC national final CTF as part of CHADS representing the University of Alberta."
              image="/images/achievements/NCC.webp"
              imageAlt="National Cybersecurity Consortium CTF"
              bullets={[
                "Focused on web exploitation and LLM prompt injection challenges.",
                "Our team placed 2nd nationally among university teams from across Canada in NCC’s Capture the Flag competition.",
                "Exploited a leaking API endpoint to extract password hashes, then cracked them to escalate access and retrieve the flag.",
                "Bypassed LLM-based identity verification by crafting a prompt injection that convinced the model to accept a fabricated user ID, escalating to unauthorized higher-privilege access.",
              ]}
              onImageClick={(src, alt) => setModalImage({ src, alt })}
            />
            <AchievementCard
              title="CyberSci Regionals 2025"
              subtitle="Team CHADS B-Team"
              date="November 2025"
              meta="CTF"
              status="5th Place"
              description="Competed in CyberSci Regionals in Calgary with CHADS B-Team and finished strongly against top teams from across the region."
              image="/images/achievements/CyberSci.webp"
              imageAlt="CyberSci Regionals 2025"
              bullets={[
                "CyberSci Regionals 2025 was held in Calgary.",
                "We placed 5th with CHADS B-Team in CyberSci Regionals 2025.",
                "We finished narrowly behind 4th and 3rd place, pushing until the final minute.",
                "First CyberSci competition and a major step forward in cybersecurity depth and confidence.",
              ]}
              onImageClick={(src, alt) => setModalImage({ src, alt })}
            />
            <AchievementCard
              title="SAIT: Alice in PWNderland"
              subtitle="Team CHADS"
              date="July 2025"
              meta="CTF"
              status="4th Place"
              description="Competed at SAIT and helped the team secure several solves across a mix of challenge types."
              image="/images/achievements/Alice.webp"
              imageAlt="Alice in PWNderland CTF"
              bullets={[
                "Competed in SAIT School for Advanced Digital Technology’s CTF event.",
                "We placed 4th at SAIT’s Alice in PWNderland CTF.",
                "Solved challenges across physical security, network forensics, IoT security, and logic puzzles.",
              ]}
              onImageClick={(src, alt) => setModalImage({ src, alt })}
            />
            <AchievementCard
              title="IlluminatiCTF"
              subtitle="National bracket"
              date="May 2025"
              meta="CTF"
              status="3rd Place"
              description="Competed online with CHADS in the national bracket from the University of Alberta."
              image="/images/achievements/illuminatictf.webp"
              imageAlt="IlluminatiCTF"
              bullets={[
                "The national bracket was hosted by the University of Saskatchewan.",
                "We placed 3rd nationally and 6th overall.",
                "Worked through a mix of easy, intermediate, and hard challenges.",
                "Strong team event that reinforced my interest in cybersecurity competition.",
              ]}
              onImageClick={(src, alt) => setModalImage({ src, alt })}
            />
          </div>
        </AchievementSection>
      </div>
      {modalImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={modalImage.alt}
          onClick={() => setModalImage(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            onClick={() => setModalImage(null)}
          >
            Close
          </button>
          <div
            className="max-h-[90vh] max-w-[95vw] overflow-auto rounded-2xl bg-gray-950 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="block max-h-[86vh] max-w-[92vw] object-contain"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
