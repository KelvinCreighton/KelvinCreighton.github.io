import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WICYS CTF: ROP Around the Rainbow",
  description: "Detailed writeup and documentation for the WICYS CTF: ROP Around the Rainbow project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
