import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dremel DigiLab 3D45 - Controller Rebuild",
  description:
    "Ongoing rebuild of a Dremel DigiLab 3D45 printer using an Arduino Mega 2560 and RAMPS 1.4 after motherboard failure.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
