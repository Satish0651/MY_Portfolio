import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80vh] place-items-center text-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
          404
        </p>
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-6xl">
          Off the <span className="text-brand-indigo">map</span>
        </h1>
        <p className="max-w-md text-ink-muted">
          That page doesn't exist. Try heading back to home or jump to projects.
        </p>
        <div className="mt-2 flex gap-3">
          <Link href="/" className="btn-ghost-light">
            Home
          </Link>
          <Link href="/#projects" className="btn-primary">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
