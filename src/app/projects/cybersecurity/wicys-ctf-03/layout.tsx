import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Bunny Network - Portal Override | Kelvin Creighton",
    description:
      "A reversing challenge in which an emergency portal binary must be understood before the Bunny Network can be restored.",
    url: "/projects/cybersecurity/wicys-ctf-03",
    type: "article",
  },
  title: "WiCyS CTF: Bunny Network - Portal Override",
  description:
    "A reversing challenge in which an emergency portal binary must be understood before the Bunny Network can be restored.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-03/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-03">{children}</CaseStudyLayout>;
}
