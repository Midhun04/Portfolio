import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="section pt-28 md:pt-32">
        <div className="section__inner max-w-xl text-center">
          <p className="text-[var(--tiny-font-size)] font-bold uppercase tracking-[0.08em] text-primary">
            404
          </p>
          <h1 className="mt-3 font-script text-[var(--h1-font-size)] font-bold text-title">
            Page not found
          </h1>
          <p className="mt-4 text-text">
            That URL is not on this site. Head back to the homepage or browse
            the project case studies.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/" className="btn btn--pill">
              Home
            </a>
            <a href="/projects" className="hero-cta__link">
              Projects
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
