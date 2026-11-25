import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "@/components/BlurImage";
import ProjectCard from "@/components/ProjectCard";
import { categoryIcons } from "@/components/categoryIcons";
import { InlineArrow } from "@/components/InlineArrow";
import { categories, projects, getProject, inCategory } from "@/data/projects";

const highlights = [
  "machineguard",
  "dragonshell",
  "dremel-3d45-rebuild",
  "robotic-arm-simulation",
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
        </header>
        <div className="fieldbook-columns">
          <section className="featured-builds" aria-label="Highlighted projects">
            <div className="build-grid">
              {highlights.map((id, index) => (
                <ProjectCard
                  key={id}
                  project={getProject(id)!}
                  heading="h3"
                  sizes="(max-width: 540px) 92vw, (max-width: 900px) 46vw, 420px"
                  priority={index === 0}
                />
              ))}
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
                const TopicIcon = categoryIcons[category.id];
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

      <section className="people-section" aria-labelledby="people-title">
        <Link
          className="people-photo"
          href="/community#bsides-edmonton-2026"
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
          <h2 id="people-title">There are people behind the projects</h2>
          <p>
            I also help organise security events and build CTF challenges. At
            BSides Edmonton 2026, that meant competition setup, helping
            participants, and designing the winners’ medals.
          </p>
          <div className="people-links">
            <Link href="/community">
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
