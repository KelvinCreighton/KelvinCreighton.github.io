import Link from "next/link";
import Image from "@/components/BlurImage";

export default function EmbeddedSystemsProjects() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Embedded Systems</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Microcontrollers, hardware interfaces, and the software that brings them to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        <Link
          href="/projects/embedded-systems/dragonshell"
          className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-85 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-full aspect-video relative bg-gray-85 dark:bg-gray-800">
            <Image
              src="/images/projects/dragonshell-terminal.svg"
              alt="DragonShell command prompt illustration"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start p-6 flex-grow w-full">
            <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              DragonShell
            </h2>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
              September 2024
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 flex-grow">
              A Unix-like shell in C for CMPUT 379, implementing process execution, pipes, redirection, background jobs, signal handling, and child-process resource reporting.
            </p>
          </div>
        </Link>

        <Link
          href="/projects/engineering/dremel-3d45-rebuild"
          className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-85 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-full aspect-video relative bg-gray-85 dark:bg-gray-800">
            <div className="absolute left-3 top-3 z-10 rounded-full border border-red-900 bg-red-800/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm dark:border-red-500/40 dark:bg-red-900/90 dark:text-red-100">
              In Progress
            </div>
            <Image
              src="/images/projects/dremel-3d45-rebuild-title.webp"
              alt="Dremel DigiLab 3D45 controller rebuild"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start p-6 flex-grow w-full">
            <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Dremel DigiLab 3D45 - Controller Rebuild
            </h2>
            <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
              May 2026 - July 2026
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 flex-grow">
              Rebuilding a Dremel DigiLab 3D45 after a fried motherboard using an Arduino Mega 2560, RAMPS 1.4, and salvage parts from another printer.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
