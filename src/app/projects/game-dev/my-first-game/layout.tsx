import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My First Game",
  description: "Detailed writeup and documentation for the My First Game project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
