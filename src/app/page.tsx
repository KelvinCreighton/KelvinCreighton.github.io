import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "@/components/BlurImage";
import { FieldMark } from "@/components/FieldMark";
import { categories, projects, getProject, inCategory } from "@/data/projects";

const features = [
  {
    id: "machineguard",
    title: "Listening to a machine",
    description:
      "A sensor, an ESP32, and a power drill. Building the hardware and firmware for our MachineGuard prototype.",
    kind: "Hardware & firmware",
  },
  {
    id: "rc-car",
    title: "A $10 car, built to teach",
    description:
      "A low-cost remote-control car and a one-day curriculum that makes mechanical and electrical ideas tangible.",
    kind: "Robotics & education",
  },
  {
    id: "dremel-3d45-rebuild",
    title: "A second life for a 3D printer",
    description:
      "Replacing a failed controller with an Arduino Mega, RAMPS, and Marlin. An ongoing rebuild, one test at a time.",
    kind: "Build in progress",
  },
  {
    id: "transmission-rebuild",
    title: "Taking the gearbox apart",
    description:
      "A manual transmission rebuild: following the diagnosis, working through the repair, and documenting the details.",
    kind: "From the garage",
  },
];
const notes = [
  "macsync-stealer",
  "ssti1",
  "nosql-injection",
  "soap",
  "wicys-ctf-01",
  "wicys-ctf-02",
];
const shelf = [
  "robotic-arm-simulation",
  "ufo",
  "beethoven-virus",
  "the-longest-moment",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="field-intro" aria-labelledby="intro-title">
        <h1 id="intro-title">
          Hi, I&apos;m Kelvin
        </h1>
        <div className="field-intro-copy">
          <p className="field-intro-description">
            My background is in Computer Science at the University of Alberta,
            with a focus on embedded software and systems programming. I work
            with C/C++, microcontrollers, and Linux, exploring the relationship
            between hardware and software.
          </p>
          <div className="field-intro-links" aria-label="Contact links">
            <a
              href="https://github.com/KelvinCreighton/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kelvin-creighton-250806263"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a href="mailto:kcreight@ualberta.ca">
              <Mail aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </section>

      <section
        className="fieldbook"
        id="selected-work"
        aria-labelledby="highlights-title"
      >
        <header className="fieldbook-heading">
          <h2 id="highlights-title">Project Highlights</h2>
          <p>
            A growing collection of builds, investigations, and things made
            along the way.{" "}
            <Link href="/projects">
              Explore all {projects.length} projects{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </header>
        <div className="fieldbook-columns">
          <section className="featured-builds" aria-labelledby="builds-title">
            <div className="collection-heading">
              <h3 id="builds-title">
                <Link href="/projects">
                  Selected builds <span aria-hidden="true">→</span>
                </Link>
              </h3>
              <p>Projects that bring software into contact with real systems.</p>
            </div>
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
                          priority={feature.id === "machineguard"}
                        />
                      </div>
                      <div className="build-copy">
                        <h4>{feature.title}</h4>
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
          <aside className="field-notes" aria-labelledby="notes-title">
            <div className="collection-heading">
              <h3 id="notes-title">
                <Link href="/projects/cybersecurity">
                  Security, from the systems side <span aria-hidden="true">→</span>
                </Link>
              </h3>
              <p>
                A second lens on how software and systems fail, and how they
                can be made harder to break.
              </p>
            </div>
            <ul className="note-list">
              {notes.map((id) => {
                const project = getProject(id)!;
                return (
                  <li key={id}>
                    <FieldMark />
                    <div>
                      <h4>
                        <Link href={project.href}>{project.title}</Link>
                      </h4>
                      <span>{project.contribution}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link href="/projects/cybersecurity" className="collection-more">
              All security projects <span aria-hidden="true">→</span>
            </Link>
            <div className="margin-note">
              <span className="margin-note-label">A work in progress</span>
              <p>
                Some projects are finished; others are still on the bench. The
                notes include the failures and unfinished parts, too.
              </p>
              <Link href="/projects/?view=history">Follow the history →</Link>
            </div>
          </aside>
        </div>
      </section>

      <div className="fieldbook-extras">
        <section className="topic-index" aria-labelledby="topics-title">
          <div className="collection-heading">
            <h2 id="topics-title">Follow a thread</h2>
          <p>
            Embedded systems are the focus; operating systems, robotics, and
            security help me understand the whole machine.
          </p>
          </div>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <FieldMark />
                <div>
                  <h3>
                    <Link href={`/projects/${category.id}`}>
                      {category.title}
                    </Link>
                  </h3>
                  <p>{category.description}</p>
                  <span>
                    {projects.filter((p) => inCategory(p, category.id)).length}{" "}
                    projects
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="play-shelf" aria-labelledby="shelf-title">
          <div className="collection-heading">
            <h2 id="shelf-title">Things to play with</h2>
            <p>Games, simulations, and a little music. Open one and try it.</p>
          </div>
          <div className="shelf-grid">
            {shelf.map((id) => {
              const project = getProject(id)!;
              return (
                <article className="shelf-item" key={id}>
                  <Link
                    href={project.href}
                    className={`shelf-cover ${project.category === "music" ? "score-cover" : ""}`}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 600px) 42vw, 240px"
                    />
                  </Link>
                  <h3>
                    <Link href={project.href}>{project.title}</Link>
                  </h3>
                  <p>{project.contribution}</p>
                  <Link
                    className="shelf-action"
                    href={`${project.href}#interactive-demo`}
                  >
                    {project.capabilities.includes("listen")
                      ? "Listen & read"
                      : project.capabilities.includes("simulate")
                        ? "Explore the simulation"
                        : "Play the game"}{" "}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="shelf-links">
            <Link href="/projects/game-dev">More games →</Link>
            <Link href="/projects/music">All music →</Link>
          </div>
        </section>
      </div>

      <section className="people-section" aria-labelledby="people-title">
        <Link
          className="people-photo"
          href="/events#bsides-edmonton-2026"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src="/images/events/BSides-Edmonton-2026.webp"
            alt=""
            fill
            sizes="(max-width: 760px) 90vw, 500px"
          />
        </Link>
        <div>
          <p className="people-caption">Away from the workbench</p>
          <h2 id="people-title">There are people behind the projects.</h2>
          <p>
            I also help organise security events and build CTF challenges. At
            BSides Edmonton 2026, that meant competition setup, helping
            participants, and designing the winners’ medals.
          </p>
          <div className="people-links">
            <Link href="/events">Community & leadership →</Link>
            <Link href="/achievements">Competition results →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
