import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Kelvin Creighton's projects in embedded systems, firmware, systems programming, security, robotics, automotive repair, games, and music.",
  alternates: { canonical: "/projects/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
