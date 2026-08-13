"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const { projects, projectCategories } = portfolio;
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [active, projects]);

  return (
    <section id="work" className="section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="My Cases" />
        </Reveal>

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
                  className={`relative text-[var(--tiny-font-size)] font-bold transition-colors ${
                    isActive ? "text-primary" : "text-title hover:text-primary"
                  }`}
                  onClick={() => setActive(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <li key={project.id}>
              <Reveal delayMs={index * 50}>
                <article className="group">
                  <div className="overflow-hidden rounded-[18px]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                  <span className="mt-5 block text-[var(--tiny-font-size)] font-bold text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-1 text-[var(--h4-font-size)] font-bold text-title">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[var(--small-font-size)] leading-relaxed text-text">
                    {project.description}
                  </p>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--link mt-5"
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
