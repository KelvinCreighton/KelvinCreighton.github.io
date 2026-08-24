import Link from "next/link";

const events = [
  {
    title: "OWASP Edmonton & Accurate Networks",
    subtitle: "Event operations and A/V support",
    date: "February 2026",
    image: "/images/events/Accurate-Networks.webp",
    imageAlt: "OWASP Edmonton and Accurate Networks event",
    description:
      "Managed logistics and A/V support for a community security event with OWASP Edmonton and Accurate Networks.",
    bullets: [
      "Resolved HDMI compatibility issues and audio feedback during the event setup.",
      "Kept the presentation moving smoothly so speakers could stay focused on the content.",
    ],
  },
  {
    title: "CHADS Hack the Computer, Open the Box",
    subtitle: "Co-organizer, University of Alberta Cybersecurity, Hacking, And Digital Security club",
    date: "February 2026",
    image: "/images/events/HTCOTB2026.webp",
    imageAlt: "CHADS Hack the Computer, Open the Box 2026",
    description:
      "Helped organize CHADS' annual beginner-friendly CTF and shared ownership of the event delivery.",
    bullets: [
      "Coordinated the event location and worked with others to get the logistics in place.",
      "Helped create some of the challenges and directed part of the planning effort.",
      "Shared the leadership work with the other co-host while helping get people on board and keep the event moving.",
    ],
  },
  {
    title: "CHADS Cybersecurity Awareness Month",
    subtitle: "Booth and outreach",
    date: "October 2025",
    image: "/images/events/Cybersec-Awareness-Month.webp",
    imageAlt: "CHADS Cybersecurity Awareness Month booth",
    description:
      "Supported the University of Alberta Cybersecurity Awareness Month tradeshow and represented CHADS at the booth in University Commons.",
    bullets: [
      "Helped staff the CHADS table during the campus cybersecurity awareness month event.",
      "Spoke with students, faculty, and staff from across campus about cybersecurity and the club.",
      "Supported recruitment and outreach during the tradeshow.",
    ],
  },
  {
    title: "CHADS+OWASP Secure Coding Tournament",
    subtitle: "Co-host, University of Alberta Cybersecurity, Hacking, And Digital Security club",
    date: "October 2025",
    image: "/images/events/Secure-Coding-Tournament.webp",
    imageAlt: "CHADS+OWASP Secure Coding Tournament",
    description:
      "Co-organized the Secure Coding Tournament with CHADS, OWASP Edmonton, and Security Journey.",
    bullets: [
      "Helped plan and promote the event with the CHADS exec team.",
      "Supported a hands-on challenge format focused on identifying and patching vulnerabilities in flawed code.",
      "Contributed to a collaboration that brought students and community members together around secure development.",
    ],
  },
  {
    title: "CHADS Hack the Computer, Open the Box",
    subtitle: "Co-host, University of Alberta Cybersecurity, Hacking, And Digital Security club",
    date: "February 2025",
    image: "/images/events/HTCOTB2025.webp",
    imageAlt: "CHADS Hack the Computer, Open the Box 2025",
    description:
      "Co-hosted CHADS' annual beginner-friendly CTF and helped keep the event running smoothly during the day.",
    bullets: [
      "Helped create some of the challenges with the rest of the team.",
      "Served as a visible point of contact during the event, answered questions, and helped the room stay on track.",
      "Supported the technical setup and day-of flow so participants could move through the event smoothly.",
    ],
  },
];

export default function EventsPage() {
  return (
    <main className="animate-page-enter flex flex-col items-center px-6 pb-6 pt-0 md:px-12 md:pb-12 md:pt-0 lg:px-24 lg:pb-16 lg:pt-0 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          Leadership
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-3xl">
          Leadership, planning, and event execution through OWASP Edmonton and
          the University of Alberta Cybersecurity, Hacking, And Digital
          Security club CHADS.
        </p>
      </div>

      <section className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <article
              key={`${event.title}-${event.date}`}
              className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-gray-85 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative aspect-[16/9] w-full bg-gray-100 dark:bg-gray-800">
                <img
                  src={event.image}
                  alt={event.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm italic text-gray-500 dark:text-gray-400">
                  {event.subtitle}
                </p>
                <h2 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                  {event.title}
                </h2>
                <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
                  {event.date}
                </p>
                <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-700 dark:text-gray-300">
                  {event.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
