import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "PicoCTF: SSTI1 | Kelvin Creighton",
    description:
      "A walkthrough of a Server-Side Template Injection in Jinja2, escaping the sandbox to achieve Remote Code Execution.",
    url: "/projects/cybersecurity/ssti1",
    type: "article",
  },
  title: "PicoCTF: SSTI1",
  description:
    "A walkthrough of a Server-Side Template Injection in Jinja2, escaping the sandbox to achieve Remote Code Execution.",
  alternates: { canonical: "/projects/cybersecurity/ssti1/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="ssti1">{children}</CaseStudyLayout>;
}
