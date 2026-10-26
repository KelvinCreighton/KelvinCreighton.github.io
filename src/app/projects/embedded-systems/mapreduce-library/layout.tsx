import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MapReduce Library | Embedded Systems Projects",
  description:
    "A C MapReduce framework with pthread job scheduling, hash partitioning, mapper and reducer callbacks, and a word count example.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
