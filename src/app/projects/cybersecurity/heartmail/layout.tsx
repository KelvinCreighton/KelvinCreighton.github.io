import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "HTCOTB2026 CTF: HeartMail 1.0 | Kelvin Creighton",
    description:
      "A custom web CTF challenge featuring basic SQL Injection to uncover hidden emails and an SSH server login to retrieve the final flag.",
    url: "/projects/cybersecurity/heartmail",
    type: "article",
  },
  title: "HTCOTB2026 CTF: HeartMail 1.0",
  description:
    "A custom web CTF challenge featuring basic SQL Injection to uncover hidden emails and an SSH server login to retrieve the final flag.",
  alternates: { canonical: "/projects/cybersecurity/heartmail/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="heartmail">{children}</CaseStudyLayout>;
}
