import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechatronics Projects",
  description: "Showcasing mechanical design, robotics, and mechatronics projects.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
