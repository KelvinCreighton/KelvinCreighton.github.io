import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

const technicalAreas = [
  "C",
  "Disk images",
  "Inodes",
  "Allocation bitmap",
  "Directories",
  "Defragmentation",
];

export default function FileSystemSimulatorProject() {
  return (
    <main className="animate-page-enter flex w-full flex-col items-center px-4 pb-8 pt-0 md:px-8 md:pb-12 lg:px-24 lg:pb-16">
      <article className="flex w-full max-w-4xl flex-col items-start px-2 md:px-0">
        <Link
          href="/projects/embedded-systems"
          className="mb-8 flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-blue-600"
        >
          &larr; Back to Embedded Systems Projects
        </Link>

        <header className="mb-12 w-full border-b border-gray-200 pb-8 dark:border-gray-800">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              November–December 2024
            </time>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            File System Simulator
          </h1>
          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            CMPUT 379: Operating System Concepts &bull; University of Alberta
          </p>
          <a
            href="https://github.com/KelvinCreighton/file-system-simulator"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-colors hover:border-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-gray-300 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View Source on GitHub
          </a>

          <p className="mb-6 text-xl italic leading-relaxed text-gray-700 dark:text-gray-300">
            I wrote a C program that treats a disk image as a small storage device. Rather than asking the host operating system to manage simulated files, the program reads and updates the image directly: a superblock records allocation and inode data, and the remaining blocks hold file contents.
          </p>

          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <Image
              src="/images/projects/file-system-simulator.svg"
              alt="Diagram of the simulated disk image, including its superblock, inode table, free block map, and data blocks"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {technicalAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-200"
              >
                {area}
              </span>
            ))}
          </div>
        </header>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Designing the disk layout
          </h2>
          <p>
            The simulator works with a 128 KiB image divided into 128 blocks of 1 KiB. Block zero stores the 1 KiB superblock. Its first 16 bytes are a bitmap for block allocation, followed by 126 inode records, each eight bytes long. The other 127 blocks are available for file data.
          </p>
          <p>
            Each inode stores a five character name, a state and file size, a starting block, and a parent index. I used the high bit of the state byte to mark an inode as occupied, and the high bit of the parent byte to distinguish a directory from a file. The root directory uses index 127. This compact layout made the relationship between metadata, allocation, and file contents explicit in the code.
          </p>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Building file operations on top of the image
          </h2>
          <p>
            I implemented commands to mount an image, create and remove files or directories, list a directory, change the current directory, and read or write file blocks through a 1 KiB buffer. Directory entries are represented by inodes linked to their parent directory. Names are compared without regard to case, and the implementation keeps a per directory linked list to check for duplicates.
          </p>
          <p>
            Creating a file searches the allocation bitmap for a contiguous run of free blocks. Shrinking a file clears and frees its trailing blocks. When a file grows, the simulator first checks whether the blocks beside it are available; if not, it searches for a new run, copies the existing data, and updates the inode and bitmap. The defragmentation command moves file data toward the start of the image and rebuilds the allocation map.
          </p>
          <p>
            Mounting also checks relationships inside the image: inode state and names, file block ranges, directory sizes, parent references, duplicate names, and whether the allocation bitmap agrees with the blocks claimed by files. I had to reason about the serialized bytes as well as the in memory structures used while commands run.
          </p>
        </section>

        <section className="mb-10 w-full rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            What I worked through
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <li>Keeping the allocation bitmap, inode table, and file data consistent as commands modify the image.</li>
            <li>Representing nested directories with parent indices and removing directory contents recursively.</li>
            <li>Moving file data safely when a larger contiguous extent is needed.</li>
            <li>Comparing command output and exact disk image results with the repository&apos;s four fixtures.</li>
          </ul>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scope and next steps
          </h2>
          <p>
            This is a deliberately small filesystem: the image has a fixed size, files use contiguous blocks, names are limited to five characters, and commands come from a script. Course feedback identified remaining issues in exact error handling, deletion consistency, some resize and defragmentation results, and memory cleanup. Those findings point to the next work I would do: validate every boundary before changing the image, make metadata updates safer, and release all mount time bookkeeping.
          </p>
        </section>

        <ProjectPager
          category="embedded-systems"
          currentPath="/projects/embedded-systems/file-system-simulator"
        />
      </article>
    </main>
  );
}
