import Link from "next/link";
import Image from "@/components/BlurImage";

export default function Projects() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Projects</h1>

      <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full max-w-6xl px-2 md:px-0">
        {/* Category 1: Cybersecurity */}
        <Link
          href="/projects/cybersecurity"
          className="group relative flex flex-col items-center justify-center overflow-hidden p-8 border rounded-xl bg-transparent transition-all duration-300 hover:opacity-100 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm before:absolute before:inset-0 before:bg-white/0 dark:before:bg-white/0 before:transition-colors before:duration-300 hover:before:bg-white/8 dark:hover:before:bg-white/5"
        >
          <span className="absolute inset-0 bg-white/0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/cybersecurity.svg"
              alt="Cybersecurity"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Cybersecurity</h2>
        </Link>

        {/* Category 2: Auto Repair & Maintenance */}
        <Link
          href="/projects/auto"
          className="group relative flex flex-col items-center justify-center overflow-hidden p-8 border rounded-xl bg-transparent transition-all duration-300 hover:opacity-100 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm before:absolute before:inset-0 before:bg-white/0 dark:before:bg-white/0 before:transition-colors before:duration-300 hover:before:bg-white/8 dark:hover:before:bg-white/5"
        >
          <span className="absolute inset-0 bg-white/0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/auto.svg"
              alt="Auto Repair"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Automotive</h2>
        </Link>

        {/* Category 3: Game Development */}
        <Link
          href="/projects/game-dev"
          className="group relative flex flex-col items-center justify-center overflow-hidden p-8 border rounded-xl bg-transparent transition-all duration-300 hover:opacity-100 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm before:absolute before:inset-0 before:bg-white/0 dark:before:bg-white/0 before:transition-colors before:duration-300 hover:before:bg-white/8 dark:hover:before:bg-white/5"
        >
          <span className="absolute inset-0 bg-white/0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/game-dev.svg"
              alt="Game Development"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Game Dev</h2>
        </Link>

        {/* Category 4: Music Production */}
        <Link
          href="/projects/music"
          className="group relative flex flex-col items-center justify-center overflow-hidden p-8 border rounded-xl bg-transparent transition-all duration-300 hover:opacity-100 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm before:absolute before:inset-0 before:bg-white/0 dark:before:bg-white/0 before:transition-colors before:duration-300 hover:before:bg-white/8 dark:hover:before:bg-white/5"
        >
          <span className="absolute inset-0 bg-white/0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/music.svg"
              alt="Music Production"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Music</h2>
        </Link>

        {/* Category 5: Engineering */}
        <Link
          href="/projects/engineering"
          className="group relative flex flex-col items-center justify-center overflow-hidden p-8 border rounded-xl bg-transparent transition-all duration-300 hover:opacity-100 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] max-w-sm before:absolute before:inset-0 before:bg-white/0 dark:before:bg-white/0 before:transition-colors before:duration-300 hover:before:bg-white/8 dark:hover:before:bg-white/5"
        >
          <span className="absolute inset-0 bg-white/0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          <div className="mb-4 group-hover:scale-110 transition-transform dark:invert">
            <Image
              src="/icons/engineering.svg"
              alt="Engineering"
              width={128}
              height={128}
            />
          </div>
          <h2 className="text-xl font-semibold text-center">Engineering</h2>
        </Link>
      </div>
    </main>
  );
}
