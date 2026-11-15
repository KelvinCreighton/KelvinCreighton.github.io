import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Rainbow Vault Overflow | Kelvin Creighton",
    description:
      "A heap-focused exploitation challenge hidden behind the deceptively simple Rainbow Vault access portal.",
    url: "/projects/cybersecurity/wicys-ctf-05",
    type: "article",
  },
  title: "WiCyS CTF: Rainbow Vault Overflow",
  description:
    "A heap-focused exploitation challenge hidden behind the deceptively simple Rainbow Vault access portal.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-05/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-05">{children}</CaseStudyLayout>;
}
