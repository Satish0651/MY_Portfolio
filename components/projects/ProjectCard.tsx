"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/lib/data";
import { GlassCard } from "../ui/GlassCard";
import { cn } from "@/lib/utils";

const accentText: Record<string, string> = {
  cyan: "text-neon-cyan",
  blue: "text-neon-blue",
  purple: "text-neon-purple",
};

const accentBar: Record<string, string> = {
  cyan: "from-neon-cyan/0 via-neon-cyan to-neon-cyan/0",
  blue: "from-neon-blue/0 via-neon-blue to-neon-blue/0",
  purple: "from-neon-purple/0 via-neon-purple to-neon-purple/0",
};

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="text-left focus-ring rounded-2xl"
    >
      <GlassCard accent={project.accent} className="h-full">
        <div className={cn("mb-5 h-[2px] w-16 bg-gradient-to-r rounded-full", accentBar[project.accent])} />
        <p className={cn("mb-2 text-xs font-mono uppercase tracking-[0.18em]", accentText[project.accent])}>
          {project.domain}
        </p>
        <h3 className="font-display text-xl font-semibold text-ink leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{project.subtitle}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm">
          <span className="text-ink-dim">View case study</span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </GlassCard>
    </motion.button>
  );
}
