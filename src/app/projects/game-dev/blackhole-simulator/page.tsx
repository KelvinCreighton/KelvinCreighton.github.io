import Link from "next/link";

export default function BlackholeSimulatorPage() {
  return (
    <main className="flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects/game-dev"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Game Dev Projects
        </Link>
        <h1 className="text-4xl font-bold text-center">Blackhole Simulator</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          A physics-based orbital mechanics simulator featuring various
          &quot;satellites&quot; like bananas, pizza, and spaghetti.
        </p>
      </div>

      <div
        className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex justify-center items-center mb-12"
        style={{ minHeight: "600px" }}
      >
        <iframe
          src="/games/blackhole-simulator/Black_hole_simulator.html"
          className="w-full h-full border-0"
          style={{ minHeight: "600px" }}
          title="Blackhole Simulator"
        />
      </div>

      <div className="w-full max-w-4xl bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>Use the mouse to interact with the simulation. </p>
          <p>
            Click and drag to create objects with velocity.
          </p>
        </div>
      </div>
    </main>
  );
}
