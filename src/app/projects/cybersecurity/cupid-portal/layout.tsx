import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "HTCOTB2026 CTF: Cupid's Secret Message | Kelvin Creighton",
    description:
      "A custom Valentines + ILOVEYOU Virus themed CTF web exploitation challenge I developed for the University of Alberta's Cybersecurity Club, showcasing an Insecure Direct Object Reference (IDOR) vulnerability.",
    url: "/projects/cybersecurity/cupid-portal",
    type: "article",
  },
  title: "HTCOTB2026 CTF: Cupid's Secret Message",
  description:
    "A custom Valentines + ILOVEYOU Virus themed CTF web exploitation challenge I developed for the University of Alberta's Cybersecurity Club, showcasing an Insecure Direct Object Reference (IDOR) vulnerability.",
  alternates: { canonical: "/projects/cybersecurity/cupid-portal/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="cupid-portal">{children}</CaseStudyLayout>;
}
