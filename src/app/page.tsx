import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "@/components/BlurImage";
import { FieldMark } from "@/components/FieldMark";
import { InlineArrow } from "@/components/InlineArrow";
import { categories, projects, getProject, inCategory } from "@/data/projects";

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

export default function Home() {
  return (
    <div className="home-page">
      <section className="field-intro" aria-labelledby="intro-title">
        <h1 id="intro-title">
          Hi, I&apos;m Kelvin
        </h1>
        <div className="field-intro-copy">
          <p className="field-intro-description">
            With a Computer Science background from the University of Alberta,
            I focus on embedded software and systems programming. I work with
            C/C++, microcontrollers, and Linux, exploring the relationship
            between hardware and software.
          </p>
          <div className="field-intro-links" aria-label="Contact links">
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
            <a href="mailto:kcreight@ualberta.ca">
              <span className="field-intro-link-content">
                <Mail aria-hidden="true" />
                Email
              </span>
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
            along the way.
          </p>
        </header>
        <div className="fieldbook-columns">
          <section className="featured-builds" aria-labelledby="builds-title">
            <div className="collection-heading">
              <h3 id="builds-title">
                <Link href="/projects" className="projects-overview-link">
                  Explore all {projects.length} projects <InlineArrow />
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
                        <h4>{project.title}</h4>
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
              <h2 id="topics-title">Follow a thread</h2>
              <p>
                Embedded systems are the focus; operating systems, robotics,
                and security help me understand the whole machine.
              </p>
            </div>
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/projects?category=${category.id}`}
                    className="topic-card-link"
                  >
                    <FieldMark />
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
              ))}
            </ul>
          </section>
        </div>
      </section>

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
            <Link href="/events">
              Community & leadership <InlineArrow />
            </Link>
            <Link href="/achievements">
              Competition results <InlineArrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
