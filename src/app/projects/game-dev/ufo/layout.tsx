import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UFO",
  description: "Detailed writeup and documentation for the UFO project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
