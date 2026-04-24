"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost";

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "children" | "className">;

export function NeonButton(props: AsLink | AsButton) {
  const { children, variant = "primary", className, icon } = props;

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out-expo focus-ring";

  const styles =
    variant === "primary"
      ? "text-bg bg-neon-gradient shadow-glow hover:shadow-glow-purple"
      : "text-ink border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30";

  const inner = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon}
      </span>
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full opacity-60 mix-blend-overlay group-hover:translate-x-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
            transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as AsLink;
    return (
      <Link href={href} className={cn(base, styles, className)} {...rest}>
        {inner}
      </Link>
    );
  }
  const { href: _h, ...rest } = props as AsButton;
  return (
    <button className={cn(base, styles, className)} {...rest}>
      {inner}
    </button>
  );
}
