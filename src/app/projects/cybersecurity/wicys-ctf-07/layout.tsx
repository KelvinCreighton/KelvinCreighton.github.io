import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCyS CTF: Scavenger Hunt",
  description: "Detailed writeup and documentation for the WiCyS CTF: Scavenger Hunt project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
