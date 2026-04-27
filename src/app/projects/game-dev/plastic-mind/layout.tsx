import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plastic Mind",
  description: "A mind-bending physics platformer where your movement is governed by dynamic power vectors.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
