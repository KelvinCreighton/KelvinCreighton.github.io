import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro title="Projects">
        <p>
          Software, hardware, repair, and the occasional piece of music. Browse
          the full archive, or follow a discipline.
        </p>
      </PageIntro>
      <Suspense fallback={<StaticProjectArchive />}>
        <ProjectArchive />
      </Suspense>
    </>
  );
}
