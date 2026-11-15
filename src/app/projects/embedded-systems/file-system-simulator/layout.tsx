import type { Metadata } from "next";
import CaseStudyLayout from "@/components/CaseStudyLayout";
export const metadata: Metadata = {
  openGraph: {
    title: "File System Simulator | Kelvin Creighton",
    description:
      "A C simulator for disk images with 128 blocks of 1 KiB each, using fixed size inodes, nested directories, contiguous file allocation, resizing, and defragmentation.",
    url: "/projects/embedded-systems/file-system-simulator",
    type: "article",
  },
  title: "File System Simulator",
  description:
    "A C simulator for disk images with 128 blocks of 1 KiB each, using fixed size inodes, nested directories, contiguous file allocation, resizing, and defragmentation.",
  alternates: {
    canonical: "/projects/embedded-systems/file-system-simulator/",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CaseStudyLayout projectId="file-system-simulator">
      {children}
    </CaseStudyLayout>
  );
}
