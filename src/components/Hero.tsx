import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { SocialIcon } from "@/components/SocialIcon";
import { HeroReactiveText } from "@/components/HeroReactiveText";
import GradientWaves from "@/components/GradientWaves";

export function Hero() {
  const { profile, socials } = portfolio;

  return (
    <section id="home" className="relative min-h-[100svh] overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
      >
        <GradientWaves
          horizonColor="#001510"
          waveColor="#29A37A"
          crestColor="#E8FFF6"
          speed={0.35}
          amplitude={2.2}
          waveScale={0.55}
          waveRatio={0.9}
          swell={30}
          turbulence={16}
          tilt={1.11}
          zoom={1.05}
          height={5.5}
          fogDepth={18}
          detail="medium"
          brightness={0.85}
          opacity={0.55}
          mouseInteraction
          parallaxStrength={0.4}
          grain
          grainIntensity={0.04}
        />
      </div>
      <div className="section__inner relative z-10 grid min-h-[100svh] items-start gap-12 pt-24 pb-16 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-8 md:pt-28 md:pb-20 lg:gap-10">
        <div className="relative z-10 w-full max-w-xl md:max-w-none">
          <HeroReactiveText
            as="p"
            text={profile.greeting}
            baseWeight={500}
            className="hero-reactive animate-fade-up text-[var(--large-font-size)] font-medium text-text"
          />
          <HeroReactiveText
            as="h1"
            text={profile.name}
            baseWeight={700}
            className="hero-reactive animate-fade-up animate-delay-1 mt-3 font-bold leading-[1.15] text-title"
            style={{
              fontSize: "clamp(1.75rem, 1.1rem + 2.2vw, 3.25rem)",
              textShadow: "var(--name-shadow)",
            }}
          />
          <HeroReactiveText
            as="p"
            baseWeight={700}
            parts={[
              { text: "I Am " },
              { text: profile.role, className: "text-primary" },
            ]}
            className="hero-reactive animate-fade-up animate-delay-2 mt-4 text-[var(--large-font-size)] font-bold text-title"
          />
          <p className="animate-fade-up animate-delay-3 mt-6 max-w-[520px] text-[var(--normal-font-size)] leading-relaxed text-text sm:mt-8 sm:text-[var(--large-font-size)]">
            {profile.tagline}
          </p>

          <div className="animate-fade-up animate-delay-4 mt-7 flex items-center gap-5 sm:mt-9">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center text-title transition-colors hover:text-primary sm:h-auto sm:w-auto"
                aria-label={social.label}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>

          <div className="hero-cta animate-fade-up animate-delay-4 mt-7 sm:mt-8">
            <a
              href={profile.cvUrl}
              className="btn btn--pill"
              download="MidhunDas-CV.pdf"
            >
              Download CV
            </a>
            <span className="hero-cta__line" aria-hidden />
            <a href="#skills" className="hero-cta__link">
              My Skills
            </a>
          </div>
        </div>

        <div className="animate-fade-up animate-delay-2 relative mx-auto w-full max-w-[340px] px-4 sm:max-w-[400px] sm:px-6 md:mx-0 md:max-w-none md:px-4 lg:px-6">
          <div className="relative overflow-hidden rounded-[22px] bg-container shadow-[var(--shadow)] sm:rounded-[28px]">
            <div className="aspect-[4/5] w-full">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 520px"
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-0 z-10 w-[min(100%,150px)] rounded-[14px] bg-container p-3 shadow-[var(--shadow)] sm:bottom-10 sm:w-[min(100%,200px)] sm:rounded-[18px] sm:p-5 md:-left-4 lg:-left-6">
            <p className="font-script text-3xl font-bold leading-none text-primary sm:text-4xl">
              {profile.yearsExperience}+
            </p>
            <p className="mt-1 text-xs font-bold text-title sm:mt-2 sm:text-sm">
              Years of Experience
            </p>
          </div>

          <div className="absolute right-0 top-8 z-10 w-[min(100%,140px)] rounded-[14px] bg-container p-3 shadow-[var(--shadow)] sm:top-10 sm:w-[min(100%,180px)] sm:rounded-[18px] sm:p-5 md:-right-4 lg:-right-6">
            <p className="font-script text-3xl font-bold leading-none text-primary sm:text-4xl">
              {profile.projectsCompleted}+
            </p>
            <p className="mt-1 text-xs font-bold text-title sm:mt-2 sm:text-sm">
              Completed Projects
            </p>
          </div>

          <div className="absolute bottom-[-0.85rem] right-4 rounded-full border-2 border-board bg-container px-3 py-1.5 text-xs font-bold text-title shadow-[var(--shadow)] sm:bottom-[-1.25rem] sm:right-6 sm:px-5 sm:py-2 sm:text-sm">
            {profile.locationLabel}
          </div>
        </div>
      </div>
    </section>
  );
}
