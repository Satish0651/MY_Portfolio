"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Globe2, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [active, setActive] = useState<string | null>("home");
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 24);
  });

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive(visible.target.id);
          setInHero(visible.target.id === "home");
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const darkChrome = inHero && !scrolled;

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-x pt-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500",
            darkChrome
              ? "border-white/10 bg-white/[0.04] backdrop-blur-xl"
              : "border-line bg-white/90 shadow-card backdrop-blur-md",
          )}
        >
          <Link href="#home" className="flex items-center gap-2.5">
            <span
              className={cn(
                "grid h-9 w-9 place-items-center rounded-xl transition-colors",
                darkChrome
                  ? "bg-white/10 text-brand-cyan"
                  : "bg-brand-indigo/10 text-brand-indigo",
              )}
            >
              <Globe2 className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span
                className={cn(
                  "block font-display text-sm font-semibold tracking-tight",
                  darkChrome ? "text-white" : "text-ink",
                )}
              >
                {profile.name}
              </span>
              <span
                className={cn(
                  "block text-[10px]",
                  darkChrome ? "text-ink-onDarkMuted" : "text-ink-muted",
                )}
              >
                {profile.title} | {profile.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === l.id
                    ? darkChrome
                      ? "text-white"
                      : "text-ink"
                    : darkChrome
                      ? "text-ink-onDarkMuted hover:text-white"
                      : "text-ink-muted hover:text-ink",
                )}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    className={cn(
                      "absolute inset-0 -z-10 rounded-full",
                      darkChrome ? "bg-white/10" : "bg-bg",
                    )}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#contact" className="btn-primary px-4 py-2 text-xs">
              Contact Me
            </a>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-xl lg:hidden",
              darkChrome
                ? "border border-white/10 bg-white/[0.05] text-white"
                : "border border-line bg-white text-ink",
            )}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-2xl border border-line bg-white p-3 shadow-card lg:hidden"
            >
              <nav className="grid gap-1">
                {navLinks.map((l) => (
                  <a
                    key={l.id}
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2 text-sm",
                      active === l.id
                        ? "bg-bg text-ink"
                        : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-cta-gradient px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Contact Me
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
