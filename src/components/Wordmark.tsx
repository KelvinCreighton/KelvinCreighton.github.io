"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function readScrollPosition() {
  const marker = document.getElementById("page-top-marker");
  if (marker) return Math.max(0, -marker.getBoundingClientRect().top);
  return Math.max(window.scrollY, document.documentElement.scrollTop);
}

// Keep the wordmark available only at the very top of the page. It should not
// reappear during ordinary upward scrolling farther down the page.
const WORDMARK_FADE_DISTANCE = 80;

function opacityAtScrollPosition(scrollY: number) {
  return Math.max(0, Math.min(1, 1 - scrollY / WORDMARK_FADE_DISTANCE));
}

export function Wordmark() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let frame: number | null = null;

    function handleScroll() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        setOpacity(opacityAtScrollPosition(readScrollPosition()));
        frame = null;
      });
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll, true);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Link
      href="/"
      className="wordmark"
      aria-label="Kelvin Creighton, home"
      style={{ opacity, pointerEvents: opacity < 0.02 ? "none" : "auto" }}
    >
      <span className="wordmark-name">Kelvin Creighton</span>
    </Link>
  );
}
