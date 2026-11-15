import DemoFrame from "@/components/DemoFrame";
import Link from "next/link";

export default function BlackholeSimulatorPage() {
  return (
    <div className="project-body">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          A physics-based orbital mechanics simulator featuring various
          &quot;satellites&quot; like bananas, pizza, and spaghetti.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-center">
          This project was created to explore the physics of black holes as a
          fun creative group assignment for a University Class.
        </p>
      </div>

      <DemoFrame
        src="/games/blackhole-simulator/Black_hole_simulator.html"
        title="Blackhole Simulator"
      />

      <div className="w-full max-w-4xl bg-gray-85 dark:bg-gray-900 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p>Use the mouse to interact with the simulation. </p>
          <p>Click and drag to create objects with velocity.</p>
        </div>
      </div>
    </div>
  );
}
