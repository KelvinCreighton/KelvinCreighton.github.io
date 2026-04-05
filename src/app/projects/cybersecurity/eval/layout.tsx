import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PicoCTF: 3v@l",
  description: "Detailed writeup and documentation for the PicoCTF: 3v@l project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
