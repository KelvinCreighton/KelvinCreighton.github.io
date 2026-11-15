import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Remote Control Car | Kelvin Creighton",
    description:
      "Designing an accessible, sub-$10 educational RC car curriculum for engineering camps, focusing on robotics through low-cost mechanical and electrical prototyping.",
    url: "/projects/engineering/rc-car",
    type: "article",
  },
  title: "Remote Control Car",
  description:
    "Designing an accessible, sub-$10 educational RC car curriculum for engineering camps, focusing on robotics through low-cost mechanical and electrical prototyping.",
  alternates: { canonical: "/projects/engineering/rc-car/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="rc-car">{children}</CaseStudyLayout>;
}
