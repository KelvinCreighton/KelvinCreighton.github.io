import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dremel 3D45 Repair & Restoration",
  description: "Detailed documentation of the teardown, diagnosis, and complete restoration of a Dremel 3D45 3D printer.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
