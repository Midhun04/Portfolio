import { portfolio } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function ServiceIcon({ type }: { type: "web" | "backend" | "product" }) {
  if (type === "web") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18M8 18h8" />
      </svg>
    );
  }
  if (type === "backend") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
      <path d="M12 12 4 7M12 12l8-5M12 12v10" />
    </svg>
  );
}

export function Services() {
  const { services } = portfolio;

  return (
    <section id="services" className="section scroll-mt-8">
      <div className="section__inner">
        <Reveal>
          <SectionHeading
            eyebrow="What I Do"
            title="My Services"
            watermark="Services"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 80}>
              <article className="card card--padded h-full transition-transform duration-500 hover:-translate-y-1">
                <div className="icon-circle mb-6 text-primary">
                  <ServiceIcon type={service.icon} />
                </div>
                <p className="text-[var(--tiny-font-size)] font-bold text-primary">
                  {service.title}
                </p>
                <h3 className="mt-2 text-[var(--h4-font-size)] font-bold text-title">
                  {service.subtitle}
                </h3>
                <p className="mt-4 text-[var(--small-font-size)] leading-relaxed text-text">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
