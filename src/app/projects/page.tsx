import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProjectPreview } from "@/components/ProjectPreview";
import { SectionHeading } from "@/components/SectionHeading";
import { projectsIndexJsonLd, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects — React & Next.js Work",
  description:
    "Web development projects by Midhun Das N K, a Full Stack Developer in Kerala. WhatsApp commerce, rewards platforms, streaming apps, and repair-shop tools built with React and Next.js.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/projects`,
    title: "Projects by Midhun Das N K | Full Stack Developer in Kerala",
    description:
      "Case studies of React, Next.js, Node.js, and GraphQL products built by Midhun Das N K.",
  },
  twitter: {
    title: "Projects by Midhun Das N K",
    description:
      "WhatsApp commerce, rewards, streaming, and operations products built with React and Next.js.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsIndexJsonLd()} />
      <main className="section pt-28 md:pt-32">
        <div className="section__inner">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects" },
            ]}
          />
          <div className="mt-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Projects"
              headingLevel="h1"
              description="Selected full stack work by Midhun Das N K — commerce, rewards, streaming, and operations products built with React, Next.js, Node.js, GraphQL, and TypeScript."
            />
          </div>
          <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {portfolio.projects.map((project) => (
              <li key={project.id}>
                <ProjectPreview project={project} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
