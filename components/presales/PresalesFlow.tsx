"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight, FileSpreadsheet, MessagesSquare, Presentation } from "lucide-react";
import { presalesFlow } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";

const capabilities = [
  {
    icon: Presentation,
    title: "Demos",
    desc: "Story-driven walkthroughs that land with both tech and business audiences.",
  },
  {
    icon: MessagesSquare,
    title: "POCs",
    desc: "Working prototypes shipped fast — using AI assistance to compress delivery.",
  },
  {
    icon: FileSpreadsheet,
    title: "Solution Design",
    desc: "Architecture, SRS, BRD, HLD/LLD — clear, defensible, traceable.",
  },
];

export function PresalesFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="presales" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Presales & Consulting"
          title="From idea to"
          highlight="shipped solution"
          description="A repeatable playbook for translating ambiguous business problems into delivered geospatial systems."
        />

        <div
          ref={ref}
          className="relative mb-12 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
        >
          <ul className="flex min-w-[760px] items-stretch gap-3">
            {presalesFlow.map((step, i) => (
              <li key={step.id} className="flex flex-1 items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.12 }}
                  className="flex flex-1 flex-col gap-1 rounded-xl border border-white/10 bg-bg-soft/60 px-4 py-3"
                >
                  <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-neon-cyan">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    {step.title}
                  </span>
                  <span className="text-[11px] text-ink-muted leading-snug">
                    {step.desc}
                  </span>
                </motion.div>
                {i < presalesFlow.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                    className="text-ink-dim"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={0.05 + i * 0.08}>
              <GlassCard accent={(["cyan", "blue", "purple"] as const)[i]}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-neon-cyan">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {c.title}
                  </h3>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed">{c.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
