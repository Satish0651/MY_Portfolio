"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GradientText } from "../ui/GradientText";
import { NeonButton } from "../ui/NeonButton";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(current > 24);
    if (current > prev && current > 200) setHidden(true);
    else setHidden(false);
  });

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="container-x pt-4 sm:pt-5">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "border-white/10 bg-bg-soft/70 backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="#hero" className="group flex items-center gap-2">
            <span className="relative grid h-8 w-8 place-items-center rounded-full bg-neon-gradient text-bg shadow-glow">
              <span className="font-display text-[13px] font-bold tracking-tight">S</span>
            </span>
            <GradientText className="font-display text-sm font-semibold tracking-tight">
              {profile.shortName}
              <span className="ml-1 text-ink/70 font-normal">— Portfolio</span>
            </GradientText>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === l.id
                    ? "text-ink"
                    : "text-ink-muted hover:text-ink",
                )}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <NeonButton href="#contact" variant="primary" className="px-4 py-2 text-xs">
              Let's talk
            </NeonButton>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-ink md:hidden"
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
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-bg-soft/90 p-3 backdrop-blur-xl md:hidden"
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
                        ? "bg-white/[0.06] text-ink"
                        : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-neon-gradient px-3 py-2 text-center text-sm font-medium text-bg"
                >
                  Let's talk
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
