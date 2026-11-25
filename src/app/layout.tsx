import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Wordmark } from "@/components/Wordmark";
import { Background } from "@/components/Background";
import ProjectScrollReset from "@/components/ProjectScrollReset";
import Spotlight from "@/components/Spotlight";
import "./globals.css";
import "./fieldbook.css";
import "./project-detail.css";
import "./depth.css";
import "./atmosphere.css";
import "./cards.css";
import "./footer.css";
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
      <head>
        <link
          rel="preload"
          href="/fonts/newsreader-variable-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/lato-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
          <span id="page-top-marker" aria-hidden="true" />
          <ProjectScrollReset />
          <Spotlight />
          <Background />
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <header className="site-header">
            <div className="header-inner">
              <Wordmark />
              <NavBar />
            </div>
          </header>
          <main id="main-content" className="site-main" tabIndex={-1}>
            {children}
          </main>
          <footer className="site-footer">
            <div className="footer-inner">
              <div className="footer-columns">
                <div className="footer-brand">
                  <p className="footer-name">Kelvin Creighton</p>
                  <p>University of Alberta</p>
                  <p>Computer Science</p>
                </div>
                <nav className="footer-column" aria-labelledby="footer-pages">
                  <h2 id="footer-pages">Pages</h2>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link href="/achievements">Achievements</Link>
                    </li>
                    <li>
                      <Link href="/community">Community</Link>
                    </li>
                    <li>
                      <Link href="/resume">Resume</Link>
                    </li>
                  </ul>
                </nav>
                <div className="footer-column">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="mailto:kcreight@ualberta.ca">
                        <Mail aria-hidden="true" />
                        <span translate="no">kcreight@ualberta.ca</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kelvin-creighton-250806263"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin aria-hidden="true" />
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/KelvinCreighton/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github aria-hidden="true" />
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Kelvin Creighton</span>
                <a href="#top">
                  Back to top
                  <ArrowUp aria-hidden="true" />
                </a>
              </div>
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
