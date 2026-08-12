import { portfolio } from "@/data/portfolio";
import { SocialIcon } from "@/components/SocialIcon";

export function Footer() {
  const { profile, socials } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] py-10">
      <div className="mx-auto flex w-[min(1140px,calc(100%-2.5rem))] flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-board">
          © {year} {profile.name}. All rights reserved.
        </p>
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
    </footer>
  );
}
