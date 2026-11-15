import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "UFO | Kelvin Creighton",
    description:
      "An early arcade game built around movement, enemies, and a sequence of levels.",
    url: "/projects/game-dev/ufo",
    type: "article",
  },
  title: "UFO",
  description:
    "An early arcade game built around movement, enemies, and a sequence of levels.",
  alternates: { canonical: "/projects/game-dev/ufo/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="ufo">{children}</CaseStudyLayout>;
}
