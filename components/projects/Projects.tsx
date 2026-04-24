"use client";

import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { ProjectPreview } from "./ProjectPreview";

export function Projects() {
  return (
    <section id="projects" className="relative py-12 sm:py-16">
      <div className="container-x">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-indigo/10 text-brand-indigo">
              <FolderOpen className="h-4 w-4" />
            </span>
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-1 text-sm font-medium text-brand-indigo hover:text-brand-purple"
          >
            View All Projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.05 + i * 0.08} className="h-full">
              <Link
                href={`/projects/${p.slug}`}
                className="card card-hover group relative block h-full overflow-hidden p-4 focus-ring"
              >
                <div className="relative mb-4">
                  <ProjectPreview kind={p.preview} accent={p.accent} />
                  {p.featured && (
                    <span className="absolute right-2 top-2 rounded-full bg-brand-amber/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-display text-[15px] font-semibold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-ink-muted">
                  {p.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-bg px-1.5 py-0.5 text-[10px] font-medium text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-indigo transition-colors group-hover:text-brand-purple">
                  View Project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
