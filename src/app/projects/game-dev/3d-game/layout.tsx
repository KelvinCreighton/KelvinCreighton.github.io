import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Game Engine",
  description: "Detailed writeup and documentation for the 3D Game Engine project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
