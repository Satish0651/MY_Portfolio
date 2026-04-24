import { kb, FALLBACK_SUGGESTIONS, type KBEntry } from "./knowledge";

const STOP = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "do",
  "does",
  "did",
  "of",
  "to",
  "in",
  "on",
  "for",
  "about",
  "and",
  "or",
  "me",
  "my",
  "with",
  "by",
  "i",
  "you",
  "your",
  "it",
  "this",
  "that",
  "these",
  "those",
  "be",
  "can",
  "could",
  "would",
  "will",
  "should",
  "what",
  "which",
  "who",
  "whom",
  "whose",
  "when",
  "where",
  "why",
  "how",
  "there",
  "here",
  "some",
  "any",
]);

const ALIASES: Record<string, string[]> = {
  ai: ["artificial", "intelligence", "llm", "gpt", "rag", "chatbot"],
  gis: ["geospatial", "spatial", "map", "mapping", "location"],
  job: ["role", "position", "work", "employment"],
  hire: ["hiring", "hireable", "opportunity", "available"],
  contact: ["reach", "email", "phone", "linkedin"],
  skills: ["skill", "expertise", "tech", "stack", "capabilities"],
  project: ["projects", "portfolio", "work", "case", "study", "studies"],
  certification: ["certified", "credential", "cert", "certs"],
  experience: ["years", "yoe", "seniority"],
};

function tokenize(text: string): string[] {
  const tokens = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOP.has(w));

  const expanded = new Set<string>(tokens);
  for (const t of tokens) {
    for (const [root, aliases] of Object.entries(ALIASES)) {
      if (t === root || aliases.includes(t)) {
        expanded.add(root);
        for (const a of aliases) expanded.add(a);
      }
    }
  }
  return Array.from(expanded);
}

function scoreEntry(queryTokens: string[], query: string, entry: KBEntry): number {
  const qLower = query.toLowerCase();
  let score = 0;

  for (const tag of entry.tags) {
    const tagLower = tag.toLowerCase();
    if (qLower.includes(tagLower) && tagLower.length >= 3) {
      score += 8 + Math.min(tagLower.length / 4, 4);
      continue;
    }
    const tagTokens = tokenize(tag);
    const overlap = tagTokens.filter((t) => queryTokens.includes(t)).length;
    if (overlap > 0) {
      score += overlap * 2.5;
    }
  }

  const questionTokens = tokenize(entry.question);
  const qOverlap = questionTokens.filter((t) => queryTokens.includes(t)).length;
  score += qOverlap * 1.2;

  return score;
}

export type ChatAnswer = {
  answer: string;
  followups: string[];
  matchedId: string | null;
  confidence: "high" | "medium" | "low";
};

export function getAnswer(rawQuery: string): ChatAnswer {
  const query = rawQuery.trim();
  if (!query) {
    return {
      answer:
        "Ask me anything about Satish — his experience, AI/GIS projects, skills, or how to reach him.",
      followups: FALLBACK_SUGGESTIONS,
      matchedId: null,
      confidence: "low",
    };
  }

  const tokens = tokenize(query);
  const scored = kb
    .map((e) => ({ entry: e, score: scoreEntry(tokens, query, e) }))
    .sort((a, b) => b.score - a.score);

  const top = scored[0];
  if (!top || top.score < 2.5) {
    return {
      answer: `I don't have a direct answer to that, but I can tell you about Satish's experience, AI + GIS projects, technical skills, certifications, or how to contact him. Pick one below or rephrase your question.`,
      followups: FALLBACK_SUGGESTIONS,
      matchedId: null,
      confidence: "low",
    };
  }

  const confidence: ChatAnswer["confidence"] =
    top.score >= 10 ? "high" : top.score >= 5 ? "medium" : "low";

  const followups = top.entry.followups ?? FALLBACK_SUGGESTIONS.slice(0, 3);

  return {
    answer: top.entry.answer,
    followups,
    matchedId: top.entry.id,
    confidence,
  };
}
