import Image from "next/image";
import Link from "next/link";

export default function AutoProjects() {
  const projects = [
    {
      id: 1,
      title: "Manual Transmission Rebuild (1989 Honda Accord)",
      date: "August 2025",
      description:
        "What started as a simple alternator replacement turned into a full manual transmission rebuild. This project documents the process and the challenges that came with it.",
      image: "/images/projects/transmission-title.jpg",
      link: "/projects/auto/transmission-rebuild",
    },
  ];

  return (
    <main className="animate-page-enter flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Automotive Repair &amp; Maintenance</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing auto repair, maintenance, and modification projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects.map((project, i) => (
          <Link
            href={project.link}
            key={project.id}
            className="animate-stagger-enter group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-full aspect-video relative bg-gray-200 dark:bg-gray-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-start p-6 flex-grow">
              <h2 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                {project.date}
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
