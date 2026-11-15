import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro number="01" title="Mechatronics">
        <p>
          Restoration, robotics, and making software interact with the physical
          world.
        </p>
      </PageIntro>
      <Suspense fallback={<StaticProjectArchive fixedCategory="engineering" />}>
        <ProjectArchive fixedCategory="engineering" />
      </Suspense>
    </>
  );
}
