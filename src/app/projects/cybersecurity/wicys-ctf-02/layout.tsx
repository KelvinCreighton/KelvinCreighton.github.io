import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Luck Checker | Kelvin Creighton",
    description:
      "A beginner reversing challenge built around a suspicious binary that guards Heap MacCipher's so-called luck engine.",
    url: "/projects/cybersecurity/wicys-ctf-02",
    type: "article",
  },
  title: "WiCyS CTF: Luck Checker",
  description:
    "A beginner reversing challenge built around a suspicious binary that guards Heap MacCipher's so-called luck engine.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-02/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-02">{children}</CaseStudyLayout>;
}
