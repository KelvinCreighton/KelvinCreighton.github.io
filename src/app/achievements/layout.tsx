import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Certificates, qualifications, and CTF accomplishments for Kelvin Creighton.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
