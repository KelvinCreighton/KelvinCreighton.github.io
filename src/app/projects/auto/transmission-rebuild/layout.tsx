import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Manual Transmission Rebuild | Kelvin Creighton",
    description:
      "What started as a simple alternator replacement turned into a full manual transmission rebuild. This project documents the process and the challenges that came with it.",
    url: "/projects/auto/transmission-rebuild",
    type: "article",
  },
  title: "Manual Transmission Rebuild",
  description:
    "What started as a simple alternator replacement turned into a full manual transmission rebuild. This project documents the process and the challenges that came with it.",
  alternates: { canonical: "/projects/auto/transmission-rebuild/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="transmission-rebuild">
      {children}
    </CaseStudyLayout>
  );
}
