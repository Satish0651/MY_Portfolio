"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & {
  children: ReactNode;
  hover?: boolean;
  accent?: "cyan" | "blue" | "purple" | "pink";
};

const accentMap = {
  cyan: "hover:shadow-glow-cyan",
  blue: "hover:shadow-glow",
  purple: "hover:shadow-glow-purple",
  pink: "hover:shadow-[0_0_60px_-10px_rgba(244,114,182,0.45)]",
};

export function GlassCard({
  children,
  className,
  hover = true,
  accent = "blue",
  ...rest
}: Props) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-500 ease-out-expo",
        hover && "hover:-translate-y-0.5 hover:border-white/20",
        hover && accentMap[accent],
        className,
      )}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-neon-gradient opacity-20 blur-xl" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
