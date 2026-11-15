import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "PicoCTF: SOAP | Kelvin Creighton",
    description:
      "A write-up on exploiting an XML External Entity (XXE) vulnerability through a SOAP endpoint to perform Local File Inclusion.",
    url: "/projects/cybersecurity/soap",
    type: "article",
  },
  title: "PicoCTF: SOAP",
  description:
    "A write-up on exploiting an XML External Entity (XXE) vulnerability through a SOAP endpoint to perform Local File Inclusion.",
  alternates: { canonical: "/projects/cybersecurity/soap/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="soap">{children}</CaseStudyLayout>;
}
