"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GradientText } from "../ui/GradientText";
import { NeonButton } from "../ui/NeonButton";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-32 sm:pt-28 sm:pb-40">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-bg-soft/60 px-6 py-14 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-50">
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-neon-blue/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-neon-purple/20 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-neon-cyan/15 blur-3xl" />
          </div>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow mx-auto block w-max"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
            Let's collaborate
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mx-auto mt-5 max-w-3xl text-center font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl text-balance"
          >
            Let's build{" "}
            <GradientText>intelligent geospatial</GradientText>{" "}
            solutions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-center text-ink-muted"
          >
            Open to enterprise GIS architecture roles, AI + GIS consulting, and presales engagements.
            I usually reply within a day.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <NeonButton
              href={`mailto:${profile.email}?subject=Let%27s%20build%20something`}
              variant="primary"
              icon={<Mail className="h-4 w-4" />}
            >
              Email me
            </NeonButton>
            <NeonButton href={profile.linkedin} variant="ghost" icon={<Linkedin className="h-4 w-4" />}>
              LinkedIn
            </NeonButton>
            <NeonButton href={profile.github} variant="ghost" icon={<Github className="h-4 w-4" />}>
              GitHub
            </NeonButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 flex w-max items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-ink-muted"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="font-mono text-ink">{profile.email}</span>
            <button
              onClick={copy}
              aria-label="Copy email"
              className="grid h-6 w-6 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-ink-muted hover:text-ink"
            >
              {copied ? <Check className="h-3 w-3 text-neon-cyan" /> : <Copy className="h-3 w-3" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
