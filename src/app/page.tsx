import Link from "next/link";
import Image from "@/components/BlurImage";
import {
  categories,
  projects,
  selectedProjects,
  inCategory,
} from "@/data/projects";
export default function Home() {
  const [lead, second, third] = selectedProjects;
  return (
    <div className="home-page">
      <section className="home-intro">
        <div>
          <p className="eyebrow">
            <span className="small-rule" />
            Software / Hardware / Curiosity
          </p>
          <h1>
            Understanding systems.
            <br />
            <em>Building things.</em>
          </h1>
          <div className="intro-bottom">
            <p>
              I’m Kelvin. I work on embedded software, firmware, and systems
              programming. This is a record of what I build, the problems I run
              into, and how I work through them.
            </p>
            <div className="intro-actions">
              <Link className="button primary" href="#selected-work">
                Explore the work <span aria-hidden="true">↓</span>
              </Link>
              <Link className="text-link" href="/resume">
                View my resume ↗
              </Link>
            </div>
          </div>
        </div>
        <aside className="portrait-note">
          <Image
            src="/images/Head-Shot.webp"
            alt="Kelvin Creighton"
            width={112}
            height={136}
            sizes="112px"
          />
          <p>
            Software meets hardware.
            <br />
            Questions become projects.
          </p>
        </aside>
      </section>
      <section id="selected-work" className="selected-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Selected work</span>
            <h2>A few things I’ve worked on.</h2>
          </div>
          <Link className="text-link" href="/projects">
            All {projects.length} projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <article className="lead-project">
          <Link href={lead.href} className="lead-image">
            <Image
              src={lead.image}
              alt={lead.imageAlt}
              fill
              sizes="(max-width: 760px) 92vw, 65vw"
              priority
            />
            <span className="figure-label">
              Fig. 01 / The working prototype
            </span>
          </Link>
          <div className="lead-copy">
            <div className="project-kicker">
              Embedded hardware & firmware <span>2026</span>
            </div>
            <Link href={lead.href}>
              <h3>
                MachineGuard<span aria-hidden="true">↗</span>
              </h3>
            </Link>
            <p>{lead.summary}</p>
            <dl>
              <div>
                <dt>My part</dt>
                <dd>Sensors, acquisition & BLE firmware</dd>
              </div>
              <div>
                <dt>Context</dt>
                <dd>natHacks · Team prototype</dd>
              </div>
            </dl>
            <Link href={lead.href} className="text-link">
              Inside the project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>
        <div className="secondary-projects">
          {[second, third].map((p, i) => (
            <article key={p.id} className="secondary-project">
              <Link
                href={p.href}
                className={`secondary-image ${p.image.endsWith(".svg") ? "diagram-image" : ""}`}
              >
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 760px) 92vw, 44vw"
                />
                <span className="figure-label">
                  0{i + 2} / {p.contribution}
                </span>
              </Link>
              <div className="project-kicker">
                {p.collection}
                <span>
                  {p.state === "in-progress"
                    ? "Build in progress"
                    : p.sortDate.slice(0, 4)}
                </span>
              </div>
              <Link href={p.href}>
                <h3>
                  {p.title}
                  <span aria-hidden="true">↗</span>
                </h3>
              </Link>
              <p>{p.summary}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="approach-section">
        <div>
          <span className="eyebrow">02 / How I work</span>
          <h2>
            Start with a question.
            <br />
            <em>Follow the details.</em>
          </h2>
          <p>
            I like projects with something concrete to figure out: a signal to
            capture, a process to coordinate, or a machine to bring back to
            life.
          </p>
        </div>
        <div className="capability-list">
          {[
            {
              n: "01",
              title: "Hardware & firmware",
              copy: "Bringing sensors, peripherals, and software together. Following the data from a physical input to a usable result.",
              href: lead.href,
            },
            {
              n: "02",
              title: "Systems programming",
              copy: "Working with processes, memory, and file descriptors to understand what happens beneath an application.",
              href: second.href,
            },
            {
              n: "03",
              title: "Investigation & repair",
              copy: "Finding the failure, testing an explanation, and documenting the decisions that lead to the next working step.",
              href: third.href,
            },
          ].map((c) => (
            <Link key={c.n} href={c.href}>
              <span className="index-number">{c.n}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.copy}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="discipline-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / Beyond the selected work</span>
            <h2>Different tools. Same curiosity.</h2>
          </div>
          <p>
            There’s more in the fieldbook: repair logs, security investigations,
            things to play, and music to listen to.
          </p>
        </div>
        <div className="discipline-list">
          {categories.map((c, i) => (
            <Link key={c.id} href={`/projects/${c.id}`}>
              <span className="index-number">0{i + 1}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <span className="count">
                {String(
                  projects.filter((p) => inCategory(p, c.id)).length,
                ).padStart(2, "0")}{" "}
                projects
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="community-feature">
        <div className="community-image">
          <Image
            src="/images/events/BSides-Edmonton-2026.webp"
            alt="BSides Edmonton CTF medals and event"
            fill
            sizes="(max-width:760px) 92vw, 40vw"
          />
        </div>
        <div>
          <p className="eyebrow">04 / Outside the project</p>
          <h2>
            Making room
            <br />
            <em>for people to learn.</em>
          </h2>
          <p>
            Alongside my technical work, I help organise security events and
            build CTF challenges. At BSides Edmonton 2026, that included
            competition setup, supporting participants, and designing the
            winners’ medals.
          </p>
          <Link className="text-link" href="/events#bsides-edmonton-2026">
            Community & leadership <span aria-hidden="true">↗</span>
          </Link>
          <div className="quiet-links">
            <Link href="/achievements">Competition results ↗</Link>
            <Link href="/resume">Project experience ↗</Link>
          </div>
        </div>
      </section>
      <section className="recent-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">05 / Recently in the fieldbook</p>
            <h2>The work continues.</h2>
          </div>
          <Link className="text-link" href="/projects/?view=history">
            View the history ↗
          </Link>
        </div>
        {[...projects]
          .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
          .slice(0, 3)
          .map((p) => (
            <Link className="recent-row" key={p.id} href={p.href}>
              <span>{p.dateLabel}</span>
              <h3>{p.title}</h3>
              <span>{p.contribution}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
      </section>
    </div>
  );
}
