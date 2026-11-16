import Link from "next/link";
import Image from "@/components/BlurImage";
import { ProjectArtwork, FieldMark } from "@/components/ProjectArtwork";
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
    id: "dragonshell",
    title: "Under the shell",
    description:
      "Building DragonShell in C to understand processes, pipes, and what a command line actually does.",
    kind: "Systems programming",
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
          <strong>Kelvin</strong> builds software, tinkers with hardware, and
          follows his curiosity.
        </h1>
        <div className="field-intro-copy">
          <p>
            Embedded software, systems programming, and the occasional detour.
          </p>
          <p>
            I like figuring out how things work, then making something of my
            own.{" "}
            <Link href="/resume">
              More about me <span aria-hidden="true">↗</span>
            </Link>
          </p>
        </div>
      </section>

      <section
        className="fieldbook"
        id="selected-work"
        aria-labelledby="fieldbook-title"
      >
        <header className="fieldbook-heading">
          <h2 id="fieldbook-title">The Fieldbook</h2>
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
              <p>Software meeting hardware. Ideas becoming working things.</p>
            </div>
            <div className="build-grid">
              {features.map((feature) => {
                const project = getProject(feature.id)!;
                return (
                  <article className="build-card" key={feature.id}>
                    <Link
                      href={project.href}
                      className="build-art"
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      <ProjectArtwork id={feature.id} />
                    </Link>
                    <div className="build-copy">
                      <h4>
                        <Link href={project.href}>{feature.title}</Link>
                      </h4>
                      <p>{feature.description}</p>
                      <div className="build-meta">
                        <FieldMark />
                        <span>{feature.kind}</span>
                        <span>{project.sortDate.slice(0, 4)}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
          <aside className="field-notes" aria-labelledby="notes-title">
            <div className="collection-heading">
              <h3 id="notes-title">
                <Link href="/projects/cybersecurity">
                  Investigations & writeups <span aria-hidden="true">→</span>
                </Link>
              </h3>
              <p>
                Following the evidence, finding the flaw, and leaving a trail.
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
            <p>Different tools. The same curiosity.</p>
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
