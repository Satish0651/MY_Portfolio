"use client";

import Link from "next/link";
import {
  Award,
  ArrowRight,
  Code2,
  Database,
  FileCode2,
  Map,
  Cloud,
  Bot,
  ShieldCheck,
  FileSpreadsheet,
  Globe2,
} from "lucide-react";
import { certifications, tools } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

const certIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  ArcGISPro: Globe2,
  ArcGISOnline: Cloud,
  Azure: Cloud,
  AIAgents: Bot,
  Jio: ShieldCheck,
  SQL: FileSpreadsheet,
};

const toolIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Map,
  FileCode2,
};

export function CertsAndTools() {
  return (
    <section id="certifications" className="relative py-12 sm:py-16">
      <div className="container-x">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <Reveal>
            <div className="card h-full p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-amber/10 text-brand-amber">
                    <Award className="h-4 w-4" />
                  </span>
                  <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    Certifications
                  </h2>
                </div>
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-1 text-sm font-medium text-brand-indigo hover:text-brand-purple"
                >
                  View All
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {certifications.map((c) => {
                  const Icon = certIcon[c.icon] ?? Award;
                  return (
                    <div
                      key={c.id}
                      className="group flex flex-col items-center gap-2.5 rounded-xl border border-line bg-white p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-line hover:shadow-card"
                    >
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-sm transition-transform group-hover:scale-105"
                        style={{ background: c.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[12px] font-semibold leading-tight text-ink">
                          {c.name}
                        </p>
                        <p className="mt-0.5 text-[10px] text-ink-muted">{c.org}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card h-full p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-green/10 text-brand-green">
                  <Code2 className="h-4 w-4" />
                </span>
                <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                  Tools & Platforms
                </h2>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {tools.map((t) => {
                  const Icon = t.icon ? toolIcon[t.icon] : null;
                  return (
                    <div
                      key={t.id}
                      className="group flex flex-col items-center gap-2 rounded-xl border border-line bg-white p-3 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                    >
                      <span
                        className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-sm transition-transform group-hover:scale-105"
                        style={{ background: t.bg }}
                      >
                        {Icon ? (
                          <Icon className="h-5 w-5" />
                        ) : (
                          <span className="font-display text-lg font-bold">
                            {t.letter}
                          </span>
                        )}
                      </span>
                      <p className="text-[11px] font-medium leading-tight text-ink">
                        {t.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
