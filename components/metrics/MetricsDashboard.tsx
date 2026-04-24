"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { metrics } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { GlassCard } from "../ui/GlassCard";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { Reveal } from "../ui/Reveal";

function Sparkline({ accent }: { accent: string }) {
  const path = "M0 30 L10 24 L20 28 L30 18 L40 22 L50 12 L60 16 L70 8 L80 10 L90 4";
  return (
    <svg
      aria-hidden
      viewBox="0 0 90 40"
      className="absolute inset-x-4 bottom-3 h-12 w-[calc(100%-2rem)] opacity-50"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`spark-${accent}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={accent} stopOpacity="0" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke={`url(#spark-${accent})`} strokeWidth="1.4" />
    </svg>
  );
}

function MetricTile({
  m,
  inView,
  index,
}: {
  m: (typeof metrics)[number];
  inView: boolean;
  index: number;
}) {
  const value = useCountUp({ target: m.value, start: inView, duration: 1500 });
  const colors = ["#22D3EE", "#3B82F6", "#8B5CF6", "#F472B6"];
  const accent = colors[index % colors.length];

  return (
    <Reveal delay={0.05 + index * 0.08} className="h-full">
      <GlassCard
        accent={(["cyan", "blue", "purple", "pink"] as const)[index % 4]}
        className="relative h-full overflow-hidden"
      >
        <div className="flex items-baseline gap-1">
          <span
            className="font-display text-4xl font-semibold sm:text-5xl"
            style={{ color: accent }}
          >
            {value}
          </span>
          <span className="font-display text-2xl font-semibold text-ink-muted">
            {m.suffix}
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-ink">{m.label}</p>
        <p className="mt-0.5 text-xs text-ink-dim">{m.sub}</p>
        <Sparkline accent={accent} />
      </GlassCard>
    </Reveal>
  );
}

export function MetricsDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="metrics" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Impact"
          title="Numbers that"
          highlight="tell the story"
          description="A snapshot of scale and breadth across roles, projects and geospatial datasets."
        />
        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <MetricTile key={m.id} m={m} inView={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
