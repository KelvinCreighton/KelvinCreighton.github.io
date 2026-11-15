import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Games & Simulation",
  description:
    "Experiments in movement, physics, and play, going back to my first JavaScript games.",
  alternates: { canonical: "/projects/game-dev/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
