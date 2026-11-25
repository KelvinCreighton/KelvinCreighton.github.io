import Link from "next/link";
import {
  CarFront,
  Cpu,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  Music2,
  ShieldCheck,
  Cog,
} from "lucide-react";
import Image from "@/components/BlurImage";
import { FieldMark } from "@/components/FieldMark";
import { InlineArrow } from "@/components/InlineArrow";
import HomeLab from "@/components/HomeLab";
import TrajectoryChart from "@/components/TrajectoryChart";
import { categories, projects, getProject, inCategory } from "@/data/projects";
import { achievements, events } from "@/data/community";

const topicIcons = {
  "embedded-systems": Cpu,
  cybersecurity: ShieldCheck,
  engineering: Cog,
  auto: CarFront,
  "game-dev": Gamepad2,
  music: Music2,
};

const features = [
  {
    id: "machineguard",
    description:
      "Listening to a machine: a sensor, an ESP32, and a power drill. Building the hardware and firmware for our MachineGuard prototype.",
    kind: "Hardware & firmware",
  },
  {
    id: "dragonshell",
    description:
      "Building a shell from system calls: a Unix shell written in C, with processes, pipes, redirection, and signals built directly on operating-system interfaces.",
    kind: "Systems programming",
  },
  {
    id: "dremel-3d45-rebuild",
    description:
      "A second life for a 3D printer: replacing a failed controller with an Arduino Mega, RAMPS, and Marlin, one test at a time.",
    kind: "Build in progress",
  },
  {
    id: "robotic-arm-simulation",
    description:
      "A robotic arm, brought to life: an interactive simulation exploring inverse kinematics and numerical optimization.",
    kind: "Robotics & simulation",
  },
];

/** Other things a visitor can run, each opening at its demo. */
const shelf = [
  {
    id: "wicys-ctf-01",
    verb: "Solve a forensics challenge",
    note: "Download the file, find the flag, and check it on the page. I wrote this one for the WiCyS CTF.",
  },
  {
    id: "ufo",
    verb: "Play UFO",
    note: "An arcade game I wrote in 2017, playable in the browser.",
  },
  {
    id: "blackhole-simulator",
    verb: "Orbit a black hole",
    note: "A physics simulation of satellites in orbit around a black hole.",
  },
  {
    id: "beethoven-virus",
    verb: "Play back a piano score",
    note: "My arrangement of Beethoven Virus, rendered from MusicXML.",
  },
];

const placeNumber = (status: string) => Number.parseInt(status, 10) || 99;
const results = achievements
  .filter((a) => a.meta === "CTF")
  .sort(
    (a, b) =>
      placeNumber(a.status) - placeNumber(b.status) ||
      b.sortDate.localeCompare(a.sortDate),
  );
const best = results[0];
const organised = [...events].sort((a, b) =>
  b.sortDate.localeCompare(a.sortDate),
);
const authored = projects.filter((p) => p.collection === "WiCyS CTF").length;
const since = Math.min(...projects.map((p) => Number(p.sortDate.slice(0, 4))));

export default function Home() {
  const lead = getProject("machineguard")!;
  const second = getProject("dremel-3d45-rebuild")!;
  return (
    <div className="home-page">
      <section className="field-intro" aria-labelledby="intro-title">
        <div className="field-intro-main">
          <h1 id="intro-title">Hi, I&apos;m Kelvin</h1>
          <div className="field-intro-copy">
            <p className="field-intro-description">
              I build embedded software and the hardware around it: firmware on
              ESP32 and Arduino boards, systems code in C on Linux, and security
              challenges for other people to break.
            </p>
            <p className="field-intro-context">
              Computer Science, University of Alberta. Looking for roles in
              embedded systems, firmware, and cybersecurity.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/resume">
                View resume
              </Link>
              <a className="button" href="mailto:kcreight@ualberta.ca">
                <Mail aria-hidden="true" />
                Email me
              </a>
            </div>
            <div className="field-intro-links" aria-label="Profiles">
              <a
                href="https://github.com/KelvinCreighton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="field-intro-link-content">
                  <Github aria-hidden="true" />
                  GitHub
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/kelvin-creighton-250806263"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="field-intro-link-content">
                  <Linkedin aria-hidden="true" />
                  LinkedIn
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="bench">
          <Link href={second.href} className="bench-print bench-print-back">
            <span className="bench-photo">
              <Image src={second.image} alt={second.imageAlt} fill sizes="320px" />
            </span>
            <span className="bench-caption">Dremel 3D45 rebuild</span>
          </Link>
          <Link href={lead.href} className="bench-print bench-print-front">
            <span className="bench-photo">
              <Image
                src={lead.image}
                alt={lead.imageAlt}
                fill
                sizes="(max-width: 900px) 80vw, 440px"
                priority
              />
            </span>
            <span className="bench-caption">
              MachineGuard: an ESP32-S3 vibration sensor, natHacks 2026
            </span>
          </Link>
        </div>
      </section>

      <ul className="proof-strip" aria-label="At a glance">
        <li>
          <Link href={`/achievements#${best.id}`}>
            <strong>{best.status}</strong>
            <span>{best.title}</span>
          </Link>
        </li>
        <li>
          <Link href="/projects?category=cybersecurity">
            <strong>{authored} CTF challenges</strong>
            <span>Written for the WiCyS cross-chapter CTF</span>
          </Link>
        </li>
        <li>
          <Link href="/community">
            <strong>{events.length} security events</strong>
            <span>Organised or supported, including BSides Edmonton</span>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <strong>{projects.length} projects</strong>
            <span>Firmware to music, since {since}</span>
          </Link>
        </li>
      </ul>

      <section
        className="fieldbook"
        id="selected-work"
        aria-labelledby="highlights-title"
      >
        <header className="fieldbook-heading">
          <h2 id="highlights-title">Project Highlights</h2>
        </header>
        <div className="fieldbook-columns">
          <section className="featured-builds" aria-label="Highlighted projects">
            <div className="build-grid">
              {features.map((feature) => {
                const project = getProject(feature.id)!;
                return (
                  <article className="build-card" key={feature.id}>
                    <Link href={project.href} className="build-card-link">
                      <div className="build-art">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 760px) 90vw, (max-width: 1100px) 42vw, 520px"
                        />
                      </div>
                      <div className="build-copy">
                        <h3>{project.title}</h3>
                        <p>{feature.description}</p>
                        <div className="build-meta">
                          <FieldMark />
                          <span>{feature.kind}</span>
                          <span>{project.sortDate.slice(0, 4)}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
          <section className="topic-index" aria-labelledby="topics-title">
            <div className="collection-heading">
              <h2 id="topics-title">
                <Link href="/projects" className="projects-overview-link">
                  Explore all {projects.length} projects <InlineArrow />
                </Link>
              </h2>
              <p className="topic-index-intro">
                Embedded systems are my primary focus, with projects across
                software, robotics, and security driven by a curiosity of
                how the world works.
              </p>
            </div>
            <ul>
              {categories.map((category) => {
                const TopicIcon = topicIcons[category.id];
                return (
                  <li key={category.id}>
                    <Link
                      href={`/projects?category=${category.id}`}
                      className="topic-card-link"
                    >
                      <TopicIcon className="field-mark" aria-hidden="true" />
                      <div>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        <span>
                          {projects.filter((p) => inCategory(p, category.id)).length}{" "}
                          projects
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </section>

      <section className="lab" aria-labelledby="lab-title">
        <div className="lab-inner">
          <header className="lab-heading">
            <h2 id="lab-title">Run it in your browser</h2>
            <p>
              Drag the target and watch Newton&apos;s method and Broyden&apos;s
              quasi-Newton method solve for the joint angles. Then try the
              singularity preset to see where they struggle.
            </p>
          </header>
          <div className="lab-grid">
            <HomeLab />
            <ul className="lab-shelf" aria-label="More things to try">
              {shelf.map((item) => {
                const p = getProject(item.id)!;
                return (
                  <li key={item.id}>
                    <Link href={`${p.href}#interactive-demo`} className="lab-item">
                      <span className="lab-thumb">
                        <Image src={p.image} alt="" fill sizes="96px" />
                      </span>
                      <span className="lab-item-copy">
                        <strong>{item.verb}</strong>
                        <span>{item.note}</span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <TrajectoryChart />

      <section className="people-section" aria-labelledby="people-title">
        <div className="people-lead">
          <div className="people-photo">
            <Image
              src="/images/events/BSides-Edmonton-2026.webp"
              alt="BSides Edmonton 2026 CTF medals and event"
              fill
              sizes="(max-width: 760px) 90vw, 520px"
            />
          </div>
          <h2 id="people-title">There are people behind the projects</h2>
          <p>
            I help organise security events and build CTF challenges. At BSides
            Edmonton 2026, that meant competition setup, helping participants,
            and designing the winners’ medals. I also compete in CTF competitions.
          </p>
        </div>
        <div className="record-columns">
          <section aria-labelledby="results-title">
            <h3 id="results-title">Competition results</h3>
            <ol className="record-list">
              {results.map((a) => (
                <li key={a.id}>
                  <Link href={`/achievements#${a.id}`}>
                    <span className="record-place">{a.status}</span>
                    <span className="record-name">
                      {a.title}
                      <span>{a.subtitle}</span>
                    </span>
                    <span className="record-when">{a.date}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <Link className="record-more" href="/achievements">
              All achievements and certificates
            </Link>
          </section>
          <section aria-labelledby="organising-title">
            <h3 id="organising-title">Events I&apos;ve helped run</h3>
            <ul className="record-list">
              {organised.map((e) => (
                <li key={e.id}>
                  <Link href={`/community#${e.id}`}>
                    <span className="record-name">
                      {e.title}
                      <span>{e.subtitle}</span>
                    </span>
                    <span className="record-when">{e.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="record-more" href="/community">
              Community and leadership
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}
