import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro title="Games & Simulation">
        <p>
          Experiments in movement, physics, and play, going back to my first
          JavaScript games.
        </p>
      </PageIntro>
      <Suspense fallback={<StaticProjectArchive fixedCategory="game-dev" />}>
        <ProjectArchive fixedCategory="game-dev" />
      </Suspense>
    </>
  );
}
