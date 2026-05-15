import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

export default function TacomaValveCoverProject() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <article className="w-full max-w-4xl flex flex-col items-start px-2 md:px-0">
        {/* Navigation */}
        <Link
          href="/projects/auto"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Automotive Projects
        </Link>

        {/* Header Section */}
        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              May 2022
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Valve Cover Replacement & Modification
          </h1>
          <p className="text-xl italic mb-6">2002 Toyota Tacoma</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/projects/tacoma-vc-title.webp"
              alt="Toyota Tacoma Valve Cover Project"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            The original owners of this vehicle had modified one of the ends of the valve cover, trimming it down slightly so it would fit properly. Because of this, when I went to replace the valve cover gasket, I inevitably cracked the end of the valve cover itself leading to a persistent oil leak. This project started as a simple replacement but turned into a custom modification involving a dremel, steel chunks, and JB Weld.
          </p>
        </header>

        {/* Content Body */}
        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <h2 className="mb-4 text-xl font-bold">The Problem</h2>
          <p>
            The original valve cover on my 2002 Tacoma had reached its breaking point. It ended up cracking and breaking off on one of the ends where it bolts into the block, resulting in a noticeable oil leak.
          </p>
          <p>
            Upon inspection, it was clear that the previous owner had already struggled with this part. They had shaved down the valve cover to make the bolts fit better, which worked for a while but significantly weakened the structure. Because it was slimmer than it was designed to be, the material eventually failed under stress.
          </p>
          <br />
          <p>
            Because finding a 2002 specific replacement proved difficult, I managed to source a valve cover from a 2000 Toyota Tacoma at an auto wreck. While it bolted perfectly to the engine block, I quickly realized a major incompatibility with the spark plug wires. The 2002 model uses 90-degree boots, while the 2000 cover was designed for straight-up connectors. This meant the 2002 wires simply would not fit without significant modification to the cover itself.
          </p>
          <p>
            So like any sane person would do, I grabbed a dremel and started cutting (rather than just buying the spark plug wires of the 2000 Toyota Tacoma and soldering them on).
          </p>


          {/* Project Overview Component */}
          <div className="bg-gray-85 dark:bg-gray-900 rounded-xl p-6 my-8 border border-gray-200 dark:border-gray-800">
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
              Project Overview
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Parts & Tools
                </h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>Donor Valve Cover (2000 Toyota Tacoma)</li>
                  <li>High-Temp Black JB Weld</li>
                  <li>Steel Chunks (Scrap)</li>
                  <li>Nuts & Bolts (Scrap)</li>
                  <li>Dremel Tool</li>
                  <li>Cleaning Solvents & Degreaser</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Quick Stats
                </h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li>
                    <span className="font-semibold">Date of Fix:</span> May 2022
                  </li>
                  <li>
                    <span className="font-semibold">Longevity:</span> 4+ Years (No Leaks)
                  </li>
                  <li>
                    <span className="font-semibold">Difficulty:</span> 3/5 (Creative Problem Solving)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 1: Analyzing the Broken Part</h2>
          <p>
            The initial phase involved a detailed inspection of the failed component. The crack was clean through the aluminum, showing how the material had fatigued after being thinned out by a previous owner.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 my-10">
            <figure className="m-0 w-full md:w-1/3">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-1-1.webp"
                  alt="Analyzing the broken valve cover - Part 1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0 w-full md:w-1/3">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-1-2.webp"
                  alt="Analyzing the broken valve cover - Part 2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 2: Measuring and Cutting</h2>
          <p>
            After sourcing the 2000 model donor cover, I had to map out exactly where the 90 degree spark plug boots would collide with the aluminum wall. This required semi-precise measurements before making the first structural cuts with the Dremel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-2-1.webp"
                  alt="Measuring and initial cutting - Step 2.1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Original 2002 Valve Cover
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-2-2.webp"
                  alt="Measuring and initial cutting - Step 2.2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Donor 2000 Start of Cutting
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-2-3.webp"
                  alt="Measuring and initial cutting - Step 2.3"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Donor 2000 Finalized Cutting
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 3: JB Welding Custom Cut Steel Caps</h2>
          <p>
            With the clearance holes established, I used a scrap steel sheet from Home Depot and cut custom "caps" for the openings. These were bonded using High-Temp Black JB Weld, which was chosen for its high temperature resistance and strength in an engine environment. It basically cures like metal.
          </p>
          <br />
          <p>
            With this step however, I had to be extra careful to analyze and understand how the oil was flowing through the valve cover. If I had accidentally blocked any of the oil passages, it would have resulted in catastrophic engine failure. I made sure to check which areas I could block entirely and which I had to leave open with "custom tunnels" to ensure proper oil flow.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 my-10">
            <figure className="m-0 w-full md:w-1/3">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-3-1.webp"
                  alt="JB Welding Custom Cut Steel Caps - Step 3.1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                JB Welding Custom Cut Steel Caps
              </figcaption>
            </figure>
            <figure className="m-0 w-full md:w-1/3">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-3-2.webp"
                  alt="JB Welding Custom Cut Steel Caps - Step 3.2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Side by Side Comparison
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 4: Creating Custom Studs for Spark Plug Boots</h2>
          <p>
            The 2002 spark plug boots require a secure mounting point on the valve cover to hold them in place, but the 2000 donor cover lacked these specific mounts. At the time, I didn&apos;t have a tap and die set or the experience to thread the aluminum directly. To solve this, I developed a "stud and nut" workaround. I drilled holes into the cover, cut the heads off all four bolts to create threaded studs, and inserted them into the holes. I secured these studs with nuts at the base and permanently bonded them to the cover with a thick layer of JB Weld. This effectively converted the system into a stud-based mount, allowing the boots to be firmly secured with a simple nut on top.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-4-3.webp"
                  alt="Creating Custom Studs for Spark Plug Boots - Step 4.3"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-4-2.webp"
                  alt="Creating Custom Studs for Spark Plug Boots - Step 4.2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-85 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-4-1.webp"
                  alt="Creating Custom Studs for Spark Plug Boots - Step 4.1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Old Bolts Used for Alignment
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Closing Thoughts</h2>
          <p>
            This fix was during my earlier days of DIY mechanics. To this day, over four years later, the modification has held up perfectly with zero oil leaks. It serves as a reminder that with a bit of ingenuity (and some high-quality epoxy), you can overcome compatibility issues that might otherwise stall a project.
          </p>

          <br /><br />

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>
        <ProjectPager
          category="auto"
          currentPath="/projects/auto/tacoma-valve-cover"
        />
      </article>
    </main>
  );
}
