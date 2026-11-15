import Link from "next/link";
import {
  projectNavigationData,
  type ProjectNavigationCategory,
} from "@/components/projectNavigationData";
export default function ProjectPager({
  category,
  currentPath,
}: {
  category: ProjectNavigationCategory;
  currentPath: string;
}) {
  const items = projectNavigationData[category];
  const index = items.findIndex((p) => p.href === currentPath);
  if (index < 0) return null;
  return (
    <nav className="related-work" aria-label="Adjacent projects">
      <div>
        {[items[index - 1], items[index + 1]].map((p, i) =>
          p ? (
            <Link key={p.href} href={p.href}>
              <span>{i === 0 ? "Previous project" : "Next project"}</span>
              <h2>{p.title} →</h2>
            </Link>
          ) : null,
        )}
      </div>
    </nav>
  );
}
