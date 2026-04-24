import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, profile } from "@/lib/data";
import { ProjectPreview } from "@/components/projects/ProjectPreview";

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
    cyan: "text-brand-cyan",
    blue: "text-brand-blue",
    purple: "text-brand-purple",
    green: "text-brand-green",
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
          {project.tags[0]} · {project.tags.slice(1, 3).join(" / ")}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-ink-muted">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-line bg-white px-2 py-0.5 text-xs font-medium text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <ProjectPreview kind={project.preview} accent={project.accent} />
        </div>

        <div className="mt-10 grid gap-6">
          <article className="card p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Problem
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{project.problem}</p>
          </article>

          <article className="card p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Solution
            </h2>
            <p className="mt-3 text-ink leading-relaxed">{project.solution}</p>
          </article>

          <article className="card p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Impact
            </h2>
            <ul className="mt-3 grid gap-2">
              {project.impact.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-ink">
                  <CheckCircle2
                    className={`h-4 w-4 shrink-0 translate-y-0.5 ${accentText[project.accent]}`}
                  />
                  {h}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-sm text-ink-muted">
            Want a deep dive?{" "}
            <span className="font-semibold text-ink">Let's talk.</span>
          </p>
          <Link href="/#contact" className="btn-primary">
            Reach out <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
