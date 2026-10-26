import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

const technicalAreas = [
  "C",
  "POSIX threads",
  "Thread pools",
  "Hash partitioning",
  "Mutexes and condition variables",
  "MapReduce callbacks",
];

export default function MapReduceLibraryProject() {
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
              October–November 2024
            </time>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            MapReduce Library
          </h1>
          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            CMPUT 379: Operating System Concepts &bull; University of Alberta
          </p>
          <a
            href="https://github.com/KelvinCreighton/mapreduce-library"
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
            I built a reusable MapReduce library in C, then used it to write a word count program. The framework accepts mapper and reducer callbacks, routes emitted key and value pairs into partitions, and lets each reducer consume the values for its keys.
          </p>

          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <Image
              src="/images/projects/mapreduce-library.svg"
              alt="Diagram of input files flowing through mapper workers and hash partitions to reducer output"
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
            A framework built around callbacks
          </h2>
          <p>
            The public API is built around four functions. <code>MR_Run()</code> coordinates mapping and reducing, <code>MR_Emit()</code> stores each key and value pair, <code>MR_Partitioner()</code> chooses a partition for a key, and <code>MR_GetNext()</code> returns values for a key to the reducer. That separation lets an application define its own map and reduce work without managing the framework&apos;s queues and partitions directly.
          </p>
          <p>
            In the word count example, the mapper reads a file and emits each token with the value <code>1</code>. The reducer repeatedly requests values for one key, counts them, and appends the result to a file named for its partition.
          </p>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scheduling and partitioning work
          </h2>
          <p>
            I implemented a pthread job queue for mapper and reducer work. Mapper jobs use input file size as their priority; reducer jobs use the number of values in a partition. The queue inserts jobs in ascending priority order. Mutexes protect queue state and the shared partition table, while a condition variable is used to coordinate the end of each phase.
          </p>
          <p>
            <code>MR_Emit()</code> hashes each key with a DJB2 style hash to select a partition. It copies the key and value into a linked list kept in ASCII key order. During reduction, <code>MR_GetNext()</code> removes and returns one value for the requested key at a time, freeing the stored pair as it goes.
          </p>
        </section>

        <section className="mb-10 w-full rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            What I worked through
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <li>Separating application callbacks from the framework that schedules their work.</li>
            <li>Protecting shared key and value data while multiple mapper jobs emit results.</li>
            <li>Grouping values by key and consuming them safely during reduction.</li>
            <li>Building and checking the library with compiler warnings treated as errors, pthread support, sample text files, and memory checking.</li>
          </ul>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scope and next steps
          </h2>
          <p>
            This implementation runs on one machine with POSIX threads. The library received 90/100. Course feedback gave full marks for runtime and memory use, but noted incorrect results on tests beyond the sample inputs. The worker routine also exits when it sees an empty queue instead of waiting for more jobs, so I would make the worker lifecycle reliable before claiming dependable parallel execution. I would then expand the tests to cover empty input, repeated separators, and a wider range of keys and partitions.
          </p>
        </section>

        <ProjectPager
          category="embedded-systems"
          currentPath="/projects/embedded-systems/mapreduce-library"
        />
      </article>
    </main>
  );
}
