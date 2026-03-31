import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

function ContactIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 ${className}`}>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="animate-page-enter flex flex-col items-center p-4 md:p-8 lg:p-24 max-w-5xl mx-auto w-full">
      {/* Intro Section */}
      <section className="w-full mb-12 md:mb-20 flex justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
          <div className="flex flex-col items-center w-full md:w-auto max-w-sm">
            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border border-gray-200 bg-gray-100 shadow-sm sm:h-[280px] sm:w-[280px] lg:h-[300px] lg:w-[300px] dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/images/Head-Shot.jpg"
                alt="Kelvin Creighton headshot"
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 280px, 250px"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-5 w-full rounded-2xl border border-gray-200 bg-gray-50 p-4 text-left dark:border-gray-800 dark:bg-gray-900/80">
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <a
                  href="mailto:kcreight@ualberta.ca"
                  className="group flex items-center gap-3 transition-all hover:text-red-600 dark:hover:text-red-400 hover:font-bold"
                >
                  <ContactIcon className="group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:border-red-600/30">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </ContactIcon>
                  <span>kcreight@ualberta.ca</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kelvin-creighton-250806263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:font-bold"
                >
                  <ContactIcon className="group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-600/30">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </ContactIcon>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/KelvinCreighton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 transition-all hover:text-black dark:hover:text-white hover:font-bold"
                >
                  <ContactIcon className="group-hover:text-black dark:group-hover:text-white group-hover:border-black/30 dark:group-hover:border-white/30">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </ContactIcon>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Hi, I&apos;m Kelvin
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I am a Chapter Leader for OWASP Edmonton, the Vice President of
              Events for the University of Alberta&apos;s Cybersecurity Club
              (CHADS),
              and a 4th year Computer Science student at the University of
              Alberta with a strong interest in cybersecurity, particularly web
              exploitation and network security.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                My Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="w-full">
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          Project Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlight 1 */}
          <Link
            href="/projects/cybersecurity?category=WICYS%20CTF"
            className="group block h-full mx-2 md:mx-0"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 md:h-48 w-full bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/projects/WICYS_logo.png"
                  alt="WICYS CTF Challenges"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  WICYS CTF Challenges
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Jump straight into the WICYS challenge set from the Cross Chapter CTF of March 2026.
                  Challenges categories include: Web Exploitation, Binary Exploitation, Reverse Engineering, and Forensics.
                </p>
              </div>
            </div>
          </Link>

          {/* Highlight 2 */}
          <Link
            href="/projects/auto/transmission-rebuild"
            className="group block h-full mx-2 md:mx-0"
          >
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 h-full transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 sm:h-56 md:h-48 w-full bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/images/projects/transmission-title.jpg"
                  alt="Transmission Rebuild"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Manual Transmission Rebuild
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  A complete teardown and rebuild of a 1989 Honda Accord LX
                  manual transmission. Detailed documentation of the process
                  from removal to reassembly.
                </p>
              </div>
            </div>
          </Link>

          {/* Add more highlights as needed */}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            See all projects &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
