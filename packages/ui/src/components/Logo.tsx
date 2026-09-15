import type { AnchorHTMLAttributes } from "react";

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** First half of the wordmark, shown in the default text color. Defaults to "Bak". */
  name?: string;
  /** Second half of the wordmark, shown in the accent color. Defaults to "Network". */
  accent?: string;
}

/** Bak Network's wordmark: a two-tone logotype, "Bak" in ink and "Network" in the brand red. Renders as a link. */
export function Logo({ name = "Bak", accent = "Network", className, ...rest }: LogoProps) {
  return (
    <a className={["bak-logo", className].filter(Boolean).join(" ")} {...rest}>
      {name}
      <span className="bak-logo__accent">{accent}</span>
    </a>
  );
}
