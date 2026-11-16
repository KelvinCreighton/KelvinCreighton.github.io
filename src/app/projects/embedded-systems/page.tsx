import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro number="01" title="Embedded Systems">
        <p>
          Sensor hardware, firmware, and the software behind processes, files,
          and parallel work.
        </p>
      </PageIntro>
      <Suspense
        fallback={<StaticProjectArchive fixedCategory="embedded-systems" />}
      >
        <ProjectArchive fixedCategory="embedded-systems" />
      </Suspense>
    </>
  );
}
