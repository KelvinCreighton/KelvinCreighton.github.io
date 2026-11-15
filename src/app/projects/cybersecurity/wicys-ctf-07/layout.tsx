import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Scavenger Hunt | Kelvin Creighton",
    description:
      "A web challenge that rewards careful inspection of the client-side application and MacCipher's hidden notes.",
    url: "/projects/cybersecurity/wicys-ctf-07",
    type: "article",
  },
  title: "WiCyS CTF: Scavenger Hunt",
  description:
    "A web challenge that rewards careful inspection of the client-side application and MacCipher's hidden notes.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-07/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-07">{children}</CaseStudyLayout>;
}
