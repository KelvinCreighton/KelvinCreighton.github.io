"use client";
import { useEffect, useState } from "react";
export default function ArticleContents({ projectId }: { projectId: string }) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  useEffect(() => {
    const seen = new Set<string>();
    const list = [
      ...document.querySelectorAll<HTMLElement>(".case-content h2"),
    ].map((el, i) => {
      const base =
        el.id ||
        el.textContent
          ?.trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "") ||
        `section-${i}`;
      let id = base;
      let n = 2;
      while (seen.has(id)) id = `${base}-${n++}`;
      seen.add(id);
      el.id = id;
      return { id, text: el.textContent?.trim() || "Section" };
    });
    setHeadings(list);
  }, [projectId]);
  return headings.length > 0 ? (
    <details open>
      <summary>On this page</summary>
      <nav aria-label="Contents">
        {headings.map((h) => (
          <a key={h.id} href={`#${h.id}`}>
            {h.text}
          </a>
        ))}
      </nav>
    </details>
  ) : (
    <p>Project notes</p>
  );
}
