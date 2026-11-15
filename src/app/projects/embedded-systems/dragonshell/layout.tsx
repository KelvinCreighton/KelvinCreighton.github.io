import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "DragonShell | Kelvin Creighton",
    description:
      "A Unix shell written in C. Processes, pipes, redirection, and signals, implemented through the operating system’s interfaces.",
    url: "/projects/embedded-systems/dragonshell",
    type: "article",
  },
  title: "DragonShell",
  description:
    "A Unix shell written in C. Processes, pipes, redirection, and signals, implemented through the operating system’s interfaces.",
  alternates: { canonical: "/projects/embedded-systems/dragonshell/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="dragonshell">{children}</CaseStudyLayout>;
}
