import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Projects",
  description: "View all automotive projects by Kelvin Creighton.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
