import { ImageResponse } from "next/og";
import { getProjectBySlug, portfolio } from "@/data/portfolio";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "Project";
  const category = project?.category ?? "Case study";

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
          {category} · Midhun Das N K
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            {title}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 26,
              color: "#c9d4ce",
            }}
          >
            {project?.tags.join(" · ") ?? "Full stack case study"}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
