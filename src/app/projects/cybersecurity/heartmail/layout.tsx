import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTCOTB2026 CTF: HeartMail 1.0",
  description: "Detailed writeup and documentation for the HTCOTB2026 CTF: HeartMail 1.0 project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
