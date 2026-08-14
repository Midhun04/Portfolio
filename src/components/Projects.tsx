"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";
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

        {/* Projects */}
        <ul
          id="project-list"
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          aria-label="Featured web development projects"
        >
          {filtered.map((project, index) => (
            <li key={project.id}>
              <Reveal delayMs={index * 50}>
                <article
                  className="group"
                  aria-labelledby={`project-${project.id}`}
                >
                  {/* Project image */}
                  <div className="overflow-hidden rounded-[18px]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Project category */}
                  <span className="mt-5 block text-[var(--tiny-font-size)] font-bold text-primary">
                    {project.category}
                  </span>

                  {/* Project title */}
                  <h3
                    id={`project-${project.id}`}
                    className="mt-1 text-[var(--h4-font-size)] font-bold text-title"
                  >
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-primary"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  {/* Project description */}
                  <p className="mt-4 text-[var(--small-font-size)] leading-relaxed text-text">
                    {project.description}
                  </p>

                  {/* Project link */}
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--link mt-5"
                      aria-label={`Visit ${project.title} project`}
                    >
                      Visit site
                    </a>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}