import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: Bunny Overflow",
  description: "Detailed writeup and documentation for the WICYS CTF: Bunny Overflow project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
