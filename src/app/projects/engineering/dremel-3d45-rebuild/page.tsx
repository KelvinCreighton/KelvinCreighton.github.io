import Image from "@/components/BlurImage";
import Link from "next/link";
import InProgressNotice from "@/components/InProgressNotice";
import ProjectPager from "@/components/ProjectPager";

export default function Dremel3D45RebuildProject() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <article className="w-full max-w-4xl flex flex-col items-start px-2 md:px-0">
        <Link
          href="/projects/engineering"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Engineering Projects
        </Link>

        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              May 2026 - July 2026
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Dremel DigiLab 3D45 - Controller Rebuild
          </h1>
          <p className="text-xl italic mb-6">
            Rebuilding a Dremel DigiLab 3D45 after the original motherboard was
            damaged during fan voltage testing.
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/projects/engineering-placeholder.webp"
              alt="Dremel DigiLab 3D45 controller rebuild"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            This project started after I accidentally fried the printer&apos;s
            motherboard while testing an output voltage for the turbo fan. The
            failure took out the drivers and left the printer completely dead.
            Instead of treating the machine as a loss, I rebuilt it around an
            Arduino Mega 2560 and RAMPS 1.4 board pulled from another broken
            printer I had salvaged from an electronics waste bin.
          </p>
        </header>

        <InProgressNotice message="This rebuild is still ongoing. More photos, wiring details, and firmware notes will be added as the project continues." />

        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <h2 className="mb-4 text-xl font-bold">Project Focus</h2>
          <p>
            The goal was to keep the Dremel&apos;s higher-value frame and chassis
            while replacing the failed control electronics with something I
            could maintain and iterate on more easily. I stripped usable parts
            from the donor printer and used them to rebuild the Dremel&apos;s
            control system instead of trying to source proprietary replacement
            boards.
          </p>

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
              Build Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Core Hardware
                </h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>Arduino Mega 2560</li>
                  <li>RAMPS 1.4 board</li>
                  <li>A4988 stepper drivers</li>
                  <li>TMC2209 stepper drivers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Current State
                </h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li>
                    <span className="font-semibold">Phase:</span> Rebuild and
                    validation
                  </li>
                  <li>
                    <span className="font-semibold">Status:</span> In progress
                  </li>
                  <li>
                    <span className="font-semibold">Scope:</span> Electronics
                    replacement and printer recovery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">Initial Failure</h2>
          <p>
            The original motherboard failed after I tested a fan output voltage
            that I thought was not working. That mistake killed the board and
            the drivers with it, which stopped the printer entirely.
          </p>

          <h2 className="mb-4 text-xl font-bold">Rebuild Approach</h2>
          <p>
            I treated the donor printer as a parts source and rebuilt the
            Dremel around the Arduino Mega 2560 and RAMPS 1.4 setup. At first I
            reused the original A4988 drivers, then later moved to TMC2209
            drivers. I also replaced the damaged control hardware more than
            once after another failure, which meant buying fresh Mega, RAMPS,
            and TMC2209 parts and wiring everything back up again.
          </p>

          <h2 className="mb-4 text-xl font-bold">Why This Printer</h2>
          <p>
            The Dremel itself is the better machine to keep because of its frame
            and chassis quality, which gives it better consistency and
            precision than the donor printer. The plan was to preserve the
            stronger mechanical foundation and swap in the usable electronics
            and motors from the broken machine rather than starting over.
          </p>

          <h2 className="mb-4 text-xl font-bold">Closing Thoughts</h2>
          <p>
            This is still a work in progress, but the rebuild already reflects
            the direction I want to take it: recover the better machine, reuse
            salvageable hardware where it makes sense, and keep iterating until
            the printer is reliable again.
          </p>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>

        <ProjectPager
          category="engineering"
          currentPath="/projects/engineering/dremel-3d45-rebuild"
        />
      </article>
    </main>
  );
}
