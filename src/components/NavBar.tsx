"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <ul className="flex space-x-6 md:space-x-10 text-sm md:text-base font-medium flex-wrap">
      {links.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`transition-all duration-300 ${
                isActive
                  ? "text-blue-600 dark:text-blue-400 [text-shadow:0_0_12px_rgba(59,130,246,0.5)] dark:[text-shadow:0_0_12px_rgba(56,189,248,0.7)]"
                  : "hover:text-blue-500 dark:hover:text-blue-300 hover:[text-shadow:0_0_10px_rgba(59,130,246,0.4)] dark:hover:[text-shadow:0_0_10px_rgba(56,189,248,0.5)]"
              }`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
