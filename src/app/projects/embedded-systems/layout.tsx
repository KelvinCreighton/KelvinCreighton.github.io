import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Embedded Systems Projects",
  description: "Microcontroller, hardware interface, and embedded software projects.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
