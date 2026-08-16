import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getRelatedProjects,
  portfolio,
  projectPath,
} from "@/data/portfolio";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProjectPreview } from "@/components/ProjectPreview";
import { absoluteUrl, projectJsonLd } from "@/lib/seo";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const url = absoluteUrl(projectPath(project.slug));

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    keywords: [
      project.title,
      ...project.tags,
      "Midhun Das N K",
      "Full Stack Developer Kerala",
    ],
    alternates: {
      canonical: projectPath(project.slug),
    },
    openGraph: {
      type: "article",
      url,
      title: `${project.seoTitle} | Midhun Das N K`,
      description: project.seoDescription,
    },
    twitter: {
      title: project.seoTitle,
      description: project.seoDescription,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(project.slug);

  return (
    <>
      <JsonLd data={projectJsonLd(project)} />
      <main className="section pt-28 md:pt-32">
        <article className="section__inner max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          <p className="mt-8 text-[var(--tiny-font-size)] font-bold uppercase tracking-[0.08em] text-primary">
            {project.category} · {project.role} · {project.year}
          </p>
          <h1 className="mt-3 font-script text-[var(--h1-font-size)] font-bold leading-tight text-title">
            {project.title}
          </h1>
          <p className="mt-5 text-[var(--large-font-size)] leading-relaxed text-text">
            {project.summary}
          </p>

          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[18px]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          <section className="mt-12">
            <h2 className="text-[var(--h4-font-size)] font-bold text-title">
              The challenge
            </h2>
            <p className="mt-4 leading-relaxed text-text">{project.challenge}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-[var(--h4-font-size)] font-bold text-title">
              What I built
            </h2>
            <p className="mt-4 leading-relaxed text-text">{project.solution}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-[var(--h4-font-size)] font-bold text-title">
              Highlights
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-text">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-[var(--h4-font-size)] font-bold text-title">
              Stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-[var(--tiny-font-size)] font-bold text-title"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--pill"
              >
                Visit live site
              </a>
            ) : null}
            <a href="/projects" className="hero-cta__link">
              All projects
            </a>
            <a href="/#contact" className="hero-cta__link">
              Contact
            </a>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="section__inner mt-20">
            <h2 className="mb-10 text-center font-script text-[var(--h1-font-size)] font-bold text-title">
              More projects
            </h2>
            <ul className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.id}>
                  <ProjectPreview project={item} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </>
  );
}
