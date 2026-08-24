"use client";

import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "@/components/BlurImage";
import type { ReactNode } from "react";

type TimelineItem = {
  title: string;
  dateKey: string;
  category: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  position: "top" | "bottom";
  xOffsetPx: number;
};

const timelineRailItems: TimelineItem[] = [
  {
    title: "My First Game",
    dateKey: "2017-01-01",
    category: "Game Dev",
    description: "The first JavaScript game I ever made, which started my interest in interactive development.",
    href: "/projects/game-dev/my-first-game",
    image: "/images/projects/my-first-game.webp",
    imageAlt: "My First Game project",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "UFO",
    dateKey: "2017-06-01",
    category: "Game Dev",
    description: "A simple arcade-style game built around movement, enemies, and levels.",
    href: "/projects/game-dev/ufo",
    image: "/images/projects/ufo.webp",
    imageAlt: "UFO game project",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
    dateKey: "2017-09-01",
    category: "Music",
    description: "A piano arrangement of a high-energy Homestuck theme.",
    href: "/projects/music/blind-justice-investigation",
    image: "/images/projects/BL1ND_JUST1C3_1NV3ST1G4T1ON.webp",
    imageAlt: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "Beethoven Virus",
    dateKey: "2018-01-01",
    category: "Music",
    description: "A piano arrangement that pushed my arrangement and performance skills further.",
    href: "/projects/music/beethoven-virus",
    image: "/images/projects/Beethoven_Virus.webp",
    imageAlt: "Beethoven Virus arrangement",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "Tank Game",
    dateKey: "2018-05-01",
    category: "Game Dev",
    description: "A top-down tank shooter focused on movement, aiming, and game logic.",
    href: "/projects/game-dev/tank-game",
    image: "/images/projects/tank-game.webp",
    imageAlt: "Tank Game project",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "The Longest Moment Before a New Beginning",
    dateKey: "2019-10-01",
    category: "Music",
    description: "An original piano composition written in high school.",
    href: "/projects/music/the-longest-moment",
    image: "/images/projects/The-Longest-Moment-Before-a-New-Beginning.webp",
    imageAlt: "The Longest Moment Before a New Beginning",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "Plastic Mind",
    dateKey: "2019-11-01",
    category: "Game Dev",
    description: "A physics platformer ported from Processing to p5.js.",
    href: "/projects/game-dev/plastic-mind",
    image: "/images/projects/plastic-mind-title.webp",
    imageAlt: "Plastic Mind project",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "3D Game Engine",
    dateKey: "2022-06-01",
    category: "Game Dev",
    description: "A first 3D engine project exploring projection, rotation, and matrix math.",
    href: "/projects/game-dev/3d-game",
    image: "/images/projects/3d-game.webp",
    imageAlt: "3D Game Engine project",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "Blackhole Simulator",
    dateKey: "2022-08-01",
    category: "Game Dev",
    description: "A physics-based orbital mechanics simulator with playful satellites.",
    href: "/projects/game-dev/blackhole-simulator",
    image: "/images/projects/Blackhole_Simulator-image.webp",
    imageAlt: "Blackhole Simulator project",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "Remote Control Car",
    dateKey: "2024-11-01",
    category: "Engineering",
    description: "An educational RC car curriculum built around low-cost robotics and prototyping.",
    href: "/projects/engineering/rc-car",
    image: "/images/projects/rc-car-title.webp",
    imageAlt: "Remote control car project",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "IlluminatiCTF",
    dateKey: "2025-05-01",
    category: "Achievement",
    description: "Placed 3rd nationally and 6th overall in the national bracket.",
    href: "/achievements",
    image: "/images/achievements/illuminatictf.webp",
    imageAlt: "IlluminatiCTF achievement",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "Manual Transmission Rebuild",
    dateKey: "2025-08-01",
    category: "Automotive",
    description: "A transmission rebuild that grew from a straightforward repair into a full drivetrain project.",
    href: "/projects/auto/transmission-rebuild",
    image: "/images/projects/transmission-title.webp",
    imageAlt: "Manual transmission rebuild project",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "PicoCTF Writeups",
    dateKey: "2025-10-15",
    category: "Cybersecurity",
    description: "A grouped set of PicoCTF writeups covering SSTI, NoSQL injection, eval() exploitation, and SOAP/XXE.",
    href: "/projects/cybersecurity",
    image: "/images/projects/picoCTF_logo.webp",
    imageAlt: "PicoCTF writeups",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "CyberSci Regionals 2025",
    dateKey: "2025-11-01",
    category: "Achievement",
    description: "Placed 5th with CHADS B-Team in Calgary.",
    href: "/achievements",
    image: "/images/achievements/CyberSci.webp",
    imageAlt: "CyberSci Regionals 2025",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "MacSync Stealer: Static Malware Analysis",
    dateKey: "2025-12-01",
    category: "Cybersecurity",
    description: "A static malware analysis of MacSync Stealer and its execution flow.",
    href: "/projects/cybersecurity/macsync-stealer",
    image: "/images/projects/cyber-highlights.webp",
    imageAlt: "MacSync Stealer static malware analysis",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "HTCOTB2026 CTF Challenges",
    dateKey: "2026-02-01",
    category: "Cybersecurity",
    description: "A grouped set of HTCOTB challenge writeups and custom challenges built for the University of Alberta Cybersecurity Club.",
    href: "/projects/cybersecurity?category=HTCOTB%20CTF",
    image: "/images/projects/CHADS_logo.webp",
    imageAlt: "HTCOTB2026 CTF challenges",
    position: "bottom",
    xOffsetPx: 0,
  },
  {
    title: "WiCyS CTF Challenges",
    dateKey: "2026-03-01",
    category: "Cybersecurity",
    description: "A grouped set of WiCyS CTF challenges spanning forensics, reversing, pwn, and web exploitation.",
    href: "/projects/cybersecurity?category=WiCyS%20CTF",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Challenges",
    position: "top",
    xOffsetPx: 0,
  },
  {
    title: "Dremel DigiLab 3D45 - Restoration",
    dateKey: "2026-05-01",
    category: "Engineering",
    description: "Documentation of the teardown, diagnosis, and repair of a Dremel DigiLab 3D45 printer.",
    href: "/projects/engineering/dremel-3d45",
    image: "/images/projects/dremel-3d45-title.webp",
    imageAlt: "Dremel DigiLab 3D45 restoration",
    position: "bottom",
    xOffsetPx: -5,
  },
  {
    title: "National Cybersecurity Consortium (NCC) CTF",
    dateKey: "2026-06-01",
    category: "Achievement",
    description: "Placed 2nd nationally with CHADS in the NCC final CTF.",
    href: "/achievements#ncc-ctf",
    image: "/images/achievements/NCC.webp",
    imageAlt: "National Cybersecurity Consortium CTF",
    position: "top",
    xOffsetPx: -50,
  },
  {
    title: "Dremel DigiLab 3D45 - Controller Rebuild",
    dateKey: "2026-07-20",
    category: "Engineering",
    description: "Rebuilding a Dremel DigiLab 3D45 after the original motherboard failed and the controller had to be replaced.",
    href: "/projects/engineering/dremel-3d45-rebuild",
    image: "/images/projects/dremel-3d45-rebuild-title.webp",
    imageAlt: "Dremel DigiLab 3D45 controller rebuild",
    position: "bottom",
    xOffsetPx: 5,
  },
  {
    title: "Cisco Rapid Incident Response V7",
    dateKey: "2026-07-01",
    category: "Achievement",
    description: "Completed the Cisco XDR incident response workshop and lab.",
    href: "/achievements",
    image: "/images/cisco-rapid-incident-response-v7.webp",
    imageAlt: "Cisco Rapid Incident Response V7 certificate",
    position: "top",
    xOffsetPx: 50,
  },
];

const timelineStartYear = 2017;
const timelineEndYear = 2026;
const timelineCardMinGap = 152;
const timelineMonthSections = 12;
const timelineMonthGapMin = 44;
const timelineCardWidthEstimate = 144;
const currentTimelineDate = new Date("2026-08-24T00:00:00.000Z");

function getTimelinePercent(dateKey: string) {
  const date = new Date(dateKey);
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  return { year, month };
}

function getVisibleTimelineItems(now = new Date()) {
  return timelineRailItems.filter((item) => new Date(item.dateKey).getTime() <= now.getTime());
}

function getVisibleMonthCount(year: number, now = currentTimelineDate) {
  const currentYear = now.getUTCFullYear();
  if (year < currentYear) return timelineMonthSections;
  if (year > currentYear) return 0;
  return now.getUTCMonth() + 1;
}

function ContactIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 ${className}`}>
      {children}
    </span>
  );
}

function TimelineCard({
  item,
  position = "top",
}: {
  item: TimelineItem;
  position?: "top" | "bottom";
}) {
  return (
    <Link
      href={item.href}
      className={`group block w-full rounded-2xl border border-gray-200 bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 ${position === "top" ? "-translate-y-1" : "translate-y-1"}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 180px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-2.5 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
        {item.title}
      </h3>
    </Link>
  );
}

function buildTimelineYearPositions() {
  const visibleItems = getVisibleTimelineItems();

  const years = Array.from(
    { length: timelineEndYear - timelineStartYear + 1 },
    (_, index) => timelineStartYear + index,
  );

  const widths = years.map((year) => {
    const visibleMonthCount = getVisibleMonthCount(year);
    if (visibleMonthCount === 0) return 0;
    return visibleMonthCount * timelineMonthGapMin;
  });

  const totalWidth = widths.reduce((sum, width) => sum + width, 0);

  let cursor = 0;
  const positions = new Map<number, number>();

  for (let index = 0; index < years.length; index += 1) {
    const year = years[index];
    positions.set(year, cursor);
    cursor += widths[index];
  }

  return { years, widths, positions, totalWidth };
}

function buildTimelineCardLayout(
  items: TimelineItem[],
  yearLayout: ReturnType<typeof buildTimelineYearPositions>,
) {
  const ordered = [...items].sort(
    (a, b) => {
      const aDate = new Date(a.dateKey).getTime();
      const bDate = new Date(b.dateKey).getTime();
      if (aDate !== bDate) return aDate - bDate;
      if (a.category !== b.category) return a.category.localeCompare(b.category);
      return a.title.localeCompare(b.title);
    },
  );

  const positions = new Map<string, number>();
  const yearPositions = new Map<number, number>();
  const yearItems = new Map<number, TimelineItem[]>();
  let maxCardRight = 0;
  const countsByYear = new Map<number, number>();
  for (const item of ordered) {
    const year = new Date(item.dateKey).getUTCFullYear();
    const existing = yearItems.get(year) ?? [];
    existing.push(item);
    yearItems.set(year, existing);
    countsByYear.set(year, (countsByYear.get(year) ?? 0) + 1);
  }
  const cardWidth = timelineCardWidthEstimate;
  const sharedYearWidth = Math.max(
    timelineMonthGapMin * timelineMonthSections,
    ...yearLayout.years.map((year) => {
      const visibleMonthCount = getVisibleMonthCount(year);
      if (visibleMonthCount === 0) return 0;
      const yearCardCount = countsByYear.get(year) ?? 0;
      const sameLaneCards = Math.ceil(Math.max(1, yearCardCount) / 2);
      const laneSpan = sameLaneCards * (timelineCardWidthEstimate + timelineCardMinGap);
      return Math.max(visibleMonthCount * timelineMonthGapMin, laneSpan);
    }),
  );
  const yearGap = sharedYearWidth;
  const slotWidth = sharedYearWidth / timelineMonthSections;

  for (let yearIndex = 0; yearIndex < yearLayout.years.length; yearIndex += 1) {
    const year = yearLayout.years[yearIndex];
    const yearLeft = yearIndex * yearGap;
    yearPositions.set(year, yearLeft);

    const itemsForYear = yearItems.get(year) ?? [];
    const monthBuckets = new Map<number, TimelineItem[]>();
    const visibleMonthCount = getVisibleMonthCount(year);
    let yearRight = yearLeft;

    for (const item of itemsForYear) {
      const { month } = getTimelinePercent(item.dateKey);
      const bucket = monthBuckets.get(month) ?? [];
      bucket.push(item);
      monthBuckets.set(month, bucket);
    }

    for (const [month, bucket] of monthBuckets.entries()) {
      if (month >= visibleMonthCount) continue;
      bucket.sort((a, b) => {
        const aDate = new Date(a.dateKey).getTime();
        const bDate = new Date(b.dateKey).getTime();
        if (aDate !== bDate) return aDate - bDate;
        if (a.category !== b.category) return a.category.localeCompare(b.category);
        return a.title.localeCompare(b.title);
      });

      const monthCut = yearLeft + month * slotWidth;
      bucket.forEach((item) => {
        const left = monthCut;
        positions.set(item.dateKey, left);
        yearRight = Math.max(yearRight, left + cardWidth);
        maxCardRight = Math.max(maxCardRight, left + cardWidth);
      });
    }
  }

  return {
    positions,
    yearPositions,
    totalWidth: maxCardRight + timelineCardWidthEstimate,
    yearWidth: sharedYearWidth,
    slotWidth,
  };
}

export default function Home() {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const visibleTimelineRailItems = getVisibleTimelineItems();
  const timelineYearLayout = buildTimelineYearPositions();
  const timelineCardLayout = buildTimelineCardLayout(visibleTimelineRailItems, timelineYearLayout);

  const scrollTimeline = (direction: "left" | "right") => {
    const node = timelineRef.current;
    if (!node) return;
    const delta = Math.round(node.clientWidth * 0.8);
    node.scrollBy({ left: direction === "left" ? -delta : delta, behavior: "smooth" });
  };

  useEffect(() => {
    const node = timelineRef.current;
    if (!node) return;

    node.scrollLeft = node.scrollWidth;

    const updateScrollState = () => {
      const epsilon = 2;
      setCanScrollLeft(node.scrollLeft > epsilon);
      setCanScrollRight(node.scrollLeft + node.clientWidth < node.scrollWidth - epsilon);
    };

    updateScrollState();
    node.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      node.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <main className="flex flex-col items-center max-w-5xl mx-auto w-full">
      {/* Intro Section */}
      <section className="w-full mb-12 md:mb-20 flex justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <div className="flex flex-col items-center w-full md:w-auto max-w-sm">
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border border-gray-200 bg-gray-85 shadow-sm sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px] dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/images/Head-Shot.webp"
                alt="Kelvin Creighton headshot"
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 280px, 250px"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-gray-85 p-4 text-left dark:border-gray-800 dark:bg-gray-900/80">
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <a
                  href="mailto:kcreight@ualberta.ca"
                  className="group flex items-center gap-3 transition-all hover:text-red-600 dark:hover:text-red-400 hover:font-bold"
                >
                  <ContactIcon className="group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:border-red-600/30">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </ContactIcon>
                  <span>kcreight@ualberta.ca</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kelvin-creighton-250806263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold"
                >
                  <ContactIcon className="group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-600/30">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </ContactIcon>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/KelvinCreighton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-all hover:text-black dark:hover:text-white hover:font-bold"
                >
                  <ContactIcon className="group-hover:text-black dark:group-hover:text-white group-hover:border-black/30 dark:group-hover:border-white/30">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </ContactIcon>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Hi, I&apos;m Kelvin
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I am a Chapter Leader for OWASP Edmonton, the Vice President of
              Events for the University of Alberta&apos;s Cybersecurity Club
              (CHADS),
              and a 4th year Computer Science student at the University of
              Alberta with a strong interest in Cybersecurity and Software Engineering.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="bg-gray-85 hover:bg-gray-85 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                My Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-8 pb-4">
          Highlights
        </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Highlight 1: Cisco Rapid Incident Response V7 */}
          <Link
            href="/achievements"
            className="group block h-full mx-2 md:mx-0"
          >
            <div className="bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 md:h-48 w-full bg-gray-85 dark:bg-gray-800">
                <Image
                  src="/images/cisco-rapid-incident-response-v7.webp"
                  alt="Cisco Rapid Incident Response V7 certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Cisco Rapid Incident Response V7
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Hands-on XDR incident response workshop with investigation, containment, and threat-hunting lab work.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/projects/cybersecurity?category=WiCyS%20CTF"
            className="group block h-full mx-2 md:mx-0"
          >
            <div className="bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 md:h-48 w-full bg-gray-85 dark:bg-gray-800">
                <Image
                  src="/images/projects/WICYS_logo.webp"
                  alt="WiCyS CTF Challenges"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  WiCyS CTF Challenges
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Try out the challenges I designed for the WiCyS Cross Chapter CTF of March 2026. Challenge categories include: Web Exploitation, Binary Exploitation, Reverse Engineering, and Forensics.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/projects/cybersecurity/macsync-stealer"
            className="group block h-full mx-2 md:mx-0"
          >
            <div className="bg-gray-85 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 md:h-48 w-full bg-gray-85 dark:bg-gray-800">
                <Image
                  src="/images/projects/cyber-highlights.webp"
                  alt="MacSync Stealer static malware analysis"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  MacSync Stealer: Static Malware Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  A detailed static analysis of the MacSync Stealer malware,
                  uncovering its multi-stage execution flow and C2
                  communication methods.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="mt-16 w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Timeline</h2>
          <p className="max-w-3xl text-gray-600 dark:text-gray-400">
            A chronological history of projects and achievements, with the newest work first. Scroll down through the line to follow the progression.
          </p>
        </div>

        <div className="relative w-full">
          <button
            type="button"
            onClick={() => scrollTimeline("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/95 p-3 shadow-sm transition dark:bg-gray-900/95 ${canScrollLeft ? "border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:text-gray-300" : "cursor-not-allowed border-gray-200 text-gray-300 opacity-35 dark:border-gray-800 dark:text-gray-600"}`}
            aria-label="Scroll timeline left"
          >
            <span className="text-xl leading-none">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTimeline("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/95 p-3 shadow-sm transition dark:bg-gray-900/95 ${canScrollRight ? "border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:text-gray-300" : "cursor-not-allowed border-gray-200 text-gray-300 opacity-35 dark:border-gray-800 dark:text-gray-600"}`}
            aria-label="Scroll timeline right"
          >
            <span className="text-xl leading-none">→</span>
          </button>

          <div className="pointer-events-none absolute left-12 right-12 top-1/2 hidden h-2 -translate-y-1/2 rounded-full bg-gray-300 dark:bg-gray-700 md:block" />
          <div
            ref={timelineRef}
            className="relative overflow-x-auto scroll-smooth px-12 pb-12 pt-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="relative mx-auto h-[36rem]" style={{ minWidth: `${timelineCardLayout.totalWidth}px` }}>
              {timelineYearLayout.years.map((year) => {
                const left = timelineCardLayout.yearPositions.get(year) ?? timelineYearLayout.positions.get(year) ?? 0;
                const visibleMonthCount = getVisibleMonthCount(year);
                const yearWidth = timelineCardLayout.yearWidth;
                const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].slice(0, visibleMonthCount);
                return (
                  <div
                    key={year}
                    className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 md:block"
                    style={{ left, width: `${yearWidth}px` }}
                  >
                    <div className="absolute left-0 top-1/2 h-0 w-full -translate-y-1/2">
                      {monthLabels.map((month, monthIndex) => (
                        <span
                          key={`${year}-${month}-${monthIndex}`}
                          className={`absolute inline-flex w-12 items-center justify-center text-center text-[0.75rem] font-medium uppercase leading-none text-gray-400 dark:text-gray-500 ${monthIndex % 2 === 0 ? "top-3" : "-top-5"}`}
                          style={{
                            left: `${monthIndex * timelineCardLayout.slotWidth}px`,
                            transform: "translateX(-50%)",
                          }}
                        >
                          {month}
                        </span>
                      ))}
                    </div>
                    <div
                      className="absolute -top-10 left-0 w-12 -translate-x-1/2 text-center font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400"
                      style={{ fontSize: "1.25rem" }}
                    >
                      {year}
                    </div>
                  </div>
                );
              })}

            {[...visibleTimelineRailItems]
              .sort((a, b) => new Date(a.dateKey).getTime() - new Date(b.dateKey).getTime())
              .map((item) => {
                const left = timelineCardLayout.positions.get(item.dateKey) ?? 0;
                const connectorRise = 80;
                const circleX = 0;
                const circleY = 0;
                const cardX = item.xOffsetPx;
                const cardY = item.position === "top" ? -connectorRise : connectorRise;
                const minX = Math.min(circleX, cardX);
                const minY = Math.min(circleY, cardY);
                const width = Math.max(Math.abs(cardX - circleX), 1);
                const height = Math.max(Math.abs(cardY - circleY), 1);
                return (
                  <div
                    key={`${item.title}-${item.dateKey}`}
                    className="absolute top-1/2 z-10"
                    style={{ left: `${left}px` }}
                  >
                    <svg
                      aria-hidden="true"
                      className="pointer-events-none absolute hidden md:block"
                      style={{
                        left: `calc(50% + ${minX}px)`,
                        top: `${minY}px`,
                        width: `${width}px`,
                        height: `${height}px`,
                      }}
                      viewBox={`0 0 ${width} ${height}`}
                      preserveAspectRatio="none"
                    >
                      <line
                        x1={circleX - minX}
                        y1={circleY - minY}
                        x2={cardX - minX}
                        y2={cardY - minY}
                        stroke="rgb(209, 213, 219)"
                        strokeWidth="1.5"
                        className="dark:stroke-gray-700"
                      />
                    </svg>
                    <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-600 bg-white dark:border-blue-300 dark:bg-gray-950 md:block" />
                    <div
                      className={`absolute left-1/2 w-[9rem] -translate-x-1/2 ${item.position === "top" ? "bottom-[5rem]" : "top-[5rem]"}`}
                      style={{ left: `calc(50% + ${item.xOffsetPx}px)` }}
                    >
                      <TimelineCard item={item} position={item.position} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
