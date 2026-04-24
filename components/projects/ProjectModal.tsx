"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Lightbulb, Target, Wrench, X } from "lucide-react";
import { type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentText: Record<string, string> = {
  cyan: "text-neon-cyan",
  blue: "text-neon-blue",
  purple: "text-neon-purple",
};

const accentBg: Record<string, string> = {
  cyan: "bg-neon-cyan/10",
  blue: "bg-neon-blue/10",
  purple: "bg-neon-purple/10",
};

export function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
        >
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-bg-soft/95 p-6 shadow-glow sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className={cn("mb-2 text-xs font-mono uppercase tracking-[0.18em]", accentText[project.accent])}>
                  {project.domain}
                </p>
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-ink-muted">{project.subtitle}</p>
              </div>
              <button
                aria-label="Close"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-ink hover:bg-white/[0.1]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

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

            <div className="mt-7 grid gap-5">
              <Block
                icon={<Lightbulb className="h-4 w-4" />}
                title="Problem"
                accent={project.accent}
              >
                <p className="text-sm text-ink-muted leading-relaxed">{project.problem}</p>
              </Block>
              <Block
                icon={<Wrench className="h-4 w-4" />}
                title="Solution"
                accent={project.accent}
              >
                <p className="text-sm text-ink-muted leading-relaxed">{project.solution}</p>
                <ul className="mt-3 grid gap-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-ink">
                      <CheckCircle2 className={cn("h-4 w-4", accentText[project.accent])} />
                      {h}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block
                icon={<Target className="h-4 w-4" />}
                title="Impact"
                accent={project.accent}
              >
                <ul className="grid gap-1.5">
                  {project.impact.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-ink">
                      <span className={cn("h-1.5 w-1.5 rounded-full", accentBg[project.accent], "ring-2 ring-white/10")} />
                      {h}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <p className="text-xs text-ink-dim">
                Want a deeper walkthrough? Happy to share architecture diagrams.
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-white"
              >
                Reach out <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({
  icon,
  title,
  accent,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
      <div className="mb-3 flex items-center gap-2">
        <span
          className={cn(
            "grid h-7 w-7 place-items-center rounded-lg border border-white/10",
            accentText[accent],
          )}
        >
          {icon}
        </span>
        <h4 className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink">
          {title}
        </h4>
      </div>
      {children}
    </div>
  );
}
