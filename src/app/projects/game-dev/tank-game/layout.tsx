import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Tank Game | Kelvin Creighton",
    description:
      "A topdown tank shooter inspired by the classic Tank Trouble game!",
    url: "/projects/game-dev/tank-game",
    type: "article",
  },
  title: "Tank Game",
  description:
    "A topdown tank shooter inspired by the classic Tank Trouble game!",
  alternates: { canonical: "/projects/game-dev/tank-game/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="tank-game">{children}</CaseStudyLayout>;
}
