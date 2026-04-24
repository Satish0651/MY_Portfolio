"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance,
  className,
  ...rest
}: Props) {
  const o = offsets[direction];
  const init = {
    opacity: 0,
    x: distance !== undefined ? (o.x !== 0 ? Math.sign(o.x) * distance : 0) : o.x,
    y: distance !== undefined ? (o.y !== 0 ? Math.sign(o.y) * distance : 0) : o.y,
  };
  return (
    <motion.div
      initial={init}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
