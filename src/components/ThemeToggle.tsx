"use client";

type Theme = "light" | "dark";

function getTheme(): Theme {
  const current = document.documentElement.getAttribute("data-theme");
  return current === "light" ? "light" : "dark";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  function toggle() {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore quota / private mode */
    }
  }

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      aria-label="Toggle light and dark mode"
      title="Toggle theme"
      onClick={toggle}
    >
      <svg
        className="theme-toggle__sun h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M18.01 18.01l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M18.01 5.99l1.06-1.06" />
      </svg>
      <svg
        className="theme-toggle__moon h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden
      >
        <path d="M17.5 15.2A7.5 7.5 0 0 1 8.8 6.5 7.5 7.5 0 1 0 17.5 15.2Z" />
      </svg>
    </button>
  );
}
