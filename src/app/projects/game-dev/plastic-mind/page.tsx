import DemoFrame from "@/components/DemoFrame";
import Image from "@/components/BlurImage";
import Link from "next/link";

export default function PlasticMindPage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
          A mind-bending physics platformer where your movement is governed by
          dynamic power vectors. Navigate through obstacles, manage your
          momentum, and adapt to shifting controls.
        </p>
      </div>

      <DemoFrame src="/games/plastic-mind/index.html" title="Plastic Mind" preview="/images/responsive/projects/plastic-mind-title-webp-1009.webp" />

      <div className="w-full max-w-4xl bg-gray-85 dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold mb-6">How to Play</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                Core Mechanics
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Unlike traditional platformers, you place "Powers" at your
                cursor to change your velocity.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Mouse</strong> - Position your power placement
                </li>
                <li>
                  <strong>Keys Q, W, E, D, C, X, Z, A</strong> - Place
                  directional powers
                </li>
                <li>
                  <strong>S Key</strong> - Placement clear power
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                Other Controls
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Spacebar</strong> - Instantly trigger a control swap
                  (Primarily for testing)
                </li>
              </ul>
            </section>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Objects & Hazards
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div
                  className="goal-symbol w-4 h-4 rounded-full border-4"
                  style={{ borderColor: "#ffff00" }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Goal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500/20 border border-green-500 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Safe Terrain
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500/20 border border-red-500 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Lethal Hazard (Reset)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500/20 border border-blue-500 rounded"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Control Swapper (Triggered on Touch)
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
