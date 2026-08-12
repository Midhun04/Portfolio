"use client";

import { useState } from "react";
import { portfolio, type ResumeItem } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function ResumeGroup({
  title,
  items,
}: {
  title: string;
  items: ResumeItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div>
      <h3 className="mb-8 text-center text-[var(--h4-font-size)] font-bold text-title">
        {title}
      </h3>
      <ul>
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <li
              key={item.id}
              className="relative border-b-2 border-board last:border-b-0"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-2 py-8 text-left md:px-4"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>
                  <span className="block text-[var(--largest-font-size)] font-bold text-title">
                    {item.role}
                  </span>
                  <span className="mt-2 block text-sm text-primary">
                    {item.org} · {item.period}
                  </span>
                </span>
                <span
                  className={`icon-circle text-2xl leading-none transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-primary" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-2 pb-8 pr-16 text-[var(--small-font-size)] leading-relaxed text-text md:px-4">
                    {item.detail}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Resume() {
  const { education, experience } = portfolio;

  return (
    <section id="resume" className="section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="My Story"
            watermark="History"
          />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <ResumeGroup title="Education" items={education} />
          </Reveal>
          <Reveal delayMs={100}>
            <ResumeGroup title="Experience" items={experience} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
