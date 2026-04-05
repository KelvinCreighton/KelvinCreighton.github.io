import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Production Projects",
  description: "View all music production projects by Kelvin Creighton.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
