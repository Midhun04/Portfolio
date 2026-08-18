"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroEyes } from "@/components/HeroEyes";
import PillNav from "@/components/PillNav";

export function Nav() {
  const { profile, nav } = portfolio;
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const activeHref = pathname.startsWith("/projects")
    ? "/projects"
    : hash && hash !== "#home"
      ? `/${hash}`
      : "/#home";

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a
          href="/#home"
          className="site-nav__brand"
          aria-label={`${profile.name} — home`}
        >
          <HeroEyes />
        </a>

        <div className="site-nav__end">
          <ThemeToggle className="site-nav__theme" />
          <PillNav
            items={nav}
            activeHref={activeHref}
            ease="power2.easeOut"
            baseColor="var(--title-color)"
            pillColor="var(--bg-color)"
            hoveredPillTextColor="var(--bg-color)"
            pillTextColor="var(--title-color)"
            initialLoadAnimation
          />
        </div>
      </div>
    </header>
  );
}
