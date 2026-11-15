import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "PicoCTF: 3v@l | Kelvin Creighton",
    description:
      "Exploiting a Python eval() vulnerability by bypassing regex blacklists to achieve Remote Code Execution.",
    url: "/projects/cybersecurity/eval",
    type: "article",
  },
  title: "PicoCTF: 3v@l",
  description:
    "Exploiting a Python eval() vulnerability by bypassing regex blacklists to achieve Remote Code Execution.",
  alternates: { canonical: "/projects/cybersecurity/eval/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="eval">{children}</CaseStudyLayout>;
}
