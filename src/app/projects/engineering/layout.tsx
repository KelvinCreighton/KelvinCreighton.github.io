import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description: "Showcasing engineering and mechanical design projects.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
