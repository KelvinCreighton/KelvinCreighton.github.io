"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
  { name: "Leadership", href: "/events" },
  { name: "Resume", href: "/resume" },
];
export function NavBar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    function key(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    }
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  return (
    <div ref={ref} className="navigation">
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={path.startsWith(l.href) ? "page" : undefined}
          >
            {l.name}
          </Link>
        ))}
      </nav>
      <ThemeToggle />
      <button
        ref={button}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={path.startsWith(l.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.name}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
