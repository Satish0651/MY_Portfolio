"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl md:text-5xl text-balance"
      >
        {title}{" "}
        {highlight && <GradientText>{highlight}</GradientText>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-base text-ink-muted text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
