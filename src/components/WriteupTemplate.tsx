'use client';

import React from 'react';
import Link from 'next/link';
import ProjectPager from "@/components/ProjectPager";

interface Step {
  number: string;
  label: string;
  prose?: string;
  notice?: string;
  input?: string;
  output?: string;
  reason?: string;
}

interface Card {
  title: string;
  items: string[];
}

interface Section {
  title: string;
  cards?: Card[];
  prose?: string;
  notice?: string;
  steps?: Step[];
}

interface WriteupData {
  title: string;
  category?: string;
  points?: string;
  author: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  tags: string[];
  flag: string;
  sections: Section[];
  customLabel?: string;
}

interface WriteupTemplateProps {
  data: WriteupData;
  currentPath: string;
}

const styles = `
  :root {
    --wu-border: #e5e7eb;
    --wu-muted: #6b7280;
    --wu-accent: #2563eb;
    --wu-bg-alt: #f9fafb;
  }

  .dark {
    --wu-border: #1f2937;
    --wu-muted: #9ca3af;
    --wu-accent: #3b82f6;
    --wu-bg-alt: #111827;
  }

  .page-wrap { box-sizing: border-box; }

  .page-wrap {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
    color: var(--foreground);
    font-family: inherit;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 2rem;
    color: var(--wu-muted);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
  }
  .back-link:hover {
    color: var(--wu-accent);
  }

  .page-wrap header {
    border-bottom: 1px solid var(--wu-border);
    padding-bottom: 2rem;
    margin-bottom: 3rem;
  }

  .ctf-label {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--wu-muted);
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .page-wrap header h1 {
    font-size: clamp(2.25rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.2rem;
    letter-spacing: -0.025em;
  }

  .meta-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    font-size: 0.875rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--wu-muted);
  }

  .meta-item span.val {
    color: var(--foreground);
    font-weight: 500;
  }

  .badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: none !important;
    border: none !important;
    padding: 0 !important;
  }
  .badge.diff-easy   { color: #70ff50; }
  .badge.diff-medium { color: #ffcc00; }
  .badge.diff-hard   { color: #ff6680; }

  section {
    margin-bottom: 2.8rem;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .section-num {
    font-size: 0.875rem;
    color: var(--wu-accent);
    font-weight: 700;
    opacity: 0.8;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: var(--wu-border);
  }

  .card {
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 0.75rem;
  }

  .card h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .card ul {
    list-style: none;
    padding: 0;
  }

  .card ul li {
    padding: 0.25rem 0 0.25rem 1.25rem;
    position: relative;
    color: var(--foreground);
    font-size: 1rem;
  }

  .card ul li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--wu-accent);
    font-weight: bold;
  }

  .step {
    border: 1px solid var(--wu-border);
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
    overflow: hidden;
    background: var(--background);
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--wu-border);
    background: var(--wu-bg-alt);
  }

  .step-num {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--wu-muted);
    min-width: 2.5rem;
  }

  .step-label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--foreground);
    flex: 1;
  }

  .step-body {
    padding: 1.25rem;
  }

  .io-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 0.4rem 0.8rem;
    margin-bottom: 1rem;
    align-items: start;
  }

  .io-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding-top: 0.35rem;
  }

  .io-label.in  { color: var(--wu-accent);  }
  .io-label.out { color: #10b981; }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.9rem;
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    padding: 0.75rem 1rem;
    display: block;
    border-radius: 0.5rem;
    color: var(--foreground);
    word-break: break-all;
    white-space: pre-wrap;
    line-height: 1.5;
  }

  code.inline-code {
    display: inline;
    padding: 0.2rem 0.4rem;
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    border-radius: 0.375rem;
    color: var(--wu-accent);
    font-size: 0.875em;
  }

  .reason {
    font-size: 1rem;
    color: var(--wu-muted);
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px dashed var(--wu-border);
    line-height: 1.6;
  }

  .prose {
    font-size: 1.1rem;
    color: var(--foreground);
    line-height: 1.75;
    margin-bottom: 1.25rem;
    opacity: 0.9;
  }

  .notice-box {
    border: 1px solid var(--wu-border);
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: 0.75rem;
    background: var(--wu-bg-alt);
    font-size: 0.95rem;
    font-style: italic;
  }

  .flag-box {
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    border-radius: 0.75rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .flag-label {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--wu-muted);
    text-transform: uppercase;
    font-weight: 700;
  }

  .flag-value {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1rem;
    font-weight: 600;
    color: var(--wu-accent);
    word-break: break-all;
    text-align: center;
    padding: 0.5rem 1rem;
    background: var(--background);
    border: 1px solid var(--wu-border);
    border-radius: 0.5rem;
    width: 100%;
    max-width: 500px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--wu-border);
    color: var(--wu-muted);
    border-radius: 9999px;
    background: var(--wu-bg-alt);
  }

  
`;

export default function WriteupTemplate({ data, currentPath }: WriteupTemplateProps) {
  const renderContent = (content: string) => {
    // Basic regex to replace `code` with <code>code</code>
    const parts = content.split(/(`[^`]+`)/g);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return (
    <>
      <style>{styles}</style>
      
      <div className="page-wrap">
        <Link href="/projects/cybersecurity" className="back-link">
          &larr; Back to Cybersecurity Projects
        </Link>
        <header>
          <div className="ctf-label">{data.customLabel || "PicoCTF — Write-Up"}</div>
          <h1>{data.title}</h1>

          <div className="meta-grid">
            {data.category && (
              <div className="meta-item">
                <span>Category:</span>
                <span className="val">{data.category}</span>
              </div>
            )}
            {data.points && (
              <div className="meta-item">
                <span>Points:</span>
                <span className="val">{data.points}</span>
              </div>
            )}
            <div className="meta-item">
              <span>Author:</span>
              <span className="val">{data.author}</span>
            </div>
            {data.difficulty && (
              <div className="meta-item">
                <span>Difficulty:</span>
                <span className={`badge diff-${data.difficulty}`}>
                  {data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1)}
                </span>
              </div>
            )}
          </div>

          <div className="tags">
            {data.tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {data.sections.map((section, sectionIdx) => (
          <section key={sectionIdx}>
            <div className="section-header">
              <span className="section-num">{String(sectionIdx + 1).padStart(2, '0')}</span>
              <h2>{section.title}</h2>
              <div className="section-line"></div>
            </div>

            {section.prose && <p className="prose">{renderContent(section.prose)}</p>}
            {section.notice && <div className="notice-box">{renderContent(section.notice)}</div>}

            {section.cards?.map((card, cardIdx) => (
              <div key={cardIdx} className="card">
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx}>{renderContent(item)}</li>
                  ))}
                </ul>
              </div>
            ))}

            {section.steps?.map((step, stepIdx) => (
              <div key={stepIdx} className="step">
                <div className="step-header">
                  <span className="step-num">STEP {step.number}</span>
                  <span className="step-label">{step.label}</span>
                </div>
                <div className="step-body">
                  {step.prose && (
                    <>
                      {step.prose.split('\n\n').map((p, i) => (
                        <p key={i} className="prose">{renderContent(p)}</p>
                      ))}
                    </>
                  )}
                  {step.notice && <div className="notice-box">{renderContent(step.notice)}</div>}

                  {step.input && (
                    <div className="io-row">
                      <span className="io-label in">INPUT</span>
                      <code>{step.input}</code>
                    </div>
                  )}

                  {step.output && (
                    <div className="io-row">
                      <span className="io-label out">OUTPUT</span>
                      <code className="output">{step.output}</code>
                    </div>
                  )}

                  {step.reason && <p className="reason">{renderContent(step.reason)}</p>}
                </div>
              </div>
            ))}
          </section>
        ))}

        {data.flag && (
          <section>
            <div className="section-header">
              <span className="section-num">FF</span>
              <h2>Flag</h2>
              <div className="section-line"></div>
            </div>
            <div className="flag-box">
              <div className="flag-label">Captured Flag</div>
              <div className="flag-value">{data.flag}</div>
            </div>
          </section>
        )}

        <footer>
          <span>{data.author} &mdash; {data.customLabel || "PicoCTF Write-Up"}</span>
          <span>All steps performed in a legal environment.</span>
        </footer>

        <ProjectPager category="cybersecurity" currentPath={currentPath} />
      </div>
    </>
  );
}
