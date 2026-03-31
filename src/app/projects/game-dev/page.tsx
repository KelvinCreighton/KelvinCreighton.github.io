"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  defaultProjectTagClassName,
  projectTagClassNames,
} from "@/components/projectTagStyles";

export default function GameDevProjects() {
  const projects = [
    {
      id: 0,
      title: `My First Game`,
      date: `2017`,
      tags: ["platformer", "javascript", "levels", "2d"],
      description: `The first JavaScript game I ever made. It was a simple platformer where the player had to navigate through levels and avoid obstacles. This project was a great learning experience and sparked my passion for game development.`,
      image: `/images/projects/my-first-game.png`,
      link: `/projects/game-dev/my-first-game`,
      category: "2D Games",
    },
    {
      id: 1,
      title: `UFO`,
      date: `2017`,
      tags: ["arcade", "2d", "javascript", "levels"],
      description: `A fun UFO game project. Players control a UFO and navigate through various levels, avoiding enemies. `,
      image: `/images/projects/ufo.png`,
      link: `/projects/game-dev/ufo`,
      category: "2D Games",
    },
    {
      id: 2,
      title: `Tank Game`,
      date: `2018`,
      tags: ["shooter", "tanks", "2d", "javascript"],
      description: `A topdown tank shooter inspired by the classic Tank Trouble game!`,
      image: `/images/projects/tank-game.png`,
      link: `/projects/game-dev/tank-game`,
      category: "2D Games",
    },
    {
      id: 3,
      title: `3D Game Engine`,
      date: `2022`,
      tags: ["engine", "3d", "matrices", "javascript"],
      description: `My first 3D game engine project exploring concepts like projection and rotation using matrix math. This project was a major learning experience in linear algebra and game development, with all code and libraries written by me.`,
      image: `/images/projects/3d-game.png`,
      link: `/projects/game-dev/3d-game`,
      category: "Engines & Simulation",
    },
    {
      id: 4,
      title: `Blackhole Simulator`,
      date: `2022`,
      tags: ["simulation", "physics", "orbit", "javascript"],
      description: `A physics-based orbital mechanics simulator featuring various "satellites" like bananas, pizza, and spaghetti.`,
      image: `/images/projects/Blackhole_Simulator-image.png`,
      link: `/projects/game-dev/blackhole-simulator`,
      category: "Engines & Simulation",
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
        <h1 className="text-4xl font-bold">Game Development</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing interactive experiences, mechanics, and games.
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
