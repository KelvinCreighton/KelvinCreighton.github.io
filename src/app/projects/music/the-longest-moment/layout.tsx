import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Longest Moment Before a New Beginning",
  description: "Detailed writeup and documentation for the The Longest Moment Before a New Beginning project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
