import DemoFrame from "@/components/DemoFrame";
import Link from "next/link";

export default function ThreeDGamePage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          My first 3D game engine project exploring concepts like projection and
          rotation using matrix math. This project was a major learning
          experience in linear algebra and game development, with all code and
          libraries written by me.
        </p>
      </div>

      <DemoFrame src="/games/3D-Game/Game.html" title="3D Game" />

      <div className="w-full max-w-4xl bg-gray-85 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Controls</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            To play the game, click on the canvas to lock the mouse (press esc
            to exit lock mode). Use mouse movements to look around and the key
            inputs <strong>w, a, s, d</strong> to move, <strong>space</strong>{" "}
            to jump, and <strong>shift</strong> for a sprint effect that
            increases movement speed. Press <strong>r</strong> to reset the
            player.
          </p>
        </div>
      </div>
    </div>
  );
}
