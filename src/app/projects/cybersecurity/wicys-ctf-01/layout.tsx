import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCyS CTF: Bunny Tracker Glitch",
  description: "Detailed writeup and documentation for the WiCyS CTF: Bunny Tracker Glitch project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
