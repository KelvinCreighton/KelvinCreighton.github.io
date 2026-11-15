import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mechatronics",
  description:
    "Restoration, robotics, and making software interact with the physical world.",
  alternates: { canonical: "/projects/engineering/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
