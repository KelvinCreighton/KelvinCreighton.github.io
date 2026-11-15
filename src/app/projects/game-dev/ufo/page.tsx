import DemoFrame from "@/components/DemoFrame";
import Link from "next/link";

export default function UFOGamePage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          A fun UFO game project. Players control a UFO and navigate through
          various levels, avoiding enemies.
        </p>
      </div>

      <DemoFrame src="/games/UFO/play.html" title="UFO Game" />
    </div>
  );
}
