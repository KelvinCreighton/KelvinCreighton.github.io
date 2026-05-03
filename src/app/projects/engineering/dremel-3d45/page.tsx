import Image from "next/image";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

export default function Dremel3D45Project() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 bg-white dark:bg-black w-full">
      <article className="w-full max-w-4xl flex flex-col items-start px-2 md:px-0">
        {/* Navigation */}
        <Link
          href="/projects/engineering"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Engineering Projects
        </Link>

        {/* Header Section */}
        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              May 2026
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Dremel DigiLab 3D45
          </h1>
          <p className="text-xl italic mb-6">Documentation of the teardown, diagnosis, and repair of a Dremel DigiLab 3D45 printer.</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/projects/dremel-3d45-title.jpg"
              alt="Dremel DigiLab 3D45 Repair"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I was gifted a Dremel 3D45 printer that had been sitting unused for a year or so. It was in non-functional condition and in complete disarray, with multiple parts scattered everywhere. Much of it was still intact, specificlaly the frame, motion system, and power supply. The hotend, however, was completely dismantled and missing several components. I had also aquired a second hobby printer from an electronics waste bin, which I attempted to salvage parts from to fix the Dremel 3D45 printer. However, the incompatibility made this unrealistic and the easier approach was to replace or fix the broken and missing parts. (Dremel 3D printers are also proprietary so this made things a little trickier).
          </p>
        </header>

        {/* Content Body */}
        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          {/* Diagnosis Section */}
          <h2 className="mb-4 text-xl font-bold">Initial Diagnosis</h2>
          <p>
            The frame, motion system, and power supply were all intact. The hotend was dismantled with broken wires, old PLA filament fused to the many components, and the nozzle was missing. The extruder drive gear was still intact and potentially functional, just disconnected. It seemed that all I would need to do is buy a new hotend assembly for a bit over $100 CAD and I would be good to go. However I gave myself the challenge to repair it as cheaply as possible.
          </p>

          {/* Project Overview Component */}
          <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold mt-0 mb-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Repair Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Parts and Tools
                </h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>Nozzle 0.4mm ($35)</li>
                  <li>Tap 8mm-1.25 ($10)</li>
                  <li>Screws ($1)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Quick Stats
                </h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li>
                    <span className="font-semibold">Total Cost:</span> $46
                  </li>
                  <li>
                    <span className="font-semibold">Time Spent:</span> 3 Days
                  </li>
                  <li>
                    <span className="font-semibold">Difficulty:</span> 3/5 (Technical Repair)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 1: Specs & Analysis</h2>
          <p>
            Turning the printer on revealed that the main board was still functional, as the screen lit up and the fans spun. I looked through the settings to find the specs of the printer which I thought might come in handy later. I then proceeded to analyze the broken parts of the hotend that came with the printer.
          </p>

          {/* Step 1 Images - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-1-1.jpg"
                  alt="Dremel 3D45 Specs and Settings"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Analyzing the printer specifications
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-1-2.jpg"
                  alt="Dremel 3D45 Component Analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Analyzing the hotend components
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 2: Attempt Hotend Transplant</h2>
          <p>
            Dismantalling the hotend from the second printer, I attempted to use it to replace the broken one on the Dremel 3D45. However, I quickly realized that the two printers were not compatible with each other. The hotend was too tall to fit in the Dremel's print head assembly, and the threading of the individual components was completely different. My plan was then to add some sort of "sleeve" for the nozzle of the second printer to fit in the hot end of the Dremel printer since it was much smaller and the threading wouldn't match. Because of the precise tolerances of 3D printers, this was not a realistic option and I ended up just ordering a 3rd party replacement nozzle online.
          </p>

          <h2 className="mb-4 text-xl font-bold">Closing Thoughts</h2>
          <p>
            The restoration is currently ongoing. With the power stability issues identified, the next phase focuses on the complete overhaul of the extrusion system.
          </p>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>
        <ProjectPager
          category="engineering"
          currentPath="/projects/engineering/dremel-3d45"
        />
      </article>
    </main>
  );
}
