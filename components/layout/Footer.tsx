import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-white">
      <div className="container-x flex flex-col items-center justify-between gap-5 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-ink">
            {profile.name}
          </p>
          <p className="mt-0.5 text-xs text-ink-muted">
            {profile.title} · {profile.tagline}
          </p>
        </div>
        <div className="flex items-center gap-2 text-ink-muted">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-colors hover:border-brand-indigo/30 hover:text-brand-indigo"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-colors hover:border-brand-indigo/30 hover:text-brand-indigo"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-colors hover:border-brand-indigo/30 hover:text-brand-indigo"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js + Framer Motion.
        </p>
      </div>
    </footer>
  );
}
