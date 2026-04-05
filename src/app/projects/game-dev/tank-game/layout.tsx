import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tank Game",
  description: "Detailed writeup and documentation for the Tank Game project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
