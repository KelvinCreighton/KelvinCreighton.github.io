import Image from "@/components/BlurImage";

export default function DragonShellProject() {
  return (
    <div className="project-body">
      <article className="article-content">
        <header className="project-introduction">

          <p className="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
            CMPUT 379: Operating System Concepts &bull; University of Alberta
          </p>

          <p className="mb-6 text-xl italic leading-relaxed text-gray-700 dark:text-gray-300">
            I built DragonShell in C to make operating system concepts concrete.
            A command entered at the prompt becomes a process; its file
            descriptors determine where data flows, and the shell must
            coordinate with the child program that runs it.
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

        </header>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Implementing a shell with Unix system calls
          </h2>
          <p>
            For CMPUT 379, I wrote a small shell for Unix systems without
            relying on a shell library. I built the command loop, parsed each
            input line, separated commands built into the shell from external
            programs, and managed the processes and file descriptors needed to
            run them. I had to manage those mechanics myself, from starting a
            child process to deciding how its input and output reached the
            program.
          </p>
          <p>
            I started with the prompt and commands for checking and changing
            directories. Next came external program execution, then output and
            input redirection and pipes. As those features began to interact, I
            returned to the parser, error handling, and process cleanup to make
            the pieces work together.
          </p>
          <p>
            DragonShell supports <code>cd</code>, <code>pwd</code>, and{" "}
            <code>exit</code> as commands built into the shell. For external
            commands, the shell creates a child with <code>fork()</code>; the
            child configures its input and output, then calls{" "}
            <code>execve()</code>. The parent waits with <code>waitpid()</code>{" "}
            for foreground work, while an <code>&amp;</code> command can run in
            the background.
          </p>
        </section>

        <section className="mb-10 w-full space-y-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Controlling process data flow
          </h2>
          <p>
            I implemented input and output redirection by opening the requested
            file and using <code>dup2()</code> to connect it to standard input
            or standard output. For a single pipeline, DragonShell creates a
            pipe and maps its file descriptors so one external command can
            provide input to the next. I also had to close descriptors that were
            no longer needed and handle missing files, missing commands, and
            incomplete redirection or pipe syntax.
          </p>
          <p>
            The shell registers handlers for <code>SIGINT</code> and{" "}
            <code>SIGTSTP</code>, tracks foreground, background, and suspended
            process IDs, and cleans up tracked work when the user exits. On
            shutdown, it reports the user and system CPU time of child processes
            with <code>getrusage()</code>.
          </p>
        </section>

        <section className="mb-10 w-full rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            What I worked through
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <li>
              Coordinating parent and child processes, including foreground
              waits and background execution.
            </li>
            <li>
              Routing data through files and pipes by manipulating Unix file
              descriptors.
            </li>
            <li>Tracking process state across signals and shell shutdown.</li>
            <li>
              Testing the shell with commands built into it, external programs,
              redirection, pipelines, background work, and signal behavior; then
              checking process and memory behavior with system tools.
            </li>
          </ul>
        </section>

        <section className="mb-10 w-full space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Scope and result
          </h2>
          <p>
            I kept the parser focused on the assignment. It separates arguments
            by spaces, invokes external programs by executable path, connects
            two commands with a pipe, and tracks one background process at a
            time. Within those limits, the project brings process creation,
            execution, waiting, I/O redirection, signals, and resource reporting
            together in one working program.
          </p>
          <p>
            The assignment received <strong>97/100</strong>. The grading
            feedback awarded full marks for the commands implemented in the
            shell, external command execution, CPU time reporting, background
            execution, redirection, piping, and signal handling. The recorded
            deductions were for a missing <code>compile</code> Makefile target
            and the README filename.
          </p>
        </section>
      </article>
    </div>
  );
}
