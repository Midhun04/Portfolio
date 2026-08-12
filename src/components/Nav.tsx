"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SocialIcon } from "@/components/SocialIcon";

export function Nav() {
  const { profile, nav, socials } = portfolio;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 transition-[padding,background-color,box-shadow,backdrop-filter] duration-300 md:px-8 ${
        scrolled
          ? "bg-bg/90 py-4 shadow-[var(--header-shadow)] backdrop-blur-md"
          : "bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1140px] items-center justify-between">
        <a
          href="#home"
          className="text-[1.5rem] font-bold text-title"
          onClick={() => setOpen(false)}
        >
          {profile.shortName}
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <ThemeToggle />

          <button
            type="button"
            className="relative z-[110] flex h-[30px] w-7 flex-col justify-center gap-1.5"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-full bg-title transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-title transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-title transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        className={`fixed inset-y-0 right-0 z-[100] flex h-screen overflow-hidden bg-bg-alt transition-all duration-700 ease-[cubic-bezier(0.3,0,0.3,1)] ${
          open ? "w-[min(100%,360px)]" : "w-0"
        }`}
      >
        <nav className="m-auto w-full px-8 py-20 md:px-10" aria-label="Primary">
          <ul className="mb-10 space-y-4">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[1.375rem] font-bold text-title transition-colors hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-board text-title transition-colors hover:border-primary hover:text-primary"
                aria-label={social.label}
                onClick={() => setOpen(false)}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </nav>
      </div>

      {open && (
        <button
          type="button"
          className="fixed inset-0 z-[90] bg-black/40 md:block"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
