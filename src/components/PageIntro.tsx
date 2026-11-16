import type { ReactNode } from "react";
export default function PageIntro({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-intro">
      <h1>{title}</h1>
      {children && <div className="page-intro-copy">{children}</div>}
    </header>
  );
}
