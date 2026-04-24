"use client";

import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-bg-navy p-8 text-ink-onDark sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(600px 300px at 20% 0%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(700px 300px at 100% 100%, rgba(16,185,129,0.2), transparent 60%)",
              }}
            />
            <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div>
                <span className="eyebrow-light">Let's build something</span>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  Have a GIS, AI, or data project in mind?
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-onDarkMuted">
                  I work with product, platform and presales teams to turn
                  location data into intelligent, production-grade solutions.
                  Happy to chat about enterprise GIS, AI + RAG, or smart-city
                  consulting.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={`mailto:${profile.email}`} className="btn-primary">
                    Email Me <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-dark"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost-dark"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>

              <ul className="grid gap-2.5">
                <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
                <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/[0.06]">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-brand-cyan">
        {icon}
      </span>
      <span className="flex-1">
        <span className="block text-[11px] uppercase tracking-wider text-ink-onDarkMuted">
          {label}
        </span>
        <span className="block text-sm font-medium text-white">{value}</span>
      </span>
    </span>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
