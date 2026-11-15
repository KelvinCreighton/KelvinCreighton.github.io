import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Beethoven Virus | Kelvin Creighton",
    description: "A challenging arrangement of the Beethoven Virus for piano.",
    url: "/projects/music/beethoven-virus",
    type: "article",
  },
  title: "Beethoven Virus",
  description: "A challenging arrangement of the Beethoven Virus for piano.",
  alternates: { canonical: "/projects/music/beethoven-virus/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="beethoven-virus">{children}</CaseStudyLayout>
  );
}
