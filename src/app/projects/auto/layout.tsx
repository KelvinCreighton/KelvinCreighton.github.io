import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Automotive",
  description:
    "Repair notes from the garage. Diagnosis, decisions, and the work in between.",
  alternates: { canonical: "/projects/auto/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
