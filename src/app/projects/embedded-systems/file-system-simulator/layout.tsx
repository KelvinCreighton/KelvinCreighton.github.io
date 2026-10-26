import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "File System Simulator | Embedded Systems Projects",
  description:
    "A C implementation of a small disk image filesystem with inodes, directories, contiguous allocation, resizing, and defragmentation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
