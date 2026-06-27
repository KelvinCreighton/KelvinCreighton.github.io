import Link from "next/link";
import dynamic from "next/dynamic";
import ProjectPager from "@/components/ProjectPager";

// Dynamically import the viewer with SSR disabled because OSMD relies on the window object
const SheetMusicViewer = dynamic(
  () => import("@/components/SheetMusicViewer"),
  { ssr: true },
);

export default function BeethovenVirusPage() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects/music"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Music Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">Beethoven Virus</h1>
      </div>

      <div className="w-full max-w-6xl">
        <SheetMusicViewer file="/scores/Beethoven_Virus.musicxml" />
      </div>

      <ProjectPager
        category="music"
        currentPath="/projects/music/beethoven-virus"
      />
    </main>
  );
}
