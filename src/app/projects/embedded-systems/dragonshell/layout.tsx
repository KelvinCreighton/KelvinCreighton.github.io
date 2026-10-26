import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DragonShell | Embedded Systems Projects",
  description:
    "A C Unix-like shell project exploring process management, file descriptors, pipes, signals, and operating-system concepts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
