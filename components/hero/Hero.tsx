"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import { GradientText } from "../ui/GradientText";
import { NeonButton } from "../ui/NeonButton";
import { TypingSubtext } from "./TypingSubtext";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

const headline = "Building Intelligent GIS Systems with AI";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden pt-24"
    >
      <div className="absolute inset-0 -z-10 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 -z-10 mask-fade-y opacity-[0.35]">
        <div className="absolute inset-0 bg-grid-faint bg-grid-32" />
      </div>
      <div className="absolute inset-0 -z-10 mask-fade-edges">
        <Scene3D />
      </div>

      <div className="container-x flex flex-1 flex-col items-center justify-center gap-8 py-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow"
        >
          <Sparkles className="h-3.5 w-3.5 text-neon-cyan" />
          AI-native GIS Solutions Engineer · {profile.location}
        </motion.span>

        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl text-balance">
          {headline.split(" ").map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.05 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block whitespace-pre"
            >
              {w === "AI" ? <GradientText>{w}</GradientText> : w}
              {i < headline.split(" ").length - 1 ? " " : ""}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-base text-ink-muted sm:text-lg"
        >
          <TypingSubtext phrases={profile.rotatingRoles} />
          <span className="block mt-2 text-sm text-ink-dim">
            8+ years across telecom, smart cities & defense — turning location data into business decisions.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <NeonButton href="#projects" variant="primary" icon={<ArrowUpRight className="h-4 w-4" />}>
            View Work
          </NeonButton>
          <NeonButton href="#contact" variant="ghost">
            Contact Me
          </NeonButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-ink-dim hover:text-ink transition-colors"
            aria-label="Scroll down"
          >
            <span className="font-mono uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-pulse-soft" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
