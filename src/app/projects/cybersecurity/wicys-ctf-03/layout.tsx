import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: Bunny Network - Portal Override",
  description: "Detailed writeup and documentation for the WICYS CTF: Bunny Network - Portal Override project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
