import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { DeferredSplashCursor } from "@/components/DeferredSplashCursor";
import { JsonLd } from "@/components/JsonLd";
import { homeJsonLd, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Midhun Das N K | Full Stack Developer in Kerala | React & Next.js",
    description:
      "Portfolio of Midhun Das N K (Midhun Das), a Full Stack Developer in Kerala specializing in React, Next.js, Node.js, GraphQL, and TypeScript.",
    firstName: "Midhun",
    lastName: "Das N K",
  },
  twitter: {
    title: "Midhun Das N K | Full Stack Developer in Kerala",
    description:
      "Full Stack Developer in Kerala specializing in React, Next.js, Node.js, GraphQL, and TypeScript.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeJsonLd()} />
      <DeferredSplashCursor
        RAINBOW_MODE={false}
        COLOR="#29A37A"
        DYE_RESOLUTION={256}
        SIM_RESOLUTION={64}
        DENSITY_DISSIPATION={3.2}
        SPLAT_RADIUS={0.22}
        SPLAT_FORCE={5200}
        COLOR_UPDATE_SPEED={8}
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
