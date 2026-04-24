"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  target: number;
  duration?: number;
  start?: boolean;
  decimals?: number;
};

export function useCountUp({
  target,
  duration = 1600,
  start = true,
  decimals = 0,
}: Options): string {
  const [value, setValue] = useState(0);
  const startedAt = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const tick = (ts: number) => {
      if (startedAt.current === null) startedAt.current = ts;
      const elapsed = ts - startedAt.current;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) {
        raf.current = requestAnimationFrame(tick);
      } else {
        setValue(target);
      }
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
      startedAt.current = null;
    };
  }, [target, duration, start]);

  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}
