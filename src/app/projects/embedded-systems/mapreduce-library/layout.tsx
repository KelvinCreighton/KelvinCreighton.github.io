import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "MapReduce Library | Kelvin Creighton",
    description:
      "A C MapReduce framework with mapper and reducer callbacks, pthread job scheduling, hash partitioning, and a word count example.",
    url: "/projects/embedded-systems/mapreduce-library",
    type: "article",
  },
  title: "MapReduce Library",
  description:
    "A C MapReduce framework with mapper and reducer callbacks, pthread job scheduling, hash partitioning, and a word count example.",
  alternates: { canonical: "/projects/embedded-systems/mapreduce-library/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="mapreduce-library">{children}</CaseStudyLayout>
  );
}
