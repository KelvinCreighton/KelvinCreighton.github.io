import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "MachineGuard | Kelvin Creighton",
    description:
      "A sensor node that captures machine vibration and sends it over Bluetooth. I built the hardware and firmware for our natHacks team prototype.",
    url: "/projects/embedded-systems/machineguard",
    type: "article",
  },
  title: "MachineGuard",
  description:
    "A sensor node that captures machine vibration and sends it over Bluetooth. I built the hardware and firmware for our natHacks team prototype.",
  alternates: { canonical: "/projects/embedded-systems/machineguard/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <CaseStudyLayout projectId="machineguard">{children}</CaseStudyLayout>;
}
