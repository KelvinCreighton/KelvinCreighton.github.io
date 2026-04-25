import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beginner Friendly and Cost Efficient RC Car",
  description: "Detailed writeup and documentation for the Beginner Friendly and Cost Efficient RC Car engineering project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
