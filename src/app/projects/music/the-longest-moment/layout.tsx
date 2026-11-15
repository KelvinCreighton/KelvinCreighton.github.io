import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "The Longest Moment Before a New Beginning | Kelvin Creighton",
    description: "An original piano composition I wrote in highschool.",
    url: "/projects/music/the-longest-moment",
    type: "article",
  },
  title: "The Longest Moment Before a New Beginning",
  description: "An original piano composition I wrote in highschool.",
  alternates: { canonical: "/projects/music/the-longest-moment/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="the-longest-moment">{children}</CaseStudyLayout>
  );
}
