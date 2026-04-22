import Link from "next/link";
import dynamic from "next/dynamic";
import ProjectPager from "@/components/ProjectPager";

// Dynamically import the viewer with SSR disabled because OSMD relies on the window object
const SheetMusicViewer = dynamic(
  () => import("@/components/SheetMusicViewer"),
  { ssr: true },
);

export default function BlindJusticeInvestigationPage() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects/music"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Music Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">
          BL1ND JUST1C3: 1NV3ST1G4T1ON
        </h1>
      </div>

      <div className="w-full max-w-6xl">
        <SheetMusicViewer file="/scores/BL1ND_JUST1C3_1NV3ST1G4T1ON.musicxml" />
      </div>

      <ProjectPager
        category="music"
        currentPath="/projects/music/blind-justice-investigation"
      />
    </main>
  );
}
