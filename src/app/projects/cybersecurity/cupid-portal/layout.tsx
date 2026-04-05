import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTCOTB2026 CTF: Cupid's Secret Message",
  description: "Detailed writeup and documentation for the HTCOTB2026 CTF: Cupid's Secret Message project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
