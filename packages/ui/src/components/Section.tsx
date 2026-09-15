import type { HTMLAttributes, ReactNode } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Background treatment. "alt" gives the section a light gray fill to separate it from its neighbors. Defaults to "default". */
  background?: "default" | "alt";
  /** Content width. "narrow" is a single reading column; "default" is the full page width. Defaults to "default". */
  width?: "default" | "narrow";
  /** Center-aligns the inner content. Defaults to false. */
  center?: boolean;
  children: ReactNode;
}

/** A full-width page section with a centered, max-width inner column — the layout block every page block sits in. */
export function Section({
  background = "default",
  width = "default",
  center = false,
  children,
  className,
  ...rest
}: SectionProps) {
  const sectionClasses = ["bak-section", background === "alt" ? "bak-section--alt" : null, className]
    .filter(Boolean)
    .join(" ");

  const innerClasses = [
    "bak-section__inner",
    width === "narrow" ? "bak-section__inner--narrow" : null,
    center ? "bak-section__inner--center" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClasses} {...rest}>
      <div className={innerClasses}>{children}</div>
    </section>
  );
}
