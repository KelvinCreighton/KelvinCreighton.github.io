import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MacSync Stealer: Static Malware Analysis",
  description: "A detailed static analysis of the MacSync Stealer malware, uncovering its multi-stage execution flow and C2 communication methods.",
};

export default function MacSyncStealerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
