import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manual Transmission Rebuild (1989 Honda Accord)",
  description: "Detailed writeup and documentation for the Manual Transmission Rebuild (1989 Honda Accord) project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
