import DemoFrame from "@/components/DemoFrame";
import Link from "next/link";

export default function TankGamePage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          A topdown tank shooter inspired by the classic Tank Trouble game!
        </p>
      </div>

      <DemoFrame src="/games/tank-game/Game.html" title="Tank Game" preview="/images/responsive/projects/tank-game-webp-616.webp" />

      <div className="w-full max-w-4xl bg-gray-85 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>

        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4">Controls</h3>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg mb-2">Player 1</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>W / S</strong> - Move forward / backward
                  </li>
                  <li>
                    <strong>A / D</strong> - Rotate left / right
                  </li>
                  <li>
                    <strong>Left Shift</strong> - Shoot
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-lg mb-2">Player 2</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Up / Down Arrows</strong> - Move forward / backward
                  </li>
                  <li>
                    <strong>Left / Right Arrows</strong> - Rotate left / right
                  </li>
                  <li>
                    <strong>Enter</strong> - Shoot
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg mb-2">Player 3</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>O / K</strong> - Move forward / backward
                  </li>
                  <li>
                    <strong>L / ;</strong> - Rotate left / right
                  </li>
                  <li>
                    <strong>Space</strong> - Shoot
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
