"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  defaultProjectTagClassName,
  projectTagClassNames,
} from "@/components/projectTagStyles";

type CybersecurityProjectsClientProps = {
  initialCategory: string;
};

export default function CybersecurityProjectsClient({
  initialCategory,
}: CybersecurityProjectsClientProps) {
  const searchParams = useSearchParams();
  const projects = [
    {
      id: 0,
      slug: "ssti1",
      title: "PicoCTF: SSTI1",
      date: "September 2025",
      tags: ["web", "ssti", "jinja2", "rce"],
      description:
        "A walkthrough of a Server-Side Template Injection in Jinja2, escaping the sandbox to achieve Remote Code Execution.",
      image: "/images/projects/picoCTF_logo.png",
      link: "/projects/cybersecurity/ssti1",
      category: "PicoCTF Writeups",
    },
    {
      id: 1,
      slug: "nosql-injection",
      title: "PicoCTF: No Sql Injection",
      date: "September 2025",
      tags: ["web", "nosql", "mongodb", "auth-bypass"],
      description:
        "A write-up on exploiting a NoSQL injection vulnerability in a MongoDB-backed Express application to bypass authentication.",
      image: "/images/projects/picoCTF_logo.png",
      link: "/projects/cybersecurity/nosql-injection",
      category: "PicoCTF Writeups",
    },
    {
      id: 2,
      slug: "eval",
      title: "PicoCTF: 3v@l",
      date: "September 2025",
      tags: ["web", "eval", "python", "rce"],
      description:
        "Exploiting a Python eval() vulnerability by bypassing regex blacklists to achieve Remote Code Execution.",
      image: "/images/projects/picoCTF_logo.png",
      link: "/projects/cybersecurity/eval",
      category: "PicoCTF Writeups",
    },
    {
      id: 3,
      slug: "soap",
      title: "PicoCTF: SOAP",
      date: "October 2025",
      tags: ["web", "xxe", "soap", "lfi"],
      description:
        "A write-up on exploiting an XML External Entity (XXE) vulnerability through a SOAP endpoint to perform Local File Inclusion.",
      image: "/images/projects/picoCTF_logo.png",
      link: "/projects/cybersecurity/soap",
      category: "PicoCTF Writeups",
    },
    {
      id: 4,
      slug: "cupid-portal",
      title: "HTCOTB2026 CTF: Cupid's Secret Message",
      date: "February 2026",
      isInProgress: true,
      tags: ["web", "idor", "routing", "messages"],
      description:
        "A custom Valentines + ILOVEYOU Virus themed CTF web exploitation challenge I developed for the University of Alberta's Cybersecurity Club, showcasing an Insecure Direct Object Reference (IDOR) vulnerability.",
      image: "/images/projects/CHADS_logo.png",
      link: "/projects/cybersecurity/cupid-portal",
      category: "HTCOTB CTF",
    },
    {
      id: 5,
      slug: "heartmail",
      title: "HTCOTB2026 CTF: HeartMail 1.0",
      date: "February 2026",
      isInProgress: true,
      tags: ["web", "sqli", "ssh", "mail"],
      description:
        "A custom web CTF challenge featuring basic SQL Injection to uncover hidden emails and an SSH server login to retrieve the final flag.",
      image: "/images/projects/CHADS_logo.png",
      link: "/projects/cybersecurity/heartmail",
      category: "HTCOTB CTF",
    },
    {
      id: 6,
      slug: "wicys-ctf-01",
      title: "WICYS CTF: Bunny Tracker Glitch 🟩",
      date: "March 2026",
      tags: ["forensics", "png", "binwalk", "steg"],
      description:
        "A forensic challenge involving a suspicious 1x1 PNG that clearly contains more than it first appears to.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-01",
      category: "WICYS CTF",
    },
    {
      id: 7,
      slug: "wicys-ctf-02",
      title: "WICYS CTF: Luck Checker 🍀",
      date: "March 2026",
      tags: ["rev", "binary", "strings", "easy"],
      description:
        "A beginner reversing challenge built around a suspicious binary that guards Heap MacCipher's so-called luck engine.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-02",
      category: "WICYS CTF",
    },
    {
      id: 8,
      slug: "wicys-ctf-03",
      title: "WICYS CTF: Bunny Network - Portal Override 🐇🌐",
      date: "March 2026",
      tags: ["rev", "binary", "gdb", "objdump"],
      description:
        "A reversing challenge in which an emergency portal binary must be understood before the Bunny Network can be restored.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-03",
      category: "WICYS CTF",
    },
    {
      id: 9,
      slug: "wicys-ctf-04",
      title: "WICYS CTF: Bunny Overflow 🐇",
      date: "March 2026",
      isInProgress: true,
      tags: ["pwn", "buffer-overflow", "ret2win", "binary"],
      description:
        "A classic binary exploitation challenge centered on a vulnerable authorization flow inside the Bunny Network gateway.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-04",
      category: "WICYS CTF",
    },
    {
      id: 10,
      slug: "wicys-ctf-05",
      title: "WICYS CTF: Rainbow Vault Overflow 🌈🔒",
      date: "March 2026",
      isInProgress: true,
      tags: ["pwn", "heap", "overflow", "function-pointer"],
      description:
        "A heap-focused exploitation challenge hidden behind the deceptively simple Rainbow Vault access portal.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-05",
      category: "WICYS CTF",
    },
    {
      id: 11,
      slug: "wicys-ctf-06",
      title: "WICYS CTF: ROP Around the Rainbow 🌈🐇",
      date: "March 2026",
      isInProgress: true,
      tags: ["pwn", "rop", "libc", "shell"],
      description:
        "An advanced control-flow hijacking challenge where small internal fragments must be chained into a full exploit.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-06",
      category: "WICYS CTF",
    },
    {
      id: 12,
      slug: "wicys-ctf-07",
      title: "WICYS CTF: Scavenger Hunt 🔎🥚",
      date: "March 2026",
      isInProgress: true,
      tags: ["web", "source", "html", "client-side"],
      description:
        "A web challenge that rewards careful inspection of the client-side application and MacCipher's hidden notes.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-07",
      category: "WICYS CTF",
    },
    {
      id: 13,
      slug: "wicys-ctf-08",
      title: "WICYS CTF: Bunny Network API Override 🐇🌐",
      date: "March 2026",
      isInProgress: true,
      tags: ["web", "api", "headers", "curl"],
      description:
        "A web challenge involving a hijacked API, a hidden override path, and a response that says more than the page shows.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-08",
      category: "WICYS CTF",
    },
    {
      id: 14,
      slug: "wicys-ctf-09",
      title: "WICYS CTF: Leprechauns Vault 🍀🔒",
      date: "March 2026",
      isInProgress: true,
      tags: ["web", "auth-bypass", "headers", "login"],
      description:
        "A web challenge centered on a secret vault login, a known employee email, and a developer backdoor left behind in the app.",
      image: "/images/projects/WICYS_logo.png",
      link: "/projects/cybersecurity/wicys-ctf-09",
      category: "WICYS CTF",
    },
  ];
  const categories = [
    "All",
    "Oldest",
    ...new Set(
      [...projects]
        .sort((a, b) => b.id - a.id)
        .map((project) => project.category),
    ),
  ];
  const sanitizedInitialCategory = categories.includes(initialCategory)
    ? initialCategory
    : "All";
  const requestedCategory = searchParams.get("category");
  const resolvedInitialCategory =
    requestedCategory && categories.includes(requestedCategory)
      ? requestedCategory
      : sanitizedInitialCategory;
  const [selectedCategory, setSelectedCategory] = useState(
    resolvedInitialCategory,
  );

  const filteredProjects = [...projects]
    .sort((a, b) =>
      selectedCategory === "Oldest" ? a.id - b.id : b.id - a.id,
    )
    .filter(
      (project) =>
        selectedCategory === "All" ||
        selectedCategory === "Oldest" ||
        project.category === selectedCategory,
    );

  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Cybersecurity</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing web exploitation writeups and challenges I personally
          created.
        </p>
        <div className="mt-8 flex w-full flex-col items-start gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Category
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {filteredProjects.map((project, i) => (
          <Link
            href={project.link}
            key={project.slug}
            className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
              {project.isInProgress && (
                <div className="absolute left-3 top-3 z-10 rounded-full border border-red-900 bg-red-800/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm dark:border-red-500/40 dark:bg-red-900/90 dark:text-red-100">
                  In Progress
                </div>
              )}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-6 flex-grow w-full">
              <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                {project.date}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 flex-grow">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.slug}-${tag}`}
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                      projectTagClassNames[tag] ?? defaultProjectTagClassName
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
