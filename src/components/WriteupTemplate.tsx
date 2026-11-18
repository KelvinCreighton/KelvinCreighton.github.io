import React from "react";

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
  difficulty?: "easy" | "medium" | "hard";
  tags: string[];
  flag: string;
  sections: Section[];
  customLabel?: string;
}

interface WriteupTemplateProps {
  data: WriteupData;
  currentPath: string;
}

function content(text: string) {
  return text
    .split(/(`[^`]+`)/g)
    .map((part, i) =>
      part.startsWith("`") && part.endsWith("`") ? (
        <code key={i}>{part.slice(1, -1)}</code>
      ) : (
        <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
      ),
    );
}
export default function WriteupTemplate({ data }: WriteupTemplateProps) {
  return (
    <article className="project-body writeup article-content">
      <div className="writeup-meta">
        <p>
          {data.customLabel || "PicoCTF writeup"} · {data.author}
        </p>
        <p>
          {[
            data.category,
            data.difficulty,
            data.points && `${data.points} points`,
          ]
            .filter(Boolean)
            .join(" / ")}
        </p>
        <p>{data.tags.join(" · ")}</p>
      </div>
      {data.sections.map((section, i) => (
        <section key={i}>
          <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
          <h2>{content(section.title)}</h2>
          {section.prose && <p>{content(section.prose)}</p>}
          {section.notice && (
            <div className="notice">{content(section.notice)}</div>
          )}
          {section.cards?.map((card, j) => (
            <div className="writeup-card" key={j}>
              <h3>{content(card.title)}</h3>
              <ul>
                {card.items.map((item, k) => (
                  <li key={k}>{content(item)}</li>
                ))}
              </ul>
            </div>
          ))}
          {section.steps?.map((step, j) => (
            <div className="writeup-step" key={j}>
              <h3>
                <span className="eyebrow">Step {step.number} / </span>
                {content(step.label)}
              </h3>
              {step.prose?.split("\n\n").map((p, k) => (
                <p key={k}>{content(p)}</p>
              ))}
              {step.notice && (
                <div className="notice">{content(step.notice)}</div>
              )}
              {step.input && (
                <>
                  <p className="eyebrow">Input</p>
                  <pre>
                    <code>{step.input}</code>
                  </pre>
                </>
              )}
              {step.output && (
                <>
                  <p className="eyebrow">Output</p>
                  <pre>
                    <code>{step.output}</code>
                  </pre>
                </>
              )}
              {step.reason && (
                <p className="writeup-reason">{content(step.reason)}</p>
              )}
            </div>
          ))}
        </section>
      ))}
      {data.flag && (
        <details className="solution-toggle">
          <summary>Reveal captured flag</summary>
          <pre>
            <code>{data.flag}</code>
          </pre>
        </details>
      )}
    </article>
  );
}
