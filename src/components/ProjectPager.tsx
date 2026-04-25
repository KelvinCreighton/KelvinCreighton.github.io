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

  const containerClasses = "group rounded-2xl border border-gray-200 bg-gray-85 px-5 py-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30";

  const disabledClasses = "rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 opacity-60 dark:border-gray-800 dark:bg-gray-900/70";

  const labelClasses = "text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400";

  const titleClasses = "mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300";

  const disabledTitleClasses = "mt-2 text-base font-semibold text-gray-500 dark:text-gray-400";

  return (
    <nav
      aria-label="Project navigation"
      className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2"
    >
      {nextProject ? (
        <Link href={nextProject.href} className={containerClasses}>
          <p className={labelClasses}>&larr; Next Project</p>
          <p className={titleClasses}>{nextProject.title}</p>
        </Link>
      ) : (
        <div className={disabledClasses}>
          <p className={labelClasses}>&larr; Next Project</p>
          <p className={disabledTitleClasses}>End of category</p>
        </div>
      )}

      {previousProject ? (
        <Link
          href={previousProject.href}
          className={`${containerClasses} text-right`}
        >
          <p className={labelClasses}>Previous Project &rarr;</p>
          <p className={titleClasses}>{previousProject.title}</p>
        </Link>
      ) : (
        <div className={`${disabledClasses} text-right`}>
          <p className={labelClasses}>Previous Project &rarr;</p>
          <p className={disabledTitleClasses}>Start of category</p>
        </div>
      )}
    </nav>
  );
}
