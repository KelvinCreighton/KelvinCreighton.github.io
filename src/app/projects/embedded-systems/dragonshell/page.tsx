import Image from "@/components/BlurImage";
import Link from "next/link";
import ProjectPager from "@/components/ProjectPager";

const technicalAreas = [
  "C",
  "Unix processes",
  "fork() / execve()",
  "File descriptors",
  "Pipes and redirection",
  "Signals",
];

export default function DragonShellProject() {
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
              September 2024
            </time>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            DragonShell
          </h1>
          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            CMPUT 379: Operating System Concepts &bull; University of Alberta
          </p>
          <a
            href="https://github.com/KelvinCreighton/dragonshell"
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
            I built DragonShell in C to make operating system concepts concrete. A command entered at the prompt becomes a process; its file descriptors determine where data flows, and the shell must coordinate with the child program that runs it.
          </p>

          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-800">
            <Image
              src="/images/projects/dragonshell-terminal.svg"
              alt="Illustration of DragonShell commands and the system calls behind process execution and pipes"
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
            Implementing a shell with Unix system calls
          </h2>
          <p>
            For CMPUT 379, I wrote a small shell for Unix systems without relying on a shell library. I built the command loop, parsed each input line, separated commands built into the shell from external programs, and managed the processes and file descriptors needed to run them. I had to manage those mechanics myself, from starting a child process to deciding how its input and output reached the program.
          </p>
          <p>
            I started with the prompt and commands for checking and changing directories. Next came external program execution, then output and input redirection and pipes. As those features began to interact, I returned to the parser, error handling, and process cleanup to make the pieces work together.
          </p>
          <p>
            DragonShell supports <code>cd</code>, <code>pwd</code>, and <code>exit</code> as commands built into the shell. For external commands, the shell creates a child with <code>fork()</code>; the child configures its input and output, then calls <code>execve()</code>. The parent waits with <code>waitpid()</code> for foreground work, while an <code>&amp;</code> command can run in the background.
          </p>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Controlling process data flow
          </h2>
          <p>
            I implemented input and output redirection by opening the requested file and using <code>dup2()</code> to connect it to standard input or standard output. For a single pipeline, DragonShell creates a pipe and maps its file descriptors so one external command can provide input to the next. I also had to close descriptors that were no longer needed and handle missing files, missing commands, and incomplete redirection or pipe syntax.
          </p>
          <p>
            The shell registers handlers for <code>SIGINT</code> and <code>SIGTSTP</code>, tracks foreground, background, and suspended process IDs, and cleans up tracked work when the user exits. On shutdown, it reports the user and system CPU time of child processes with <code>getrusage()</code>.
          </p>
        </section>

        <section className="mb-10 w-full rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            What I worked through
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <li>Coordinating parent and child processes, including foreground waits and background execution.</li>
            <li>Routing data through files and pipes by manipulating Unix file descriptors.</li>
            <li>Tracking process state across signals and shell shutdown.</li>
            <li>Testing the shell with commands built into it, external programs, redirection, pipelines, background work, and signal behavior; then checking process and memory behavior with system tools.</li>
          </ul>
        </section>

        <section className="mb-10 w-full space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scope and result
          </h2>
          <p>
            I kept the parser focused on the assignment. It separates arguments by spaces, invokes external programs by executable path, connects two commands with a pipe, and tracks one background process at a time. Within those limits, the project brings process creation, execution, waiting, I/O redirection, signals, and resource reporting together in one working program.
          </p>
          <p>
            The assignment received <strong>97/100</strong>. The grading feedback awarded full marks for the commands implemented in the shell, external command execution, CPU time reporting, background execution, redirection, piping, and signal handling. The recorded deductions were for a missing <code>compile</code> Makefile target and the README filename.
          </p>
        </section>

        <ProjectPager
          category="embedded-systems"
          currentPath="/projects/embedded-systems/dragonshell"
        />
      </article>
    </main>
  );
}
