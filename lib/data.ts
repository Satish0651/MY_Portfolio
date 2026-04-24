export const profile = {
  name: "Satish Kumar",
  initials: "SK",
  title: "GIS Solutions Engineer",
  tagline: "AI · GIS · Data · Solutions",
  location: "Navi Mumbai, India",
  phone: "+91 9650069246",
  email: "satss.kr@gmail.com",
  linkedin: "https://www.linkedin.com/in/satishkumar-1a01b3a5",
  github: "https://github.com/Satish0651",
  cvUrl: "/Satish_Kumar_Resume.pdf",
  yearsExperience: 8,
  heroHeadline: {
    before: "Transforming Location Data into",
    accent: "Intelligent Solutions",
  },
  heroDescription:
    "GIS Solutions Engineer with 8+ years of experience in enterprise GIS, AI-powered analytics, and building scalable geospatial solutions that solve real-world business challenges.",
  aboutLong:
    "I specialize in integrating GIS with AI/ML, to build intelligent systems for telecom, smart cities, and enterprise operations. Passionate about location intelligence, automation, and delivering impactful solutions.",
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const dashboardStats = {
  totalSites: 12458,
  totalSitesDelta: 8.2,
  fiberCoverage: 18650,
  fiberDelta: 5.6,
  siteStatus: [
    { label: "Active", value: 8721, pct: 70, color: "#10B981" },
    { label: "Planned", value: 2145, pct: 17, color: "#F59E0B" },
    { label: "Under Maint.", value: 1036, pct: 8, color: "#EF4444" },
    { label: "Inactive", value: 556, pct: 5, color: "#64748B" },
  ],
  growth: [
    { month: "Jan", value: 4 },
    { month: "Feb", value: 6 },
    { month: "Mar", value: 7 },
    { month: "Apr", value: 10 },
    { month: "May", value: 12 },
    { month: "Jun", value: 14 },
  ],
};

export const indiaCities = [
  { name: "Mumbai", x: 235, y: 335, size: 6, highlight: true },
  { name: "Navi Mumbai", x: 242, y: 340, size: 9, highlight: true },
  { name: "Pune", x: 270, y: 345, size: 5 },
  { name: "Hyderabad", x: 320, y: 375, size: 5 },
  { name: "Bengaluru", x: 305, y: 420, size: 5 },
  { name: "Chennai", x: 350, y: 435, size: 4 },
  { name: "Kolkata", x: 440, y: 280, size: 5 },
  { name: "New Delhi", x: 290, y: 180, size: 6 },
  { name: "Jaipur", x: 255, y: 215, size: 4 },
  { name: "Ahmedabad", x: 210, y: 270, size: 4 },
  { name: "Lucknow", x: 340, y: 215, size: 4 },
  { name: "Patna", x: 400, y: 230, size: 4 },
  { name: "Nagpur", x: 310, y: 310, size: 5 },
  { name: "Bhopal", x: 290, y: 275, size: 4 },
  { name: "Surat", x: 225, y: 295, size: 4 },
];

export const coreExpertise = [
  "Enterprise GIS Architecture",
  "Spatial Data Analytics",
  "AI + GIS Integration (RAG, LLMs)",
  "Web GIS Development",
  "Presales & Solution Consulting",
  "Stakeholder Management",
];

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "gis-platforms",
    title: "GIS & Platforms",
    items: ["ArcGIS Pro", "ArcGIS Enterprise", "QGIS"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["PostGIS", "SQL Server", "PL/SQL"],
  },
  {
    id: "web-gis",
    title: "Web GIS",
    items: ["GeoServer", "OpenLayers"],
  },
  {
    id: "ai-dev",
    title: "AI & Development",
    items: ["RAG", "LLMs", "Cursor", "AI Workflows"],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    items: ["Azure DevOps", "ERDAS Imagine"],
  },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featured?: boolean;
  preview: "chatbot" | "dashboard" | "map" | "storymaps";
  problem: string;
  solution: string;
  impact: string[];
  accent: "purple" | "blue" | "green" | "cyan";
};

export const projects: Project[] = [
  {
    slug: "ai-gis-chatbot",
    title: "AI-Powered GIS Chatbot",
    subtitle: "Natural-language access to spatial + enterprise data",
    description:
      "RAG-based chatbot for querying spatial and enterprise data using natural language.",
    tags: ["RAG", "LLMs", "PostGIS", "Python", "Cursor"],
    featured: true,
    preview: "chatbot",
    accent: "purple",
    problem:
      "Business teams waited on analysts to write SQL/spatial queries to answer routine questions across huge GIS and enterprise datasets — a daily bottleneck.",
    solution:
      "Built a retrieval-augmented assistant on an open-source LLM stack (Cursor-assisted) that indexes structured PostGIS / SQL Server data plus docs and SOPs, and executes safe parameterised spatial tool-calls.",
    impact: [
      "Self-service answers for non-technical stakeholders",
      "Cut manual analyst effort on repetitive asks",
      "Faster, evidence-backed decisions across planning teams",
    ],
  },
  {
    slug: "enterprise-gis-platform",
    title: "Enterprise GIS Platform",
    subtitle: "Scalable platform for telecom planning & ops",
    description:
      "Scalable GIS platform for telecom planning and operations with advanced analytics.",
    tags: ["ArcGIS Enterprise", "PostGIS", "SQL Server"],
    preview: "dashboard",
    accent: "blue",
    problem:
      "Siloed teams worked off spreadsheets and standalone maps, slowing planning cycles and making a unified network view nearly impossible.",
    solution:
      "Architected a unified ArcGIS Enterprise + PostGIS + SQL Server stack with optimised pipelines, governed datasets, and self-service dashboards and StoryMaps.",
    impact: [
      "One source of truth across teams",
      "Faster planning cycles via dashboards",
      "Performance-tuned spatial queries",
    ],
  },
  {
    slug: "smart-city-gis-erp",
    title: "Smart City GIS-ERP",
    subtitle: "Citizen-centric services for PCMC",
    description:
      "GIS-ERP integration for PCMC improving citizen service delivery and operational efficiency.",
    tags: ["ArcGIS", "ERP", "PostGIS", "Dashboard"],
    preview: "map",
    accent: "green",
    problem:
      "Fragmented citizen service delivery with limited spatial context meant slower resolution and poor visibility into ground reality.",
    solution:
      "Integrated GIS with the city ERP, translating business requirements into scalable workflows, and ran client demos, UAT and training to drive adoption.",
    impact: [
      "Improved citizen service delivery",
      "Spatially-enriched ERP workflows",
      "Smooth UAT and stakeholder adoption",
    ],
  },
  {
    slug: "storymaps-dashboards",
    title: "StoryMaps & Dashboards",
    subtitle: "Visualization & decision support",
    description:
      "Interactive dashboards and StoryMaps for data visualization and decision support.",
    tags: ["ArcGIS Online", "StoryMaps", "OpenLayers"],
    preview: "storymaps",
    accent: "cyan",
    problem:
      "Stakeholders found it hard to spot trends and exceptions in raw GIS data without visual narratives.",
    solution:
      "Designed interactive dashboards and ArcGIS StoryMaps that combine maps, KPIs and narrative, tailored for business leaders.",
    impact: [
      "Clearer decisions through visual storytelling",
      "Self-service exploration",
      "Reusable dashboard templates",
    ],
  },
];

export const impactStats = [
  { id: "years", value: "8+", label: "Years of Experience", icon: "Briefcase" },
  { id: "projects", value: "20+", label: "Projects Delivered", icon: "Layers" },
  { id: "clients", value: "10+", label: "Enterprise Clients", icon: "Users" },
  { id: "efficiency", value: "60%", label: "Efficiency Improvement", icon: "TrendingUp", accent: true },
  { id: "ai", value: "5+", label: "AI-Powered Solutions", icon: "Sparkles", accent: true },
];

export type Certification = {
  id: string;
  name: string;
  org: string;
  icon: "ArcGISPro" | "ArcGISOnline" | "Azure" | "AIAgents" | "Jio" | "SQL";
  color: string;
};

export const certifications: Certification[] = [
  {
    id: "arcgis-pro",
    name: "ArcGIS Pro",
    org: "Professional",
    icon: "ArcGISPro",
    color: "#0B5CBF",
  },
  {
    id: "arcgis-online",
    name: "ArcGIS Online",
    org: "Administration",
    icon: "ArcGISOnline",
    color: "#2D8BD5",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    org: "CI/CD",
    icon: "Azure",
    color: "#0078D4",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    org: "(MCP)",
    icon: "AIAgents",
    color: "#8B5CF6",
  },
  {
    id: "jio-cursor",
    name: "Jio Certified",
    org: "Cursor Developer",
    icon: "Jio",
    color: "#3B82F6",
  },
  {
    id: "sql-plsql",
    name: "SQL / PL-SQL",
    org: "Professional",
    icon: "SQL",
    color: "#F59E0B",
  },
];

export type Tool = {
  id: string;
  name: string;
  color: string;
  bg: string;
  letter?: string;
  icon?: string;
};

export const tools: Tool[] = [
  { id: "arcgis-pro", name: "ArcGIS Pro", color: "#FFFFFF", bg: "#0B5CBF", letter: "A" },
  { id: "arcgis-ent", name: "ArcGIS Enterprise", color: "#FFFFFF", bg: "#2D8BD5", letter: "E" },
  { id: "qgis", name: "QGIS", color: "#FFFFFF", bg: "#589632", letter: "Q" },
  { id: "postgis", name: "PostGIS", color: "#FFFFFF", bg: "#336791", icon: "Database" },
  { id: "sql-server", name: "SQL Server", color: "#FFFFFF", bg: "#CC2927", icon: "Database" },
  { id: "geoserver", name: "GeoServer", color: "#FFFFFF", bg: "#6B8E23", letter: "G" },
  { id: "openlayers", name: "OpenLayers", color: "#FFFFFF", bg: "#1F6FCE", icon: "Map" },
  { id: "python", name: "Python", color: "#FFFFFF", bg: "#3776AB", icon: "FileCode2" },
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
    role: "Manager — Enterprise GIS Analytics  |  GIS (LBS & Map Platform)",
    company: "Jio Platforms Limited (JPL)",
    location: "Navi Mumbai, India",
    dates: "Jul 2022 — Present",
    current: true,
    bullets: [
      "Led enterprise GIS and location intelligence platforms supporting telecom planning at scale.",
      "Designed and shipped an AI-powered (RAG) chatbot for querying GIS and enterprise datasets using Cursor and open-source LLMs.",
      "Architected GIS integration with PostGIS, SQL Server and enterprise systems for scalable spatial analytics.",
      "Built interactive dashboards, StoryMaps and web GIS apps for business stakeholders.",
      "Authored SRS / BRD / HLD-LLD aligning business and technical requirements.",
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
      "Delivered Smart City GIS-ERP integration (PCMC) improving citizen service delivery.",
      "Translated business requirements into scalable GIS workflows and applications.",
      "Conducted client demos, UAT support and training sessions.",
    ],
    tags: ["Smart City", "ERP", "PCMC"],
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

export const education = [
  { degree: "M.Sc — GIS & Remote Sensing", school: "Amity University" },
  { degree: "B.A (Hons.) Geography", school: "University of Delhi" },
];
