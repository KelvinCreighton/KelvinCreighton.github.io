import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beethoven Virus",
  description: "Detailed writeup and documentation for the Beethoven Virus project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
