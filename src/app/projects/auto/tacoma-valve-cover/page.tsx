import Image from "next/image";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

export default function TacomaValveCoverProject() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 bg-white dark:bg-black w-full">
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

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
            <Image
              src="/images/projects/tacoma-vc-title.jpg"
              alt="Toyota Tacoma Valve Cover Project"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            the original owners of this vehicle had modified one of the ends of the valve cover, trimming it down so it would fit properly. Because of this, when I went to replace the valve cover gasket, I inevitably cracked the end of the valve cover itself leading to a persistent oil leak. This project started as a simple replacement but turned into a custom modification involving a dremel, steel chunks, and JB Weld.
          </p>
        </header>

        {/* Content Body */}
        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <h2 className="mb-4 text-xl font-bold">The Problem: A Fragile Legacy</h2>
          <p>
            The original valve cover on my 2002 Tacoma had reached its breaking point—literally. It ended up cracking and breaking off on one of the ends where it screws into the block, resulting in a small but noticeable oil leak. 
          </p>
          <p>
            Upon inspection, it was clear that the previous owner had already struggled with this part. They had shaved down the valve cover to make the screws fit better, which worked for a while but significantly weakened the structure. Because it was slimmer than it was designed to be, the material eventually failed under stress.
          </p>

          {/* Project Overview Component */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 my-8 border border-gray-100 dark:border-gray-800">
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
                  <li>Aluminum Chunks (Scrap)</li>
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

          <h2 className="mb-4 text-xl font-bold">Step 1: Analyzing the broken part</h2>
          <p>
            The initial phase involved a detailed inspection of the failed component. The crack was clean through the aluminum, showing how the material had fatigued after being thinned out by a previous owner.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-title.jpg"
                  alt="Analyzing the broken valve cover - Part 1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-1-2.jpg"
                  alt="Analyzing the broken valve cover - Part 2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 2: Measuring and initial cutting</h2>
          <p>
            After sourcing the 2000-model donor cover, I had to map out exactly where the 90-degree spark plug boots would collide with the aluminum wall. This required precise measurements before making the first structural cuts with the Dremel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-2-1.jpg"
                  alt="Measuring and initial cutting - Step 2.1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-2-2.jpg"
                  alt="Measuring and initial cutting - Step 2.2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-2-3.jpg"
                  alt="Measuring and initial cutting - Step 2.3"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 3: Final cutting and jb welding</h2>
          <p>
            With the clearance holes established, I used scrap aluminum pieces to create "caps" for the openings. These were bonded using High-Temp Black JB Weld, which was chosen for its high-temperature resistance and strength in an engine environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-3-1.jpg"
                  alt="Final cutting and jb welding - Step 3.1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-3-2.jpg"
                  alt="Final cutting and jb welding - Step 3.2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 4: Drilling and bolt jb welding</h2>
          <p>
            The final step involved refining the mounting holes and ensuring the bolts would seat correctly despite the custom patches. I applied additional JB Weld to reinforce the areas around the bolts to prevent any future stress cracks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-10">
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-4-1.jpg"
                  alt="Drilling and bolt jb welding - Step 4.1"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-4-2.jpg"
                  alt="Drilling and bolt jb welding - Step 4.2"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
            <figure className="m-0">
              <div className="relative w-full rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-100 dark:border-gray-800">
                <Image
                  src="/images/projects/tacoma-vc-4-3.jpg"
                  alt="Drilling and bolt jb welding - Step 4.3"
                  width={4032}
                  height={3024}
                  className="w-full h-auto object-contain"
                />
              </div>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Long-Term Reliability</h2>
          <p>
            This fix was born out of necessity and a "can-do" attitude during my earlier days of DIY mechanics. To this day, over four years later, the modification has held up perfectly with zero oil leaks. It serves as a reminder that with a bit of ingenuity (and some high-quality epoxy), you can overcome compatibility issues that might otherwise stall a project.
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
