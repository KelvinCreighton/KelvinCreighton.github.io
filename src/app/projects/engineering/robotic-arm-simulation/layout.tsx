import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotic Arm Simulation – CMPUT 340",
  description:
    "Interactive 2D robotic arm simulation demonstrating inverse kinematics, analytical and finite-difference Jacobians, Newton's method, and Broyden's quasi-Newton optimization.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
