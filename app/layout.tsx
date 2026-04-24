import type { Metadata, Viewport } from "next";
import { profile } from "@/lib/data";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import "./globals.css";

const SITE_URL = "https://my-portfolio-satish0651.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.heroDescription,
  keywords: [
    "Satish Kumar",
    "GIS Solutions Engineer",
    "Enterprise GIS",
    "AI + GIS",
    "RAG Chatbot",
    "PostGIS",
    "ArcGIS",
    "Presales Consultant",
    "Smart City GIS",
    "Telecom GIS",
  ],
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: `${profile.name} — ${profile.title}`,
    description: profile.heroDescription,
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.heroDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  sameAs: [profile.linkedin, profile.github],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navi Mumbai",
    addressCountry: "IN",
  },
  knowsAbout: [
    "GIS",
    "Enterprise GIS",
    "PostGIS",
    "ArcGIS",
    "AI",
    "Retrieval-Augmented Generation",
    "Presales",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body className="bg-bg text-ink antialiased font-sans">
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <ChatWidget />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
