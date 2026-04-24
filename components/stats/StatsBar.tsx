"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  Layers,
  Users,
  TrendingUp,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { impactStats } from "@/lib/data";
import { useCountUp } from "@/lib/hooks/useCountUp";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Layers,
  Users,
  TrendingUp,
  Sparkles,
};

function Stat({
  icon: Icon,
  value,
  label,
  accent,
  inView,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  accent?: boolean;
  inView: boolean;
}) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const animated = useCountUp({ target, start: inView, duration: 1400 });

  return (
    <div className="group flex items-center gap-3">
      <span
        className={
          "grid h-11 w-11 shrink-0 place-items-center rounded-xl border backdrop-blur-sm transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 " +
          (accent
            ? "border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald"
            : "border-white/10 bg-white/5 text-ink-onDark")
        }
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p
          className={
            "font-display text-2xl font-bold leading-none tabular-nums " +
            (accent ? "text-brand-emerald" : "text-white")
          }
        >
          {animated}
          {suffix}
        </p>
        <p className="mt-1 text-[12px] text-ink-onDarkMuted">{label}</p>
      </div>
    </div>
  );
}

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative py-8 sm:py-10">
      <div className="container-x">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-navy p-6 sm:p-7"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(900px 200px at 20% 0%, rgba(124,58,237,0.3), transparent 60%), radial-gradient(900px 200px at 100% 100%, rgba(16,185,129,0.18), transparent 60%)",
            }}
          />
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {impactStats.map((s) => {
              const Icon = iconMap[s.icon] ?? Briefcase;
              return (
                <Stat
                  key={s.id}
                  icon={Icon}
                  value={s.value}
                  label={s.label}
                  accent={s.accent}
                  inView={inView}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
