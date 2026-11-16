import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { Background } from "@/components/Background";
import "./globals.css";
import "./fieldbook.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://kelvincreighton.ca"),
  title: {
    default: "Kelvin Creighton — Embedded Systems & Firmware",
    template: "%s | Kelvin Creighton",
  },
  description:
    "Kelvin Creighton is a Computer Science student at the University of Alberta building projects in embedded systems, firmware, and systems programming.",
  authors: [{ name: "Kelvin Creighton" }],
  openGraph: {
    title: "Kelvin Creighton — Embedded Systems & Firmware",
    description:
      "Embedded systems, firmware, and computer science projects by Kelvin Creighton.",
    url: "https://kelvincreighton.ca",
    siteName: "Kelvin Creighton",
    locale: "en_CA",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
          <Background />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <header className="site-header">
            <div className="header-inner">
              <Link
                href="/"
                className="wordmark"
                aria-label="Kelvin Creighton, home"
              >
                <span className="wordmark-name">Kelvin Creighton</span>
              </Link>
              <NavBar />
            </div>
          </header>
          <main id="main-content" className="site-main" tabIndex={-1}>
            {children}
          </main>
          <footer className="site-footer">
            <div className="footer-top">
              <div>
                <h2>Have something in mind?</h2>
                <a className="text-link" href="mailto:kcreight@ualberta.ca">
                  kcreight@ualberta.ca <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="footer-links">
                <Link href="/projects">Projects</Link>
                <Link href="/events">Community</Link>
                <Link href="/achievements">Achievements</Link>
                <a
                  href="https://github.com/KelvinCreighton/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/kelvin-creighton-250806263"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <Link href="/resume">Resume ↗</Link>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Kelvin Creighton</span>
              <span>Embedded systems, firmware, and work in progress.</span>
              <Link href="/projects/?view=history">
                Browse all projects ↗
              </Link>
            </div>
          </footer>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Kelvin Creighton",
                url: "https://kelvincreighton.ca",
                sameAs: [
                  "https://github.com/KelvinCreighton",
                  "https://www.linkedin.com/in/kelvin-creighton-250806263",
                ],
              }),
            }}
          />
      </body>
    </html>
  );
}
