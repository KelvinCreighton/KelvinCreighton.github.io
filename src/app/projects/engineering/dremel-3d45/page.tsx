import Image from "@/components/BlurImage";
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
            Dremel DigiLab 3D45 - Restoration
          </h1>
          <p className="text-xl italic mb-6">Documentation of the teardown, diagnosis, and repair of a Dremel DigiLab 3D45 printer.</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/projects/dremel-3d45-title.webp"
              alt="Dremel DigiLab 3D45 Repair"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            I was gifted a Dremel 3D45 printer that had been sitting unused for a year or so. It was in non-functional condition and in complete disarray, with multiple parts scattered everywhere. Much of it was still intact, specifically the frame, motion system, and power supply. The hotend however, was completely dismantled and missing several components. I had also aquired a second hobby printer from an electronics waste bin, which I attempted to salvage parts from to fix the Dremel 3D45 printer. However, the incompatibility made this unrealistic and the easier approach was to replace or fix the broken and missing parts. (Dremel 3D printers are also heavily proprietary so this made things a little trickier).
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

          <p className="italic mb-6 text-gray-600 dark:text-gray-400">
            *For the 3D45.ini configuration file, please view the Dremel DigiLab 3D45 - Modification project.*
          </p>

          <h2 className="mb-4 text-xl font-bold">Step 1: Specs & Analysis</h2>
          <p>
            Turning the printer on revealed that the main board was still functional, as the screen lit up and the fans spun. I looked through the settings to find the specs of the printer which I thought might come in handy later. I then proceeded to analyze the broken parts of the hotend that came with the printer.
          </p>

          {/* Step 1 Images - Side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-1-1.webp"
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
                  src="/images/projects/dremel-3d45-step-1-2.webp"
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
            Dismantling the hotend from the second printer, I attempted to use it to replace the broken one on the Dremel 3D45. However, I quickly realized that the two printers were not compatible with each other. The hotend was too tall to fit in the Dremel's print head assembly, and the threading of the individual components was completely different. My plan was then to add some sort of "sleeve" for the nozzle of the second printer to fit in the hot end of the Dremel printer since it was much smaller and the threading wouldn't match. Because of the precise tolerances of 3D printers, this was not a realistic option and I ended up just ordering a 3rd party replacement nozzle online.
          </p>
          <div className="flex flex-col gap-6 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <figure className="m-0">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/images/projects/dremel-3d45-step-2-1.webp"
                    alt="Removing hotend from second printer"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Removing the hotend from the salvage printer
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/images/projects/dremel-3d45-step-2-2.webp"
                    alt="Fully dismantled salvage hotend"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Dismantling the salvage hotend components
                </figcaption>
              </figure>
            </div>
            <figure className="m-0 flex flex-col items-center">
              <div className="relative max-w-2xl w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-2-3.webp"
                  alt="Hotend comparison and incompatibility"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Comparing the proprietary Dremel hotend with the salvage parts
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 3: Reparing Damaged Wires</h2>
          <p>
            Many of the wires from the hotend assembly were broken off. So I soldered them back on and reinforced them with high temp JB weld. The components themselves are still removable if I ever need to replace them, but the wires of the components are NEVER coming off again.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-3-1.webp"
                  alt="Dremel 3D45 Repair Step 3.1"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                JB welding the wires of the heating element
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-3-2.webp"
                  alt="Dremel 3D45 Repair Step 3.2"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Reataching the heating element to the block
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-3-3.webp"
                  alt="Dremel 3D45 Repair Step 3.3"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                JB welding the wires of the thermocouple
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 4.1: Testing the Thermocouple (Part 1)</h2>
          <p>
            Originally I had assumed that the Dremel 3D45 used a thermistor for temperature sensing. Setting my multimeter to resistor mode, I was getting low resistance readings. My initial thought was that the thermistor was broken or that my multimeter was low on battery (possible since I haven't changed it in years). Before buying a new thermistor, I decided to replace the battery of the multimeter. Just in case.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-1.webp"
                  alt="Dremel 3D45 Repair Step 4.1"
                  fill
                  className="object-cover"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-2.webp"
                  alt="Dremel 3D45 Repair Step 4.2"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Unusually low resistance reading
              </figcaption>
            </figure>
          </div>
          <h2 className="mb-4 text-xl font-bold">Step 4.2: Reparing the Multimeter</h2>
          <p>
            While replacing the battery in my multimeter, I accidentally tore the positive lead wire. These wires looked extremely fragile I was surprised it hadn't broken before. I ended up soldering it back on and using hot glue to keep it from tearing again.
          </p>

          <div className="flex flex-col gap-6 my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <figure className="m-0">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/images/projects/dremel-3d45-step-4-2-1.webp"
                    alt="Broken multimeter wire"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Broken multimeter wire discovered during battery replacement
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                  <Image
                    src="/images/projects/dremel-3d45-step-4-2-2.webp"
                    alt="Solder and hot glue wire repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                  Solder and hot glue reinforcement to prevent future tearing
                </figcaption>
              </figure>
            </div>
            <figure className="m-0 flex flex-col items-center">
              <div className="relative max-w-2xl w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-2-3.webp"
                  alt="Workstation overview midway through repair"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Mid-restoration workstation: tools, parts, and technical chaos
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 4.3: Testing the Thermocouple (Part 2)</h2>
          <p>
            After replacing the batteries of the multimeter, and testing the thermistor again, I was getting very odd readings. However the readings were inconsistent with a broken thermistor. Specifically I noticed that it seemed to flip polarity from positive resistance to negative resistance just on its own. I researched online and found that this was actually because it was a thermocouple, not a thermistor. So setting the multimeter to measure low voltage DC, and gently using a soldering iron on low temp, I was able to get the readings of a working thermocouple. Meaning I would not be replacing this part.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-3-1.webp"
                  alt="Thermocouple at room temperature"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Baseline: 0.0mV at room temperature (200m setting)
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-3-2.webp"
                  alt="Soldering iron heating thermocouple"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Initial Heat: 0.5mV
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-3-3.webp"
                  alt="Thermocouple peak heat reading"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Peak Heat: 0.7mV (for this test)
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-4-3-4.webp"
                  alt="Thermocouple cooling down"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Cooling: 0.4mV after removing heat source
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 5: Heat Block Assembly Issue</h2>
          <p>
            With the arrival of the new nozzle, I attempted to assemble the hotend. However, I quickly discovered the threads inside the heat block were severely damaged. It was impossible to screw the nozzle and the heat sink back together securely. The proprietary nature of the Dremel printer meant that finding a replacement heat block was impossible and I would have to replace the entire hotend assembly. Instead, I decided to retap the threads. I identified the thread size as 8mm-1.25 and purchased a tap to clean up and restore the internal threads.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-5-1.webp"
                  alt="Full hotend assembly side by side"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Hotend assembly ready for putting together
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-5-2.webp"
                  alt="Damaged heat block threads"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Severely damaged internal threads
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-5-3.webp"
                  alt="8mm-1.25 tap"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                8mm-1.25 tap for restoring threads
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 6: Retapping the Heat Block</h2>
          <p>
            Before tapping, I would highly recommend finding a vice to hold the heat block securely. I did not have one so rather than buying one, I found that stepping on a pair of duct tape wrapped vice grips worked well enough to hold the heat block. This was my first experience using a tap and I was not sure how much force to apply. I started by applying gentle pressure and slowly increasing it until I felt the tap bite into the threads. Every step felt like it was going to break the tap or the block, but it held up and applying WD-40, I was able to successfully restore the threads.
          </p>
          <br />
          <p>
            After retapping the threads, I was able to screw the nozzle and heat sink back together securely. I then reassembled the hotend and noticed it was very slightly angled. I worried the precision required for a 3D printer would exacerbated this issue, so hoped that I could calibrate and compensate for the discrepency later. In the worst case, I would just buy a new hotend completely. This issue actually never came up and I have not had any problems with the hotend since.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-6-1.webp"
                  alt="Dremel 3D45 Repair Step 6.1"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Tap setup
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-6-3.webp"
                  alt="Dremel 3D45 Repair Step 6.3"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Complete thread recovery
              </figcaption>
            </figure>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-6-4.webp"
                  alt="Hotend assembled again"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Hotend fully assembled
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-6-5.webp"
                  alt="Hotend with casing ready for install"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Hotend with the casing ready to be put into the printer
              </figcaption>
            </figure>
          </div>


          <h2 className="mb-4 text-xl font-bold">Step 7: Custom Screw Fabrication</h2>
          <p>
            During reassembly, I realized I was missing a critical screw needed to attach the hotend to the printer frame. After searching multiple hardware stores, I found it extremely difficult to find an exact replacement that matched the required diameter, length, and thread spacing. I eventually found two screws with the correct diameter and thread pitch (almost), but they were twice the length. To make them work, I decided to cut them down to the precise length using a dremel with a cutting wheel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-7-1.webp"
                  alt="New screws with correct diameter and thread"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                New screws
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-7-2.webp"
                  alt="Cutting screws with a Dremel"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Using a dremel to cut the screws to length
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-7-3.webp"
                  alt="Final cut screws"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Visual of the final cut screws
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 8: Wiring & Casing Alignment</h2>
          <p>
            With the internal components coming together, I focused on the wiring path. It was crucial to align the wires perfectly along the designated gap in the casing to ensure a flush fit. I performed a test fit by routing the wires up through the gaps to the circuit board above. This allowed me to verify the connections and clearance before finally securing the casing in place and completing the electrical routing to the board.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-8-1.webp"
                  alt="Wire alignment along casing gap"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Aligning wires along the casing gap for a proper fit
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-8-2.webp"
                  alt="Wires routed without casing"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Routing the wires up through the gaps (casing removed)
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-8-3.webp"
                  alt="Wires routed with casing attached"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Wires successfully routed through the gaps with the casing attached
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-8-4.webp"
                  alt="Wires connected to circuit board"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Final wiring connections to the circuit board above
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 9: Filament Feeding Motor & Screw Match</h2>
          <p>
            Next was the filament feeding motor. I realized I was again missing another screw. Luckily, I was able to find a screw with the exact same dimensions from a local hardware store. Even the head size was the same which was perfect for the clearance required. With the correct screws, I was finally able to mount the filament feeding motor and secure it firmly in place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-9-1.webp"
                  alt="Missing screw for filament motor"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Another missing screw
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-9-2.webp"
                  alt="Matching replacement screw"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                M3x16mm screw with 0.5mm thread spacing
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-9-3.webp"
                  alt="Screw placement for motor mount"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Screw positions for the motor mount
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-9-4.webp"
                  alt="Filament feeding motor installed"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                The filament feeding motor securely installed and screwed down
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 10: Final Reassembly & Initial Test Run</h2>
          <p>
            With all the individual components restored and the wiring secured, I reached the complete reassembly milestone. After attaching the last pieces, I moved on to the calibration and setup phase, ensuring the bed was level and the offsets were correct. The moment of truth came with the first test run. I chose a small minifigure rubber ducky as the test subject. While the printer is now fully operational, the first print showed some issues. Half the head was missing and the layer height was atrocious. Additionally, I found dremels glass bed + glue stick combo is not the best for adhesion which was extremely frustratingly inconsistent. This confirms the printer is working, but it is now ready for the next phase of deep calibration, optimization, and modifications to achieve perfect print quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-10-1.webp"
                  alt="Reassembled print head"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                The complete head reassembled and ready for printing
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-10-2.webp"
                  alt="Calibration and setup"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Initial calibration and system setup
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-10-3.webp"
                  alt="Test run in progress"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                First test run with 3D printed minifigure rubber ducky in progress
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/dremel-3d45-step-10-4.webp"
                  alt="Incomplete test print"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                The finished ducky with missing parts
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Closing Thoughts</h2>
          <p>
            This restoration journey has been a challenging yet rewarding process of troubleshooting, fabrication, and precision assembly. This was the first time I had ever attempted to repair a 3D printer, and seeing it power on, calibrate, and successfully execute its first test run marks a major milestone. While the "mangled" rubber ducky shows that there is still significant work to be done in terms of tuning and potential modifications, the core machine is now fully functional. The foundation is set for continuous optimization, and I look forward to pushing this Dremel 3D45 to its full potential.
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
