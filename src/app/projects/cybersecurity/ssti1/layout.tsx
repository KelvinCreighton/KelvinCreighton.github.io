import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PicoCTF: SSTI1",
  description: "Detailed writeup and documentation for the PicoCTF: SSTI1 project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
