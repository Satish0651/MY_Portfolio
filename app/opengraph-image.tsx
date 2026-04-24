import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(1200px 600px at 0% 0%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(800px 400px at 100% 100%, rgba(139,92,246,0.22), transparent 60%), #05060A",
          color: "#E6E8EE",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 999,
              background:
                "linear-gradient(120deg, #22D3EE 0%, #3B82F6 50%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#05060A",
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            S
          </div>
          <div style={{ fontSize: 22, color: "#9aa3b2", display: "flex" }}>
            satishkumar · portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 28,
              color: "#22D3EE",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            GIS  ·  AI (RAG)  ·  Presales
          </div>
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              lineHeight: 1.04,
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Building Intelligent</span>
            <span
              style={{
                background:
                  "linear-gradient(120deg, #22D3EE, #3B82F6, #8B5CF6)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              GIS Systems with AI
            </span>
          </div>
          <div style={{ fontSize: 28, color: "#9aa3b2", maxWidth: 900 }}>
            Satish Kumar — 8+ years across telecom, smart cities & defense.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#6b7280",
          }}
        >
          <span>satss.kr@gmail.com</span>
          <span>linkedin.com/in/satishkumar-1a01b3a5</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
