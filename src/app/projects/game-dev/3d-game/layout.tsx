import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "3D Game Engine | Kelvin Creighton",
    description:
      "A small 3D engine exploring projection and rotation through matrix mathematics.",
    url: "/projects/game-dev/3d-game",
    type: "article",
  },
  title: "3D Game Engine",
  description:
    "A small 3D engine exploring projection and rotation through matrix mathematics.",
  alternates: { canonical: "/projects/game-dev/3d-game/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="3d-game">{children}</CaseStudyLayout>;
}
