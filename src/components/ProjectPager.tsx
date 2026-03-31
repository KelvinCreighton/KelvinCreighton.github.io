"use client";

import Link from "next/link";

import {
  type ProjectNavigationCategory,
  projectNavigationData,
} from "@/components/projectNavigationData";

type ProjectPagerProps = {
  category: ProjectNavigationCategory;
  currentPath: string;
};

export default function ProjectPager({
  category,
  currentPath,
}: ProjectPagerProps) {
  const projects = projectNavigationData[category];
  const currentIndex = projects.findIndex(
    (project) => project.href === currentPath,
  );

  if (currentIndex === -1) {
    return null;
  }

  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <nav
      aria-label="Project navigation"
      className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2"
    >
      {nextProject ? (
        <Link
          href={nextProject.href}
          className="group rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            &larr; Next Project
          </p>
          <p className="mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300">
            {nextProject.title}
          </p>
        </Link>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 opacity-60 dark:border-gray-800 dark:bg-gray-900/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            &larr; Next Project
          </p>
          <p className="mt-2 text-base font-semibold text-gray-500 dark:text-gray-400">
            End of category
          </p>
        </div>
      )}

      {previousProject ? (
        <Link
          href={previousProject.href}
          className="group rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-right transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Previous Project &rarr;
          </p>
          <p className="mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300">
            {previousProject.title}
          </p>
        </Link>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 text-right opacity-60 dark:border-gray-800 dark:bg-gray-900/70">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
            Previous Project &rarr;
          </p>
          <p className="mt-2 text-base font-semibold text-gray-500 dark:text-gray-400">
            Start of category
          </p>
        </div>
      )}
    </nav>
  );
}
