export const profile = {
  name: "Satish Kumar",
  shortName: "Satish",
  title: "GIS Solutions Engineer",
  tagline: "Enterprise GIS  |  AI (RAG)  |  Presales",
  location: "Navi Mumbai, India",
  phone: "+91-9650069246",
  email: "satss.kr@gmail.com",
  linkedin: "https://www.linkedin.com/in/satishkumar-1a01b3a5",
  github: "https://github.com/Satish0651",
  yearsExperience: 8,
  domains: ["Telecom", "Smart Cities", "Defense", "Government"],
  summary:
    "GIS professional with 8+ years of experience delivering enterprise geospatial solutions across telecom, smart cities, and defense. I design scalable GIS architectures, integrate AI-driven workflows, and turn location data into business decisions. Hands-on with RAG systems, open-source LLMs and modern agent frameworks for real-world enterprise use cases.",
  rotatingRoles: [
    "Enterprise GIS Architect",
    "AI-native Solutions Engineer",
    "RAG + Geospatial Intelligence",
    "Presales & Solution Consultant",
  ],
};

export type SkillLevel = number;

export type SkillCategory = {
  id: string;
  title: string;
  accent: "cyan" | "blue" | "purple" | "pink";
  icon: string;
  skills: { name: string; level: SkillLevel; highlight?: boolean }[];
};

export const skills: SkillCategory[] = [
  {
    id: "gis",
    title: "GIS & Platforms",
    accent: "cyan",
    icon: "Globe2",
    skills: [
      { name: "ArcGIS Pro", level: 95, highlight: true },
      { name: "ArcGIS Enterprise", level: 92 },
      { name: "ArcGIS Online", level: 90 },
      { name: "QGIS", level: 85 },
    ],
  },
  {
    id: "ai",
    title: "AI & Development",
    accent: "purple",
    icon: "Sparkles",
    skills: [
      { name: "RAG Systems", level: 92, highlight: true },
      { name: "Open-source LLMs", level: 88, highlight: true },
      { name: "Cursor (vibe coding)", level: 95, highlight: true },
      { name: "Prompt Engineering", level: 90 },
      { name: "Antigravity (Google)", level: 80 },
    ],
  },
  {
    id: "db",
    title: "Databases",
    accent: "blue",
    icon: "Database",
    skills: [
      { name: "PostgreSQL / PostGIS", level: 92, highlight: true },
      { name: "SQL Server", level: 88 },
      { name: "PL/SQL", level: 80 },
    ],
  },
  {
    id: "webgis",
    title: "Web GIS",
    accent: "cyan",
    icon: "Map",
    skills: [
      { name: "GeoServer", level: 85 },
      { name: "OpenLayers", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    accent: "pink",
    icon: "Wrench",
    skills: [
      { name: "Azure DevOps (CI/CD)", level: 85 },
      { name: "ERDAS Imagine", level: 78 },
      { name: "AI Agents (MCP)", level: 82 },
    ],
  },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    id: "jpl",
    role: "Manager — Enterprise GIS Analytics  |  Manager — GIS (LBS & Map Platform)",
    company: "Jio Platforms Limited (JPL)",
    location: "Navi Mumbai, India",
    dates: "Jul 2022 — Present",
    current: true,
    bullets: [
      "Led enterprise GIS and location-intelligence platforms supporting telecom planning and operations at scale.",
      "Designed and shipped an AI-powered (RAG-based) chatbot for querying GIS and enterprise datasets — built with Cursor and an open-source LLM stack.",
      "Enabled natural-language access to spatial and business data, cutting manual effort and accelerating decisions.",
      "Architected GIS integration with PostGIS, SQL Server and enterprise systems for scalable spatial analytics.",
      "Built interactive dashboards, StoryMaps and web GIS apps for business stakeholders.",
      "Authored solution architecture documents (SRS, BRD, HLD/LLD) aligning business and technical requirements.",
    ],
    tags: ["RAG", "PostGIS", "Cursor", "LLMs", "Telecom"],
  },
  {
    id: "nascent",
    role: "GIS Business Analyst",
    company: "Nascent Infotechnologies Pvt. Ltd.",
    location: "Pune, India",
    dates: "Sep 2021 — Jul 2022",
    bullets: [
      "Delivered Smart City GIS–ERP integration (PCMC) improving citizen service delivery.",
      "Translated business requirements into scalable GIS workflows and applications.",
      "Conducted client demos, UAT support and training sessions.",
    ],
    tags: ["Smart City", "ERP", "PCMC", "BRD"],
  },
  {
    id: "sisl",
    role: "GIS Presales Consultant / Specialist",
    company: "SISL Infotech Pvt. Ltd.",
    location: "New Delhi, India",
    dates: "Jan 2019 — Aug 2021",
    bullets: [
      "Led presales engagements: solution architecture, proposals and technical presentations.",
      "Built POCs and solution demos for defense and government clients.",
      "Collaborated with sales teams to position GIS solutions effectively.",
    ],
    tags: ["Presales", "POCs", "Defense", "Govt"],
  },
  {
    id: "vizexperts",
    role: "GIS Analyst",
    company: "VizExperts India Pvt. Ltd.",
    location: "New Delhi, India",
    dates: "Jan 2017 — Jan 2019",
    bullets: [
      "Performed spatial analysis, mapping and geospatial visualization.",
      "Supported implementation of GIS-based solutions across multiple domains.",
    ],
    tags: ["Spatial Analysis", "Visualization"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: string[];
  highlights: string[];
  accent: "cyan" | "blue" | "purple";
};

export const projects: Project[] = [
  {
    slug: "ai-rag-chatbot-for-gis",
    title: "AI RAG Chatbot for GIS",
    subtitle: "Natural-language access to spatial + enterprise data",
    domain: "AI + GIS  •  Jio Platforms",
    tags: ["RAG", "LLMs", "Cursor", "PostGIS", "Python"],
    accent: "purple",
    problem:
      "Business teams needed answers from huge GIS and enterprise datasets but had to wait on analysts to write SQL/spatial queries — slow, repetitive, and a bottleneck for decision-making.",
    solution:
      "Designed a RAG-based assistant on top of an open-source LLM stack, built with Cursor (AI-assisted vibe coding). Indexed structured (PostGIS, SQL Server) and unstructured (docs, SOPs) sources, and added tool-use so the agent can run safe parameterised spatial queries and return maps + answers.",
    impact: [
      "Self-service answers for non-technical stakeholders",
      "Reduced manual analyst effort on repetitive asks",
      "Faster, evidence-backed decisions across planning teams",
    ],
    highlights: [
      "Open-source LLMs + retrieval pipeline",
      "Cursor (vibe coding) for rapid iteration",
      "Geospatial tool-use over PostGIS",
    ],
  },
  {
    slug: "enterprise-gis-architecture",
    title: "Enterprise GIS Architecture",
    subtitle: "Scalable spatial platform for telecom planning & ops",
    domain: "Enterprise GIS  •  Telecom",
    tags: ["ArcGIS Enterprise", "PostGIS", "SQL Server", "Dashboards"],
    accent: "cyan",
    problem:
      "Multiple teams worked off siloed maps and spreadsheets, slowing planning cycles and making it hard to get a unified view of the network.",
    solution:
      "Architected a unified Enterprise GIS stack — PostGIS + SQL Server + ArcGIS Enterprise — with optimised pipelines, governed datasets, and self-service dashboards/StoryMaps for business users. Authored SRS / BRD / HLD-LLD aligning stakeholders.",
    impact: [
      "One source of truth for spatial data across teams",
      "Faster planning cycles via interactive dashboards",
      "Optimised SQL/spatial queries for very large datasets",
    ],
    highlights: [
      "Integrated GIS with enterprise systems",
      "Performance-tuned spatial pipelines",
      "Stakeholder-friendly StoryMaps & dashboards",
    ],
  },
  {
    slug: "smart-city-gis-erp",
    title: "Smart City GIS–ERP Integration",
    subtitle: "Citizen-centric services for PCMC",
    domain: "Smart City  •  PCMC",
    tags: ["GIS", "ERP", "Workflow", "UAT"],
    accent: "blue",
    problem:
      "Citizen service delivery was fragmented across departments and systems — limited spatial context meant slower resolution and poor visibility into ground reality.",
    solution:
      "Bridged GIS with the city ERP, translating business requirements into scalable workflows. Drove client demos, UAT and training to land the solution with end-users and city staff.",
    impact: [
      "Improved citizen service delivery in PCMC",
      "Spatially-enriched ERP workflows",
      "Smooth UAT and stakeholder adoption",
    ],
    highlights: [
      "Cross-system integration design",
      "End-user training & adoption",
      "Requirements → workflow translation",
    ],
  },
];

export const metrics = [
  {
    id: "years",
    value: 8,
    suffix: "+",
    label: "Years of GIS experience",
    sub: "Telecom · Smart City · Defense",
  },
  {
    id: "projects",
    value: 25,
    suffix: "+",
    label: "Projects delivered",
    sub: "POCs, products and platforms",
  },
  {
    id: "data",
    value: 1,
    suffix: "B+",
    label: "Geospatial records handled",
    sub: "PostGIS · SQL Server · pipelines",
  },
  {
    id: "domains",
    value: 4,
    suffix: "",
    label: "Industry domains",
    sub: "Telecom · Smart City · Defense · Govt",
  },
];

export const presalesFlow = [
  { id: "discover", title: "Discovery", desc: "Understand business + spatial problem" },
  { id: "design", title: "Solution Design", desc: "Architecture, SRS / BRD / HLD-LLD" },
  { id: "poc", title: "POC", desc: "Rapid build with open tools + AI assist" },
  { id: "demo", title: "Demo", desc: "Story-driven walkthrough for stakeholders" },
  { id: "proposal", title: "Proposal", desc: "Effort, stack, milestones, pricing" },
  { id: "delivery", title: "Delivery", desc: "Build, test, train, handover" },
];

export const certifications = [
  "ArcGIS Pro Professional",
  "ArcGIS Online Administration",
  "Azure DevOps (CI/CD)",
  "AI Agents (MCP)",
  "SQL / PL-SQL",
  "Jio Certified Cursor Developer",
];

export const education = [
  { degree: "M.Sc — GIS & Remote Sensing", school: "Amity University" },
  { degree: "B.A (Hons.) Geography", school: "University of Delhi" },
];

export const journey = [
  {
    id: "gis",
    title: "GIS Foundations",
    period: "2017 → 2021",
    desc: "Spatial analysis, mapping, presales for defense & govt.",
    icon: "Map",
  },
  {
    id: "enterprise",
    title: "Enterprise GIS",
    period: "2021 → 2023",
    desc: "Smart City + telecom-scale platforms, integrations, dashboards.",
    icon: "Building2",
  },
  {
    id: "ai",
    title: "AI-powered GIS",
    period: "2023 → Now",
    desc: "RAG chatbots, open LLMs, Cursor + agent workflows over geospatial data.",
    icon: "Sparkles",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "metrics", label: "Impact" },
  { id: "presales", label: "Presales" },
  { id: "contact", label: "Contact" },
];
