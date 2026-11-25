"use client";

import { useEffect } from "react";

const CARDS = ".project-card, .related-work a";

/**
 * Tells the card under the pointer where the pointer is, as --mx and --my,
 * so its glow can follow it. One passive listener for the
 * whole site; touch and keyboard visitors keep the static hover styles.
 */
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;

    function apply() {
      frame = 0;
      if (!last) return;
      const card = (last.target as Element | null)?.closest<HTMLElement>(CARDS);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${last.clientX - r.left}px`);
      card.style.setProperty("--my", `${last.clientY - r.top}px`);
    }
    function move(e: PointerEvent) {
      last = e;
      if (!frame) frame = requestAnimationFrame(apply);
    }

    document.addEventListener("pointermove", move, { passive: true });
    return () => {
      document.removeEventListener("pointermove", move);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
