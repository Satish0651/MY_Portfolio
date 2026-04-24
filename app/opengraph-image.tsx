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
            "radial-gradient(1200px 600px at 100% 0%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(800px 400px at 0% 100%, rgba(16,185,129,0.25), transparent 60%), #0B1220",
          color: "#E2E8F0",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background:
                "linear-gradient(120deg, #7C3AED 0%, #6366F1 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            SK
          </div>
          <div style={{ fontSize: 22, color: "#94A3B8", display: "flex" }}>
            {profile.name} · Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 24,
              color: "#10B981",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            GIS · AI (RAG) · Presales
          </div>
          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.04,
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
              color: "#FFFFFF",
            }}
          >
            <span>Transforming Location Data</span>
            <span>
              into{" "}
              <span style={{ color: "#10B981" }}>Intelligent Solutions</span>
            </span>
          </div>
          <div style={{ fontSize: 26, color: "#94A3B8", maxWidth: 900 }}>
            {profile.name} — 8+ years across telecom, smart cities & enterprise GIS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#64748B",
          }}
        >
          <span>{profile.email}</span>
          <span>linkedin.com/in/satishkumar-1a01b3a5</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
