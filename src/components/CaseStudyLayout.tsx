import Link from "next/link";
import {
  getProject,
  projects,
  categoryName,
  inCategory,
} from "@/data/projects";
import ArticleContents from "@/components/ArticleContents";
import { InlineArrow } from "@/components/InlineArrow";
export default function CaseStudyLayout({
  projectId,
  children,
}: {
  projectId: string;
  children: React.ReactNode;
}) {
  const p = getProject(projectId)!;
  const related = projects
    .filter((r) => r.id !== p.id && inCategory(r, p.category))
    .sort(
      (a, b) =>
        (a.collection === p.collection ? -1 : 0) -
        (b.collection === p.collection ? -1 : 0),
    )
    .slice(0, 2);
  return (
    <>
      <header className="case-header">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">Projects</Link>
          <span>/</span>
          <Link href={`/projects/${p.category}`}>
            {categoryName(p.category)}
          </Link>
          <span>/</span>
          <span>{p.title}</span>
        </nav>
        <div className="case-heading">
          <p className="eyebrow">{p.collection || categoryName(p.category)}</p>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
        </div>
        <div className="case-meta">
          <span>{p.dateLabel}</span>
          <span>{p.contribution}</span>
          <span>
            {p.availability === "coming-soon"
              ? "Release pending"
              : p.state === "in-progress"
                ? "In progress"
                : p.state === "prototype"
                  ? "Working prototype"
                  : "Project archive"}
          </span>
        </div>
        <div className="case-actions">
          {p.source && (
            <a
              href={p.source}
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Source on GitHub ↗
            </a>
          )}
          {(p.demo || p.capabilities.includes("simulate") || p.score) && (
            <a href="#interactive-demo" className="text-link">
              Try it here ↓
            </a>
          )}
          {p.score && (
            <a href={p.score} download className="text-link">
              Download MusicXML ↓
            </a>
          )}
          <Link className="text-link" href={`/projects/${p.category}`}>
            Explore {categoryName(p.category).toLowerCase()} <InlineArrow />
          </Link>
        </div>
        {p.overview && (
          <dl className="case-overview">
            <div>
              <dt>The problem</dt>
              <dd>{p.overview.problem}</dd>
            </div>
            <div>
              <dt>My contribution</dt>
              <dd>{p.overview.role}</dd>
            </div>
            <div>
              <dt>Outcome & limits</dt>
              <dd>{p.overview.result}</dd>
            </div>
          </dl>
        )}
      </header>
      <div className="case-reading">
        <aside className="case-aside">
          <ArticleContents projectId={p.id} />
        </aside>
        <div className="case-content">{children}</div>
      </div>
      {related.length > 0 && (
        <section className="related-work">
          <p className="eyebrow">Keep exploring</p>
          <div>
            {related.map((r) => (
              <Link key={r.id} href={r.href}>
                <span>{r.collection}</span>
                <h2>{r.title} ↗</h2>
                <p>{r.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
