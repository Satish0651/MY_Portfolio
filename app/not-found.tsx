import Link from "next/link";
import { GradientText } from "@/components/ui/GradientText";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80vh] place-items-center text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">404</p>
        <h1 className="font-display text-4xl font-semibold sm:text-6xl">
          <GradientText>Off the map</GradientText>
        </h1>
        <p className="max-w-md text-ink-muted">
          That page doesn't exist. Try heading back to home or jump to projects.
        </p>
        <div className="mt-2 flex gap-3">
          <Link
            href="/"
            className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-ink hover:bg-white/[0.1]"
          >
            Home
          </Link>
          <Link
            href="/#projects"
            className="rounded-full bg-neon-gradient px-4 py-2 text-sm font-medium text-bg shadow-glow"
          >
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
