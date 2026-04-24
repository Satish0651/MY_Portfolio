import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, profile } from "@/lib/data";
import { GradientText } from "@/components/ui/GradientText";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} · ${profile.name}`,
      description: project.subtitle,
    },
  };
}

export default function ProjectDetail({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const accentText: Record<string, string> = {
    cyan: "text-neon-cyan",
    blue: "text-neon-blue",
    purple: "text-neon-purple",
  };

  return (
    <section className="relative pt-32 pb-24">
      <div className="container-x max-w-4xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <p
          className={`mb-3 text-xs font-mono uppercase tracking-[0.18em] ${accentText[project.accent]}`}
        >
          {project.domain}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-ink-muted">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-xs text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6">
          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Problem
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{project.problem}</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Solution
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{project.solution}</p>
            <ul className="mt-5 grid gap-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-ink">
                  <CheckCircle2 className={`h-4 w-4 ${accentText[project.accent]}`} />
                  {h}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Impact
            </h2>
            <ul className="mt-3 grid gap-2">
              {project.impact.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan ring-2 ring-white/10" />
                  {h}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-sm text-ink-muted">
            Want a deep dive? <GradientText>Let's talk.</GradientText>
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-neon-gradient px-4 py-2 text-sm font-medium text-bg shadow-glow"
          >
            Reach out <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
