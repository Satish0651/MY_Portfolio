"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Star, User } from "lucide-react";
import { profile, coreExpertise, skillGroups } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

function AvatarSK() {
  return (
    <div className="relative aspect-square w-28 shrink-0 rounded-full sm:w-32">
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_140deg,#7C3AED,#22D3EE,#10B981,#7C3AED)] p-[2px]">
        <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900">
          <span className="font-display text-3xl font-bold text-white">
            {profile.initials}
          </span>
        </div>
      </div>
      <div className="absolute -bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-brand-green shadow-sm" />
    </div>
  );
}

function CardHeader({
  icon,
  title,
  tint,
}: {
  icon: React.ReactNode;
  title: string;
  tint: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="grid h-8 w-8 place-items-center rounded-lg"
        style={{ background: `${tint}15`, color: tint }}
      >
        {icon}
      </span>
      <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative -mt-10 pb-16">
      <div className="container-x">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal delay={0.05}>
            <div className="card card-hover h-full p-5">
              <CardHeader
                icon={<User className="h-4 w-4" />}
                title="About Me"
                tint="#6366F1"
              />
              <div className="mt-4 flex items-start gap-4">
                <AvatarSK />
                <p className="text-sm leading-relaxed text-ink-muted">
                  {profile.aboutLong}
                </p>
              </div>
              <Link
                href="#experience"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-indigo hover:text-brand-purple"
              >
                Know More About Me
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card card-hover h-full p-5">
              <CardHeader
                icon={<Star className="h-4 w-4" />}
                title="Core Expertise"
                tint="#10B981"
              />
              <ul className="mt-4 grid grid-cols-1 gap-y-2.5 gap-x-3 sm:grid-cols-2">
                {coreExpertise.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                    className="flex items-start gap-2 text-sm text-ink"
                  >
                    <span className="mt-[6px] grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-brand-green/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card card-hover h-full p-5">
              <CardHeader
                icon={<Code2 className="h-4 w-4" />}
                title="Technical Skills"
                tint="#7C3AED"
              />
              <div className="mt-4 grid gap-x-5 gap-y-3 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <div key={g.id}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      {g.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-ink">
                      {g.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="#skills"
                className="group mt-5 inline-flex items-center gap-1 rounded-lg border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink hover:border-brand-indigo/30 hover:text-brand-indigo"
              >
                View All Skills
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
