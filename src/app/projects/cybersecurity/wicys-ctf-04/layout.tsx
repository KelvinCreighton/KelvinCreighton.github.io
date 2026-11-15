import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Bunny Overflow | Kelvin Creighton",
    description:
      "A classic binary exploitation challenge centered on a vulnerable authorization flow inside the Bunny Network gateway.",
    url: "/projects/cybersecurity/wicys-ctf-04",
    type: "article",
  },
  title: "WiCyS CTF: Bunny Overflow",
  description:
    "A classic binary exploitation challenge centered on a vulnerable authorization flow inside the Bunny Network gateway.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-04/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-04">{children}</CaseStudyLayout>;
}
