import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiCyS CTF: Leprechauns Vault",
  description: "Detailed writeup and documentation for the WiCyS CTF: Leprechauns Vault project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
