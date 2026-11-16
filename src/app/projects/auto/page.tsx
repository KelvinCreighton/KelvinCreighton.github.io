import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro title="Automotive">
        <p>
          Repair notes from the garage. Diagnosis, decisions, and the work in
          between.
        </p>
      </PageIntro>
      <Suspense fallback={<StaticProjectArchive fixedCategory="auto" />}>
        <ProjectArchive fixedCategory="auto" />
      </Suspense>
    </>
  );
}
