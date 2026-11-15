import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "PicoCTF: No Sql Injection | Kelvin Creighton",
    description:
      "A write-up on exploiting a NoSQL injection vulnerability in a MongoDB-backed Express application to bypass authentication.",
    url: "/projects/cybersecurity/nosql-injection",
    type: "article",
  },
  title: "PicoCTF: No Sql Injection",
  description:
    "A write-up on exploiting a NoSQL injection vulnerability in a MongoDB-backed Express application to bypass authentication.",
  alternates: { canonical: "/projects/cybersecurity/nosql-injection/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="nosql-injection">{children}</CaseStudyLayout>
  );
}
