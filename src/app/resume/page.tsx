import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ResumeDownloads from "@/components/ResumeDownloads";
import { InlineArrow } from "@/components/InlineArrow";
export const metadata: Metadata = {
  title: "Resume",
  description:
    "Kelvin Creighton’s project experience in embedded firmware, systems software, and cybersecurity. Download embedded systems and cybersecurity resumes.",
};
export default function Page() {
  return (
    <>
      <PageIntro title="About Me">
        <p>
          I&apos;m Kelvin Creighton. I studied Computer Science at the University
          of Alberta, where I developed an interest in embedded systems,
          firmware, and low-level software. I enjoy working close to the
          hardware and understanding what happens beneath the abstractions.
        </p>
      </PageIntro>
      <div className="resume-layout">
        <div className="resume-summary">
          <section>
            <h2>How I Work</h2>
            <p><strong>Curiosity drives the process.</strong></p>
            <p>
              I learn by building, experimenting, and figuring things out along
              the way. I prefer understanding why something works over simply
              knowing how to use it. That curiosity has taken me from
              programming microcontrollers to exploring operating systems,
              robotics, and security.
            </p>
          </section>
          <section>
            <h2>Selected Work</h2>
            <p><strong>Building systems from the ground up.</strong></p>
            <p>My projects reflect different aspects of my technical interests:</p>
            <ul>
              <li><strong>Embedded Systems:</strong> <Link href="/projects/embedded-systems/machineguard">MachineGuard</Link>, a sensor-based monitoring node built around an ESP32-S3, involving hardware integration and firmware development.</li>
              <li><strong>Systems Programming:</strong> <Link href="/projects/embedded-systems/dragonshell">DragonShell</Link> and other projects exploring processes, file systems, threads, and low-level programming in C.</li>
              <li><strong>Hardware:</strong> Modifying a 3D printer&apos;s control system through replacement hardware and firmware configuration.</li>
              <li><strong>Cybersecurity:</strong> Security research, CTF challenges, vulnerability analysis, and competition experience.</li>
            </ul>
            <Link className="text-link" href="/projects">Browse projects <InlineArrow /></Link>
          </section>
          <section>
            <h2>Beyond Engineering</h2>
            <p><strong>Learning, building, and contributing.</strong></p>
            <p>
              Outside my projects, I&apos;ve been involved in cybersecurity
              communities through OWASP Edmonton and university organizations.
              I&apos;ve helped organize events, develop challenges, and create
              opportunities for others to learn and participate.
            </p>
            <p>
              I also enjoy exploring interests outside computing, including
              robotics, automotive projects, and music.
            </p>
            <Link className="text-link" href="/community">Community &amp; leadership <InlineArrow /></Link>
          </section>
        </div>
        <Suspense
          fallback={
            <aside className="resume-downloads">
              <h2>Download a resume</h2>
              <a href="/resume-embedded.pdf">Embedded systems PDF ↓</a>
              <br />
              <a href="/resume-cybersecurity.pdf">Cybersecurity PDF ↓</a>
            </aside>
          }
        >
          <ResumeDownloads />
        </Suspense>
      </div>
    </>
  );
}
