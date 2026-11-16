import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Community and event organization work for Kelvin Creighton, including OWASP Edmonton and CHADS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
