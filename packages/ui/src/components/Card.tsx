import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card heading, shown below the accent top rule. */
  title: string;
  children: ReactNode;
}

/** A minimal content block topped with a red rule — used for the "what happens inside" feature grid. */
export function Card({ title, children, className, ...rest }: CardProps) {
  return (
    <div className={["bak-card", className].filter(Boolean).join(" ")} {...rest}>
      <h3 className="bak-card__title">{title}</h3>
      <p className="bak-card__body">{children}</p>
    </div>
  );
}
