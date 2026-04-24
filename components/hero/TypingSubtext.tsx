"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks/usePrefersReducedMotion";

export function TypingSubtext({ phrases }: { phrases: string[] }) {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(phrases[0]);
      return;
    }
    const current = phrases[index % phrases.length];
    const speed = deleting ? 32 : 56;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, reduced]);

  return (
    <span className="font-mono text-ink-muted">
      {text}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] bg-neon-cyan animate-pulse-soft align-middle" />
    </span>
  );
}
