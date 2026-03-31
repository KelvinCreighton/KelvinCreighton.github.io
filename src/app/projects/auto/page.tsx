"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  defaultProjectTagClassName,
  projectTagClassNames,
} from "@/components/projectTagStyles";

export default function AutoProjects() {
  const projects = [
    {
      id: 1,
      title: "Manual Transmission Rebuild (1989 Honda Accord)",
      date: "August 2025",
      tags: [
        "rebuild",
        "transmission",
        "alternator",
        "starter",
        "axle",
        "clutch",
        "drivetrain",
      ],
      description:
        "What started as a simple alternator replacement turned into a full manual transmission rebuild. This project documents the process and the challenges that came with it.",
      image: "/images/projects/transmission-title.jpg",
      link: "/projects/auto/transmission-rebuild",
      category: "Drivetrain Repair",
    },
  ];
  const categories = [
    "All",
    "Oldest",
    ...new Set([...projects].sort((a, b) => b.id - a.id).map((project) => project.category)),
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
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Automotive Repair &amp; Maintenance</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing auto repair, maintenance, and modification projects.
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
            href={project.link}
            key={project.id}
            className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
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
                    key={`${project.title}-${tag}`}
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${projectTagClassNames[tag] ?? defaultProjectTagClassName}`}
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
