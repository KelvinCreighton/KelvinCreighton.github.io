import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

export default function Dremel3D45ModProject() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
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
            Dremel 3D45: Modification & Optimization
          </h1>
          <p className="text-xl italic mb-6">Advanced calibration and hardware/software refinements for the Dremel DigiLab 3D45.</p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/projects/dremel-3d45-mod-title.webp"
              alt="Dremel DigiLab 3D45 Modification"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            With the core repairs complete and the printer back in a functional state, the focus shifted from restoration to refinement. This project documents the deep calibration, hardware modifications, and software optimizations performed to push the Dremel 3D45 beyond its factory capabilities and proprietary limitations.
          </p>
        </header>

        {/* Content Body */}
        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <h2 className="mb-4 text-xl font-bold">Modification Overview</h2>
          <p>
            The goal of this stage is to optimize print quality, increase reliability, and potentially unlock features restricted by the original Dremel firmware and hardware design.
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
              Project Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Focus Areas
                </h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>Bed Leveling Calibration</li>
                  <li>Extrusion Multiplier Tuning</li>
                  <li>Firmware Limitations Analysis</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Quick Stats
                </h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li>
                    <span className="font-semibold">Current Phase:</span> Calibration
                  </li>
                  <li>
                    <span className="font-semibold">Difficulty:</span> 4/5 (Advanced Tuning)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 1: [Title]</h2>
          <p>
            [Description of Modification Step 1]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                [Caption]
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                [Caption]
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 2: [Title]</h2>
          <p>
            [Description of Modification Step 2]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                [Caption]
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                [Caption]
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 3: [Title]</h2>
          <p>
            [Description of Modification Step 3]
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                [Caption]
              </figcaption>
            </figure>
            <figure className="m-0">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-400">
                Image Placeholder
              </div>
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                [Caption]
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Closing Thoughts</h2>
          <p>
            Modification and optimization is a continuous process. As testing progress, new insights will be documented here.
          </p>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>
        <ProjectPager
          category="engineering"
          currentPath="/projects/engineering/dremel-3d45-mod"
        />
      </article>
    </main>
  );
}
