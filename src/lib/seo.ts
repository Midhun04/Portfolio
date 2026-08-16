import {
  portfolio,
  projectPath,
  type Project,
} from "@/data/portfolio";

export const siteUrl = portfolio.profile.siteUrl;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return new URL(path, siteUrl).toString();
}

export function personId() {
  return `${siteUrl}/#person`;
}

export function websiteId() {
  return `${siteUrl}/#website`;
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Midhun Das N K | Full Stack Developer in Kerala",
        isPartOf: { "@id": websiteId() },
        about: { "@id": personId() },
        mainEntity: { "@id": personId() },
      },
      {
        "@type": "WebSite",
        "@id": websiteId(),
        url: siteUrl,
        name: "Midhun Das N K",
        alternateName: "Midhun Das",
        publisher: { "@id": personId() },
      },
      {
        "@type": "Person",
        "@id": personId(),
        name: portfolio.profile.name,
        alternateName: ["Midhun Das", "Midhun Das NK"],
        url: siteUrl,
        image: absoluteUrl(portfolio.profile.image),
        jobTitle: "Full Stack Developer",
        description: portfolio.profile.about,
        email: `mailto:${portfolio.contact.email}`,
        telephone: "+919207083110",
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
          url: absoluteUrl(projectPath(project.slug)),
          image: absoluteUrl(project.image),
        })),
      },
      {
        "@type": "ItemList",
        name: "Featured projects by Midhun Das N K",
        itemListElement: portfolio.projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(projectPath(project.slug)),
          name: project.title,
        })),
      },
    ],
  };
}

export function projectsIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/projects#webpage`,
        url: `${siteUrl}/projects`,
        name: "Projects | Midhun Das N K",
        isPartOf: { "@id": websiteId() },
        about: { "@id": personId() },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          breadcrumb(1, "Home", siteUrl),
          breadcrumb(2, "Projects", `${siteUrl}/projects`),
        ],
      },
      {
        "@type": "ItemList",
        name: "Web development projects by Midhun Das N K",
        numberOfItems: portfolio.projects.length,
        itemListElement: portfolio.projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(projectPath(project.slug)),
          name: project.title,
        })),
      },
    ],
  };
}

export function projectJsonLd(project: Project) {
  const url = absoluteUrl(projectPath(project.slug));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: project.seoTitle,
        description: project.seoDescription,
        isPartOf: { "@id": websiteId() },
        about: { "@id": personId() },
        primaryImageOfPage: absoluteUrl(project.image),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          breadcrumb(1, "Home", siteUrl),
          breadcrumb(2, "Projects", `${siteUrl}/projects`),
          breadcrumb(3, project.title, url),
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.title,
        headline: project.seoTitle,
        description: project.summary,
        image: absoluteUrl(project.image),
        url,
        dateCreated: project.year,
        author: { "@id": personId() },
        creator: { "@id": personId() },
        keywords: project.tags.join(", "),
        about: project.tags.map((tag) => ({ "@type": "Thing", name: tag })),
        ...(project.href ? { sameAs: project.href } : {}),
      },
    ],
  };
}

function breadcrumb(position: number, name: string, item: string) {
  return {
    "@type": "ListItem",
    position,
    name,
    item,
  };
}
