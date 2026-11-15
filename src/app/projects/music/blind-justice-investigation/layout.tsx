import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "BL1ND JUST1C3: 1NV3ST1G4T1ON | Kelvin Creighton",
    description:
      "A high energy multi-voice piece originally from Homestuck, arranged for piano.",
    url: "/projects/music/blind-justice-investigation",
    type: "article",
  },
  title: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
  description:
    "A high energy multi-voice piece originally from Homestuck, arranged for piano.",
  alternates: { canonical: "/projects/music/blind-justice-investigation/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="blind-justice-investigation">
      {children}
    </CaseStudyLayout>
  );
}
