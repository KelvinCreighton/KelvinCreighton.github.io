import Link from "next/link";
import {
  getProject,
  projects,
  categoryName,
  inCategory,
} from "@/data/projects";
import { Github, Download, Play } from "lucide-react";
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
  const source =
    p.source ||
    (p.id.startsWith("wicys-ctf-")
      ? "https://github.com/KelvinCreighton/WICYS-Cross-Chapter-CTF-2026"
      : undefined);
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
          <Link href={`/projects?category=${p.category}`}>
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
          {p.vehicle && <span>{p.vehicle}</span>}
        </div>
        <div className="case-actions">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="button project-action"
            >
              <Github aria-hidden="true" /> GitHub
            </a>
          )}
          {p.id !== "robotic-arm-simulation" &&
            (p.demo || p.capabilities.includes("simulate") || p.score) && (
              <a href="#interactive-demo" className="button project-action">
                <Play aria-hidden="true" />{" "}
                {p.score
                  ? "Open score"
                  : p.capabilities.includes("simulate")
                    ? "Try simulation"
                    : "Try demo"}
              </a>
            )}
          {p.score && (
            <a href={p.score} download className="button project-action">
              <Download aria-hidden="true" /> Download MusicXML
            </a>
          )}
        </div>
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
                <h2>
                  {r.title} <InlineArrow />
                </h2>
                <p>{r.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
