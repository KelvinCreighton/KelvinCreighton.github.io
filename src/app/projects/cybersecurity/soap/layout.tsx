import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PicoCTF: SOAP",
  description: "Detailed writeup and documentation for the PicoCTF: SOAP project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
