"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of"
          highlight="craft & impact"
          description="Roles that shaped how I approach enterprise GIS — and now, AI on top of it."
        />

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-neon-blue/40 to-neon-purple/40 md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="grid gap-10">
            {experience.map((job, i) => {
              const side = i % 2 === 0 ? "right" : "left";
              return (
                <li key={job.id} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-[12px] top-2 z-10 grid h-3.5 w-3.5 place-items-center rounded-full bg-neon-gradient shadow-glow md:left-1/2 md:-translate-x-1/2",
                      job.current && "ring-2 ring-neon-cyan/50",
                    )}
                  >
                    {job.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-bg-soft animate-pulse-soft" />
                    )}
                  </span>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.55 }}
                    className={cn(
                      "ml-10 md:ml-0",
                      side === "right"
                        ? "md:col-start-2"
                        : "md:col-start-1 md:row-start-1 md:text-right",
                    )}
                  >
                    <GlassCard accent={i === 0 ? "purple" : i === 1 ? "blue" : i === 2 ? "cyan" : "blue"}>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                        <Briefcase className="h-3.5 w-3.5 text-neon-cyan" />
                        <span className="font-mono uppercase tracking-[0.18em]">
                          {job.dates}
                        </span>
                        {job.current && (
                          <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-1.5 py-[1px] text-[10px] uppercase tracking-wider text-neon-cyan">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold text-ink leading-snug">
                        {job.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted">
                        <span className="font-medium text-ink/90">{job.company}</span>
                        <span className="inline-flex items-center gap-1 text-ink-dim">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>

                      <ul className="mt-4 grid gap-1.5">
                        {job.bullets.map((b) => (
                          <li
                            key={b}
                            className="relative pl-4 text-sm text-ink-muted leading-relaxed"
                          >
                            <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-neon-cyan/70" />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {job.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {job.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[11px] text-ink-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </GlassCard>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
