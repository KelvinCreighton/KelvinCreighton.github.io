import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro title="Music">
        <p>
          Piano arrangements and original compositions. Open a score and listen
          along.
        </p>
      </PageIntro>
      <Suspense fallback={<StaticProjectArchive fixedCategory="music" />}>
        <ProjectArchive fixedCategory="music" />
      </Suspense>
    </>
  );
}
