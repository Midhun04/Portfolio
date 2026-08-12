import type { CSSProperties } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Skills() {
  const { skills } = portfolio;

  return (
    <section id="skills" className="section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Skills"
            title="My Talent"
            watermark="Skills"
          />
        </Reveal>

        <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <li key={skill.name}>
              <Reveal delayMs={index * 60}>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-[var(--largest-font-size)] font-semibold text-title">
                    {skill.name}
                  </h3>
                  <span className="font-bold text-title">{skill.level}%</span>
                </div>
                <p className="mb-4 text-[var(--small-font-size)] leading-relaxed text-text">
                  {skill.blurb}
                </p>
                <div
                  className="h-0.5 w-full bg-[var(--meter-track)]"
                  role="meter"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency`}
                >
                  <div className="h-0.5 bg-board">
                    <div
                      className="skill-meter__fill h-0.5 bg-primary"
                      style={
                        {
                          "--skill-level": `${skill.level}%`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
