import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { profile } = portfolio;

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="section__inner grid min-h-[100svh] items-center gap-10 py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="animate-fade-up text-[var(--large-font-size)] font-medium text-text">
            {profile.greeting}
          </p>
          <h1
            className="animate-fade-up animate-delay-1 mt-3 font-bold leading-[1.15] text-white"
            style={{
              fontSize: "var(--biggest-font-size)",
              textShadow:
                "2px 2px hsl(0 0% 0%), -2px 2px hsl(0 0% 0%), 2px -2px hsl(0 0% 0%), -2px -2px hsl(0 0% 0%), 5px 5px 0 rgb(0 0 0 / 20%)",
            }}
          >
            {profile.name}
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-4 text-[var(--large-font-size)] font-bold text-title">
            I Am <span className="text-primary">{profile.role}</span>
          </p>
          <p className="animate-fade-up animate-delay-3 mt-8 max-w-[520px] text-[var(--large-font-size)] leading-relaxed text-text">
            {profile.tagline}
          </p>

          <div className="animate-fade-up animate-delay-4 mt-9 flex flex-wrap items-center gap-x-12 gap-y-6">
            <a href={profile.cvUrl} className="btn btn--primary">
              Download CV
            </a>
            <a href="#skills" className="btn--link font-bold">
              My Skills
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2 relative mx-auto w-full max-w-[420px] lg:max-w-[520px]">
          <div className="relative overflow-hidden rounded-[28px] bg-container shadow-[var(--shadow)]">
            <div className="aspect-[4/5] w-full">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
            </div>
          </div>

          <div className="absolute -left-3 bottom-10 z-10 w-[min(100%,220px)] rounded-[18px] bg-container p-5 shadow-[var(--shadow)] sm:-left-8">
            <p className="font-script text-4xl font-bold leading-none text-primary">
              {profile.yearsExperience}+
            </p>
            <p className="mt-2 text-sm font-bold text-title">
              Years of Experience
            </p>
          </div>

          <div className="absolute -right-2 top-10 z-10 w-[min(100%,200px)] rounded-[18px] bg-container p-5 shadow-[var(--shadow)] sm:-right-6">
            <p className="font-script text-4xl font-bold leading-none text-primary">
              {profile.projectsCompleted}
            </p>
            <p className="mt-2 text-sm font-bold text-title">
              Completed Projects
            </p>
          </div>

          <div className="absolute bottom-[-1.25rem] right-6 rounded-full border-2 border-board bg-container px-5 py-2 text-sm font-bold text-title shadow-[var(--shadow)]">
            {profile.locationLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
