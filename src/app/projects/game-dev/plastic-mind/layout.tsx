import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Plastic Mind | Kelvin Creighton",
    description:
      "A physics platformer with directional powers and changing controls. Ported from my original Processing project to p5.js.",
    url: "/projects/game-dev/plastic-mind",
    type: "article",
  },
  title: "Plastic Mind",
  description:
    "A physics platformer with directional powers and changing controls. Ported from my original Processing project to p5.js.",
  alternates: { canonical: "/projects/game-dev/plastic-mind/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="plastic-mind">{children}</CaseStudyLayout>;
}
