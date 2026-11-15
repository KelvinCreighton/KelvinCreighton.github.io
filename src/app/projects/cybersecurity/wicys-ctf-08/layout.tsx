import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Bunny Network API Override | Kelvin Creighton",
    description:
      "A web challenge involving a hijacked API, a hidden override path, and a response that says more than the page shows.",
    url: "/projects/cybersecurity/wicys-ctf-08",
    type: "article",
  },
  title: "WiCyS CTF: Bunny Network API Override",
  description:
    "A web challenge involving a hijacked API, a hidden override path, and a response that says more than the page shows.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-08/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-08">{children}</CaseStudyLayout>;
}
