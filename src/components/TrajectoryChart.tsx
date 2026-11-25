"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, projects, inCategory, type CategoryId } from "@/data/projects";

/*
 * Projects over time, one row per discipline. Each pulse is a project placed
 * by its date, so the chart shows how the work has moved. Everything comes
 * from the project registry and stays accurate as projects are added.
 */

const W = 1000;
const HIGH = 4;
const LOW = 28;
const PULSE = 8;

const time = (d: string) => new Date(`${d}T00:00:00Z`).getTime();
const years = projects.map((p) => Number(p.sortDate.slice(0, 4)));
const firstYear = Math.min(...years);
const lastYear = Math.max(...years);
const t0 = time(`${firstYear}-01-01`);
const t1 = time(`${lastYear + 1}-01-01`);
const x = (d: string) => ((time(d) - t0) / (t1 - t0)) * W;
const axis = Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i);

type Span = { from: number; to: number; items: { title: string; href: string; date: string }[] };

function channel(id: CategoryId) {
  const members = projects
    .filter((p) => inCategory(p, id))
    .sort((a, b) => a.sortDate.localeCompare(b.sortDate));
  const spans: Span[] = [];
  for (const p of members) {
    const from = Math.max(0, Math.min(W - PULSE, x(p.sortDate) - PULSE / 2));
    const last = spans.at(-1);
    const item = { title: p.title, href: p.href, date: p.dateLabel };
    if (last && from <= last.to + 3) {
      last.to = Math.max(last.to, from + PULSE);
      last.items.push(item);
    } else {
      spans.push({ from, to: from + PULSE, items: [item] });
    }
  }
  let d = `M0 ${LOW}`;
  for (const s of spans) d += ` H${s.from.toFixed(1)} V${HIGH} H${s.to.toFixed(1)} V${LOW}`;
  d += ` H${W}`;
  const ys = members.map((p) => Number(p.sortDate.slice(0, 4)));
  return {
    count: members.length,
    spans,
    d,
    first: Math.min(...ys),
    last: Math.max(...ys),
    mean: ys.reduce((a, b) => a + b, 0) / ys.length,
  };
}

const rows = categories.map((c) => ({ ...c, ...channel(c.id) }));

// A one-line reading of the chart, derived from the same data.
const byStart = [...rows].sort((a, b) => a.first - b.first || a.mean - b.mean);
const byRecency = [...rows].sort((a, b) => b.mean - a.mean);
const list = (r: typeof rows) => {
  const names = r.map((c) => c.title.toLowerCase());
  return names.length > 2
    ? `${names.slice(0, -1).join(", ")}, and ${names.at(-1)}`
    : names.join(" and ");
};
const summary = `It started with ${list(byStart.slice(0, 2))} in ${firstYear}. Since then the work has moved toward ${list(byRecency.slice(0, 3))}. Hover over a pulse to see the project.`;

export default function TrajectoryChart() {
  const [hover, setHover] = useState<{ row: string; span: Span; left: number } | null>(null);

  return (
    <figure className="trajectory" aria-labelledby="trajectory-title">
      <figcaption className="trajectory-caption">
        <h2 id="trajectory-title">Where the work has been heading</h2>
        <p>{summary}</p>
      </figcaption>
      <div className="trajectory-panel" onPointerLeave={() => setHover(null)}>
        <ul className="trajectory-rows">
          {rows.map((r) => (
            <li key={r.id} data-active={hover?.row === r.id || undefined}>
              <Link
                href={`/projects?category=${r.id}`}
                className="trajectory-row"
                aria-label={`${r.title}: ${r.count} projects, ${r.first === r.last ? r.first : `${r.first} to ${r.last}`}`}
              >
                <span className="trajectory-label">{r.title}</span>
                <span className="trajectory-trace" aria-hidden="true">
                  <svg viewBox={`0 0 ${W} 32`} preserveAspectRatio="none">
                    {r.spans.map((s) => (
                      <rect
                        key={s.from}
                        x={s.from - 4}
                        y={0}
                        width={s.to - s.from + 8}
                        height={32}
                        className="trajectory-hit"
                        data-on={hover?.span === s || undefined}
                        onPointerEnter={() =>
                          setHover({ row: r.id, span: s, left: ((s.from + s.to) / 2 / W) * 100 })
                        }
                      />
                    ))}
                    {r.spans.map((s) => (
                      <rect
                        key={`f${s.from}`}
                        x={s.from}
                        y={HIGH}
                        width={s.to - s.from}
                        height={LOW - HIGH}
                        className="trajectory-fill"
                        data-on={hover?.span === s || undefined}
                      />
                    ))}
                    <path d={r.d} className="trajectory-line" />
                  </svg>
                  {hover?.row === r.id && (
                    <span
                      className="trajectory-tip"
                      style={{ left: `${hover.left}%` }}
                      data-edge={hover.left > 70 ? "end" : hover.left < 20 ? "start" : undefined}
                    >
                      {hover.span.items.slice(0, 4).map((i) => (
                        <span key={i.href}>
                          <strong>{i.title}</strong>
                          <span>{i.date}</span>
                        </span>
                      ))}
                      {hover.span.items.length > 4 && (
                        <span className="trajectory-more">
                          and {hover.span.items.length - 4} more
                        </span>
                      )}
                    </span>
                  )}
                </span>
                <span className="trajectory-count">{r.count}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="trajectory-axis" aria-hidden="true">
          <span />
          <span className="trajectory-years">
            {axis.map((y) => (
              <span key={y} style={{ left: `${(x(`${y}-01-01`) / W) * 100}%` }}>
                {y}
              </span>
            ))}
          </span>
          <span />
        </div>
      </div>
    </figure>
  );
}
