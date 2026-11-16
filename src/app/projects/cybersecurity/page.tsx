import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import ProjectArchive, {
  StaticProjectArchive,
} from "@/components/ProjectArchive";
export default function Page() {
  return (
    <>
      <PageIntro title="Cybersecurity">
        <p>
          Investigations, challenge design, and the details that make a system
          vulnerable.
        </p>
      </PageIntro>
      <Suspense
        fallback={<StaticProjectArchive fixedCategory="cybersecurity" />}
      >
        <ProjectArchive fixedCategory="cybersecurity" />
      </Suspense>
    </>
  );
}
