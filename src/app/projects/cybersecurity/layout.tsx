import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cybersecurity Projects",
  description: "View all cybersecurity projects by Kelvin Creighton.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
