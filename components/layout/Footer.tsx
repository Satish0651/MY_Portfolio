import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GradientText } from "../ui/GradientText";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg-soft/40">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:items-center">
        <div className="text-center md:text-left">
          <p className="font-display text-sm text-ink">
            <GradientText>{profile.name}</GradientText>
          </p>
          <p className="text-xs text-ink-muted mt-1">
            {profile.title} · {profile.tagline}
          </p>
        </div>
        <div className="flex items-center gap-3 text-ink-muted">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/[0.1] hover:text-ink"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/[0.1] hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.05] transition-colors hover:bg-white/[0.1] hover:text-ink"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <p className="text-xs text-ink-dim">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js + R3F.
        </p>
      </div>
    </footer>
  );
}
