import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "WiCyS CTF: Leprechauns Vault | Kelvin Creighton",
    description:
      "A web challenge centered on a secret vault login, a known employee email, and a developer backdoor left behind in the app.",
    url: "/projects/cybersecurity/wicys-ctf-09",
    type: "article",
  },
  title: "WiCyS CTF: Leprechauns Vault",
  description:
    "A web challenge centered on a secret vault login, a known employee email, and a developer backdoor left behind in the app.",
  alternates: { canonical: "/projects/cybersecurity/wicys-ctf-09/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="wicys-ctf-09">{children}</CaseStudyLayout>;
}
