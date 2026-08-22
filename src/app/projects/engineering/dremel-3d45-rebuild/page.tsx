import Image from "@/components/BlurImage";
import Link from "next/link";
import InProgressNotice from "@/components/InProgressNotice";
import ProjectPager from "@/components/ProjectPager";

export default function Dremel3D45RebuildProject() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <article className="w-full max-w-4xl flex flex-col items-start px-2 md:px-0">
        <Link
          href="/projects/engineering"
          className="text-sm text-gray-500 hover:text-blue-600 transition-colors mb-8 flex items-center gap-2"
        >
          &larr; Back to Engineering Projects
        </Link>

        <header className="w-full border-b border-gray-200 dark:border-gray-800 pb-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm italic text-gray-500 dark:text-gray-400">
              May 2026 - July 2026
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Dremel DigiLab 3D45 - Controller Rebuild
          </h1>
          <p className="text-xl italic mb-6">
            Rebuilding a Dremel DigiLab 3D45 after the original motherboard was
            damaged during fan voltage testing.
          </p>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
            <div className="absolute left-3 top-3 z-10 rounded-full border border-red-900 bg-red-800/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm dark:border-red-500/40 dark:bg-red-900/90 dark:text-red-100">
              In Progress
            </div>
            <Image
              src="/images/projects/dremel-3d45-rebuild-title.webp"
              alt="Dremel DigiLab 3D45 controller rebuild"
              fill
              className="object-cover"
              priority
            />
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            This project started after I accidentally fried the printer&apos;s
            motherboard while testing an output voltage for the turbo fan. The
            failure took out the drivers and left the printer completely dead.
            Instead of treating the machine as a loss, I rebuilt it around an
            Arduino Mega 2560 and RAMPS 1.4 board pulled from another broken
            printer I had salvaged from an electronics waste bin.
          </p>
        </header>

        <InProgressNotice message="This rebuild is still ongoing. More photos, wiring details, and firmware notes will be added as the project continues." />

        <div className="w-full prose prose-lg dark:prose-invert max-w-none">
          <h2 className="mb-4 text-xl font-bold">Project Focus</h2>
          <p>
            The goal was to keep the Dremel&apos;s higher-value frame and chassis
            while replacing the failed control electronics with something I
            could maintain and iterate on more easily. I stripped usable parts
            from the donor printer and used them to rebuild the Dremel&apos;s
            control system instead of trying to source proprietary replacement
            boards.
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
              Build Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Core Hardware
                </h4>
                <ul className="m-0 pl-4 text-sm">
                  <li>Arduino Mega 2560</li>
                  <li>RAMPS 1.4 board</li>
                  <li>A4988 stepper drivers</li>
                  <li>TMC2209 stepper drivers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 mt-0">
                  Current State
                </h4>
                <ul className="m-0 pl-4 text-sm space-y-1 list-none">
                  <li>
                    <span className="font-semibold">Phase:</span> Rebuild and
                    validation
                  </li>
                  <li>
                    <span className="font-semibold">Status:</span> In progress
                  </li>
                  <li>
                    <span className="font-semibold">Scope:</span> Electronics
                    replacement and printer recovery
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-xl font-bold">Initial Failure</h2>
          <p>
            After the first rebuild, the printer was actually printing parts
            again. But once I let it run for a while, I started running into
            heat creep. My first thought was that the turbo fan might not be
            getting the right voltage. Since the printer is proprietary, it
            never really tells you what the fan is supposed to run at, so I
            grabbed a multimeter and checked the connector myself. While I was
            probing the fan lines, I accidentally touched the red positive lead
            to the yellow tachometer signal line. Right after that, the
            printer started acting dead on the higher-voltage side. The motors
            stopped, and the heating element was only getting about 5 volts,
            which was nowhere near enough to heat the block. The screen and
            lights still worked, so I knew the 5V side was fine, but
            everything else had clearly been knocked out. That was what pushed
            me to test the motherboard and PSU, hoping I only tripped a fuse.
          </p>

          <div className="grid grid-cols-1 gap-4 md:gap-6 my-8 md:my-10">
            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-video">
                <Image
                  src="/images/projects/dremel-3d45-rebuild-initial-failure.webp"
                  alt="Initial failure testing on the Dremel DigiLab 3D45"
                  fill
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Turbo fan voltage testing
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 1: Diagnosing the Problem</h2>
          <p>
            The first stage of the rebuild was diagnosis. I started by
            isolating the power system and checking the printer&apos;s incoming
            power path before moving any deeper into the electronics.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold">Step 1.1: PSU Inspection and Output Testing</h3>
          <p>
            I removed the PSU and opened it up to inspect it for any obvious
            shorting, damage, or burnt components, but I did not push much
            further at that point because I knew enough to respect the risks of
            working inside a power supply without more experience. After
            putting it back in and confirming it powered up normally, I moved
            on to testing the output wiring. The goal there was to verify the
            voltage coming off the PSU leads while the wiring was still
            connected to the motherboard, so I could compare the supply output
            against what was actually reaching the board and look for any
            discrepancies in the path.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-1-1-1.webp"
                  alt="PSU opened for inspection during diagnosis"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                PSU removed and opened for inspection
              </figcaption>
            </figure>

            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-1-1-2.webp"
                  alt="PSU output wiring tested while still connected to the motherboard"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Output wiring checked while still connected to the motherboard
              </figcaption>
            </figure>
          </div>

          <h3 className="mb-4 mt-8 text-lg font-bold">Step 1.2: Motherboard Driver Testing</h3>
          <p>
            From there I moved deeper into the control board itself. The first
            photo shows the motherboard still installed in the printer, with
            the printer propped on its side so the bottom-mounted board is
            facing forward. I circled the four controller or IC units that I
            identified as the printer&apos;s embedded drivers, including the
            head axis as well as the motion axes.
          </p>
          <p>
            In the second photo, the motherboard is removed and the output pins
            for the X, Y, and Z stepper motors are circled. I only tested the
            axis stepper outputs here, and they stayed at a consistent 12V
            regardless of what I commanded the printer to do through job mode.
            I also noticed that the pins were sitting at 12V even when they
            were idle, which is not normal and made it look like the outputs
            were probably shorted or otherwise damaged.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-1-2-1.webp"
                  alt="Motherboard still installed in the printer with controller ICs circled"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Motherboard still installed in the printer
              </figcaption>
            </figure>

            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-1-2-2.webp"
                  alt="Motherboard removed with X, Y, and Z stepper output pins circled"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Motor output pins checked after removing the motherboard
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Step 2: Building the Replacement Control System</h2>
          <p>
            Once I had narrowed the failure down to the Dremel&apos;s control
            electronics, the next step was to replace the damaged motherboard
            with the Arduino Mega 2560 and RAMPS 1.4 setup I had salvaged from
            the donor hobby printer. Before I trusted that hardware inside the
            Dremel, I first treated it like its own repair project and verified
            that the donor printer&apos;s board, power, and motors were actually
            healthy enough to reuse.
          </p>

          <h3 className="mb-4 mt-8 text-lg font-bold">Step 2.1: Donor Board and Motor Verification</h3>
          <p>
            The first photo shows the Arduino Mega and RAMPS board connected to
            the PSU from the donor printer rather than the Dremel&apos;s own
            supply. That let me confirm the replacement electronics could power
            up normally before I moved them into the rebuild. Since the donor
            machine had come out of an electronics bin with disconnected wires
            and no guarantee of working condition, I wanted to prove that the
            board, PSU, and basic motion hardware were all serviceable before
            I based the rest of the rebuild on them.
          </p>
          <p>
            The second photo shows one of the donor stepper motors. The third
            image is the continuity check I used to identify which of the four
            motor wires belonged to each coil pair. That part matters because a
            stepper motor only behaves correctly when the paired windings are
            connected to the proper driver outputs. By tracing the two matching
            pairs first, I could wire the motor to RAMPS in a way that would let
            the driver energize the coils in the correct sequence instead of
            guessing and risking a reversed or non-functional connection.
          </p>
          <p>
            While testing the donor board, I also checked the motor output pins
            directly. They stayed at a steady 12V even when I changed the
            printer&apos;s job mode commands and asked the motors to move. More
            importantly, that same 12V reading was present even when the axis
            outputs were idle, which is not what I would expect from a healthy
            driver stage. That behavior strongly suggested the outputs were
            shorted or otherwise damaged, which reinforced the decision to stop
            relying on the original motherboard and move fully to the
            replacement electronics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-2-1-1.webp"
                  alt="Arduino Mega and RAMPS board powered by the donor printer PSU"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Donor Arduino Mega and RAMPS board powered by the donor PSU
              </figcaption>
            </figure>

            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-2-1-2.webp"
                  alt="Stepper motor from the donor printer"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Donor printer stepper motor
              </figcaption>
            </figure>

            <figure className="m-0">
              <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-800 aspect-[4/5]">
                <Image
                  src="/images/projects/dremel-3d45-rebuild/step-2-1-3.webp"
                  alt="Continuity test used to identify the stepper motor coil pairs"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                Tracing the coil pairs on the stepper motor connector
              </figcaption>
            </figure>
          </div>

          <h2 className="mb-4 text-xl font-bold">Rebuild Approach</h2>
          <p>
            I treated the donor printer as a parts source and rebuilt the
            Dremel around the Arduino Mega 2560 and RAMPS 1.4 setup. At first I
            reused the original A4988 drivers, then later moved to TMC2209
            drivers. I also replaced the damaged control hardware more than
            once after another failure, which meant buying fresh Mega, RAMPS,
            and TMC2209 parts and wiring everything back up again.
          </p>

          <h2 className="mb-4 text-xl font-bold">Why This Printer</h2>
          <p>
            The Dremel itself is the better machine to keep because of its frame
            and chassis quality, which gives it better consistency and
            precision than the donor printer. The plan was to preserve the
            stronger mechanical foundation and swap in the usable electronics
            and motors from the broken machine rather than starting over.
          </p>

          <h2 className="mb-4 text-xl font-bold">Closing Thoughts</h2>
          <p>
            This is still a work in progress, but the rebuild already reflects
            the direction I want to take it: recover the better machine, reuse
            salvageable hardware where it makes sense, and keep iterating until
            the printer is reliable again.
          </p>

          <hr className="my-12 border-gray-200 dark:border-gray-800" />
        </div>

        <ProjectPager
          category="engineering"
          currentPath="/projects/engineering/dremel-3d45-rebuild"
        />
      </article>
    </main>
  );
}
