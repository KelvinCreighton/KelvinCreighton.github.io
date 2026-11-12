import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MachineGuard | Embedded Systems Projects",
  description:
    "Embedded hardware and ESP32 firmware for MachineGuard, a natHacks 2026 machine-condition monitoring prototype.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
