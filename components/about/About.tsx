"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Map, Sparkles } from "lucide-react";
import { profile, journey } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { Reveal } from "../ui/Reveal";

const iconMap = { Map, Building2, Sparkles };

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="About"
          title="From spatial analyst to"
          highlight="AI-native GIS engineer"
          description={profile.summary}
        />

        <div ref={ref} className="relative grid gap-6 md:grid-cols-3">
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 md:block"
            height="2"
            width="100%"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="journey-gradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 0 1 L 1000 1"
              stroke="url(#journey-gradient)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 0.7 } : {}}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {journey.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            const accent = i === 0 ? "cyan" : i === 1 ? "blue" : "purple";
            return (
              <Reveal key={step.id} delay={0.1 + i * 0.12}>
                <GlassCard accent={accent as any} className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={
                        "grid h-11 w-11 place-items-center rounded-xl border border-white/10 " +
                        (i === 0
                          ? "bg-neon-cyan/10 text-neon-cyan"
                          : i === 1
                            ? "bg-neon-blue/10 text-neon-blue"
                            : "bg-neon-purple/10 text-neon-purple")
                      }
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.18em] text-ink-dim">
                      {step.period}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{step.desc}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
