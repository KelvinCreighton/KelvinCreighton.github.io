import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCyS CTF: Bunny Network API Override",
  description: "Detailed writeup and documentation for the WiCyS CTF: Bunny Network API Override project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
