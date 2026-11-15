import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Dremel 3D45 · Controller rebuild | Kelvin Creighton",
    description:
      "Replacing a failed printer controller with an Arduino Mega, RAMPS hardware, and adapted Marlin firmware. A continuing record of diagnosis and motion testing.",
    url: "/projects/engineering/dremel-3d45-rebuild",
    type: "article",
  },
  title: "Dremel 3D45 · Controller rebuild",
  description:
    "Replacing a failed printer controller with an Arduino Mega, RAMPS hardware, and adapted Marlin firmware. A continuing record of diagnosis and motion testing.",
  alternates: { canonical: "/projects/engineering/dremel-3d45-rebuild/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="dremel-3d45-rebuild">
      {children}
    </CaseStudyLayout>
  );
}
