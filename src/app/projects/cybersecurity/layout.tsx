import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cybersecurity",
  description:
    "Investigations, challenge design, and the details that make a system vulnerable.",
  alternates: { canonical: "/projects/cybersecurity/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
