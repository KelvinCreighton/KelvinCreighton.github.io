"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import BlurImage from "@/components/BlurImage";
import {
  categories,
  projects,
  inCategory,
  categoryName,
  type CategoryId,
  type Project,
} from "@/data/projects";
import { projectTopics } from "@/data/projectTopics";
import { events, achievements } from "@/data/community";

type Props = { fixedCategory?: CategoryId };

function topicsForProject(id: string) {
  return projectTopics[id] || [];
}

/**
 * A collection this large whose entries all share one cover image (a CTF
 * logo, say) reads better as one block than as a run of identical cards.
 */
const SERIES_MIN = 3;

function statusLabel(p: Project) {
  if (p.availability === "coming-soon") return "Release pending";
  if (p.state === "in-progress") return "In progress";
  return "";
}

function ProjectTopicList({ topics }: { topics: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [visibleCount, setVisibleCount] = useState(topics.length);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fitTopics = () => {
      const availableWidth = container.clientWidth;
      let usedWidth = 0;
      let fitCount = 0;

      for (let index = 0; index < topics.length; index += 1) {
        const topic = measureRefs.current[index];
        if (!topic) continue;
        const nextWidth = topic.getBoundingClientRect().width;
        if (usedWidth + nextWidth > availableWidth) break;
        usedWidth += nextWidth;
        fitCount += 1;
      }

      setVisibleCount((current) => (current === fitCount ? current : fitCount));
    };

    fitTopics();
    const observer = new ResizeObserver(fitTopics);
    observer.observe(container);
    return () => observer.disconnect();
  }, [topics]);

  return (
    <div
      className="entry-topics"
      aria-label={`Project topics: ${topics.join(", ")}`}
      title={topics.join(" · ")}
      ref={containerRef}
    >
      {topics.slice(0, visibleCount).map((topic) => (
        <span className="entry-topic" key={topic}>
          {topic}
        </span>
      ))}
      <span className="entry-topics-measure" aria-hidden="true">
        {topics.map((topic, index) => (
          <span
            className="entry-topic"
            key={topic}
            ref={(element) => {
              measureRefs.current[index] = element;
            }}
          >
            {topic}
          </span>
        ))}
      </span>
    </div>
  );
}

function ArchiveEntry({ p, view }: { p: Project; view: string }) {
  const status = statusLabel(p);
  return (
    <article className="archive-entry">
      <Link href={p.href} className="archive-entry-link">
        <div className={`archive-image${/logo/i.test(p.image) ? " is-mark" : ""}`}>
          <BlurImage
            src={p.image}
            alt=""
            fill
            sizes={
              view === "list"
                ? "180px"
                : "(max-width: 760px) 90vw, (max-width: 1320px) 45vw, 590px"
            }
            className="object-cover"
          />
        </div>
        <div className="entry-copy">
          <div className="entry-meta">
            <span>{p.dateLabel}</span>
            <span>{p.vehicle ? <em>{p.vehicle}</em> : categoryName(p.category)}</span>
          </div>
          <h2>{p.title}</h2>
          {status && <p className="entry-status">{status}</p>}
          <p>{p.summary}</p>
          <ProjectTopicList topics={topicsForProject(p.id)} />
        </div>
      </Link>
    </article>
  );
}

function ArchiveSeries({ name, items }: { name: string; items: Project[] }) {
  const first = items[0];
  const years = [...new Set(items.map((p) => p.sortDate.slice(0, 4)))].sort();
  const pending = items.filter((p) => statusLabel(p)).length;
  return (
    <section className="archive-series" aria-labelledby={`series-${first.id}`}>
      <div className="series-intro">
        <div className="series-mark">
          <BlurImage src={first.image} alt="" fill sizes="88px" />
        </div>
        <div>
          <p className="entry-meta">
            <span>{years.length > 1 ? `${years[0]}–${years.at(-1)}` : years[0]}</span>
            <span>{categoryName(first.category)}</span>
          </p>
          <h2 id={`series-${first.id}`}>{name}</h2>
          <p>
            {items.length} entries
            {pending > 0 && `, ${items.length - pending} published and ${pending} on the way`}
          </p>
        </div>
      </div>
      <ol className="series-list">
        {items.map((p) => {
          const status = statusLabel(p);
          return (
            <li key={p.id}>
              <Link href={p.href} className="series-item">
                <span className="series-title">{p.title.replace(`${name}: `, "")}</span>
                {status && <span className="series-status">{status}</span>}
                <span className="series-summary">{p.summary}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function ArchiveContent({
  fixedCategory,
  params,
  update,
  pending = false,
}: Props & {
  params: URLSearchParams;
  update: (key: string, value: string, replace?: boolean) => void;
  pending?: boolean;
}) {
  const requestedCategories = params
    .getAll("category")
    .filter((id): id is CategoryId => categories.some((c) => c.id === id));
  const selectedCategory =
    requestedCategories.length > 0
      ? requestedCategories[requestedCategories.length - 1]
      : !params.has("category") && fixedCategory
        ? fixedCategory
        : null;
  const view = ["list", "history"].includes(params.get("view") || "")
    ? params.get("view")!
    : "grid";
  const query = params.get("q") || "";
  const requestedCollection = params.get("collection") || "all";
  const requestedVehicle = params.get("vehicle") || "all";
  const order = params.get("order") === "oldest" ? "oldest" : "newest";
  const scope = projects.filter(
    (p) => !selectedCategory || inCategory(p, selectedCategory),
  );
  const collections = [
    ...new Set(scope.map((p) => p.collection).filter(Boolean)),
  ].sort();
  const vehicles = [
    ...new Set(scope.map((p) => p.vehicle).filter(Boolean)),
  ] as string[];
  const collection = collections.includes(requestedCollection)
    ? requestedCollection
    : "all";
  const vehicle = vehicles.includes(requestedVehicle)
    ? requestedVehicle
    : "all";
  const results = scope
    .filter(
      (p) =>
        (collection === "all" || p.collection === collection) &&
        (vehicle === "all" || p.vehicle === vehicle) &&
        `${p.title} ${p.summary} ${p.tags.join(" ")} ${topicsForProject(p.id).join(" ")} ${p.collection} ${categoryName(p.category)} ${p.contribution} ${p.vehicle || ""}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
    )
    .sort((a, b) =>
      order === "newest"
        ? b.sortDate.localeCompare(a.sortDate)
        : a.sortDate.localeCompare(b.sortDate),
    );
  const milestones =
    view === "history" &&
    !selectedCategory &&
    !query &&
    collection === "all" &&
    vehicle === "all"
      ? [
          ...events.map((e) => ({
            title: e.title,
            date: e.date,
            sortDate: e.sortDate,
            href: `/community#${e.id}`,
            kind: "Community",
          })),
          ...achievements.map((a) => ({
            title: a.title,
            date: a.date,
            sortDate: a.sortDate,
            href: `/achievements#${a.id}`,
            kind: "Achievement",
          })),
        ]
      : [];
  const history = [
    ...results.map((p) => ({
      title: p.title,
      date: p.dateLabel,
      sortDate: p.sortDate,
      href: p.href,
      kind: categoryName(p.category),
    })),
    ...milestones,
  ].sort((a, b) =>
    order === "newest"
      ? b.sortDate.localeCompare(a.sortDate)
      : a.sortDate.localeCompare(b.sortDate),
  );
  const years = [...new Set(history.map((p) => p.sortDate.slice(0, 4)))];
  const filtered =
    Boolean(query.trim()) || collection !== "all" || vehicle !== "all";

  // Gallery: fold repetitive collections into one block, placed where their
  // newest entry would have appeared.
  const seriesNames = new Set(
    [...new Set(results.map((p) => p.collection))].filter((name) => {
      const members = results.filter((p) => p.collection === name);
      return (
        name &&
        collection === "all" &&
        members.length >= SERIES_MIN &&
        members.every((p) => p.image === members[0].image)
      );
    }),
  );
  const blocks: (
    | { kind: "entry"; p: Project }
    | { kind: "series"; name: string; items: Project[] }
  )[] = [];
  const placed = new Set<string>();
  for (const p of results) {
    if (!seriesNames.has(p.collection)) blocks.push({ kind: "entry", p });
    else if (!placed.has(p.collection)) {
      placed.add(p.collection);
      blocks.push({
        kind: "series",
        name: p.collection,
        items: results.filter((r) => r.collection === p.collection),
      });
    }
  }
  return (
    <div className="archive" aria-busy={pending}>
      <div className="archive-topline">
        <div className="archive-search">
          <label className="visually-hidden" htmlFor="archive-search">
            Search projects
          </label>
          <Search aria-hidden="true" />
          <input
            id="archive-search"
            type="search"
            name="q"
            autoComplete="off"
            spellCheck={false}
            placeholder="Search projects, tools, or topics…"
            value={query}
            onChange={(e) => update("q", e.target.value, true)}
            onKeyDown={(e) => {
              if (e.key === "Escape" && query) {
                e.preventDefault();
                update("q", "", true);
              }
            }}
          />
          <kbd aria-hidden="true">/</kbd>
        </div>
        <div className="view-controls" role="group" aria-label="Archive view">
          {[
            ["grid", "Gallery"],
            ["list", "Index"],
            ["history", "Timeline"],
          ].map(([v, label]) => (
            <button
              type="button"
              key={v}
              aria-pressed={view === v}
              onClick={() => update("view", v)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <nav className="category-nav" aria-label="Project disciplines">
        <button
          type="button"
          aria-pressed={!selectedCategory}
          onClick={() => update("category", "all")}
        >
          All Work <sup>{projects.length}</sup>
        </button>
        {categories.map((c) => (
          <button
            type="button"
            key={c.id}
            aria-pressed={selectedCategory === c.id}
            onClick={() => update("category", c.id)}
          >
            {c.title}{" "}
            <sup>{projects.filter((p) => inCategory(p, c.id)).length}</sup>
          </button>
        ))}
      </nav>
      <div className="archive-count">
        <p role="status" aria-live="polite">
          {results.length} {results.length === 1 ? "project" : "projects"}
          {query && ` matching “${query}”`}
          {collection !== "all" && ` / ${collection}`}
          {vehicle !== "all" && ` / ${vehicle}`}
          {milestones.length > 0
            ? `, plus ${milestones.length} community milestones`
            : ""}
        </p>
        {filtered && (
          <button type="button" onClick={() => update("reset", "")}>
            Clear search
          </button>
        )}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>
            No projects match {query.trim() ? `“${query.trim()}”` : "these filters"}
          </h2>
          <p>Check the spelling, try a broader word, or search every discipline.</p>
          <button type="button" className="button" onClick={() => update("reset", "")}>
            Clear search
          </button>
        </div>
      )}
      {view === "history" ? (
        <div>
          {years.map((year) => (
            <section className="history-year" key={year}>
              <h2>{year}</h2>
              <div>
                {history
                  .filter((p) => p.sortDate.startsWith(year))
                  .map((p) => (
                    <Link className="history-item" href={p.href} key={p.href}>
                      <span>{p.date}</span>
                      <h3>{p.title}</h3>
                      <span>{p.kind} ↗</span>
                    </Link>
                  ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className={view === "list" ? "archive-list" : "archive-grid"}>
          {view === "list"
            ? results.map((p) => <ArchiveEntry key={p.id} p={p} view={view} />)
            : blocks.map((block) =>
                block.kind === "series" ? (
                  <ArchiveSeries
                    key={`series-${block.name}`}
                    name={block.name}
                    items={block.items}
                  />
                ) : (
                  <ArchiveEntry key={block.p.id} p={block.p} view={view} />
                ),
              )}
        </div>
      )}
    </div>
  );
}
export function StaticProjectArchive(props: Props) {
  return (
    <ArchiveContent
      {...props}
      params={new URLSearchParams()}
      update={() => {}}
    />
  );
}
export default function ProjectArchive(props: Props) {
  const initialSearchParams = useSearchParams();
  const [params, setParams] = useState(
    () => new URLSearchParams(initialSearchParams.toString()),
  );

  useEffect(() => {
    // Back and forward restore the filters the URL describes.
    const restore = () =>
      setParams(new URLSearchParams(window.location.search));
    // "/" jumps to search, as on most sites with a search field.
    const focusSearch = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        e.key !== "/" ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target.closest("input, textarea, select, [contenteditable]")
      )
        return;
      e.preventDefault();
      document.getElementById("archive-search")?.focus();
    };
    window.addEventListener("popstate", restore);
    document.addEventListener("keydown", focusSearch);
    return () => {
      window.removeEventListener("popstate", restore);
      document.removeEventListener("keydown", focusSearch);
    };
  }, []);

  function update(key: string, value: string, replace = false) {
    const next = new URLSearchParams(params.toString());
    if (key === "reset") {
      ["q", "collection", "vehicle"].forEach((k) => next.delete(k));
    } else if (key === "category") {
      next.delete("category");
      if (value === "all") {
        if (props.fixedCategory) next.set("category", "all");
      } else if (value !== props.fixedCategory) {
        next.set("category", value);
      }
      next.delete("collection");
      next.delete("vehicle");
    } else if (
      !value ||
      value === "all" ||
      (key === "view" && value === "grid") ||
      (key === "order" && value === "newest")
    ) {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setParams(next);
    // Keep the address shareable: what you see is what the link opens.
    const search = next.toString();
    const url = `${window.location.pathname}${search ? `?${search}` : ""}`;
    if (replace) window.history.replaceState(window.history.state, "", url);
    else window.history.pushState(window.history.state, "", url);
  }

  return <ArchiveContent {...props} params={params} update={update} />;
}
