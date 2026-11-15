import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Bunny Tracker Glitch | Kelvin Creighton",
    description:
      "A forensic challenge involving a suspicious 1x1 PNG that clearly contains more than it first appears to.",
    url: "/projects/cybersecurity/wicys-ctf-01",
    type: "article",
  },
  title: "WiCyS CTF: Bunny Tracker Glitch",
  description:
    "A forensic challenge involving a suspicious 1x1 PNG that clearly contains more than it first appears to.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-01/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-01">{children}</CaseStudyLayout>;
}
