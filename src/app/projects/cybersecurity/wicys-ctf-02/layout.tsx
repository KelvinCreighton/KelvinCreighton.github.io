import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: Luck Checker",
  description: "Detailed writeup and documentation for the WICYS CTF: Luck Checker project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
