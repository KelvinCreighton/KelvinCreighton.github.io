import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: ROP Around the Rainbow | Kelvin Creighton",
    description:
      "An advanced control-flow hijacking challenge where small internal fragments must be chained into a full exploit.",
    url: "/projects/cybersecurity/wicys-ctf-06",
    type: "article",
  },
  title: "WiCyS CTF: ROP Around the Rainbow",
  description:
    "An advanced control-flow hijacking challenge where small internal fragments must be chained into a full exploit.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-06/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-06">{children}</CaseStudyLayout>;
}
