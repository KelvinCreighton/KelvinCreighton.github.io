"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "@/components/BlurImage";
import type { ReactNode } from "react";

type TimelineItem = {
  title: string;
  dateLabel: string;
  dateKey: string;
  category: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "My First Game",
    dateLabel: "2017",
    dateKey: "2017-01-01",
    category: "Game Dev",
    description: "The first JavaScript game I ever made, which started my interest in interactive development.",
    href: "/projects/game-dev/my-first-game",
    image: "/images/projects/my-first-game.webp",
    imageAlt: "My First Game project",
  },
  {
    title: "UFO",
    dateLabel: "2017",
    dateKey: "2017-06-01",
    category: "Game Dev",
    description: "A simple arcade-style game built around movement, enemies, and levels.",
    href: "/projects/game-dev/ufo",
    image: "/images/projects/ufo.webp",
    imageAlt: "UFO game project",
  },
  {
    title: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
    dateLabel: "2017",
    dateKey: "2017-09-01",
    category: "Music",
    description: "A piano arrangement of a high-energy Homestuck theme.",
    href: "/projects/music/blind-justice-investigation",
    image: "/images/projects/BL1ND_JUST1C3_1NV3ST1G4T1ON.webp",
    imageAlt: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
  },
  {
    title: "Beethoven Virus",
    dateLabel: "2018",
    dateKey: "2018-01-01",
    category: "Music",
    description: "A piano arrangement that pushed my arrangement and performance skills further.",
    href: "/projects/music/beethoven-virus",
    image: "/images/projects/Beethoven_Virus.webp",
    imageAlt: "Beethoven Virus arrangement",
  },
  {
    title: "Tank Game",
    dateLabel: "2018",
    dateKey: "2018-05-01",
    category: "Game Dev",
    description: "A top-down tank shooter focused on movement, aiming, and game logic.",
    href: "/projects/game-dev/tank-game",
    image: "/images/projects/tank-game.webp",
    imageAlt: "Tank Game project",
  },
  {
    title: "The Longest Moment Before a New Beginning",
    dateLabel: "October 2019",
    dateKey: "2019-10-01",
    category: "Music",
    description: "An original piano composition written in high school.",
    href: "/projects/music/the-longest-moment",
    image: "/images/projects/The-Longest-Moment-Before-a-New-Beginning.webp",
    imageAlt: "The Longest Moment Before a New Beginning",
  },
  {
    title: "Plastic Mind",
    dateLabel: "2019",
    dateKey: "2019-11-01",
    category: "Game Dev",
    description: "A physics platformer ported from Processing to p5.js.",
    href: "/projects/game-dev/plastic-mind",
    image: "/images/projects/plastic-mind-title.webp",
    imageAlt: "Plastic Mind project",
  },
  {
    title: "Valve Cover Replacement & Modification",
    dateLabel: "May 2022",
    dateKey: "2022-05-01",
    category: "Automotive",
    description: "A cracked valve cover led to a custom fitment repair on a 2002 Toyota Tacoma.",
    href: "/projects/auto/tacoma-valve-cover",
    image: "/images/projects/tacoma-vc-title.webp",
    imageAlt: "Valve cover replacement and modification project",
  },
  {
    title: "3D Game Engine",
    dateLabel: "2022",
    dateKey: "2022-06-01",
    category: "Game Dev",
    description: "A first 3D engine project exploring projection, rotation, and matrix math.",
    href: "/projects/game-dev/3d-game",
    image: "/images/projects/3d-game.webp",
    imageAlt: "3D Game Engine project",
  },
  {
    title: "Blackhole Simulator",
    dateLabel: "2022",
    dateKey: "2022-08-01",
    category: "Game Dev",
    description: "A physics-based orbital mechanics simulator with playful satellites.",
    href: "/projects/game-dev/blackhole-simulator",
    image: "/images/projects/Blackhole_Simulator-image.webp",
    imageAlt: "Blackhole Simulator project",
  },
  {
    title: "Remote Control Car",
    dateLabel: "November 2024 - January 2025",
    dateKey: "2024-11-01",
    category: "Engineering",
    description: "An educational RC car curriculum built around low-cost robotics and prototyping.",
    href: "/projects/engineering/rc-car",
    image: "/images/projects/rc-car-title.webp",
    imageAlt: "Remote control car project",
  },
  {
    title: "IlluminatiCTF",
    dateLabel: "May 2025",
    dateKey: "2025-05-01",
    category: "Achievement",
    description: "Placed 3rd nationally and 6th overall in the national bracket.",
    href: "/achievements",
    image: "/images/achievements/illuminatictf.webp",
    imageAlt: "IlluminatiCTF achievement",
  },
  {
    title: "PicoCTF: SSTI1",
    dateLabel: "September 2025",
    dateKey: "2025-09-01",
    category: "Cybersecurity",
    description: "A Server-Side Template Injection writeup focused on Jinja2 sandbox escape and code execution.",
    href: "/projects/cybersecurity/ssti1",
    image: "/images/projects/picoCTF_logo.webp",
    imageAlt: "PicoCTF SSTI1",
  },
  {
    title: "PicoCTF: No Sql Injection",
    dateLabel: "September 2025",
    dateKey: "2025-09-02",
    category: "Cybersecurity",
    description: "A NoSQL injection writeup covering authentication bypass in a MongoDB-backed app.",
    href: "/projects/cybersecurity/nosql-injection",
    image: "/images/projects/picoCTF_logo.webp",
    imageAlt: "PicoCTF No Sql Injection",
  },
  {
    title: "PicoCTF: 3v@l",
    dateLabel: "September 2025",
    dateKey: "2025-09-03",
    category: "Cybersecurity",
    description: "A Python eval() exploitation writeup focused on blacklisting bypasses and RCE.",
    href: "/projects/cybersecurity/eval",
    image: "/images/projects/picoCTF_logo.webp",
    imageAlt: "PicoCTF 3v@l",
  },
  {
    title: "PicoCTF: SOAP",
    dateLabel: "October 2025",
    dateKey: "2025-10-01",
    category: "Cybersecurity",
    description: "An XML External Entity and SOAP exploitation writeup.",
    href: "/projects/cybersecurity/soap",
    image: "/images/projects/picoCTF_logo.webp",
    imageAlt: "PicoCTF SOAP",
  },
  {
    title: "MacSync Stealer: Static Malware Analysis",
    dateLabel: "December 2025",
    dateKey: "2025-12-01",
    category: "Cybersecurity",
    description: "A static malware analysis of MacSync Stealer and its execution flow.",
    href: "/projects/cybersecurity/macsync-stealer",
    image: "/images/projects/cyber-highlights.webp",
    imageAlt: "MacSync Stealer static malware analysis",
  },
  {
    title: "SAIT: Alice in PWNderland",
    dateLabel: "July 2025",
    dateKey: "2025-07-01",
    category: "Achievement",
    description: "Placed 4th at SAIT’s CTF event with Team CHADS.",
    href: "/achievements",
    image: "/images/achievements/Alice.webp",
    imageAlt: "Alice in PWNderland CTF",
  },
  {
    title: "HTCOTB2026 CTF: Cupid's Secret Message",
    dateLabel: "February 2026",
    dateKey: "2026-02-01",
    category: "Cybersecurity",
    description: "A custom web CTF challenge built around IDOR and themed challenge flow.",
    href: "/projects/cybersecurity/cupid-portal",
    image: "/images/projects/CHADS_logo.webp",
    imageAlt: "HTCOTB2026 CTF Cupid's Secret Message",
  },
  {
    title: "HTCOTB2026 CTF: HeartMail 1.0",
    dateLabel: "February 2026",
    dateKey: "2026-02-02",
    category: "Cybersecurity",
    description: "A web challenge combining SQL injection and SSH access as the path to the flag.",
    href: "/projects/cybersecurity/heartmail",
    image: "/images/projects/CHADS_logo.webp",
    imageAlt: "HTCOTB2026 CTF HeartMail 1.0",
  },
  {
    title: "WiCyS CTF: Bunny Tracker Glitch 🟩",
    dateLabel: "March 2026",
    dateKey: "2026-03-01",
    category: "Cybersecurity",
    description: "A forensics challenge centered on a suspicious PNG and hidden data.",
    href: "/projects/cybersecurity/wicys-ctf-01",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Bunny Tracker Glitch",
  },
  {
    title: "WiCyS CTF: Luck Checker 🍀",
    dateLabel: "March 2026",
    dateKey: "2026-03-02",
    category: "Cybersecurity",
    description: "A beginner reversing challenge built around a suspicious binary.",
    href: "/projects/cybersecurity/wicys-ctf-02",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Luck Checker",
  },
  {
    title: "WiCyS CTF: Bunny Network - Portal Override 🐇🌐",
    dateLabel: "March 2026",
    dateKey: "2026-03-03",
    category: "Cybersecurity",
    description: "A reversing challenge involving a portal binary and recovery of the Bunny Network.",
    href: "/projects/cybersecurity/wicys-ctf-03",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Bunny Network Portal Override",
  },
  {
    title: "WiCyS CTF: Bunny Overflow 🐇",
    dateLabel: "March 2026",
    dateKey: "2026-03-04",
    category: "Cybersecurity",
    description: "A buffer overflow challenge centered on a vulnerable authorization flow.",
    href: "/projects/cybersecurity/wicys-ctf-04",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Bunny Overflow",
  },
  {
    title: "WiCyS CTF: Rainbow Vault Overflow 🌈🔒",
    dateLabel: "March 2026",
    dateKey: "2026-03-05",
    category: "Cybersecurity",
    description: "A heap exploitation challenge hidden behind the Rainbow Vault portal.",
    href: "/projects/cybersecurity/wicys-ctf-05",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Rainbow Vault Overflow",
  },
  {
    title: "WiCyS CTF: ROP Around the Rainbow 🌈🐇",
    dateLabel: "March 2026",
    dateKey: "2026-03-06",
    category: "Cybersecurity",
    description: "An advanced ROP challenge that chains small fragments into a full exploit.",
    href: "/projects/cybersecurity/wicys-ctf-06",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF ROP Around the Rainbow",
  },
  {
    title: "WiCyS CTF: Scavenger Hunt 🔎🥚",
    dateLabel: "March 2026",
    dateKey: "2026-03-07",
    category: "Cybersecurity",
    description: "A web challenge that rewards careful inspection of the client-side app.",
    href: "/projects/cybersecurity/wicys-ctf-07",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Scavenger Hunt",
  },
  {
    title: "WiCyS CTF: Bunny Network API Override 🐇🌐",
    dateLabel: "March 2026",
    dateKey: "2026-03-08",
    category: "Cybersecurity",
    description: "A web challenge involving a hijacked API and a hidden override path.",
    href: "/projects/cybersecurity/wicys-ctf-08",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Bunny Network API Override",
  },
  {
    title: "WiCyS CTF: Leprechauns Vault 🍀🔒",
    dateLabel: "March 2026",
    dateKey: "2026-03-09",
    category: "Cybersecurity",
    description: "A web challenge centered on a secret vault login and a developer backdoor.",
    href: "/projects/cybersecurity/wicys-ctf-09",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Leprechauns Vault",
  },
  {
    title: "Manual Transmission Rebuild",
    dateLabel: "August 2025",
    dateKey: "2025-08-01",
    category: "Automotive",
    description: "A transmission rebuild that grew from a straightforward repair into a full drivetrain project.",
    href: "/projects/auto/transmission-rebuild",
    image: "/images/projects/transmission-title.webp",
    imageAlt: "Manual transmission rebuild project",
  },
  {
    title: "CyberSci Regionals 2025",
    dateLabel: "November 2025",
    dateKey: "2025-11-01",
    category: "Achievement",
    description: "Placed 5th with CHADS B-Team in Calgary.",
    href: "/achievements",
    image: "/images/achievements/CyberSci.webp",
    imageAlt: "CyberSci Regionals 2025",
  },
  {
    title: "Dremel DigiLab 3D45 - Restoration",
    dateLabel: "May 2026",
    dateKey: "2026-05-01",
    category: "Engineering",
    description: "Documented the teardown, diagnosis, and repair of the Dremel DigiLab 3D45.",
    href: "/projects/engineering/dremel-3d45",
    image: "/images/projects/dremel-3d45-title.webp",
    imageAlt: "Dremel DigiLab 3D45 restoration",
  },
  {
    title: "Dremel DigiLab 3D45 - Controller Rebuild",
    dateLabel: "May 2026 - July 2026",
    dateKey: "2026-05-15",
    category: "Engineering",
    description: "Rebuilt the printer around an Arduino Mega 2560 and RAMPS 1.4 after a motherboard failure.",
    href: "/projects/engineering/dremel-3d45-rebuild",
    image: "/images/projects/dremel-3d45-rebuild-title.webp",
    imageAlt: "Dremel DigiLab 3D45 controller rebuild",
  },
  {
    title: "National Cybersecurity Consortium (NCC) CTF",
    dateLabel: "June 2026",
    dateKey: "2026-06-01",
    category: "Achievement",
    description: "Placed 2nd nationally with CHADS in the NCC final CTF.",
    href: "/achievements",
    image: "/images/achievements/NCC.webp",
    imageAlt: "National Cybersecurity Consortium CTF",
  },
  {
    title: "Cisco Rapid Incident Response V7",
    dateLabel: "July 2026",
    dateKey: "2026-07-01",
    category: "Achievement",
    description: "Completed the Cisco XDR incident response workshop and lab.",
    href: "/achievements",
    image: "/images/cisco-rapid-incident-response-v7.webp",
    imageAlt: "Cisco Rapid Incident Response V7 certificate",
  },
];

const sortedTimelineItems = [...timelineItems].sort(
  (a, b) => new Date(b.dateKey).getTime() - new Date(a.dateKey).getTime(),
);

const timelineRailItems: TimelineItem[] = [
  {
    title: "Cisco Rapid Incident Response V7",
    dateLabel: "July 2026",
    dateKey: "2026-07-01",
    category: "Achievement",
    description: "Completed the Cisco XDR incident response workshop and lab.",
    href: "/achievements",
    image: "/images/cisco-rapid-incident-response-v7.webp",
    imageAlt: "Cisco Rapid Incident Response V7 certificate",
  },
  {
    title: "National Cybersecurity Consortium (NCC) CTF",
    dateLabel: "June 2026",
    dateKey: "2026-06-01",
    category: "Achievement",
    description: "Placed 2nd nationally with CHADS in the NCC final CTF.",
    href: "/achievements",
    image: "/images/achievements/NCC.webp",
    imageAlt: "National Cybersecurity Consortium CTF",
  },
  {
    title: "Dremel DigiLab 3D45 - Controller Rebuild",
    dateLabel: "May 2026 - July 2026",
    dateKey: "2026-05-15",
    category: "Engineering",
    description: "Rebuilt the printer around an Arduino Mega 2560 and RAMPS 1.4 after a motherboard failure.",
    href: "/projects/engineering/dremel-3d45-rebuild",
    image: "/images/projects/dremel-3d45-rebuild-title.webp",
    imageAlt: "Dremel DigiLab 3D45 controller rebuild",
  },
  {
    title: "Dremel DigiLab 3D45 - Restoration",
    dateLabel: "May 2026",
    dateKey: "2026-05-01",
    category: "Engineering",
    description: "Documented the teardown, diagnosis, and repair of the Dremel DigiLab 3D45.",
    href: "/projects/engineering/dremel-3d45",
    image: "/images/projects/dremel-3d45-title.webp",
    imageAlt: "Dremel DigiLab 3D45 restoration",
  },
  {
    title: "WiCyS CTF Challenges",
    dateLabel: "March 2026",
    dateKey: "2026-03-01",
    category: "Cybersecurity",
    description: "A grouped set of WiCyS CTF challenges spanning forensics, reversing, pwn, and web exploitation.",
    href: "/projects/cybersecurity?category=WiCyS%20CTF",
    image: "/images/projects/WICYS_logo.webp",
    imageAlt: "WiCyS CTF Challenges",
  },
  {
    title: "HTCOTB2026 CTF Challenges",
    dateLabel: "February 2026",
    dateKey: "2026-02-01",
    category: "Cybersecurity",
    description: "A grouped set of HTCOTB challenge writeups and custom challenges built for the University of Alberta Cybersecurity Club.",
    href: "/projects/cybersecurity?category=HTCOTB%20CTF",
    image: "/images/projects/CHADS_logo.webp",
    imageAlt: "HTCOTB2026 CTF challenges",
  },
  {
    title: "MacSync Stealer: Static Malware Analysis",
    dateLabel: "December 2025",
    dateKey: "2025-12-01",
    category: "Cybersecurity",
    description: "A static malware analysis of MacSync Stealer and its execution flow.",
    href: "/projects/cybersecurity/macsync-stealer",
    image: "/images/projects/cyber-highlights.webp",
    imageAlt: "MacSync Stealer static malware analysis",
  },
  {
    title: "CyberSci Regionals 2025",
    dateLabel: "November 2025",
    dateKey: "2025-11-01",
    category: "Achievement",
    description: "Placed 5th with CHADS B-Team in Calgary.",
    href: "/achievements",
    image: "/images/achievements/CyberSci.webp",
    imageAlt: "CyberSci Regionals 2025",
  },
  {
    title: "PicoCTF Writeups",
    dateLabel: "September - October 2025",
    dateKey: "2025-10-15",
    category: "Cybersecurity",
    description: "A grouped set of PicoCTF writeups covering SSTI, NoSQL injection, eval() exploitation, and SOAP/XXE.",
    href: "/projects/cybersecurity",
    image: "/images/projects/picoCTF_logo.webp",
    imageAlt: "PicoCTF writeups",
  },
  {
    title: "Manual Transmission Rebuild",
    dateLabel: "August 2025",
    dateKey: "2025-08-01",
    category: "Automotive",
    description: "A transmission rebuild that grew from a straightforward repair into a full drivetrain project.",
    href: "/projects/auto/transmission-rebuild",
    image: "/images/projects/transmission-title.webp",
    imageAlt: "Manual transmission rebuild project",
  },
  {
    title: "IlluminatiCTF",
    dateLabel: "May 2025",
    dateKey: "2025-05-01",
    category: "Achievement",
    description: "Placed 3rd nationally and 6th overall in the national bracket.",
    href: "/achievements",
    image: "/images/achievements/illuminatictf.webp",
    imageAlt: "IlluminatiCTF achievement",
  },
  {
    title: "Remote Control Car",
    dateLabel: "November 2024 - January 2025",
    dateKey: "2024-11-01",
    category: "Engineering",
    description: "An educational RC car curriculum built around low-cost robotics and prototyping.",
    href: "/projects/engineering/rc-car",
    image: "/images/projects/rc-car-title.webp",
    imageAlt: "Remote control car project",
  },
];

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
}: {
  item: TimelineItem;
}) {
  return (
    <Link
      href={item.href}
      className="group block w-full rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 220px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-3 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
        {item.title}
      </h3>
    </Link>
  );
}

export default function Home() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    const node = timelineRef.current;
    if (!node) return;
    const delta = Math.round(node.clientWidth * 0.8);
    node.scrollBy({ left: direction === "left" ? -delta : delta, behavior: "smooth" });
  };

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
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white/95 p-3 text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900/95 dark:text-gray-300"
            aria-label="Scroll timeline left"
          >
            <span className="text-xl leading-none">←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTimeline("right")}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-gray-200 bg-white/95 p-3 text-gray-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900/95 dark:text-gray-300"
            aria-label="Scroll timeline right"
          >
            <span className="text-xl leading-none">→</span>
          </button>

          <div
            ref={timelineRef}
            className="relative flex gap-6 overflow-x-auto scroll-smooth px-12 pb-10 pt-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="pointer-events-none absolute left-12 right-12 top-1/2 hidden h-2 -translate-y-1/2 rounded-full bg-gray-300 dark:bg-gray-700 md:block" />
            {timelineRailItems.map((item, index) => {
              const isAbove = index % 2 === 0;
              const year = new Date(item.dateKey).getFullYear();
              return (
                <div
                  key={`${item.title}-${item.dateKey}`}
                  className="relative flex h-[30rem] w-[15rem] flex-none items-center justify-center"
                >
                  <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-600 bg-white dark:border-blue-300 dark:bg-gray-950 md:block" />
                  <div className={`absolute left-0 right-0 flex justify-center md:block ${isAbove ? "top-0" : "bottom-0"}`}>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:bg-gray-950 dark:text-gray-400">
                      {year}
                    </span>
                  </div>
                  <div className={`absolute left-1/2 w-full -translate-x-1/2 ${isAbove ? "top-0 -translate-y-4" : "bottom-0 translate-y-4"}`}>
                    <TimelineCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
