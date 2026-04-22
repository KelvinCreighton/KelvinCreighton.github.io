import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Development Projects",
  description: "View all game development projects by Kelvin Creighton.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
