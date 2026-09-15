import type { HTMLAttributes } from "react";

export interface BulletListProps extends Omit<HTMLAttributes<HTMLUListElement>, "children"> {
  /** The items to render, each as a red-square bullet row. */
  items: string[];
  /** Force a single column instead of the default two-column layout on wide viewports. Defaults to false. */
  singleColumn?: boolean;
}

/** A two-column list of short items, each marked with a small red square — used for "who this is for" style lists. */
export function BulletList({ items, singleColumn = false, className, ...rest }: BulletListProps) {
  const classes = ["bak-bullet-list", singleColumn ? "bak-bullet-list--single-column" : null, className]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={classes} {...rest}>
      {items.map((item) => (
        <li key={item} className="bak-bullet-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
