import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ResumeDownloads from "@/components/ResumeDownloads";
import { InlineArrow } from "@/components/InlineArrow";
import { categories, projects, inCategory } from "@/data/projects";
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
            <div className="resume-work-grid">
              {categories.map((category) => (
                <Link href={`/projects?category=${category.id}`} key={category.id}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <span>{projects.filter((project) => inCategory(project, category.id)).length} projects</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h2>Beyond Engineering</h2>
            <p><strong>Learning, building, and contributing.</strong></p>
            <p>
              Outside my projects, I&apos;ve been involved in cybersecurity
              communities through OWASP Edmonton and university organizations
              such as CHADS (Cybersecurity, Hacking, And Digital Security) club,
              and WiCyS Edmonton Chapter.
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
