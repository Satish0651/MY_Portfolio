import {
  profile,
  experience,
  projects,
  skillGroups,
  certifications,
  tools,
  impactStats,
  education,
  coreExpertise,
} from "@/lib/data";

export type KBEntry = {
  id: string;
  tags: string[];
  question: string;
  answer: string;
  followups?: string[];
};

const yearsText = `${profile.yearsExperience}+ years`;
const currentRole = experience.find((e) => e.current);

const skillsBullets = skillGroups
  .map((g) => `• ${g.title}: ${g.items.join(", ")}`)
  .join("\n");

const certsBullets = certifications
  .map((c) => `• ${c.name} — ${c.org}`)
  .join("\n");

const toolsList = tools.map((t) => t.name).join(", ");

const projectSummaries = projects
  .map((p) => `• ${p.title} — ${p.description} [${p.tags.join(", ")}]`)
  .join("\n");

const experienceSummary = experience
  .map(
    (e) =>
      `• ${e.role} @ ${e.company} (${e.dates}${e.current ? " — current" : ""}) — ${e.location}`,
  )
  .join("\n");

const educationBullets = education.map((e) => `• ${e.degree} — ${e.school}`).join("\n");

const metricsLine = impactStats
  .map((s) => `${s.value} ${s.label.toLowerCase()}`)
  .join(" · ");

export const FALLBACK_SUGGESTIONS = [
  "Who is Satish?",
  "What does he do at Jio?",
  "Tell me about his AI/RAG projects",
  "What tools and tech does he use?",
  "How do I contact him?",
];

export const kb: KBEntry[] = [
  {
    id: "greet",
    tags: ["hi", "hello", "hey", "yo", "namaste", "good morning", "good evening", "good afternoon"],
    question: "hi",
    answer:
      "Hey! I'm Satish's AI assistant. Ask me anything about his profile — experience, AI/GIS projects, skills, certifications, or how to get in touch.",
    followups: FALLBACK_SUGGESTIONS.slice(0, 4),
  },
  {
    id: "thanks",
    tags: ["thanks", "thank you", "thx", "ty", "cheers"],
    question: "thanks",
    answer: "Anytime! Anything else you'd like to know about Satish?",
    followups: ["Tell me about his projects", "What are his certifications?"],
  },
  {
    id: "bye",
    tags: ["bye", "goodbye", "see ya", "see you", "later"],
    question: "bye",
    answer: "Take care! If you want to reach Satish directly, his email is " + profile.email + ".",
  },
  {
    id: "help",
    tags: ["help", "what can you do", "how does this work", "what can you answer", "capabilities"],
    question: "What can you answer?",
    answer: `I'm trained on Satish's profile. Try asking about:\n• His current role and past experience\n• AI + GIS / RAG / LLM work\n• Projects (chatbot, enterprise GIS, smart city, storymaps)\n• Skills and tools (ArcGIS, PostGIS, Python, Cursor, Azure)\n• Certifications and education\n• Contact / location / availability`,
    followups: FALLBACK_SUGGESTIONS,
  },
  {
    id: "who",
    tags: [
      "who",
      "about",
      "introduce",
      "introduction",
      "tell me about satish",
      "background",
      "profile",
      "summary",
      "bio",
    ],
    question: "Who is Satish Kumar?",
    answer: `Satish Kumar is a ${profile.title} with ${yearsText} of experience building enterprise GIS platforms, AI/RAG systems, and geospatial solutions for telecom, smart cities, and government clients. ${profile.aboutLong} He's based in ${profile.location}.`,
    followups: ["What does he do at Jio?", "What are his top skills?", "Show me his projects"],
  },
  {
    id: "current-role",
    tags: [
      "current role",
      "where does he work",
      "jio",
      "jpl",
      "jio platforms",
      "current job",
      "now",
      "today",
      "working",
      "company",
    ],
    question: "What is his current role?",
    answer: currentRole
      ? `${currentRole.role} at ${currentRole.company} (${currentRole.dates}), based in ${currentRole.location}. Key focus:\n${currentRole.bullets.map((b) => "• " + b).join("\n")}`
      : "Currently a GIS Solutions Engineer in Navi Mumbai.",
    followups: ["What AI projects is he working on?", "How many years of experience?"],
  },
  {
    id: "years",
    tags: [
      "years",
      "experience",
      "how long",
      "how many years",
      "seniority",
      "total experience",
      "yoe",
    ],
    question: "How many years of experience does he have?",
    answer: `${yearsText} total, across telecom (Jio Platforms), smart-city GIS-ERP (PCMC), presales for defense / government (SISL), and GIS analytics (VizExperts). Quick stats: ${metricsLine}.`,
    followups: ["Tell me the full career history", "What domains has he worked in?"],
  },
  {
    id: "history",
    tags: [
      "history",
      "past roles",
      "career",
      "previous jobs",
      "work history",
      "roles",
      "timeline",
      "journey",
      "all companies",
    ],
    question: "Full career history?",
    answer: `Satish's career (most recent first):\n${experienceSummary}`,
    followups: [
      "Tell me about Jio Platforms role",
      "What did he do at SISL?",
      "Which smart city project?",
    ],
  },
  {
    id: "nascent",
    tags: ["nascent", "smart city", "pcmc", "pune", "gis-erp", "erp"],
    question: "Tell me about the Nascent / PCMC role.",
    answer:
      (() => {
        const j = experience.find((e) => e.id === "nascent");
        if (!j) return "Delivered Smart City GIS-ERP integration for PCMC.";
        return `${j.role} at ${j.company} (${j.dates}), ${j.location}.\n${j.bullets.map((b) => "• " + b).join("\n")}`;
      })(),
    followups: ["Tell me about the Smart City project", "What came after Nascent?"],
  },
  {
    id: "sisl",
    tags: ["sisl", "presales", "defense", "government", "consulting", "proposal", "solution architect", "rfp"],
    question: "What did he do at SISL?",
    answer:
      (() => {
        const j = experience.find((e) => e.id === "sisl");
        if (!j) return "Led GIS presales for defense and government clients.";
        return `${j.role} at ${j.company} (${j.dates}), ${j.location}.\n${j.bullets.map((b) => "• " + b).join("\n")}`;
      })(),
    followups: ["Has he done presales recently?", "What POCs has he built?"],
  },
  {
    id: "vizexperts",
    tags: ["vizexperts", "first job", "earliest role", "gis analyst", "beginning"],
    question: "What about VizExperts?",
    answer:
      (() => {
        const j = experience.find((e) => e.id === "vizexperts");
        if (!j) return "Early career GIS analyst role.";
        return `${j.role} at ${j.company} (${j.dates}), ${j.location}.\n${j.bullets.map((b) => "• " + b).join("\n")}`;
      })(),
  },
  {
    id: "jpl-detail",
    tags: ["jio work", "enterprise gis", "telecom", "lbs", "map platform", "reliance jio"],
    question: "What exactly is he doing at Jio Platforms?",
    answer:
      (() => {
        const j = experience.find((e) => e.id === "jpl");
        if (!j) return "Enterprise GIS and AI work at Jio Platforms.";
        return `At ${j.company}:\n${j.bullets.map((b) => "• " + b).join("\n")}\nStack tags: ${j.tags.join(", ")}.`;
      })(),
    followups: ["What is the RAG chatbot?", "How does he use Cursor?"],
  },
  {
    id: "skills",
    tags: [
      "skills",
      "expertise",
      "technical skills",
      "tech stack",
      "technologies",
      "capabilities",
      "proficient",
      "good at",
      "strengths",
    ],
    question: "What are his technical skills?",
    answer: `Satish works across the full GIS + data + AI stack:\n${skillsBullets}\n\nCore expertise: ${coreExpertise.join(", ")}.`,
    followups: ["Show me his AI/RAG work", "What databases does he know?", "What GIS tools does he use?"],
  },
  {
    id: "core-expertise",
    tags: ["core expertise", "main skills", "specialties", "what is he expert in", "expert"],
    question: "What is he expert in?",
    answer: `Core expertise areas:\n${coreExpertise.map((c) => "• " + c).join("\n")}`,
    followups: ["Tell me about enterprise GIS architecture", "What about AI + GIS?"],
  },
  {
    id: "gis",
    tags: ["gis", "arcgis", "qgis", "esri", "spatial", "geospatial", "gis platforms", "mapping"],
    question: "Which GIS platforms does he use?",
    answer: `GIS platforms: ${skillGroups.find((g) => g.id === "gis-platforms")?.items.join(", ")}. Web GIS: ${skillGroups.find((g) => g.id === "web-gis")?.items.join(", ")}. He holds ArcGIS Pro Professional and ArcGIS Online Administration certifications.`,
    followups: ["Show me a GIS project", "What databases does he use?"],
  },
  {
    id: "db",
    tags: ["database", "databases", "postgis", "sql", "sql server", "plsql", "pl/sql", "postgres"],
    question: "What databases does he work with?",
    answer: `Databases: ${skillGroups.find((g) => g.id === "databases")?.items.join(", ")}. He's SQL / PL-SQL certified (Professional) and has used PostGIS extensively for spatial analytics at enterprise scale.`,
    followups: ["How does he combine PostGIS with ArcGIS?", "Show me a data-heavy project"],
  },
  {
    id: "ai",
    tags: [
      "ai",
      "ml",
      "llm",
      "llms",
      "rag",
      "retrieval augmented",
      "chatbot",
      "ai integration",
      "cursor",
      "ai workflows",
      "gen ai",
      "generative ai",
      "artificial intelligence",
      "machine learning",
      "mcp",
      "agents",
    ],
    question: "Tell me about his AI / RAG work.",
    answer: `Satish has built production AI + GIS solutions:\n• Designed a RAG-based chatbot (Cursor + open-source LLMs) that answers natural-language queries over PostGIS / SQL Server plus SOPs and docs.\n• Integrates LLMs into GIS workflows for telecom planning at Jio Platforms.\n• Certified on AI Agents (MCP) and as a Jio Certified Cursor Developer.\n• AI skills: RAG, LLMs, Cursor, AI Workflows.`,
    followups: ["How does the RAG chatbot work?", "What's MCP?", "Show me the AI chatbot project"],
  },
  {
    id: "cursor",
    tags: ["cursor", "cursor ai", "cursor developer", "cursor ide", "cursor certified"],
    question: "Does he use Cursor?",
    answer:
      "Yes — he's a Jio Certified Cursor Developer and uses Cursor day-to-day to build RAG chatbots, author SRS/BRD/HLD-LLD drafts, and accelerate Python/SQL/GIS automation. Cursor is central to his AI-native GIS workflow.",
    followups: ["Tell me about the RAG chatbot", "What certifications does he hold?"],
  },
  {
    id: "projects",
    tags: [
      "projects",
      "portfolio",
      "work",
      "showcase",
      "case studies",
      "what has he built",
      "deliverables",
    ],
    question: "What projects has he worked on?",
    answer: `Featured projects:\n${projectSummaries}\nYou can also click any project card on the site for a deeper Problem → Solution → Impact breakdown.`,
    followups: [
      "Tell me about the AI chatbot project",
      "Enterprise GIS Platform details",
      "What about Smart City GIS-ERP?",
    ],
  },
  ...projects.map<KBEntry>((p) => ({
    id: `project-${p.slug}`,
    tags: [
      p.slug.replace(/-/g, " "),
      p.title.toLowerCase(),
      ...p.tags.map((t) => t.toLowerCase()),
      ...(p.slug === "ai-gis-chatbot"
        ? ["chatbot", "rag chatbot", "ai chatbot"]
        : p.slug === "enterprise-gis-platform"
          ? ["enterprise platform", "telecom platform"]
          : p.slug === "smart-city-gis-erp"
            ? ["smart city", "pcmc", "erp"]
            : ["storymaps", "dashboards", "story maps"]),
    ],
    question: p.title,
    answer: `${p.title} — ${p.subtitle}\n\nProblem: ${p.problem}\n\nSolution: ${p.solution}\n\nImpact:\n${p.impact.map((i) => "• " + i).join("\n")}\n\nStack: ${p.tags.join(", ")}.`,
    followups: ["Tell me about another project", "What tools did he use?"],
  })),
  {
    id: "certs",
    tags: [
      "certifications",
      "certified",
      "credentials",
      "certificates",
      "licenses",
      "badges",
      "qualifications",
    ],
    question: "What certifications does he hold?",
    answer: `Certifications:\n${certsBullets}`,
    followups: ["Tell me about the AI Agents certification", "Is he ArcGIS certified?"],
  },
  {
    id: "tools",
    tags: ["tools", "software", "platforms", "what software", "tech stack", "toolkit"],
    question: "What tools and platforms does he use?",
    answer: `Tools & platforms Satish works with daily: ${toolsList}. See the "Tools & Platforms" section on the site for the full visual grid.`,
    followups: ["How does he combine ArcGIS and PostGIS?", "Does he code in Python?"],
  },
  {
    id: "python",
    tags: ["python", "scripting", "coding", "programming"],
    question: "Does he code in Python?",
    answer:
      "Yes — Python is part of his day-to-day stack. He uses it for GIS automation, spatial analytics pipelines, and as the backbone for RAG / LLM tooling in his AI projects. He pairs it with Cursor for productivity.",
    followups: ["Tell me about the RAG chatbot", "What about SQL?"],
  },
  {
    id: "presales",
    tags: [
      "presales",
      "solution consulting",
      "proposal",
      "rfp",
      "rfi",
      "demo",
      "poc",
      "solution architect",
      "consulting",
      "client",
      "stakeholder",
    ],
    question: "Has he done presales / solution consulting?",
    answer:
      "Yes — 2.5+ years of GIS presales at SISL Infotech: solution architecture, proposals, technical presentations, POCs and demos for defense and government clients. He continues to translate business requirements into technical designs (SRS / BRD / HLD-LLD) in his current role.",
    followups: ["What clients has he worked with?", "Tell me about his POCs"],
  },
  {
    id: "education",
    tags: ["education", "degree", "university", "college", "qualification", "study", "studied"],
    question: "What's his educational background?",
    answer: `Education:\n${educationBullets}`,
  },
  {
    id: "location",
    tags: ["location", "where", "based", "city", "country", "remote", "work from"],
    question: "Where is he based?",
    answer: `${profile.location}. Open to hybrid / remote setups globally for the right opportunity.`,
    followups: ["Is he open to remote work?", "Is he open to relocating?"],
  },
  {
    id: "contact",
    tags: [
      "contact",
      "reach",
      "hire",
      "email",
      "phone",
      "number",
      "linkedin",
      "github",
      "get in touch",
      "connect",
    ],
    question: "How can I contact him?",
    answer: `Best ways to reach Satish:\n• Email: ${profile.email}\n• Phone: ${profile.phone}\n• LinkedIn: ${profile.linkedin}\n• GitHub: ${profile.github}\n• Location: ${profile.location}`,
    followups: ["Is he open to new opportunities?", "What's his notice period?"],
  },
  {
    id: "hire",
    tags: [
      "hire",
      "hiring",
      "available",
      "availability",
      "open to",
      "opportunity",
      "job",
      "role",
      "looking for",
      "notice period",
      "freelance",
      "consult",
    ],
    question: "Is he open to new opportunities?",
    answer:
      "Satish is selectively open to senior / lead GIS Solutions Engineer, AI-native GIS, and Presales / Solution Consulting roles — particularly around enterprise GIS, AI + RAG, and smart-city / telecom use cases. Drop him a note at " +
      profile.email +
      " or via LinkedIn with context and he'll respond.",
    followups: ["Show me his portfolio", "What domains does he work in?"],
  },
  {
    id: "domains",
    tags: ["domains", "industries", "verticals", "sectors"],
    question: "Which industries has he worked in?",
    answer:
      "Telecom (Jio Platforms), Smart Cities (PCMC — Pune), Defense and Government (via SISL), plus broad GIS analytics and visualization across enterprise clients. Strong fit for any location-intelligent domain.",
  },
  {
    id: "metrics",
    tags: ["metrics", "stats", "numbers", "impact", "achievements"],
    question: "What's the impact in numbers?",
    answer: `Quick impact snapshot:\n${impactStats.map((s) => `• ${s.value} ${s.label}`).join("\n")}`,
  },
  {
    id: "unique",
    tags: [
      "unique",
      "different",
      "stand out",
      "why him",
      "why satish",
      "edge",
      "differentiator",
      "strength",
      "super power",
    ],
    question: "What makes Satish stand out?",
    answer:
      "He's one of the few engineers who sits at the intersection of three disciplines: deep Enterprise GIS (8+ yrs), modern AI / RAG (Cursor-certified, building LLM apps in production), and business-facing Presales Consulting. That combination means he can translate a client need into a working POC and a scalable architecture — end to end.",
    followups: ["Show me his AI + GIS work", "Tell me about a representative project"],
  },
];
