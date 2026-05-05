import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dremel 3D45 Modification & Optimization | Kelvin Creighton",
  description: "Advanced calibration, hardware modifications, and software optimizations for the Dremel DigiLab 3D45.",
};

export default function Dremel3D45ModLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
