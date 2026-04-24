import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valve Cover Replacement & Modification (2002 Toyota Tacoma)",
  description: "Detailed writeup and documentation for the Valve Cover Replacement & Modification project on a 2002 Toyota Tacoma.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
