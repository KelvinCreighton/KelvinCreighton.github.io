"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import BlurImage from "@/components/BlurImage";
import {
  categories,
  projects,
  inCategory,
  categoryName,
  type CategoryId,
} from "@/data/projects";
import { events, achievements } from "@/data/community";

type Props = { fixedCategory?: CategoryId };
function ArchiveContent({
  fixedCategory,
  params,
  update,
  pending = false,
}: Props & {
  params: URLSearchParams;
  update: (key: string, value: string) => void;
  pending?: boolean;
}) {
  const category =
    fixedCategory ||
    (categories.some((c) => c.id === params.get("category"))
      ? (params.get("category") as CategoryId)
      : "all");
  const view = ["list", "history"].includes(params.get("view") || "")
    ? params.get("view")!
    : "grid";
  const query = params.get("q") || "";
  const requestedCollection =
    params.get("collection") ||
    (fixedCategory === "cybersecurity" &&
    !categories.some((c) => c.id === params.get("category"))
      ? params.get("category") || "all"
      : "all");
  const requestedVehicle = params.get("vehicle") || "all";
  const order = params.get("order") === "oldest" ? "oldest" : "newest";
  const scope = projects.filter(
    (p) => category === "all" || inCategory(p, category),
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
        `${p.title} ${p.summary} ${p.tags.join(" ")} ${p.collection} ${categoryName(p.category)} ${p.contribution} ${p.vehicle || ""}`
          .toLowerCase()
          .includes(query.toLowerCase().trim()),
    )
    .sort((a, b) =>
      order === "newest"
        ? b.sortDate.localeCompare(a.sortDate)
        : a.sortDate.localeCompare(b.sortDate),
    );
  const hasFilters =
    query ||
    collection !== "all" ||
    vehicle !== "all" ||
    (!fixedCategory && category !== "all");
  const milestones =
    view === "history" &&
    category === "all" &&
    !query &&
    collection === "all" &&
    vehicle === "all"
      ? [
          ...events.map((e) => ({
            title: e.title,
            date: e.date,
            sortDate: e.sortDate,
            href: `/events#${e.id}`,
            kind: "Community",
          })),
          ...achievements.map((a) => ({
            title: a.title,
            date: a.date,
            sortDate: new Date(a.date).toISOString().slice(0, 10),
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
  return (
    <div className="archive" aria-busy={pending}>
      <div className="archive-topline">
        <p className="eyebrow">The work, in detail</p>
        <div className="view-controls" role="group" aria-label="Archive view">
          {["grid", "list", "history"].map((v) => (
            <button
              key={v}
              aria-pressed={view === v}
              onClick={() => update("view", v)}
            >
              {v === "grid" ? "Gallery" : v === "list" ? "Index" : "History"}
            </button>
          ))}
        </div>
      </div>
      <nav className="category-nav" aria-label="Project disciplines">
        <Link
          href="/projects"
          aria-current={category === "all" ? "page" : undefined}
        >
          All work <sup>{projects.length}</sup>
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            href={`/projects/${c.id}`}
            aria-current={category === c.id ? "page" : undefined}
          >
            {c.title}{" "}
            <sup>{projects.filter((p) => inCategory(p, c.id)).length}</sup>
          </Link>
        ))}
      </nav>
      <div className="archive-controls">
        <label>
          <span className="control-label">Search this collection</span>
          <input
            type="search"
            placeholder="Title, topic, technology…"
            value={query}
            onChange={(e) => update("q", e.target.value)}
          />
        </label>
        {category !== "auto" &&
          category !== "music" &&
          collections.length > 1 && (
            <label>
              <span className="control-label">Collection</span>
              <select
                aria-label="Collection"
                value={collection}
                onChange={(e) => update("collection", e.target.value)}
              >
                <option value="all">All collections</option>
                {collections.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
          )}
        {category === "auto" && vehicles.length > 0 && (
          <label>
            <span className="control-label">Vehicle</span>
            <select
              aria-label="Vehicle"
              value={vehicle}
              onChange={(e) => update("vehicle", e.target.value)}
            >
              <option value="all">All vehicles</option>
              {vehicles.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>
        )}
        <label>
          <span className="control-label">Date order</span>
          <select
            aria-label="Date order"
            value={order}
            onChange={(e) => update("order", e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>
      <div className="archive-count">
        <p role="status">
          {results.length} {results.length === 1 ? "project" : "projects"}
          {query && ` matching “${query}”`}
          {collection !== "all" && ` / ${collection}`}
          {vehicle !== "all" && ` / ${vehicle}`}
          {milestones.length > 0
            ? ` · ${milestones.length} community milestones`
            : ""}
        </p>
        {hasFilters && (
          <button className="text-link" onClick={() => update("reset", "")}>
            Clear filters ×
          </button>
        )}
      </div>
      {!results.length && (
        <div className="empty-state">
          <h2>No projects match these filters.</h2>
          <p>Try a broader search or clear your filters.</p>
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
          {results.map((p) => (
            <article className="archive-entry" key={p.id}>
              <Link
                href={p.href}
                className="archive-image"
                tabIndex={-1}
                aria-hidden="true"
              >
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
              </Link>
              <div className="entry-copy">
                <div className="entry-meta">
                  <span>{p.dateLabel}</span>
                  <span>
                    {p.vehicle ? (
                      <em>{p.vehicle}</em>
                    ) : (
                      categoryName(p.category)
                    )}
                  </span>
                </div>
                <h2>
                  <Link href={p.href}>
                    {p.title} <span aria-hidden="true">↗</span>
                  </Link>
                </h2>
                <p>{p.summary}</p>
                <div className="entry-actions">
                  <span>
                    {p.capabilities.includes("play")
                      ? "Play & read"
                      : p.capabilities.includes("listen")
                        ? "Score & playback"
                        : p.capabilities.includes("simulate")
                          ? "Explore simulation"
                          : "Read project"}
                  </span>
                  {p.availability === "coming-soon" ? (
                    <span className="status-label">Release pending</span>
                  ) : p.state !== "complete" ? (
                    <span className="status-label">
                      {p.state === "prototype" ? "Prototype" : "In progress"}
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
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
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (key === "reset") {
      ["q", "category", "collection", "vehicle"].forEach((k) => next.delete(k));
    } else if (
      !value ||
      value === "all" ||
      (key === "view" && value === "grid") ||
      (key === "order" && value === "newest")
    )
      next.delete(key);
    else next.set(key, value);
    startTransition(() => {
      const url = `${pathname}${next.size ? `?${next}` : ""}`;
      if (key === "q") window.history.replaceState(null, "", url);
      else router.push(url, { scroll: false });
    });
  }
  return (
    <ArchiveContent
      {...props}
      params={new URLSearchParams(params.toString())}
      update={update}
      pending={pending}
    />
  );
}
