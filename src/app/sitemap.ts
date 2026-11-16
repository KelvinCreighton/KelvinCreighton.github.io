import type { MetadataRoute } from "next";
import { projects, categories } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/resume",
    "/community",
    "/achievements",
    ...categories.map((c) => `/projects/${c.id}`),
    ...projects.map((p) => p.href),
  ];
  return [...new Set(routes)].map((route) => ({
    url: `https://kelvincreighton.ca${route}/`,
    priority: route === "" ? 1 : 0.7,
  }));
}
