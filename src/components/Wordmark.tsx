"use client";

import Link from "next/link";
import { useEffect } from "react";

function readScrollPosition() {
  const marker = document.getElementById("page-top-marker");
  if (marker) return Math.max(0, -marker.getBoundingClientRect().top);
  return Math.max(window.scrollY, document.documentElement.scrollTop);
}

/**
 * The wordmark stays visible as the way home. It also owns the header's one
 * piece of scroll state: once the page moves, the sticky header gains a solid
 * backing so the navigation stays readable over content.
 */
export function Wordmark() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    let frame: number | null = null;

    function update() {
      frame = null;
      header!.dataset.scrolled = readScrollPosition() > 8 ? "true" : "false";
    }
    function handleScroll() {
      if (frame === null) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, true);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Link href="/" className="wordmark" aria-label="Kelvin Creighton, home">
      <span className="wordmark-name">Kelvin Creighton</span>
    </Link>
  );
}
