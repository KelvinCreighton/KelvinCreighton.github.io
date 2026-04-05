import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description: "A complete list of projects including cybersecurity, game dev, music, and automotive repair.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
