import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "MacSync Stealer: Static Malware Analysis | Kelvin Creighton",
    description:
      "Following a suspicious command through a multi-stage macOS stealer. A record of the loader, execution flow, and communication with its server.",
    url: "/projects/cybersecurity/macsync-stealer",
    type: "article",
  },
  title: "MacSync Stealer: Static Malware Analysis",
  description:
    "Following a suspicious command through a multi-stage macOS stealer. A record of the loader, execution flow, and communication with its server.",
  alternates: { canonical: "/projects/cybersecurity/macsync-stealer/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="macsync-stealer">{children}</CaseStudyLayout>
  );
}
