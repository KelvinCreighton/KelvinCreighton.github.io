import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "Robotic Arm Simulation | Kelvin Creighton",
    description:
      "Interactive 2D robotic arm simulation demonstrating inverse kinematics, analytical and finite-difference Jacobians, Newton's method, and Broyden's quasi-Newton optimization.",
    url: "/projects/engineering/robotic-arm-simulation",
    type: "article",
  },
  title: "Robotic Arm Simulation",
  description:
    "Interactive 2D robotic arm simulation demonstrating inverse kinematics, analytical and finite-difference Jacobians, Newton's method, and Broyden's quasi-Newton optimization.",
  alternates: { canonical: "/projects/engineering/robotic-arm-simulation/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="robotic-arm-simulation">
      {children}
    </CaseStudyLayout>
  );
}
