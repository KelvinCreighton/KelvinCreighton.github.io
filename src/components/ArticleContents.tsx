"use client";
import { useEffect, useRef, useState } from "react";

type Heading = { id: string; text: string; children: { id: string; text: string }[] };

export default function ArticleContents({ projectId }: { projectId: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const [activeSectionId, setActiveSectionId] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const content = document.querySelector<HTMLElement>(".case-content");
    if (!content) return;
    let elements: HTMLElement[] = [];
    let frame = 0;

    const updateActive = () => {
      frame = 0;
      const offset = Math.max(
        120,
        (document.querySelector(".site-header")?.getBoundingClientRect()
          .bottom || 0) + 24,
      );
      const visible = elements.filter((el) => el.getClientRects().length > 0);
      let active: HTMLElement | undefined = visible[0];
      for (const el of visible) {
        if (el.getBoundingClientRect().top <= offset + 1) active = el;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        active = visible.at(-1);
      }
      setActiveId(active?.id || "");
      const section = [...visible].reverse().find((el) => el.tagName === "H2" && el.getBoundingClientRect().top <= offset + 1);
      setActiveSectionId(section?.id || visible.find((el) => el.tagName === "H2")?.id || "");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(updateActive);
    };
    const collect = () => {
      const seen = new Set<string>();
      elements = [...content.querySelectorAll<HTMLElement>("h2, h3")];
      const entries = elements.map((el, index) => {
        const base =
          el.id ||
          el.textContent
            ?.trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") ||
          `section-${index}`;
        let id = base;
        let suffix = 2;
        while (seen.has(id)) id = `${base}-${suffix++}`;
        seen.add(id);
        el.id = id;
        return { id, text: el.textContent?.trim() || "Section", level: el.tagName };
      });
      const list: Heading[] = [];
      for (const entry of entries) {
        if (entry.level === "H2") list.push({ id: entry.id, text: entry.text, children: [] });
        else list.at(-1)?.children.push({ id: entry.id, text: entry.text });
      }
      for (const heading of list) if (heading.children.length < 2) heading.children = [];
      setHeadings((previous) =>
        JSON.stringify(previous) === JSON.stringify(list) ? previous : list,
      );
      schedule();
    };
    collect();
    const observer = new MutationObserver(collect);
    observer.observe(content, { childList: true, subtree: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    content.addEventListener("toggle", schedule, true);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      content.removeEventListener("toggle", schedule, true);
    };
  }, [projectId]);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLElement>('[aria-current="location"]');
    const aside = nav?.closest<HTMLElement>(".case-aside");
    if (!link || !aside || getComputedStyle(aside).position !== "sticky")
      return;
    const bounds = aside.getBoundingClientRect();
    const item = link.getBoundingClientRect();
    if (item.top < bounds.top + 45 || item.bottom > bounds.bottom) {
      aside.scrollTop += item.top - bounds.top - 60;
    }
  }, [activeId]);

  return headings.length > 0 ? (
    <details open>
      <summary>On this page</summary>
      <nav aria-label="On this page" ref={navRef}>
        {headings.map((heading) => (
          <div key={heading.id}>
            <a href={`#${heading.id}`} aria-current={activeId === heading.id ? "location" : undefined} onClick={() => setActiveId(heading.id)}>{heading.text}</a>
            {heading.id === activeSectionId && heading.children.length > 0 && <div className="toc-substeps">{heading.children.map(child => <a key={child.id} href={`#${child.id}`} aria-current={activeId === child.id ? "location" : undefined} onClick={() => setActiveId(child.id)}>{child.text}</a>)}</div>}
          </div>
        ))}
      </nav>
    </details>
  ) : null;
}
