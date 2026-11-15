import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Music",
  description:
    "Piano arrangements and original compositions. Open a score and listen along.",
  alternates: { canonical: "/projects/music/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
