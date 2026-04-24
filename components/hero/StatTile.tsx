"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatTile({
  label,
  value,
  delta,
  deltaLabel = "in last 30 days",
  className,
  delay = 0,
}: {
  label: string;
  value: string;
  delta?: number;
  deltaLabel?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl",
        className,
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-ink-onDarkMuted">
        {label}
      </p>
      <p className="mt-1.5 font-display text-3xl font-semibold text-white tabular-nums">
        {value}
      </p>
      {typeof delta === "number" && (
        <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-brand-emerald">
          <ArrowUpRight className="h-3.5 w-3.5" />
          {delta > 0 ? "+" : ""}
          {delta}% <span className="font-normal text-ink-onDarkMuted">{deltaLabel}</span>
        </p>
      )}
    </motion.div>
  );
}
