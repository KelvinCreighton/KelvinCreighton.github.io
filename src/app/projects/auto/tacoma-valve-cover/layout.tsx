import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Valve Cover Replacement & Modification | Kelvin Creighton",
    description:
      "When a cracked valve cover led to an oil leak, a custom modification was required to make a donor part from a different year fit properly.",
    url: "/projects/auto/tacoma-valve-cover",
    type: "article",
  },
  title: "Valve Cover Replacement & Modification",
  description:
    "When a cracked valve cover led to an oil leak, a custom modification was required to make a donor part from a different year fit properly.",
  alternates: { canonical: "/projects/auto/tacoma-valve-cover/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="tacoma-valve-cover">{children}</CaseStudyLayout>
  );
}
