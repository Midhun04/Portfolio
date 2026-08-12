import { portfolio } from "@/data/portfolio";

export function Footer() {
  const { profile, socials } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex w-[min(1140px,calc(100%-2.5rem))] flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-board">
          © {year} {profile.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-6">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="text-sm font-medium text-title transition-colors hover:text-primary"
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
