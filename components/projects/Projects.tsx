"use client";

import { useState } from "react";
import { projects, type Project } from "@/lib/data";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Reveal } from "../ui/Reveal";

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container-x">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects that shipped real"
          highlight="business impact"
          description="Three flagship engagements — each with the problem, the solution, and the impact, in plain English."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.05 + i * 0.08} className="h-full">
              <ProjectCard project={p} onOpen={() => setOpen(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={open} open={!!open} onClose={() => setOpen(null)} />
    </section>
  );
}
