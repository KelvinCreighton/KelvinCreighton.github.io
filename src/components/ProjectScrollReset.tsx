"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/** Keep project pages anchored at the start on entry and client navigation. */
export default function ProjectScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!pathname.startsWith("/projects/") || window.location.hash) return;

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    // Next.js and the browser can apply their saved position after the route
    // commits, so reassert the top on the next frame as well.
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      root.style.scrollBehavior = previousBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [pathname]);

  return null;
}
