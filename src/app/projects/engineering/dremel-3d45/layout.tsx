import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Dremel DigiLab 3D45 - Restoration | Kelvin Creighton",
    description:
      "Documentation of the teardown, diagnosis, and repair of a Dremel DigiLab 3D45 printer.",
    url: "/projects/engineering/dremel-3d45",
    type: "article",
  },
  title: "Dremel DigiLab 3D45 - Restoration",
  description:
    "Documentation of the teardown, diagnosis, and repair of a Dremel DigiLab 3D45 printer.",
  alternates: { canonical: "/projects/engineering/dremel-3d45/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="dremel-3d45">{children}</CaseStudyLayout>;
}
