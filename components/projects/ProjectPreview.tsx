"use client";

import { motion } from "framer-motion";

type Kind = "chatbot" | "dashboard" | "map" | "storymaps";

const accentMap = {
  purple: "#7C3AED",
  blue: "#3B82F6",
  green: "#10B981",
  cyan: "#22D3EE",
};

export function ProjectPreview({
  kind,
  accent = "purple",
}: {
  kind: Kind;
  accent?: keyof typeof accentMap;
}) {
  const c = accentMap[accent];

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[linear-gradient(160deg,#0F172A,#1E293B)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(600px 200px at 20% 0%, ${c}33, transparent 60%)`,
        }}
      />
      {kind === "chatbot" && <ChatbotPreview color={c} />}
      {kind === "dashboard" && <DashboardPreview color={c} />}
      {kind === "map" && <MapPreview color={c} />}
      {kind === "storymaps" && <StoryMapsPreview color={c} />}
    </div>
  );
}

function ChatbotPreview({ color }: { color: string }) {
  return (
    <div className="relative h-full w-full p-3">
      <div className="flex h-full flex-col rounded-lg border border-white/10 bg-black/30 p-2.5">
        <div className="flex items-center gap-1.5 border-b border-white/5 pb-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-yellow-400" />
          <span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="ml-2 font-mono text-[9px] text-slate-400">
            gis-assistant.chat
          </span>
        </div>
        <div className="mt-2 flex flex-col gap-1.5">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-[80%] rounded-md rounded-bl-sm bg-white/5 p-1.5 text-[9px] text-slate-200"
          >
            How many active fiber sites in Pune?
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="ml-auto max-w-[85%] rounded-md rounded-br-sm p-1.5 text-[9px] text-white"
            style={{ background: `${color}30`, border: `1px solid ${color}55` }}
          >
            1,248 active fiber sites across Pune. Coverage up 5.6% MoM.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="max-w-[65%] rounded-md rounded-bl-sm bg-white/5 p-1.5 text-[9px] text-slate-200"
          >
            Show on map
          </motion.div>
        </div>
        <div className="mt-auto flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 p-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
          <span
            className="grid h-4 w-4 place-items-center rounded-sm"
            style={{ background: color }}
          >
            <span className="font-mono text-[9px] font-bold text-black">↑</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function DashboardPreview({ color }: { color: string }) {
  return (
    <div className="relative h-full w-full p-3">
      <div className="flex h-full gap-2">
        <div className="flex w-1/2 flex-col gap-1.5">
          <div className="rounded-md border border-white/10 bg-black/30 p-2">
            <p className="text-[8px] uppercase tracking-wider text-slate-500">
              Sites
            </p>
            <p className="font-display text-sm font-bold text-white">12,458</p>
            <div className="mt-1 h-1 w-full rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{ width: "74%", background: color }}
              />
            </div>
          </div>
          <div className="flex-1 rounded-md border border-white/10 bg-black/30 p-2">
            <p className="text-[8px] uppercase tracking-wider text-slate-500">
              Trend
            </p>
            <svg viewBox="0 0 100 40" className="mt-1 h-10 w-full">
              <defs>
                <linearGradient id="dashfill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity="0.5" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 32 L15 26 L30 22 L45 18 L60 14 L75 16 L90 8 L100 10 L100 40 L0 40 Z"
                fill="url(#dashfill)"
              />
              <path
                d="M0 32 L15 26 L30 22 L45 18 L60 14 L75 16 L90 8 L100 10"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-1.5">
          <div className="flex-1 rounded-md border border-white/10 bg-black/30 p-2">
            <p className="text-[8px] uppercase tracking-wider text-slate-500">
              Status mix
            </p>
            <div className="mt-1.5 grid place-items-center">
              <svg width="54" height="54" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="14" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                <circle
                  cx="20"
                  cy="20"
                  r="14"
                  fill="none"
                  stroke={color}
                  strokeWidth="5"
                  strokeDasharray="60 28"
                  transform="rotate(-90 20 20)"
                  strokeLinecap="butt"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="14"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="5"
                  strokeDasharray="14 74"
                  strokeDashoffset="-60"
                  transform="rotate(-90 20 20)"
                />
              </svg>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-black/30 p-2">
            <div className="flex items-end gap-1">
              {[14, 22, 18, 30, 26, 36].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ height: h, background: i === 5 ? color : "rgba(255,255,255,0.15)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapPreview({ color }: { color: string }) {
  const pins = [
    { x: 30, y: 40, big: true },
    { x: 55, y: 50, big: false },
    { x: 70, y: 35, big: true },
    { x: 45, y: 70, big: false },
    { x: 80, y: 65, big: false },
    { x: 22, y: 62, big: false },
  ];
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="map-grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#map-grid)" />
        <path
          d="M 10 20 Q 30 10 55 15 T 95 25 L 95 40 Q 70 48 45 45 T 15 55 Z"
          fill={`${color}20`}
          stroke={`${color}66`}
          strokeWidth="0.4"
        />
        <path
          d="M 15 55 Q 40 50 65 58 T 95 70 L 95 85 Q 65 82 35 88 T 10 82 Z"
          fill={`${color}15`}
          stroke={`${color}44`}
          strokeWidth="0.4"
        />
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={p.big ? 1.8 : 1.1} fill={color} />
            <circle
              cx={p.x}
              cy={p.y}
              r={p.big ? 3.5 : 2.2}
              fill="none"
              stroke={color}
              strokeWidth="0.4"
              opacity="0.6"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

function StoryMapsPreview({ color }: { color: string }) {
  return (
    <div className="relative h-full w-full p-3">
      <div className="grid h-full grid-cols-2 gap-2">
        <div className="flex flex-col gap-1.5">
          <div className="h-3 w-2/3 rounded-sm bg-white/15" />
          <div className="h-2 w-5/6 rounded-sm bg-white/10" />
          <div className="h-2 w-1/2 rounded-sm bg-white/10" />
          <div className="mt-1 flex-1 rounded-md border border-white/10 bg-black/30 p-1.5">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-end gap-1">
                {[10, 18, 14, 22, 16, 26, 20, 30].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: h,
                      background: i % 2 === 0 ? color : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>
              <p className="text-[7px] uppercase tracking-wider text-slate-500">
                KPI trend
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-md border border-white/10 bg-black/30 p-1.5">
          <div className="grid h-full grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-sm"
                style={{
                  background:
                    i === 4
                      ? `${color}55`
                      : `rgba(255,255,255,${0.05 + (i % 3) * 0.04})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
