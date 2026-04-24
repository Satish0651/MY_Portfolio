"use client";

import { motion } from "framer-motion";
import { indiaCities } from "@/lib/data";

const INDIA_PATH =
  "M 220 70 C 250 60, 285 68, 320 78 L 365 92 C 385 98, 400 115, 415 140 L 438 170 C 452 188, 470 200, 478 220 C 484 240, 472 252, 458 258 L 440 268 C 432 284, 438 304, 430 322 L 412 352 C 400 382, 388 410, 370 438 C 352 462, 336 478, 322 488 C 314 495, 308 488, 304 478 L 296 458 C 288 432, 278 406, 268 380 L 252 348 C 238 328, 224 312, 212 296 L 198 282 C 182 272, 172 258, 172 242 C 174 228, 188 224, 200 222 L 212 216 C 220 204, 212 192, 202 184 L 188 172 C 178 160, 184 148, 196 138 L 210 124 C 202 112, 206 100, 216 88 Z";

const CONNECTIONS: [string, string][] = [
  ["Navi Mumbai", "Pune"],
  ["Navi Mumbai", "Hyderabad"],
  ["Navi Mumbai", "Ahmedabad"],
  ["Hyderabad", "Bengaluru"],
  ["Bengaluru", "Chennai"],
  ["New Delhi", "Jaipur"],
  ["New Delhi", "Lucknow"],
  ["Lucknow", "Patna"],
  ["Patna", "Kolkata"],
  ["Nagpur", "Bhopal"],
  ["Bhopal", "Jaipur"],
  ["Surat", "Ahmedabad"],
];

export function IndiaMap() {
  const byName = Object.fromEntries(indiaCities.map((c) => [c.name, c]));

  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 600 560"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Map of India with key cities marked"
      >
        <defs>
          <radialGradient id="india-fill" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="rgba(16,185,129,0.20)" />
            <stop offset="60%" stopColor="rgba(99,102,241,0.12)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </radialGradient>
          <linearGradient id="india-stroke" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.7" />
          </linearGradient>
          <pattern id="grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(148,163,184,0.07)" strokeWidth="1" />
          </pattern>
          <filter id="city-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="600" height="560" fill="url(#grid)" />

        <motion.path
          d={INDIA_PATH}
          fill="url(#india-fill)"
          stroke="url(#india-stroke)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <g stroke="rgba(34,211,238,0.35)" strokeWidth="0.8">
          {CONNECTIONS.map(([a, b], idx) => {
            const from = byName[a];
            const to = byName[b];
            if (!from || !to) return null;
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                strokeDasharray="3 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.04 }}
              />
            );
          })}
        </g>

        <g>
          {indiaCities.map((c, i) => (
            <motion.g
              key={c.name}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.9 + i * 0.035 }}
            >
              {c.highlight && (
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={c.size + 6}
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="1.2"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values={`${c.size + 3};${c.size + 10};${c.size + 3}`}
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0;0.6"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}
              <circle
                cx={c.x}
                cy={c.y}
                r={c.size}
                fill={c.highlight ? "#34D399" : "#22D3EE"}
                filter="url(#city-glow)"
              />
              <circle cx={c.x} cy={c.y} r={c.size / 2} fill="#ffffff" opacity="0.95" />
            </motion.g>
          ))}
        </g>

        <g fill="#E2E8F0" fontFamily="Inter, system-ui, sans-serif" fontSize="11" fontWeight="500">
          {indiaCities
            .filter((c) => ["Navi Mumbai", "Pune", "Hyderabad", "Bengaluru", "Nagpur", "New Delhi", "Kolkata"].includes(c.name))
            .map((c) => (
              <motion.text
                key={`label-${c.name}`}
                x={c.x + 10}
                y={c.y + 4}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                {c.name}
              </motion.text>
            ))}
        </g>
      </svg>
    </div>
  );
}
