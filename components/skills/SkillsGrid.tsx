"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe2, Map, Sparkles, Wrench } from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  "gis-platforms": Globe2,
  databases: Database,
  "web-gis": Map,
  "ai-dev": Sparkles,
  devops: Wrench,
};

const tintFor: Record<string, string> = {
  "gis-platforms": "#6366F1",
  databases: "#3B82F6",
  "web-gis": "#22D3EE",
  "ai-dev": "#7C3AED",
  devops: "#10B981",
};

export function SkillsGrid() {
  return (
    <section id="skills" className="relative py-12 sm:py-16">
      <div className="container-x">
        <div className="mb-6 flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-purple/10 text-brand-purple">
            <Code2 className="h-4 w-4" />
          </span>
          <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
            Skills & Proficiency
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, idx) => {
            const Icon = iconFor[g.id] ?? Code2;
            const tint = tintFor[g.id] ?? "#6366F1";
            return (
              <Reveal key={g.id} delay={0.05 + idx * 0.06}>
                <div className="card card-hover h-full p-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-xl"
                      style={{ background: `${tint}15`, color: tint }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-[15px] font-semibold text-ink">
                      {g.title}
                    </h3>
                  </div>
                  <ul className="mt-4 grid gap-2">
                    {g.items.map((it, i) => (
                      <motion.li
                        key={it}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.04 * i }}
                        className="flex items-center justify-between gap-3 rounded-lg border border-line bg-bg px-3 py-2 text-sm text-ink"
                      >
                        <span>{it}</span>
                        <span
                          className="grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold text-white"
                          style={{ background: tint }}
                        >
                          ✓
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
