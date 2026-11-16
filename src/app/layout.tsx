import type { Metadata } from "next";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/NavBar";
import { Background } from "@/components/Background";
import "./globals.css";
import "./fieldbook.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://kelvincreighton.ca"),
  title: {
    default: "Kelvin Creighton — Embedded Software & Systems",
    template: "%s | Kelvin Creighton",
  },
  description:
    "Projects in embedded software, firmware, and systems programming. Build notes, investigations, and creative work by Kelvin Creighton.",
  authors: [{ name: "Kelvin Creighton" }],
  openGraph: {
    title: "Kelvin Creighton — Embedded Software & Systems",
    description:
      "A fieldbook of software, hardware, and the work of understanding how things run.",
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
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
                <span className="monogram" aria-hidden="true">
                  <span className="mark-bracket">⌁</span>kc
                  <span className="mark-bracket">⌁</span>
                </span>
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
                <Link href="/projects">The Fieldbook</Link>
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
              <span>A personal collection, always in progress.</span>
              <Link href="/projects/?view=history">
                The complete fieldbook ↗
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
        </ThemeProvider>
      </body>
    </html>
  );
}
