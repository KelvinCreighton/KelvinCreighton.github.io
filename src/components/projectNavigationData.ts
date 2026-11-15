import {
  categories,
  projects,
  inCategory,
  type CategoryId,
} from "@/data/projects";
export type ProjectNavigationCategory = CategoryId;
export const projectNavigationData = Object.fromEntries(
  categories.map((c) => [
    c.id,
    projects
      .filter((p) => inCategory(p, c.id))
      .map((p) => ({ href: p.href, title: p.title })),
  ]),
) as Record<CategoryId, { href: string; title: string }[]>;
