"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "@/components/BlurImage";

export default function EmbeddedSystemsProjects() {
  const projects = [
    {
      id: 2,
      title: "Dremel DigiLab 3D45 - Controller Rebuild",
      date: "May 2026 - July 2026",
      description:
        "Rebuilding a Dremel DigiLab 3D45 after a fried motherboard using an Arduino Mega 2560, RAMPS 1.4, and salvage parts from another printer.",
      image: "/images/projects/dremel-3d45-rebuild-title.webp",
      imageAlt: "Dremel DigiLab 3D45 controller rebuild",
      href: "/projects/engineering/dremel-3d45-rebuild",
      category: "3D Printers",
      isInProgress: true,
    },
    {
      id: 1,
      title: "File System Simulator",
      date: "November–December 2024",
      description:
        "A C simulator for disk images with 128 blocks of 1 KiB each, using fixed size inodes, nested directories, contiguous file allocation, resizing, and defragmentation.",
      image: "/images/projects/file-system-simulator.svg",
      imageAlt: "Diagram of the simulator's superblock, inode table, allocation map, and data blocks",
      href: "/projects/embedded-systems/file-system-simulator",
      category: "CMPUT 379: Operating Systems",
      isInProgress: false,
    },
    {
      id: 0,
      title: "DragonShell",
      date: "September 2024",
      description:
        "A C shell for CMPUT 379, with process execution, pipes, redirection, background process handling, signals, and CPU reporting for child processes.",
      image: "/images/projects/dragonshell-terminal.svg",
      imageAlt: "DragonShell terminal illustration with the original project banner",
      href: "/projects/embedded-systems/dragonshell",
      category: "CMPUT 379: Operating Systems",
      isInProgress: false,
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
  const [selectedCategory, setSelectedCategory] = useState("All");

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
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Embedded Systems</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Microcontrollers, hardware interfaces, and the software that brings them to life.
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
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${isActive
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
            href={project.href}
            key={project.id}
            className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-85 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-full aspect-video relative bg-gray-85 dark:bg-gray-800">
              {project.isInProgress && (
                <div className="absolute left-3 top-3 z-10 rounded-full border border-red-900 bg-red-800/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm dark:border-red-500/40 dark:bg-red-900/90 dark:text-red-100">
                  In Progress
                </div>
              )}
              <Image
                src={project.image}
                alt={project.imageAlt}
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
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
