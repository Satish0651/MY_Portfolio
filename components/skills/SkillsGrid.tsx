"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe2, Sparkles, Database, Map, Wrench } from "lucide-react";
import { skills } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { cn } from "@/lib/utils";

const iconMap = { Globe2, Sparkles, Database, Map, Wrench };

const accentClass: Record<string, string> = {
  cyan: "text-neon-cyan",
  blue: "text-neon-blue",
  purple: "text-neon-purple",
  pink: "text-neon-pink",
};

const ringStop: Record<string, string> = {
  cyan: "#22D3EE",
  blue: "#3B82F6",
  purple: "#8B5CF6",
  pink: "#F472B6",
};

function ProgressRing({
  value,
  accent,
  inView,
}: {
  value: number;
  accent: string;
  inView: boolean;
}) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0">
      <circle cx="28" cy="28" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
      <motion.circle
        cx="28"
        cy="28"
        r={r}
        stroke={ringStop[accent]}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        transform="rotate(-90 28 28)"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={inView ? { strokeDashoffset: c * (1 - value / 100) } : {}}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <text
        x="28"
        y="32"
        textAnchor="middle"
        className="fill-ink"
        style={{ font: "600 11px Inter, sans-serif" }}
      >
        {value}
      </text>
    </svg>
  );
}

export function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Capabilities"
          title="A toolkit built for"
          highlight="enterprise + AI"
          description="Five categories, one stack: spatial systems, AI engineering, data, web GIS and the DevOps glue that ships them."
        />

        <div ref={ref} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, idx) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Globe2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
              >
                <GlassCard accent={cat.accent} className="h-full">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]",
                          accentClass[cat.accent],
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="grid gap-3">
                    {cat.skills.map((s) => (
                      <li
                        key={s.name}
                        className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-2.5"
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm text-ink">{s.name}</span>
                          {s.highlight && (
                            <span className="inline-flex w-max items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-1.5 py-[1px] text-[10px] uppercase tracking-wider text-ink-muted">
                              core
                            </span>
                          )}
                        </div>
                        <ProgressRing value={s.level} accent={cat.accent} inView={inView} />
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
