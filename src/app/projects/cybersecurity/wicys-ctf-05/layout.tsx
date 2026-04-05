import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: Rainbow Vault Overflow",
  description: "Detailed writeup and documentation for the WICYS CTF: Rainbow Vault Overflow project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
