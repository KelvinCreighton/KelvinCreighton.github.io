import Image from "@/components/BlurImage";

export default function FileSystemSimulatorProject() {
  return (
    <div className="project-body">
      <article className="article-content">
        <header className="project-introduction">

          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            CMPUT 379: Operating System Concepts &bull; University of Alberta
          </p>

          <p className="mb-6 text-xl italic leading-relaxed text-gray-700 dark:text-gray-300">
            I wrote a C program that treats a disk image as a small storage
            device. Rather than asking the host operating system to manage
            simulated files, the program reads and updates the image directly.
            The superblock records allocation and inode data, while the
            remaining blocks hold file contents.
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

        </header>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Designing the disk layout
          </h2>
          <p>
            The simulator works with a 128 KiB image divided into 128 blocks of
            1 KiB. Block zero stores the 1 KiB superblock. Its first 16 bytes
            are a bitmap for block allocation, followed by 126 inode records,
            each eight bytes long. The other 127 blocks are available for file
            data.
          </p>
          <p>
            Each inode stores a five character name, a state and file size, a
            starting block, and a parent index. I used the high bit of the state
            byte to mark an inode as occupied, and the high bit of the parent
            byte to distinguish a directory from a file. The root directory uses
            index 127. This compact layout made the relationship between
            metadata, allocation, and file contents explicit in the code.
          </p>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Building file operations on top of the image
          </h2>
          <p>
            I implemented commands to mount an image, create and remove files or
            directories, list a directory, change the current directory, and
            read or write file blocks through a 1 KiB buffer. Directory entries
            are represented by inodes linked to their parent directory. Names
            are compared without regard to case, and the implementation keeps a
            per directory linked list to check for duplicates.
          </p>
          <p>
            Creating a file searches the allocation bitmap for a contiguous run
            of free blocks. Shrinking a file clears and frees its trailing
            blocks. When a file grows, the simulator first checks whether the
            blocks beside it are available; if not, it searches for a new run,
            copies the existing data, and updates the inode and bitmap. The
            defragmentation command moves file data toward the start of the
            image and rebuilds the allocation map.
          </p>
          <p>
            Mounting also checks several relationships inside the image. It
            verifies inode state and names, file block ranges, directory sizes,
            parent references, duplicate names, and agreement between the
            allocation bitmap and the blocks claimed by files. I had to reason
            about the serialized bytes as well as the in memory structures used
            while commands run.
          </p>
        </section>

        <section className="mb-10 w-full rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            What I worked through
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <li>
              Keeping the allocation bitmap, inode table, and file data
              consistent as commands modify the image.
            </li>
            <li>
              Representing nested directories with parent indices and removing
              directory contents recursively.
            </li>
            <li>
              Moving file data safely when a larger contiguous extent is needed.
            </li>
            <li>
              Comparing command output and exact disk image results with the
              repository&apos;s four fixtures.
            </li>
          </ul>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scope and next steps
          </h2>
          <p>
            This is a deliberately small filesystem. The image has a fixed size,
            files use contiguous blocks, names are limited to five characters,
            and commands come from a script. Course feedback identified
            remaining issues in exact error handling, deletion consistency, some
            resize and defragmentation results, and memory cleanup. My next
            steps would be to validate every boundary before changing the image,
            make metadata updates safer, and release all mount time bookkeeping.
          </p>
        </section>
      </article>
    </div>
  );
}
