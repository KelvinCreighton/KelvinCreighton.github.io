import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PicoCTF: No Sql Injection",
  description: "Detailed writeup and documentation for the PicoCTF: No Sql Injection project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
