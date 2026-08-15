import { Suspense } from "react";
import dynamic from "next/dynamic";

const CybersecurityProjectsClient = dynamic(
  () => import("@/components/CybersecurityProjectsClient"),
  { ssr: false }
);

export default function CybersecurityProjectsPage() {
  return (
    <Suspense fallback={null}>
      <CybersecurityProjectsClient initialCategory="All" />
    </Suspense>
  );
}
