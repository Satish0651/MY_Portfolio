"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  X,
  User as UserIcon,
} from "lucide-react";
import { getAnswer } from "@/lib/chatbot/answer";
import { FALLBACK_SUGGESTIONS } from "@/lib/chatbot/knowledge";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  followups?: string[];
};

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

const STARTER_MESSAGE: Message = {
  id: "starter",
  role: "assistant",
  content: `Hi! I'm Satish's AI assistant — trained on his profile. Ask me about his experience, AI + GIS projects, skills, certifications, or how to get in touch.`,
  followups: FALLBACK_SUGGESTIONS.slice(0, 4),
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([STARTER_MESSAGE]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [hasNewNudge, setHasNewNudge] = useState(true);

  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, thinking]);

  useEffect(() => {
    if (open) {
      setHasNewNudge(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open]);

  function askQuestion(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: uid(), role: "user", content: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    const delay = 450 + Math.min(trimmed.length * 14, 900);
    window.setTimeout(() => {
      const { answer, followups } = getAnswer(trimmed);
      const reply: Message = {
        id: uid(),
        role: "assistant",
        content: answer,
        followups,
      };
      setMessages((prev) => [...prev, reply]);
      setThinking(false);
    }, delay);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    askQuestion(input);
  }

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat with Satish's AI assistant"}
        className={cn(
          "fixed bottom-5 right-5 z-[70] grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_10px_30px_-5px_rgba(124,58,237,0.6)] transition-colors",
          "bg-cta-gradient hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/80 focus-visible:ring-offset-2",
          "sm:bottom-6 sm:right-6",
        )}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-cta-gradient opacity-60 blur-xl" />
        <span className="relative">
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Sparkles className="h-6 w-6" />
          )}
        </span>
        {hasNewNudge && !open && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="absolute inset-0 animate-ping rounded-full bg-brand-green opacity-70" />
            <span className="relative grid h-4 w-4 place-items-center rounded-full bg-brand-green">
              <span className="h-1 w-1 rounded-full bg-white" />
            </span>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "fixed z-[69] flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)]",
              "bottom-24 right-4 h-[70vh] max-h-[640px] w-[calc(100vw-2rem)] max-w-[400px]",
              "sm:bottom-[88px] sm:right-6 sm:w-[400px]",
            )}
            role="dialog"
            aria-label="Chat with Satish's AI assistant"
          >
            <div className="relative overflow-hidden bg-bg-navy px-4 py-3.5 text-white">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(500px 200px at 10% 0%, rgba(124,58,237,0.45), transparent 60%), radial-gradient(500px 180px at 100% 100%, rgba(16,185,129,0.25), transparent 60%)",
                }}
              />
              <div className="relative flex items-center gap-3">
                <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <Bot className="h-4 w-4 text-brand-cyan" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-bg-navy bg-brand-green" />
                </span>
                <div className="flex-1 leading-tight">
                  <p className="font-display text-sm font-semibold tracking-tight">
                    Satish's AI Assistant
                  </p>
                  <p className="text-[11px] text-ink-onDarkMuted">
                    Trained on {profile.name}'s profile · typically instant
                  </p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid h-8 w-8 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={listRef}
              className="flex-1 overflow-y-auto bg-bg px-3 py-4"
              style={{ scrollBehavior: "smooth" }}
            >
              <ul className="flex flex-col gap-3">
                {messages.map((m) => (
                  <MessageBubble key={m.id} message={m} onPick={askQuestion} />
                ))}
                {thinking && (
                  <li className="flex items-start gap-2">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white shadow-sm ring-1 ring-line">
                      <Bot className="h-3.5 w-3.5 text-brand-indigo" />
                    </span>
                    <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-line bg-white px-3 py-2.5">
                      <Dot delay={0} />
                      <Dot delay={0.15} />
                      <Dot delay={0.3} />
                    </div>
                  </li>
                )}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 border-t border-line bg-white px-3 py-2.5"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Satish's work, skills, projects…"
                className="flex-1 rounded-xl border border-line bg-bg px-3.5 py-2 text-sm text-ink placeholder:text-ink-muted focus:border-brand-indigo/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-indigo/20"
                disabled={thinking}
                maxLength={300}
              />
              <button
                type="submit"
                disabled={!input.trim() || thinking}
                aria-label="Send"
                className={cn(
                  "grid h-9 w-9 place-items-center rounded-xl text-white transition-all",
                  "bg-cta-gradient shadow-cta-glow hover:brightness-110",
                  "disabled:cursor-not-allowed disabled:opacity-40 disabled:saturate-50",
                )}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="flex items-center justify-between gap-2 border-t border-line bg-bg/60 px-3 py-1.5">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-ink-muted">
                <Sparkles className="h-2.5 w-2.5" />
                AI · knowledge-base
              </span>
              <span className="text-[10px] text-ink-muted">
                <MessageCircle className="mr-0.5 inline h-2.5 w-2.5" />
                Press Esc to close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({
  message,
  onPick,
}: {
  message: Message;
  onPick: (t: string) => void;
}) {
  const isUser = message.role === "user";
  return (
    <li className={cn("flex items-start gap-2", isUser && "flex-row-reverse")}>
      <span
        className={cn(
          "grid h-7 w-7 shrink-0 place-items-center rounded-full text-white ring-1",
          isUser
            ? "bg-bg-navy ring-bg-navy"
            : "bg-white shadow-sm ring-line text-brand-indigo",
        )}
      >
        {isUser ? <UserIcon className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
      </span>
      <div
        className={cn(
          "flex max-w-[82%] flex-col gap-2",
          isUser ? "items-end" : "items-start",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed",
            isUser
              ? "rounded-tr-sm bg-cta-gradient text-white shadow-sm"
              : "rounded-tl-sm border border-line bg-white text-ink",
          )}
        >
          {message.content}
        </motion.div>
        {!isUser && message.followups && message.followups.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {message.followups.map((f) => (
              <button
                key={f}
                onClick={() => onPick(f)}
                className="rounded-full border border-line bg-white px-2.5 py-1 text-[11px] font-medium text-ink transition-colors hover:border-brand-indigo/40 hover:bg-brand-indigo/5 hover:text-brand-indigo"
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 0.9, repeat: Infinity, delay, ease: "easeInOut" }}
      className="inline-block h-1.5 w-1.5 rounded-full bg-brand-indigo/60"
    />
  );
}
