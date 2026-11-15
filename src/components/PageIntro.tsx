import type { ReactNode } from "react";
export default function PageIntro({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="eyebrow">Fieldbook / {number}</p>
      <h1>{title}</h1>
      {children && <div className="page-intro-copy">{children}</div>}
    </header>
  );
}
