import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "A fieldbook of embedded software, systems programming, security investigations, mechatronics, automotive repair, games, and music.",
  alternates: { canonical: "/projects/" },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
