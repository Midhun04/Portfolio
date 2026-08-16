import { portfolio, projectPath } from "@/data/portfolio";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  const { profile, socials, nav, projects } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] py-10">
      <div className="mx-auto flex w-[min(1140px,calc(100%-2.5rem))] flex-col gap-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
          <p className="text-sm text-board">
            © {year} {profile.name}. Full Stack Developer in Kerala.
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold text-title">
              {nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-title transition-colors hover:text-primary"
                  aria-label={social.label}
                  {...(social.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <SocialIcon label={social.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <nav aria-label="Project case studies">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[var(--tiny-font-size)] text-board">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={projectPath(project.slug)}
                  className="transition-colors hover:text-primary"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
