import Image from "next/image";
import Link from "next/link";

export default function CybersecurityProjects() {
  const projects = [
    {
      id: 0,
      slug: "ssti1",
      title: "PicoCTF: SSTI1",
      date: "September 2025",
      description:
        "A walkthrough of a Server-Side Template Injection in Jinja2, escaping the sandbox to achieve Remote Code Execution.",
      image: "/images/projects/ssti1.png",
      link: "/projects/cybersecurity/ssti1",
    },
    {
      id: 1,
      slug: "nosql-injection",
      title: "PicoCTF: No Sql Injection",
      date: "September 2025",
      description:
        "A write-up on exploiting a NoSQL injection vulnerability in a MongoDB-backed Express application to bypass authentication.",
      image: "/images/projects/no-sql-injection.png",
      link: "/projects/cybersecurity/nosql-injection",
    },
    {
      id: 2,
      slug: "eval",
      title: "PicoCTF: 3v@l",
      date: "September 2025",
      description:
        "Exploiting a Python eval() vulnerability by bypassing regex blacklists to achieve Remote Code Execution.",
      image: "/images/projects/eval.png",
      link: "/projects/cybersecurity/eval",
    },
    {
      id: 3,
      slug: "soap",
      title: "PicoCTF: SOAP",
      date: "October 2025",
      description:
        "A write-up on exploiting an XML External Entity (XXE) vulnerability through a SOAP endpoint to perform Local File Inclusion.",
      image: "/images/projects/soap.png",
      link: "/projects/cybersecurity/soap",
    },
    {
      id: 4,
      slug: "cupid-portal",
      title: "HTCOTB2026 CTF: Cupid's Secret Message",
      date: "February 2026",
      description:
        "A custom Valentines + ILOVEYOU Virus themed CTF web exploitation challenge I developed for the University of Alberta's Cybersecurity Club, showcasing an Insecure Direct Object Reference (IDOR) vulnerability.",
      image: "/images/projects/cupid.png",
      link: "/projects/cybersecurity/cupid-portal",
    },
    {
      id: 5,
      slug: "heartmail",
      title: "HTCOTB2026 CTF: HeartMail 1.0",
      date: "February 2026",
      description:
        "A custom web CTF challenge featuring basic SQL Injection to uncover hidden emails and an SSH server login to retrieve the final flag.",
      image: "/images/projects/heartmail.png",
      link: "/projects/cybersecurity/heartmail",
    },
  ];

  return (
    <main className="flex flex-col items-center p-6 md:p-12 lg:p-24 w-full">
      <div className="w-full max-w-5xl mb-12 flex flex-col items-center">
        <Link
          href="/projects"
          className="text-sm text-gray-500 hover:underline self-start mb-4"
        >
          &larr; Back to Categories
        </Link>
        <h1 className="text-4xl font-bold">Cybersecurity</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 text-center">
          Showcasing web exploitation writeups and challenges I personally
          created.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {projects
          .sort((a, b) => b.id - a.id)
          .map((project) => (
            <Link
              href={project.link}
              key={project.slug}
              className="group flex flex-col rounded-xl bg-gray-50 dark:bg-gray-900 overflow-hidden hover:shadow-lg transition-all duration-300"
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
