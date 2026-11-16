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
      <PageIntro number="04" title="Closer to the hardware.">
        <p>
          I’m Kelvin Creighton. My interests sit where software meets physical
          systems: firmware, operating systems, hardware integration, and the
          work of understanding how things behave.
        </p>
      </PageIntro>
      <div className="resume-layout">
        <div className="resume-summary">
          <section>
            <p className="eyebrow">Technical focus</p>
            <h2>Build. Investigate. Understand.</h2>
            <p>
              I learn by building something concrete, finding the gaps, and
              working through them. My projects range from a vibration-sensing
              node to a Unix shell and a printer controller rebuild.
            </p>
            <p>
              Cybersecurity adds another perspective: understanding how systems
              fail, how interfaces can be misused, and what it takes to
              investigate a problem.
            </p>
          </section>
          <section>
            <p className="eyebrow">Selected project experience</p>
            <h2>Evidence in the work</h2>
            <dl>
              <div>
                <dt>
                  Embedded hardware & firmware ↗
                </dt>
                <dd>
                  MachineGuard: ESP32-S3 sensor integration, buffered
                  acquisition, and Bluetooth Low Energy data transfer for a team
                  prototype.
                </dd>
                <Link
                  className="card-hit-area"
                  href="/projects/embedded-systems/machineguard"
                  aria-label="View MachineGuard"
                />
              </div>
              <div>
                <dt>
                  Systems programming ↗
                </dt>
                <dd>
                  DragonShell, a MapReduce library, and a file-system simulator:
                  C, processes, file descriptors, threads, and storage.
                </dd>
                <Link
                  className="card-hit-area"
                  href="/projects/embedded-systems/dragonshell"
                  aria-label="View DragonShell"
                />
              </div>
              <div>
                <dt>
                  Hardware integration & repair ↗
                </dt>
                <dd>
                  Diagnosing a failed printer controller, adapting Marlin
                  firmware, and testing replacement control hardware.
                </dd>
                <Link
                  className="card-hit-area"
                  href="/projects/engineering/dremel-3d45-rebuild"
                  aria-label="View the Dremel 3D45 rebuild"
                />
              </div>
              <div>
                <dt>
                  Security investigations & challenge design ↗
                </dt>
                <dd>
                  CTF writeups, challenge development, and competition work with
                  CHADS.
                </dd>
                <Link
                  className="card-hit-area"
                  href="/projects/cybersecurity"
                  aria-label="View cybersecurity projects"
                />
              </div>
            </dl>
          </section>
          <section>
            <p className="eyebrow">Academic work</p>
            <h2>A systems foundation</h2>
            <p>
              University of Alberta coursework in operating systems and
              numerical methods is documented in the project archive.
            </p>
            <div className="quiet-links">
              <Link href="/projects/embedded-systems?collection=CMPUT+379%3A+Operating+Systems">
                Operating systems <InlineArrow />
              </Link>
              <Link href="/projects/engineering/robotic-arm-simulation">
                Numerical methods <InlineArrow />
              </Link>
            </div>
          </section>
          <section>
            <p className="eyebrow">Beyond the project</p>
            <h2>Making room for others</h2>
            <p>
              I’ve helped organize CTFs and community events, from challenge
              creation and competition setup to technical support on the day.
            </p>
            <Link className="text-link" href="/community">
              Leadership & community <InlineArrow />
            </Link>
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
