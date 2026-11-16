"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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

const projectTopics: Record<string, string[]> = {
  machineguard: ["ESP32-S3", "Vibration Sensing", "BLE Firmware"],
  "dremel-3d45-rebuild": ["Arduino Mega", "RAMPS", "Marlin", "Motion Control"],
  "file-system-simulator": ["C", "Inodes", "File Allocation", "Defragmentation"],
  "mapreduce-library": ["C", "POSIX Threads", "Thread Pools", "Hash Partitioning"],
  dragonshell: ["C", "Process Control", "Pipes", "Signal Handling"],
  ssti1: ["Jinja2", "Template Injection", "Sandbox Escape", "RCE"],
  "nosql-injection": ["MongoDB", "NoSQL Injection", "Authentication Bypass"],
  eval: ["Python", "Code Injection", "Blacklist Bypass", "RCE"],
  soap: ["XXE", "SOAP", "Local File Inclusion", "XML"],
  "macsync-stealer": ["Static Analysis", "macOS", "Shell Scripts", "Malware"],
  "cupid-portal": ["IDOR", "Web Security", "Routing", "Challenge Design"],
  heartmail: ["SQL Injection", "SSH", "Web Security", "Challenge Design"],
  "wicys-ctf-01": ["Digital Forensics", "Steganography", "PNG", "Binwalk"],
  "wicys-ctf-02": ["Reverse Engineering", "Binary Analysis", "Strings"],
  "wicys-ctf-03": ["Reverse Engineering", "GDB", "Disassembly"],
  "wicys-ctf-04": ["Buffer Overflow", "Binary Exploitation", "Ret2Win"],
  "wicys-ctf-05": ["Heap Exploitation", "Function Pointers", "Memory Safety"],
  "wicys-ctf-06": ["ROP", "Control Flow", "Libc", "Exploit Development"],
  "wicys-ctf-07": ["Client-Side Security", "Source Inspection", "Web"],
  "wicys-ctf-08": ["API Security", "HTTP Headers", "Curl", "Web"],
  "wicys-ctf-09": ["Authentication Bypass", "HTTP Headers", "Web Security"],
  "dremel-3d45": ["Diagnostics", "Disassembly", "3D Printing"],
  "rc-car": ["Mechanical Design", "Electronics", "Prototyping", "Teaching"],
  "robotic-arm-simulation": ["Inverse Kinematics", "Numerical Methods", "MATLAB", "Robotics"],
  "tacoma-valve-cover": ["Engine Repair", "Part Modification", "Leak Diagnosis"],
  "transmission-rebuild": ["Transmission Repair", "Diagnostics", "Assembly"],
  "my-first-game": ["JavaScript", "Level Design", "2D Gameplay"],
  ufo: ["JavaScript", "Movement", "Level Design"],
  "tank-game": ["JavaScript", "2D Gameplay", "Game Logic"],
  "plastic-mind": ["Processing", "p5.js", "Physics", "Game Controls"],
  "3d-game": ["JavaScript", "3D Projection", "Matrix Math"],
  "blackhole-simulator": ["JavaScript", "Orbital Mechanics", "Simulation"],
  "blind-justice-investigation": ["Piano", "Arrangement", "Multi-Voice"],
  "beethoven-virus": ["Piano", "Arrangement"],
  "the-longest-moment": ["Piano", "Composition"],
};

function topicsForProject(id: string) {
  return projectTopics[id] || [];
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
        `${p.title} ${p.summary} ${p.tags.join(" ")} ${p.collection} ${categoryName(p.category)} ${p.contribution} ${p.vehicle || ""}`
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
  return (
    <div className="archive" aria-busy={pending}>
      <div className="archive-topline">
        <div className="view-controls" role="group" aria-label="Archive view">
          {["grid", "list"].map((v) => (
            <button
              key={v}
              aria-pressed={view === v}
              onClick={() => update("view", v)}
            >
              {v === "grid" ? "Gallery" : "Index"}
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
        <p role="status">
          {results.length} {results.length === 1 ? "project" : "projects"}
          {query && ` matching “${query}”`}
          {collection !== "all" && ` / ${collection}`}
          {vehicle !== "all" && ` / ${vehicle}`}
          {milestones.length > 0
            ? ` · ${milestones.length} community milestones`
            : ""}
        </p>
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
              <Link href={p.href} className="archive-entry-link">
                <div className="archive-image">
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
                    <span>
                      {p.vehicle ? (
                        <em>{p.vehicle}</em>
                      ) : (
                        categoryName(p.category)
                      )}
                    </span>
                  </div>
                  <h2>{p.title}</h2>
                  <p>{p.summary}</p>
                  <ProjectTopicList topics={topicsForProject(p.id)} />
                </div>
              </Link>
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
  const initialSearchParams = useSearchParams();
  const linkedCategory = initialSearchParams.get("category");
  const [params, setParams] = useState(
    () => {
      const initial = new URLSearchParams(initialSearchParams.toString());
      if (!initial.has("category") && props.fixedCategory)
        initial.set("category", props.fixedCategory);
      return initial;
    },
  );
  useEffect(() => {
    if (!linkedCategory) return;
    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete("category");
    window.history.replaceState(null, "", cleanUrl);
  }, [linkedCategory]);
  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString());
    if (key === "reset") {
      ["q", "category", "collection", "vehicle"].forEach((k) => next.delete(k));
    } else if (key === "category") {
      next.delete("category");
      if (value === "all") {
        if (props.fixedCategory) next.set("category", "all");
      } else {
        next.set("category", value);
      }
      next.delete("collection");
      next.delete("vehicle");
    } else if (
      !value ||
      value === "all" ||
      (key === "view" && value === "grid") ||
      (key === "order" && value === "newest")
    )
      next.delete(key);
    else next.set(key, value);
    setParams(next);
  }
  return (
    <ArchiveContent
      {...props}
      params={params}
      update={update}
    />
  );
}
