import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import { portfolio } from "@/data/portfolio";

const siteUrl = portfolio.profile.siteUrl;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Midhun Das N K | Full Stack Developer in Kerala",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      mainEntity: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Midhun Das N K",
      alternateName: "Midhun Das",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: portfolio.profile.name,
      alternateName: ["Midhun Das", "Midhun Das NK"],
      url: siteUrl,
      image: `${siteUrl}${portfolio.profile.image}`,
      jobTitle: "Full Stack Developer",
      description:
        "Midhun Das N K is a Full Stack Developer in Kerala specializing in React, Next.js, Node.js, GraphQL, and TypeScript.",
      email: `mailto:${portfolio.contact.email}`,
      telephone: portfolio.contact.phone,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      sameAs: portfolio.socials
        .filter((social) => social.href.startsWith("http"))
        .map((social) => social.href),
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "Prisma",
        "PostgreSQL",
        "MongoDB",
        "Full Stack Development",
      ],
      worksFor: {
        "@type": "Organization",
        name: portfolio.experience[0]?.org,
      },
      alumniOf: portfolio.education.map((item) => ({
        "@type": "EducationalOrganization",
        name: item.org,
      })),
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationLocation: {
          "@type": "AdministrativeArea",
          name: "Kerala, India",
        },
        skills: "React, Next.js, TypeScript, Node.js, GraphQL",
      },
      workExample: portfolio.projects.map((project) => ({
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        ...(project.href ? { url: project.href } : {}),
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#29A37A"
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
