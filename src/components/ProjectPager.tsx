"use client";

import Link from "next/link";

import {
  type ProjectNavigationCategory,
  projectNavigationData,
} from "@/components/projectNavigationData";

type ProjectPagerProps = {
  category: ProjectNavigationCategory;
  currentPath: string;
  variant?: "normal" | "cyber";
};

export default function ProjectPager({
  category,
  currentPath,
  variant = "normal",
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

  const isCyber = variant === "cyber";

  const containerClasses = isCyber
    ? "cyber-pager-item group flex flex-col justify-center rounded-2xl border border-[#2a6080] bg-[#162838] transition-all hover:bg-[#1e344a] hover:border-[#40f0ff] w-full"
    : "group rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30";

  const disabledClasses = isCyber
    ? "cyber-pager-item flex flex-col justify-center rounded-2xl border border-dashed border-[#2a6080]/50 bg-[#162838]/50 opacity-60 w-full"
    : "rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 opacity-60 dark:border-gray-800 dark:bg-gray-900/70";

  const labelClasses = isCyber
    ? "text-[11px] font-bold uppercase tracking-[0.25em] text-[#40f0ff]"
    : "text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400";

  const titleClasses = isCyber
    ? "mt-2 text-lg font-black text-white leading-tight transition-colors group-hover:text-[#40f0ff]"
    : "mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300";

  const disabledTitleClasses = isCyber
    ? "mt-2 text-lg font-black text-[#2a6080] leading-tight"
    : "mt-2 text-base font-semibold text-gray-500 dark:text-gray-400";

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
