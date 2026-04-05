import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: Bunny Tracker Glitch",
  description: "Detailed writeup and documentation for the WICYS CTF: Bunny Tracker Glitch project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
