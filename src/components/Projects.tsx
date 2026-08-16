"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { portfolio, projectPath, type Project } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const EDGE_TOLERANCE = 8;
/** Drift speed of the row, in pixels per second. */
const DRIFT_SPEED = 34;
/** Beat of stillness before the row turns around at either end. */
const EDGE_HOLD = 1400;
/** Idle time before the drift picks up again after an interaction. */
const RESUME_DELAY = 2500;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

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

  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const suppressClickRef = useRef(false);
  const pauseDriftRef = useRef<(() => void) | null>(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  // Nothing to drift through until the row is wider than the viewport.
  const isDrifting = overflowing && !reducedMotion;

  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    const sync = () => setReducedMotion(query.matches);

    sync();
    query.addEventListener("change", sync);

    return () => query.removeEventListener("change", sync);
  }, []);

  const syncScrollState = useCallback(() => {
    const scroller = scrollerRef.current;
    const carousel = carouselRef.current;

    if (!scroller || !carousel) {
      return;
    }

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const atStart = String(scroller.scrollLeft <= EDGE_TOLERANCE);
    const atEnd = String(scroller.scrollLeft >= maxScroll - EDGE_TOLERANCE);

    // The drift fires a scroll event every frame, so only touch the DOM when
    // an edge actually changes.
    if (carousel.dataset.atStart !== atStart) {
      carousel.dataset.atStart = atStart;
    }

    if (carousel.dataset.atEnd !== atEnd) {
      carousel.dataset.atEnd = atEnd;
    }
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const measure = () => {
      const track = scroller.querySelector<HTMLElement>(
        ".projects-scroller__track",
      );

      if (track) {
        setOverflowing(
          track.getBoundingClientRect().width > scroller.clientWidth + 1,
        );
      }

      syncScrollState();
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(scroller);

    return () => observer.disconnect();
  }, [filtered, syncScrollState]);

  // Filtering swaps the whole list, so start the new set from the left edge.
  useEffect(() => {
    pauseDriftRef.current?.();
    scrollerRef.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [active]);

  // Slow drift across the row, reversing at each end and pausing while the
  // visitor is interacting with it.
  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || !isDrifting) {
      return;
    }

    let frame = 0;
    let lastTime = 0;
    let position = scroller.scrollLeft;
    let direction: 1 | -1 = 1;
    let holdUntil = 0;
    let running = false;
    let hovering = false;
    let onScreen = false;
    let resumeTimer: number | undefined;

    const play = () => {
      if (
        running ||
        hovering ||
        !onScreen ||
        document.hidden ||
        scroller.classList.contains("is-dragging") ||
        scroller.matches(":focus-within")
      ) {
        return;
      }

      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      // Head away from whichever end the row is currently resting against.
      if (scroller.scrollLeft >= maxScroll - EDGE_TOLERANCE) {
        direction = -1;
      } else if (scroller.scrollLeft <= EDGE_TOLERANCE) {
        direction = 1;
      }

      scroller.classList.add("is-autoplay");
      position = scroller.scrollLeft;
      lastTime = 0;
      running = true;
    };

    const pause = () => {
      running = false;
      scroller.classList.remove("is-autoplay");
    };

    const pauseThenResume = () => {
      pause();
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(play, RESUME_DELAY);
    };

    pauseDriftRef.current = pauseThenResume;

    const tick = (time: number) => {
      frame = requestAnimationFrame(tick);

      if (!running) {
        return;
      }

      if (!lastTime) {
        lastTime = time;

        return;
      }

      const delta = time - lastTime;
      lastTime = time;

      if (time < holdUntil) {
        return;
      }

      const maxScroll = scroller.scrollWidth - scroller.clientWidth;

      if (maxScroll <= 0) {
        return;
      }

      position += (direction * DRIFT_SPEED * delta) / 1000;

      if (position >= maxScroll) {
        position = maxScroll;
        direction = -1;
        holdUntil = time + EDGE_HOLD;
      } else if (position <= 0) {
        position = 0;
        direction = 1;
        holdUntil = time + EDGE_HOLD;
      }

      scroller.scrollLeft = position;
    };

    frame = requestAnimationFrame(tick);

    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      hovering = true;
      window.clearTimeout(resumeTimer);
      pause();
    };

    const onPointerLeave = () => {
      hovering = false;
      play();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;

        if (onScreen) {
          play();
        } else {
          pause();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(scroller);

    const onVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else {
        play();
      }
    };

    scroller.addEventListener("pointerenter", onPointerEnter);
    scroller.addEventListener("pointerleave", onPointerLeave);
    scroller.addEventListener("focusin", pause);
    scroller.addEventListener("focusout", play);
    scroller.addEventListener("wheel", pauseThenResume, { passive: true });
    scroller.addEventListener("touchstart", pauseThenResume, { passive: true });
    scroller.addEventListener("pointerdown", pauseThenResume);
    scroller.addEventListener("keydown", pauseThenResume);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      observer.disconnect();
      pauseDriftRef.current = null;
      scroller.classList.remove("is-autoplay");
      scroller.removeEventListener("pointerenter", onPointerEnter);
      scroller.removeEventListener("pointerleave", onPointerLeave);
      scroller.removeEventListener("focusin", pause);
      scroller.removeEventListener("focusout", play);
      scroller.removeEventListener("wheel", pauseThenResume);
      scroller.removeEventListener("touchstart", pauseThenResume);
      scroller.removeEventListener("pointerdown", pauseThenResume);
      scroller.removeEventListener("keydown", pauseThenResume);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [filtered, isDrifting]);

  // Pointer dragging for mouse/pen users; touch keeps native momentum scrolling.
  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    let activePointer: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let dragging = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch" || event.button !== 0) {
        return;
      }

      activePointer = event.pointerId;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      dragging = false;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (activePointer !== event.pointerId) {
        return;
      }

      const delta = event.clientX - startX;

      if (!dragging) {
        if (Math.abs(delta) < 6) {
          return;
        }

        dragging = true;
        scroller.classList.add("is-dragging");
        scroller.setPointerCapture(event.pointerId);
      }

      event.preventDefault();
      scroller.scrollLeft = startScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (activePointer !== event.pointerId) {
        return;
      }

      if (dragging) {
        suppressClickRef.current = true;
        scroller.classList.remove("is-dragging");
      }

      if (scroller.hasPointerCapture(event.pointerId)) {
        scroller.releasePointerCapture(event.pointerId);
      }

      activePointer = null;
      dragging = false;
    };

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("pointercancel", onPointerUp);

    return () => {
      scroller.classList.remove("is-dragging");
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  const onClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) {
      return;
    }

    suppressClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <section
      id="work"
      className="section scroll-mt-8"
      aria-labelledby="projects-heading"
    >
      <div className="section__inner">
        <Reveal>
          <div id="projects-heading">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured Projects"
              description="Selected web products I have built with React, Next.js, Node.js, TypeScript, GraphQL, PostgreSQL, and MongoDB — from WhatsApp commerce to streaming apps."
            />
          </div>
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

      <Reveal>
        <div
          ref={carouselRef}
          className="projects-carousel"
          data-drift={String(isDrifting)}
          data-at-start="true"
          data-at-end="true"
        >
          <div
            ref={scrollerRef}
            className="projects-scroller"
            role="region"
            aria-label="Featured projects, scrollable horizontally"
            tabIndex={0}
            data-lenis-prevent-horizontal=""
            onScroll={syncScrollState}
            onClickCapture={onClickCapture}
          >
            <ul
              key={active}
              id="project-list"
              className="projects-scroller__track"
              aria-label="Featured web development projects"
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <p className="mt-10 text-center">
        <a
          href="/projects"
          className="text-[var(--tiny-font-size)] font-bold uppercase tracking-[0.08em] text-primary"
        >
          All project case studies
        </a>
      </p>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = projectPath(project.slug);

  return (
    <li className="projects-scroller__item">
      <article
        className="group h-full"
        aria-labelledby={`project-${project.id}`}
      >
        <a href={caseStudyHref} className="block overflow-hidden rounded-[18px]">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
              draggable={false}
            />
          </div>
        </a>

        <span className="mt-5 block text-[var(--tiny-font-size)] font-bold text-primary">
          {project.category}
        </span>

        <h3
          id={`project-${project.id}`}
          className="mt-1 text-[var(--h4-font-size)] font-bold text-title"
        >
          <a
            href={caseStudyHref}
            draggable={false}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </a>
        </h3>

        <p className="mt-4 line-clamp-4 text-[var(--small-font-size)] leading-relaxed text-text">
          {project.description}
        </p>

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            draggable={false}
            className="project-visit mt-5"
            aria-label={`Visit ${project.title} site`}
          >
            <svg
              viewBox="0 0 24 24"
              className="project-visit__icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        ) : (
          <a
            href={caseStudyHref}
            className="project-visit mt-5"
            aria-label={`Read ${project.title} case study`}
          >
            <svg
              viewBox="0 0 24 24"
              className="project-visit__icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </a>
        )}
      </article>
    </li>
  );
}
