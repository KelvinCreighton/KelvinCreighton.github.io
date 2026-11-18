import Link from "next/link";
import {
  CarFront,
  Cog,
  Cpu,
  Gamepad2,
  Music2,
  ShieldCheck,
} from "lucide-react";
import { categories, inCategory, projects } from "@/data/projects";
import { InlineArrow } from "@/components/InlineArrow";

const topicIcons = {
  "embedded-systems": Cpu,
  cybersecurity: ShieldCheck,
  engineering: Cog,
  auto: CarFront,
  "game-dev": Gamepad2,
  music: Music2,
};

export default function TopicIndex() {
  return (
    <section className="topic-index" aria-labelledby="topics-title">
      <div className="collection-heading">
        <h2 id="topics-title">
          <Link href="/projects" className="projects-overview-link">
            Explore all {projects.length} projects <InlineArrow />
          </Link>
        </h2>
        <p className="topic-index-intro">
          Embedded systems are my primary focus, with projects across software,
          robotics, and security driven by a curiosity of how the world works.
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
                    {projects.filter((project) => inCategory(project, category.id)).length} projects
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
