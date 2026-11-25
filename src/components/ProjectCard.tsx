import Link from "next/link";
import BlurImage from "@/components/BlurImage";
import ProjectTopicList from "@/components/ProjectTopicList";
import { categoryIcons } from "@/components/categoryIcons";
import { categoryName, type Project } from "@/data/projects";
import { projectTopics } from "@/data/projectTopics";

/** Logos drawn on white need dimming so they don't glare on the dark page. */
const WHITE_LOGO = /(wicys|picoctf)_logo/i;
const NO_TOPICS: string[] = [];

/**
 * The one project card, shared by the homepage highlights and the archive
 * (Gallery and Index), so a project looks the same wherever it appears.
 */
export default function ProjectCard({
  project: p,
  heading: Heading = "h2",
  sizes,
  priority,
}: {
  project: Project;
  heading?: "h2" | "h3";
  sizes: string;
  priority?: boolean;
}) {
  const Icon = categoryIcons[p.category];
  return (
    <article className="project-card">
      <Link href={p.href} className="project-card-link">
        <div
          className={`project-card-media${WHITE_LOGO.test(p.image) ? " is-white-logo" : ""}`}
        >
          <BlurImage
            src={p.image}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
          />
        </div>
        <div className="project-card-body">
          <div className="project-card-meta">
            <span className="project-card-discipline">
              <Icon aria-hidden="true" />
              {p.vehicle || categoryName(p.category)}
            </span>
            <span>{p.dateLabel}</span>
          </div>
          <Heading className="project-card-title">{p.title}</Heading>
          <p className="project-card-summary">{p.summary}</p>
          <ProjectTopicList topics={projectTopics[p.id] || NO_TOPICS} />
        </div>
      </Link>
    </article>
  );
}
