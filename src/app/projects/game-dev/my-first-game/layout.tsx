import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "My First Game | Kelvin Creighton",
    description:
      "My first JavaScript platformer, made in 2017. Move through levels and avoid obstacles.",
    url: "/projects/game-dev/my-first-game",
    type: "article",
  },
  title: "My First Game",
  description:
    "My first JavaScript platformer, made in 2017. Move through levels and avoid obstacles.",
  alternates: { canonical: "/projects/game-dev/my-first-game/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="my-first-game">{children}</CaseStudyLayout>
  );
}
