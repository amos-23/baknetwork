import type { HTMLAttributes, ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

/** A small uppercase, letter-spaced label in the brand red — used as a section eyebrow or tag. */
export function Badge({ children, className, ...rest }: BadgeProps) {
  return (
    <span className={["bak-badge", className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </span>
  );
}
