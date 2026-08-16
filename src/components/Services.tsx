"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";

export function Services() {
  const { services } = portfolio;
  const [playEntry, setPlayEntry] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const node = document.getElementById("services-deck");
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayEntry(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section services-section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            eyebrow="What I Do"
            title="My Services"
            description="Frontend, backend, and full stack development for product teams — React and Next.js interfaces, Node.js and GraphQL APIs, and the features that connect them."
          />
        </Reveal>
      </div>

      <div className="services-deck" id="services-deck">
        <div
          className={`services-deck__backdrop ${playEntry ? "is-lit" : ""}`}
          aria-hidden
        />
        <div
          className={`services-deck__cards ${playEntry ? "animateOnLoad" : ""}`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              playEntryAnimation={playEntry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
