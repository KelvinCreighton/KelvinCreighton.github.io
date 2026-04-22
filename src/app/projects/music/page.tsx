"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MusicProjects() {
  const projects = [
    {
      id: 0,
      title: `BL1ND JUST1C3: 1NV3ST1G4T1ON`,
      date: `2017`,
      description: `A high energy multi-voice piece originally from Homestuck, arranged for piano.`,
      image: `/images/projects/BL1ND_JUST1C3_1NV3ST1G4T1ON.png`,
      link: `/projects/music/blind-justice-investigation`,
      category: "Arrangements",
    },
    {
      id: 1,
      title: `Beethoven Virus`,
      date: `2018`,
      description: `A challenging arrangement of the Beethoven Virus for piano.`,
      image: `/images/projects/Beethoven_Virus.png`,
      link: `/projects/music/beethoven-virus`,
      category: "Arrangements",
    },
    {
      id: 2,
      title: `The Longest Moment Before a New Beginning`,
      date: `October 2019`,
      description: `An original piano composition I wrote in highschool.`,
      image: `/images/projects/The-Longest-Moment-Before-a-New-Beginning.png`,
      link: `/projects/music/the-longest-moment`,
      category: "Original Compositions",
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
        <h1 className="text-4xl font-bold">Music Production</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing original compositions, and arrangments of existing works.
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
              key={project.id}
              className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
                {project.image === "/placeholder.png" ? (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    [Image: {project.id}.png]
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="flex flex-col items-start p-6 flex-grow">
                <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                  {project.date}
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
