import type { Metadata } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
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
    "Kelvin Creighton builds embedded software and firmware, working with microcontrollers, Linux, and low-level systems.",
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
              <div className="footer-intro">
                <p className="footer-kicker">Kelvin Creighton</p>
                <div className="footer-contact-links" aria-label="Contact links">
                <a href="mailto:kcreight@ualberta.ca">
                  <span>
                    <Mail aria-hidden="true" />
                    Email
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kelvin-creighton-250806263"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Linkedin aria-hidden="true" />
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://github.com/KelvinCreighton/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Github aria-hidden="true" />
                    GitHub
                  </span>
                </a>
                </div>
              </div>
              <nav className="footer-navigation" aria-label="Footer navigation">
                <p className="footer-kicker">Explore</p>
                <Link href="/resume">Resume</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/community">Community</Link>
                <Link href="/achievements">Achievements</Link>
              </nav>
            </div>
            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} Kelvin Creighton</span>
              <span>University of Alberta · Computer Science</span>
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
