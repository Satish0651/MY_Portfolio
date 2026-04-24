"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile, dashboardStats } from "@/lib/data";
import { IndiaMap } from "./IndiaMap";
import { StatTile } from "./StatTile";
import { DonutChart } from "./DonutChart";
import { GrowthChart } from "./GrowthChart";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-bg-navy pt-28 pb-16 text-ink-onDark sm:pt-32 sm:pb-20"
    >
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
        <div
          className="h-full w-full bg-grid-dark bg-grid-32"
          aria-hidden
        />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.15fr)] xl:gap-14">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-ink-onDark"
            >
              <span className="text-sm" aria-hidden>
                👋
              </span>
              Hello, I'm Satish Kumar
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]"
            >
              <span className="block text-balance">{profile.heroHeadline.before}</span>
              <span className="mt-1 block">
                <span className="text-brand-emerald">{profile.heroHeadline.accent}</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-onDarkMuted"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                Explore My Work <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.cvUrl} download className="btn-ghost-dark">
                Download CV <Download className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 flex flex-wrap items-center gap-2.5 text-sm text-ink-onDarkMuted"
            >
              <a className="chip-dark" href="#contact">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </a>
              <a className="chip-dark" href={`mailto:${profile.email}`}>
                <Mail className="h-3.5 w-3.5" />
                {profile.email}
              </a>
              <a className="chip-dark" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone className="h-3.5 w-3.5" />
                {profile.phone}
              </a>
            </motion.div>
          </div>

          <div className="relative">
            <div className="grid gap-3 sm:grid-cols-[1fr_240px]">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
                <div className="relative aspect-[6/5.2] w-full">
                  <IndiaMap />
                </div>
                <div className="pointer-events-none absolute left-4 top-4 flex flex-col gap-2 w-[156px]">
                  <StatTile
                    label="Total Sites"
                    value={dashboardStats.totalSites.toLocaleString()}
                    delta={dashboardStats.totalSitesDelta}
                    className="bg-bg-navy-elev/90"
                    delay={0.2}
                  />
                  <StatTile
                    label="Fiber Coverage (km)"
                    value={dashboardStats.fiberCoverage.toLocaleString()}
                    delta={dashboardStats.fiberDelta}
                    className="bg-bg-navy-elev/90"
                    delay={0.3}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <DonutChart />
                <GrowthChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
