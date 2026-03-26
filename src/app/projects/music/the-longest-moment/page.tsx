import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the viewer with SSR disabled because OSMD relies on the window object
const SheetMusicViewer = dynamic(
  () => import("@/components/SheetMusicViewer"),
  { ssr: true },
);

export default function TheLongestMomentPage() {
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
          The Longest Moment Before a New Beginning
        </h1>
      </div>

      <div className="w-full max-w-6xl">
        <SheetMusicViewer file="/scores/The-Longest-Moment-Before-a-New-Beginning.musicxml" />
      </div>
    </main>
  );
}
