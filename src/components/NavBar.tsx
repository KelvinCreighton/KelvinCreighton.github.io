"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Leadership", href: "/events" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-10 text-[18.4px] font-medium flex-wrap">
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

      {/* Mobile Toggle Button */}
      <button 
        className="md:hidden p-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-48 bg-[#f5f3ff] dark:bg-[#080413] rounded-xl shadow-xl border border-[#8b5cf6]/20 dark:border-[#4c1d95]/40 md:hidden flex flex-col p-2 overflow-hidden z-50">
          <ul className="flex flex-col text-[16.1px] font-medium">
            {links.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        : "hover:bg-gray-500/10 hover:text-blue-500 dark:hover:text-blue-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
