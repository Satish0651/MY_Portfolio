import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";
import { createElement } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  animate?: boolean;
};

export function GradientText({
  children,
  className,
  as = "span",
  animate = true,
}: Props) {
  return createElement(
    as,
    {
      className: cn(
        "bg-clip-text text-transparent bg-neon-gradient",
        animate && "animate-gradient-x",
        className,
      ),
      style: { backgroundSize: "200% 200%" },
    },
    children,
  );
}
