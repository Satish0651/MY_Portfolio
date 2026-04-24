"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function Timeline() {
  return (
    <section id="experience" className="relative py-12 sm:py-16">
      <div className="container-x">
        <div className="mb-8 flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-indigo/10 text-brand-indigo">
            <Briefcase className="h-4 w-4" />
          </span>
          <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
            Experience
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl pl-6 md:pl-0">
          <span
            aria-hidden
            className="absolute left-[10px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-purple/50 via-brand-indigo/40 to-brand-green/30 md:left-1/2 md:-translate-x-1/2"
          />
          <ul className="grid gap-8">
            {experience.map((job, i) => {
              const side = i % 2 === 0 ? "right" : "left";
              return (
                <li key={job.id} className="relative md:grid md:grid-cols-2 md:gap-10">
                  <motion.span
                    aria-hidden
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className={
                      "absolute left-[4px] top-2 z-10 grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-brand-purple to-brand-indigo md:left-1/2 md:-translate-x-1/2 " +
                      (job.current ? "ring-4 ring-brand-green/30" : "")
                    }
                  >
                    {job.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping-slow" />
                    )}
                  </motion.span>

                  <Reveal
                    direction={side === "right" ? "left" : "right"}
                    className={
                      "ml-6 md:ml-0 " +
                      (side === "right"
                        ? "md:col-start-2"
                        : "md:col-start-1 md:row-start-1")
                    }
                  >
                    <div className="card card-hover p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                        <span className="font-mono uppercase tracking-wider text-brand-indigo">
                          {job.dates}
                        </span>
                        {job.current && (
                          <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-1.5 py-[1px] text-[10px] font-semibold uppercase tracking-wider text-brand-green">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-[15px] font-semibold leading-snug text-ink">
                        {job.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                        <span className="font-medium text-ink">{job.company}</span>
                        <span className="inline-flex items-center gap-1 text-ink-muted">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                      </div>
                      <ul className="mt-3 grid gap-1.5">
                        {job.bullets.map((b) => (
                          <li
                            key={b}
                            className="relative pl-4 text-sm leading-relaxed text-ink-muted"
                          >
                            <span className="absolute left-0 top-[8px] h-1.5 w-1.5 rounded-full bg-brand-indigo/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                      {job.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {job.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded border border-line bg-bg px-1.5 py-0.5 text-[10px] font-medium text-ink-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
