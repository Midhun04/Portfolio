import Image from "next/image";
import { type Project, projectPath } from "@/data/portfolio";

export function ProjectPreview({
  project,
  headingLevel = "h2",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const TitleTag = headingLevel;
  const href = projectPath(project.slug);

  return (
    <article className="group h-full" aria-labelledby={`preview-${project.id}`}>
      <a href={href} className="block overflow-hidden rounded-[18px]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
          />
        </div>
      </a>
      <span className="mt-5 block text-[var(--tiny-font-size)] font-bold text-primary">
        {project.category}
      </span>
      <TitleTag
        id={`preview-${project.id}`}
        className="mt-1 text-[var(--h4-font-size)] font-bold text-title"
      >
        <a href={href} className="transition-colors hover:text-primary">
          {project.title}
        </a>
      </TitleTag>
      <p className="mt-4 text-[var(--small-font-size)] leading-relaxed text-text">
        {project.description}
      </p>
      <a
        href={href}
        className="mt-4 inline-block text-[var(--tiny-font-size)] font-bold uppercase tracking-[0.08em] text-primary"
      >
        Read case study
      </a>
    </article>
  );
}
