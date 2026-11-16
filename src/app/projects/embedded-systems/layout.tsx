import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Embedded Systems",
  description:
    "Sensor hardware, firmware, and the software behind processes, files, and parallel work.",
  alternates: { canonical: "/projects/embedded-systems/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
