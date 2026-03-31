import { Suspense } from "react";

import CybersecurityProjectsClient from "@/components/CybersecurityProjectsClient";

export default function CybersecurityProjectsPage() {
  return (
    <Suspense fallback={null}>
      <CybersecurityProjectsClient initialCategory="All" />
    </Suspense>
  );
}
