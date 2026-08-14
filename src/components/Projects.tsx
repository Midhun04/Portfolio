"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolio, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const { projects, projectCategories } = portfolio;

  const [active, setActive] =
    useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  const shouldMarquee = filtered.length > 1;

  return (
    <section
      id="work"
      className="section scroll-mt-8"
      aria-labelledby="projects-heading"
    >
      <div className="section__inner">
        {/* Section heading */}
        <Reveal>
          <div id="projects-heading">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured Projects"
            />
          </div>
        </Reveal>

        {/* SEO-friendly section description */}
        <Reveal>
          <p className="mx-auto mb-10 max-w-2xl text-center text-[var(--small-font-size)] leading-relaxed text-text sm:mb-14">
            Explore some of my web development projects built with
            React, Next.js, Node.js, TypeScript, MongoDB,
            PostgreSQL, and other modern technologies.
          </p>
        </Reveal>

        {/* Project category filters */}
        <Reveal>
          <div
            className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mb-14 sm:gap-x-10 sm:gap-y-4"
            role="tablist"
            aria-label="Project categories"
          >
            {projectCategories.map((category) => {
              const isActive = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="project-list"
                  className={`relative text-[var(--tiny-font-size)] font-bold transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-title hover:text-primary"
                  }`}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Horizontal scrolling project row */}
      <Reveal>
        <div
          className={`projects-marquee${shouldMarquee ? " projects-marquee--animate" : ""}`}
        >
          <div key={active} className="projects-marquee__track">
            <ProjectSet
              projects={filtered}
              labelled
            />
            {shouldMarquee ? (
              <ProjectSet
                projects={filtered}
                labelled={false}
              />
            ) : null}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProjectSet({
  projects,
  labelled,
}: {
  projects: Project[];
  labelled: boolean;
}) {
  return (
    <ul
      id={labelled ? "project-list" : undefined}
      className="projects-marquee__set"
      aria-hidden={labelled ? undefined : true}
      aria-label={labelled ? "Featured web development projects" : undefined}
      inert={labelled ? undefined : true}
    >
      {projects.map((project) => (
        <li key={`${labelled ? "a" : "b"}-${project.id}`} className="projects-marquee__item">
          <article
            className="group h-full"
            aria-labelledby={labelled ? `project-${project.id}` : undefined}
          >
            <div className="overflow-hidden rounded-[18px]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={labelled ? project.imageAlt : ""}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
              </div>
            </div>

            <span className="mt-5 block text-[var(--tiny-font-size)] font-bold text-primary">
              {project.category}
            </span>

            <h3
              id={labelled ? `project-${project.id}` : undefined}
              className="mt-1 text-[var(--h4-font-size)] font-bold text-title"
            >
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={labelled ? undefined : -1}
                  className="transition-colors hover:text-primary"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>

            <p className="mt-4 line-clamp-4 text-[var(--small-font-size)] leading-relaxed text-text">
              {project.description}
            </p>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={labelled ? undefined : -1}
                className="btn btn--link mt-5"
                aria-label={`Visit ${project.title} project`}
              >
                Visit site
              </a>
            ) : null}
          </article>
        </li>
      ))}
    </ul>
  );
}
