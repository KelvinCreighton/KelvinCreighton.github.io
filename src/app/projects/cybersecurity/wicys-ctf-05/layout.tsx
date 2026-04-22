import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCyS CTF: Rainbow Vault Overflow",
  description: "Detailed writeup and documentation for the WiCyS CTF: Rainbow Vault Overflow project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
