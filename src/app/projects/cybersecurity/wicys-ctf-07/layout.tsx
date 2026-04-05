import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: Scavenger Hunt",
  description: "Detailed writeup and documentation for the WICYS CTF: Scavenger Hunt project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
