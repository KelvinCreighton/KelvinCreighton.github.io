import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Blackhole Simulator | Kelvin Creighton",
    description:
      'A physics-based orbital mechanics simulator featuring various "satellites" like bananas, pizza, and spaghetti.',
    url: "/projects/game-dev/blackhole-simulator",
    type: "article",
  },
  title: "Blackhole Simulator",
  description:
    'A physics-based orbital mechanics simulator featuring various "satellites" like bananas, pizza, and spaghetti.',
  alternates: { canonical: "/projects/game-dev/blackhole-simulator/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="blackhole-simulator">
      {children}
    </CaseStudyLayout>
  );
}
