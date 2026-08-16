import { ImageResponse } from "next/og";

export const alt =
  "Midhun Das N K — Full Stack Developer in Kerala, specializing in React and Next.js";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#050807",
          color: "#f5f5f5",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#29A37A",
            fontWeight: 700,
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Midhun Das N K
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 32,
              color: "#c9d4ce",
            }}
          >
            Full Stack Developer in Kerala
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "#29A37A",
            }}
          >
            React · Next.js · Node.js · TypeScript · GraphQL
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
