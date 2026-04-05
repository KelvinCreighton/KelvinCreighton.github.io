import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blackhole Simulator",
  description: "Detailed writeup and documentation for the Blackhole Simulator project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
