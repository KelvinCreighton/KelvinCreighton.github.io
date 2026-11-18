import Image from "@/components/BlurImage";

export default function MapReduceLibraryProject() {
  return (
    <div className="project-body">
      <article className="article-content">
        <header className="project-introduction">

          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            CMPUT 379: Operating System Concepts &bull; University of Alberta
          </p>

          <p className="mb-6 text-xl italic leading-relaxed text-gray-700 dark:text-gray-300">
            I built a reusable MapReduce library in C, then used it to write a
            word count program. The framework accepts mapper and reducer
            callbacks, routes emitted key and value pairs into partitions, and
            lets each reducer consume the values for its keys.
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

        </header>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            A framework built around callbacks
          </h2>
          <p>
            The public API is built around four functions. <code>MR_Run()</code>{" "}
            coordinates mapping and reducing, <code>MR_Emit()</code> stores each
            key and value pair, <code>MR_Partitioner()</code> chooses a
            partition for a key, and <code>MR_GetNext()</code> returns values
            for a key to the reducer. That separation lets an application define
            its own map and reduce work without managing the framework&apos;s
            queues and partitions directly.
          </p>
          <p>
            In the word count example, the mapper reads a file and emits each
            token with the value <code>1</code>. The reducer repeatedly requests
            values for one key, counts them, and appends the result to a file
            named for its partition.
          </p>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scheduling and partitioning work
          </h2>
          <p>
            I implemented a pthread job queue for mapper and reducer work.
            Mapper jobs use input file size as their priority; reducer jobs use
            the number of values in a partition. The queue inserts jobs in
            ascending priority order. Mutexes protect queue state and the shared
            partition table, while a condition variable is used to coordinate
            the end of each phase.
          </p>
          <p>
            <code>MR_Emit()</code> hashes each key with a DJB2 style hash to
            select a partition. It copies the key and value into a linked list
            kept in ASCII key order. During reduction, <code>MR_GetNext()</code>{" "}
            removes and returns one value for the requested key at a time,
            freeing the stored pair as it goes.
          </p>
        </section>

        <section className="mb-10 w-full rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            What I worked through
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <li>
              Separating application callbacks from the framework that schedules
              their work.
            </li>
            <li>
              Protecting shared key and value data while multiple mapper jobs
              emit results.
            </li>
            <li>
              Grouping values by key and consuming them safely during reduction.
            </li>
            <li>
              Building and checking the library with compiler warnings treated
              as errors, pthread support, sample text files, and memory
              checking.
            </li>
          </ul>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scope and next steps
          </h2>
          <p>
            This implementation runs on one machine with POSIX threads. The
            library received 90/100. Course feedback gave full marks for runtime
            and memory use, but noted incorrect results on tests beyond the
            sample inputs. The worker routine also exits when it sees an empty
            queue instead of waiting for more jobs, so I would make the worker
            lifecycle reliable before claiming dependable parallel execution. I
            would then expand the tests to cover empty input, repeated
            separators, and a wider range of keys and partitions.
          </p>
        </section>
      </article>
    </div>
  );
}
