"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function readScrollPosition() {
  return Math.max(window.scrollY, document.documentElement.scrollTop);
}

export function Wordmark() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let previousY = readScrollPosition();
    let currentOpacity = 1;
    let frame: number | null = null;

    function handleScroll() {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        const currentY = readScrollPosition();
        const delta = currentY - previousY;

        if (delta !== 0) {
          currentOpacity = Math.max(0, Math.min(1, currentOpacity - delta / 320));
        }

        setOpacity(currentOpacity);
        previousY = currentY;
        frame = null;
      });
    }

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
      onFocus={() => setOpacity(1)}
    >
      <span className="wordmark-name">Kelvin Creighton</span>
    </Link>
  );
}
