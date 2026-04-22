import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCyS CTF: Luck Checker",
  description: "Detailed writeup and documentation for the WiCyS CTF: Luck Checker project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
