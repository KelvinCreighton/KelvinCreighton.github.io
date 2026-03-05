'use client';

import React from 'react';

interface Step {
  number: string;
  label: string;
  prose?: string;
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
  steps?: Step[];
}

interface WriteupData {
  title: string;
  category: string;
  points: string;
  author: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
  flag: string;
  sections: Section[];
}

interface WriteupTemplateProps {
  data: WriteupData;
}

const styles = `
  :root {
    --bg:        #0d1e2b;
    --surface:   #162838;
    --border:    #2a6080;
    --accent:    #40f0ff;
    --accent2:   #ff6680;
    --accent3:   #70ff50;
    --text:      #e8f4fb;
    --muted:     #8ab8cc;
    --code-bg:   #0a1822;
    --glow:      0 0 16px #40f0ff88;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    line-height: 1.8;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px, transparent 3px,
      rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 999;
  }

  body::after {
    content: '';
    position: fixed; inset: 0;
    background-image:
      linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }

  .page-wrap {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
  }

  header {
    border-bottom: 1px solid var(--border);
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    animation: fadeDown 0.6s ease both;
  }

  .ctf-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    letter-spacing: 0.25em;
    color: var(--accent);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  header h1 {
    font-family: 'Orbitron', monospace;
    font-size: clamp(2rem, 5vw, 3.4rem);
    font-weight: 900;
    color: #fff;
    text-shadow: var(--glow);
    line-height: 1.1;
    margin-bottom: 1.2rem;
  }

  .meta-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--muted);
  }

  .meta-item span.val {
    color: var(--accent);
  }

  .badge {
    display: inline-block;
    padding: 0.15em 0.7em;
    border-radius: 2px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    border: 1px solid;
  }
  .badge.diff-easy   { color: var(--accent3);  border-color: var(--accent3);  background: rgba(57,255,20,0.07); }
  .badge.diff-medium { color: #ffcc00;          border-color: #ffcc00;         background: rgba(255,204,0,0.07); }
  .badge.diff-hard   { color: var(--accent2);   border-color: var(--accent2);  background: rgba(255,63,91,0.07); }

  section {
    margin-bottom: 2.8rem;
    animation: fadeUp 0.5s ease both;
  }

  section:nth-child(1) { animation-delay: 0.1s; }
  section:nth-child(2) { animation-delay: 0.2s; }
  section:nth-child(3) { animation-delay: 0.3s; }
  section:nth-child(4) { animation-delay: 0.4s; }
  section:nth-child(5) { animation-delay: 0.5s; }

  .section-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .section-num {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: var(--accent);
    letter-spacing: 0.1em;
    opacity: 0.7;
  }

  h2 {
    font-family: 'Orbitron', monospace;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border), transparent);
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    padding: 1.2rem 1.4rem;
    margin-bottom: 1rem;
    border-radius: 0 4px 4px 0;
  }

  .card h3 {
    font-family: 'Orbitron', monospace;
    font-size: 1.05rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .card ul {
    list-style: none;
    padding: 0;
  }

  .card ul li {
    padding: 0.2rem 0 0.2rem 1.2rem;
    position: relative;
    color: var(--text);
  }

  .card ul li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  .step {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    margin-bottom: 1.2rem;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .step:hover { border-color: var(--accent); }

  .step-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.2rem;
    border-bottom: 1px solid var(--border);
    background: rgba(0,229,255,0.03);
  }

  .step-num {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: var(--muted);
    min-width: 2.5rem;
  }

  .step-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
    color: #fff;
    flex: 1;
  }

  .step-body {
    padding: 1rem 1.2rem;
  }

  .io-row {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 0.4rem 0.8rem;
    margin-bottom: 0.8rem;
    align-items: start;
  }

  .io-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    padding-top: 0.1rem;
  }

  .io-label.in  { color: var(--accent);  }
  .io-label.out { color: var(--accent3); }

  code {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
    background: var(--code-bg);
    border: 1px solid var(--border);
    padding: 0.5rem 0.8rem;
    display: block;
    border-radius: 2px;
    color: var(--accent);
    word-break: break-all;
    white-space: pre-wrap;
  }

  code.output {
    color: var(--accent3);
  }

  .reason {
    font-size: 1.05rem;
    color: var(--muted);
    margin-top: 0.6rem;
    padding-top: 0.6rem;
    border-top: 1px dashed var(--border);
  }

  .reason strong {
    color: var(--text);
    font-weight: 600;
  }

  .prose {
    font-size: 1.1rem;
    color: var(--text);
    line-height: 1.9;
    margin-bottom: 1rem;
  }

  .flag-box {
    background: var(--code-bg);
    border: 1px solid var(--accent3);
    border-radius: 4px;
    padding: 1.4rem 1.8rem;
    text-align: center;
    box-shadow: 0 0 24px rgba(57,255,20,0.12), inset 0 0 30px rgba(57,255,20,0.04);
  }

  .flag-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    color: var(--muted);
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  .flag-value {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.05rem;
    color: var(--accent3);
    text-shadow: 0 0 10px rgba(57,255,20,0.5);
    word-break: break-all;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

  .tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    padding: 0.2em 0.7em;
    border: 1px solid var(--border);
    color: var(--muted);
    border-radius: 2px;
    background: rgba(255,255,255,0.03);
  }

  footer {
    margin-top: 4rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    .io-row { grid-template-columns: 1fr; }
    .io-label { margin-bottom: 0.2rem; }
  }
`;

export default function WriteupTemplate({ data }: WriteupTemplateProps) {
  const difficultyClass = `diff-${data.difficulty}`;

  return (
    <>
      <style>{styles}</style>
      <link
        href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
      <div className="page-wrap">
        <header>
          <div className="ctf-label">PicoCTF &mdash; Write-Up</div>
          <h1>{data.title}</h1>

          <div className="meta-grid">
            <div className="meta-item">
              <span>Category:</span>
              <span className="val">{data.category}</span>
            </div>
            <div className="meta-item">
              <span>Points:</span>
              <span className="val">{data.points}</span>
            </div>
            <div className="meta-item">
              <span>Author:</span>
              <span className="val">{data.author}</span>
            </div>
            <div className="meta-item">
              <span>Difficulty:</span>
              <span className={`badge ${difficultyClass}`}>
                {data.difficulty.charAt(0).toUpperCase() + data.difficulty.slice(1)}
              </span>
            </div>
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

            {section.prose && <p className="prose">{section.prose}</p>}

            {section.cards?.map((card, cardIdx) => (
              <div key={cardIdx} className="card">
                <h3>{card.title}</h3>
                <ul>
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} dangerouslySetInnerHTML={{ __html: item }} />
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
                    <p className="prose">{step.prose.split('\n\n').map((p, i) => (
                      <div key={i}>{p}</div>
                    ))}</p>
                  )}
                  
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

                  {step.reason && <p className="reason" dangerouslySetInnerHTML={{ __html: step.reason }} />}
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
          <span>{data.author} &mdash; PicoCTF Write-Up</span>
          <span>2024 &mdash; All steps performed in a legal CTF environment.</span>
        </footer>
      </div>
    </>
  );
}
