import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BL1ND JUST1C3: 1NV3ST1G4T1ON",
  description: "Detailed writeup and documentation for the BL1ND JUST1C3: 1NV3ST1G4T1ON project.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
