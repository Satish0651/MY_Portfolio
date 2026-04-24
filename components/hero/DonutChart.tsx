"use client";

import { motion } from "framer-motion";
import { dashboardStats } from "@/lib/data";

export function DonutChart() {
  const data = dashboardStats.siteStatus;
  const total = data.reduce((s, d) => s + d.value, 0);
  const R = 42;
  const C = 2 * Math.PI * R;

  let offset = 0;
  const arcs = data.map((d) => {
    const frac = d.value / total;
    const len = C * frac;
    const seg = {
      ...d,
      strokeDasharray: `${len} ${C - len}`,
      strokeDashoffset: -offset,
    };
    offset += len;
    return seg;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-ink-onDarkMuted">
        Site Status
      </p>
      <div className="mt-2 flex items-center gap-4">
        <div className="relative shrink-0">
          <svg width="104" height="104" viewBox="0 0 104 104">
            <g transform="rotate(-90 52 52)">
              <circle cx="52" cy="52" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
              {arcs.map((a) => (
                <motion.circle
                  key={a.label}
                  cx="52"
                  cy="52"
                  r={R}
                  fill="none"
                  stroke={a.color}
                  strokeWidth="12"
                  strokeLinecap="butt"
                  initial={{ strokeDashoffset: C, strokeDasharray: `0 ${C}` }}
                  animate={{ strokeDashoffset: a.strokeDashoffset, strokeDasharray: a.strokeDasharray }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </g>
            <text
              x="52"
              y="50"
              textAnchor="middle"
              fill="#E2E8F0"
              fontSize="10"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              Total
            </text>
            <text
              x="52"
              y="66"
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize="15"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
            >
              {(total / 1000).toFixed(1)}K
            </text>
          </svg>
        </div>
        <ul className="flex-1 grid grid-cols-1 gap-1.5 text-[11px]">
          {data.map((d) => (
            <li key={d.label} className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5 text-ink-onDarkMuted">
                <span
                  className="inline-block h-2 w-2 rounded-sm"
                  style={{ backgroundColor: d.color }}
                />
                {d.label}
              </span>
              <span className="tabular-nums text-white">
                {d.value.toLocaleString()}{" "}
                <span className="text-ink-onDarkMuted">({d.pct}%)</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
