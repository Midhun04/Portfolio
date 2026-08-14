"use client";

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return reduced;
}

function AnimatedLevel({ level, active }: { level: number; active: boolean }) {
  const reduceMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(reduceMotion ? level : 0);
  const frameRef = useRef<number | null>(null);

  const runCount = useEffectEvent((target: number, animate: boolean) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    if (!animate) {
      setValue(target);
      return;
    }

    const duration = 900;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
  });

  useEffect(() => {
    if (!active) return;
    runCount(level, !reduceMotion);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, level, reduceMotion]);

  return <span className="skill-card__level">{value}%</span>;
}

function SkillItem({
  name,
  level,
  blurb,
  delayMs,
}: {
  name: string;
  level: number;
  blurb: string;
  delayMs: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 40 });

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`skill-card${visible ? " is-visible" : ""}${hovered ? " is-hovered" : ""}`}
      style={{ "--skill-delay": `${delayMs}ms` } as CSSProperties}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setSpotlight({ x, y });
      }}
    >
      <div
        className="skill-card__glow"
        style={
          {
            "--spot-x": `${spotlight.x}%`,
            "--spot-y": `${spotlight.y}%`,
          } as CSSProperties
        }
        aria-hidden="true"
      />

      <div className="skill-card__header">
        <h3 className="skill-card__title">{name}</h3>
        <AnimatedLevel level={level} active={visible} />
      </div>

      <p className="skill-card__blurb">{blurb}</p>

      <div
        className="skill-meter"
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div
          className="skill-meter__fill"
          style={{ "--skill-level": `${level}%` } as CSSProperties}
        >
          <span className="skill-meter__shine" aria-hidden="true" />
          <span className="skill-meter__thumb" />
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const { skills } = portfolio;
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section id="skills" className="section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading eyebrow="Professional Skills" title="My Talent" />
        </Reveal>

        {reduceMotion ? (
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                level={skill.level}
                blurb={skill.blurb}
                delayMs={index * 70}
              />
            ))}
          </div>
        ) : (
          <ScrollStack
            className="skill-stack"
            useWindowScroll
            itemDistance={80}
            itemStackDistance={26}
            stackPosition="24%"
            scaleEndPosition="12%"
            baseScale={0.85}
            blurAmount={1}
          >
            {skills.map((skill) => (
              <ScrollStackItem key={skill.name}>
                <SkillItem
                  name={skill.name}
                  level={skill.level}
                  blurb={skill.blurb}
                  delayMs={0}
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        )}
      </div>
    </section>
  );
}
