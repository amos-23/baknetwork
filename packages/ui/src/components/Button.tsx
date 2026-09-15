import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "ghost";
export type ButtonSize = "default" | "small" | "large";

interface SharedProps {
  /** Visual style. "primary" is solid red, "ghost" is an outlined button. Defaults to "primary". */
  variant?: ButtonVariant;
  /** Size preset. Defaults to "default". */
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

export type ButtonProps =
  | (SharedProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
  | (SharedProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">);

/** The site's call-to-action control. Pass `href` to render a link, omit it to render a `<button>`. */
export function Button(props: ButtonProps) {
  const { variant = "primary", size = "default", children, className, ...rest } = props;

  const classes = [
    "bak-btn",
    `bak-btn--${variant}`,
    size !== "default" ? `bak-btn--${size}` : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
