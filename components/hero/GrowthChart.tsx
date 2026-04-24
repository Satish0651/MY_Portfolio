"use client";

import { motion } from "framer-motion";
import { dashboardStats } from "@/lib/data";

export function GrowthChart() {
  const data = dashboardStats.growth;
  const w = 240;
  const h = 110;
  const pad = { l: 26, r: 10, t: 10, b: 22 };
  const max = Math.max(...data.map((d) => d.value));
  const min = 0;
  const stepX = (w - pad.l - pad.r) / (data.length - 1);
  const scaleY = (v: number) => h - pad.b - ((v - min) / (max - min)) * (h - pad.t - pad.b);

  const pts = data.map((d, i) => ({ x: pad.l + i * stepX, y: scaleY(d.value) }));
  const linePath = pts.reduce(
    (acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` L ${p.x} ${p.y}`),
    "",
  );
  const areaPath = `${linePath} L ${pts[pts.length - 1].x} ${h - pad.b} L ${pts[0].x} ${h - pad.b} Z`;

  const yTicks = [3, 6, 9, 12, 15];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-ink-onDarkMuted">
        Growth Over Time
      </p>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 h-[110px] w-full">
        <defs>
          <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
        </defs>
        {yTicks.map((t, i) => {
          const yy = scaleY(t);
          return (
            <g key={`y-${i}`}>
              <line
                x1={pad.l}
                x2={w - pad.r}
                y1={yy}
                y2={yy}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="2 3"
              />
              <text
                x={pad.l - 6}
                y={yy + 3}
                textAnchor="end"
                fill="#64748B"
                fontSize="9"
                fontFamily="Inter, sans-serif"
              >
                {t}K
              </text>
            </g>
          );
        })}

        <motion.path
          d={areaPath}
          fill="url(#area-fill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke="#22D3EE"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
        {pts.map((p, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={p.x}
            cy={p.y}
            r="2.2"
            fill="#ffffff"
            stroke="#22D3EE"
            strokeWidth="1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 + i * 0.05 }}
          />
        ))}

        {data.map((d, i) => (
          <text
            key={`x-${i}`}
            x={pad.l + i * stepX}
            y={h - 6}
            textAnchor="middle"
            fill="#64748B"
            fontSize="9"
            fontFamily="Inter, sans-serif"
          >
            {d.month}
          </text>
        ))}
      </svg>
    </motion.div>
  );
}
