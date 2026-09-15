import type { HTMLAttributes, ReactNode } from "react";

export interface FaqItemProps extends Omit<HTMLAttributes<HTMLDetailsElement>, "title"> {
  /** The question shown in the collapsed summary row. */
  question: string;
  /** The answer, shown when expanded. */
  children: ReactNode;
  /** Renders expanded by default. Defaults to false. */
  defaultOpen?: boolean;
}

/** A single collapsible FAQ row, built on native `<details>`/`<summary>` — no JS required to expand. */
export function FaqItem({ question, children, defaultOpen = false, className, ...rest }: FaqItemProps) {
  return (
    <details
      className={["bak-faq-item", className].filter(Boolean).join(" ")}
      open={defaultOpen}
      {...rest}
    >
      <summary>{question}</summary>
      <p className="bak-faq-item__answer">{children}</p>
    </details>
  );
}
