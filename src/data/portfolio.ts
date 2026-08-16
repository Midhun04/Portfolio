export type NavLink = {
  label: string;
  href: string;
};

export type ServiceSuit = "diamond" | "spade" | "club";

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  suit: ServiceSuit;
  rank?: string;
  image: string;
  imageAlt: string;
};

export type Skill = {
  name: string;
  level: number;
  blurb: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  challenge: string;
  solution: string;
  highlights: string[];
  role: string;
  year: string;
  tags: string[];
  image: string;
  imageAlt: string;
  href?: string;
};

export type ResumeItem = {
  id: string;
  role: string;
  org: string;
  period: string;
  detail: string;
};

export const portfolio = {
  profile: {
    name: "Midhun Das N K",
    shortName: "MIDHUN",
    role: "Full Stack Developer",
    greeting: "Hello, My Name Is",
    tagline:
      "I'm a Full Stack Developer in Kerala, building products with React and Next.js — from WhatsApp commerce and rewards platforms to streaming apps. I work with Node.js, GraphQL, and TypeScript, and like shipping reliable features with design and product teams.",
    about:
      "Midhun Das N K is a Full Stack Developer in Kerala, India. I design and ship web products with React, Next.js, TypeScript, Node.js, GraphQL, Prisma, and PostgreSQL — including multi-tenant commerce, rewards platforms, streaming apps, and operations tools.",
    yearsExperience: 2,
    projectsCompleted: 10,
    locationLabel: "Kerala, India",
    cvUrl: "/MidhunDas-CV.pdf",
    image: "/profile.png",
    imageAlt:
      "Portrait of Midhun Das N K, Full Stack Developer in Kerala",
    siteUrl: "https://midhundas.vercel.app",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Skills", href: "/#skills" },
    { label: "Portfolio", href: "/#work" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/#resume" },
    { label: "Contact", href: "/#contact" },
  ] satisfies NavLink[],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/midhun04/" },
    { label: "GitHub", href: "https://github.com/midhun04" },
    { label: "Email", href: "mailto:midhundas3110@gmail.com" },
  ],
  services: [
    {
      id: "web",
      title: "Frontend",
      subtitle: "Interfaces that feel fast and clear",
      description:
        "Responsive product UIs with React, Next.js, and TypeScript — dashboards, storefronts, and customer-facing apps that stay sharp across devices.",
      suit: "diamond",
      rank: "A",
      image: "/cards/frontend.svg",
      imageAlt:
        "Frontend development with React, Next.js, and TypeScript by Midhun Das N K",
    },
    {
      id: "backend",
      title: "Backend",
      subtitle: "APIs, data, and reliable systems",
      description:
        "REST and GraphQL APIs, solid data models, and backend logic with Node.js, Prisma, and databases built for real product load.",
      suit: "spade",
      rank: "A",
      image: "/cards/backend.svg",
      imageAlt:
        "Backend API and database development with Node.js, GraphQL, and Prisma by Midhun Das N K",
    },
    {
      id: "product",
      title: "Full Stack",
      subtitle: "Connects flows, states, and scale",
      description:
        "End-to-end features across the stack — multi-tenant platforms, WhatsApp commerce, bookings, payments, and the admin tools that run them.",
      suit: "club",
      rank: "A",
      image: "/cards/fullstack.svg",
      imageAlt:
        "Full stack product development across frontend and backend by Midhun Das N K",
    },
  ] satisfies Service[],
  skills: [
    {
      name: "React / Next.js",
      level: 88,
      blurb:
        "App Router, TypeScript, and Tailwind for dashboards, storefronts, and multi-app product surfaces.",
    },
    {
      name: "TypeScript",
      level: 85,
      blurb:
        "Typed application code across frontend and Node services for safer refactors and clearer APIs.",
    },
    {
      name: "Node.js & GraphQL",
      level: 84,
      blurb:
        "API design, GraphQL schemas, and Express services that power live product features.",
    },
    {
      name: "PostgreSQL & Prisma",
      level: 82,
      blurb:
        "Relational modeling, Prisma workflows, and data layers for multi-tenant commerce and rewards systems.",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      blurb:
        "Layout systems and polished UI for responsive web apps across merchant and customer experiences.",
    },
    {
      name: "Python / Django",
      level: 80,
      blurb:
        "Backend development with Python and Django alongside Node services when the stack calls for it.",
    },
  ] satisfies Skill[],
  projectCategories: ["All", "E-Commerce", "Platform", "Streaming"] as const,
  projects: [
    {
      id: "peedi",
      slug: "peedi",
      title: "PEEDI",
      category: "E-Commerce",
      description:
        "Multi-tenant WhatsApp commerce and automation platform. Store catalog sync, in-chat checkout, booking with Google Calendar, a visual flow builder, and CRM routing.",
      seoTitle: "PEEDI — WhatsApp Commerce Platform",
      seoDescription:
        "Case study of PEEDI, a multi-tenant WhatsApp commerce platform built with Next.js, GraphQL, Prisma, and PostgreSQL by Full Stack Developer Midhun Das N K.",
      summary:
        "PEEDI helps merchants sell, book, and support customers inside WhatsApp. I worked on the product as a full stack developer — catalog sync, in-chat checkout, bookings, automation, and CRM routing on a multi-tenant Next.js stack.",
      challenge:
        "Merchants needed storefronts, bookings, and support on WhatsApp without stitching together separate tools. The platform had to serve multiple tenants, keep catalog data in sync, and route conversations to the right team.",
      solution:
        "I shipped full stack features with Next.js, GraphQL, Prisma, and PostgreSQL: store catalog sync, in-chat checkout, Google Calendar booking, a visual flow builder, and CRM routing so each merchant can run commerce and support from one WhatsApp workspace.",
      highlights: [
        "Multi-tenant store and catalog sync",
        "In-chat checkout on WhatsApp",
        "Booking flows with Google Calendar",
        "Visual conversation flow builder",
        "CRM routing for support teams",
      ],
      role: "Full Stack Developer",
      year: "2025",
      tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
      image: "/projects/peedi.png",
      imageAlt:
        "PEEDI WhatsApp commerce platform by Midhun Das N K, a Next.js and GraphQL full stack project",
      href: "https://peedi.io",
    },
    {
      id: "llyk",
      slug: "llyk",
      title: "LLYK",
      category: "Platform",
      description:
        "Rewards-as-a-service platform with merchant, participant, and admin apps. Digital wallet, OCR task verification, Razorpay payments, and fraud-prevention tools.",
      seoTitle: "LLYK — Rewards Platform",
      seoDescription:
        "Case study of LLYK, a rewards-as-a-service platform with wallets, OCR verification, and Razorpay payments, built with Next.js and GraphQL by Midhun Das N K.",
      summary:
        "LLYK is a rewards-as-a-service product with separate apps for merchants, participants, and admins. I built full stack features around wallets, task verification, payments, and fraud prevention.",
      challenge:
        "The product needed one rewards system that merchants could run, participants could use, and admins could moderate — including proof of tasks, payouts, and abuse controls — without three disconnected codebases.",
      solution:
        "I worked across Next.js, GraphQL, and Prisma on merchant, participant, and admin apps: a digital wallet, OCR task verification, Razorpay payments, and fraud-prevention tools that keep rewards campaigns trustworthy at product scale.",
      highlights: [
        "Merchant, participant, and admin apps",
        "Digital wallet for rewards",
        "OCR-based task verification",
        "Razorpay payment flows",
        "Fraud-prevention tooling",
      ],
      role: "Full Stack Developer",
      year: "2025",
      tags: ["Next.js", "GraphQL", "Prisma", "Razorpay"],
      image: "/projects/llyk.png",
      imageAlt:
        "LLYK rewards platform by Midhun Das N K, built with Next.js, GraphQL, and Prisma",
    },
    {
      id: "ott",
      slug: "ott-platform",
      title: "OTT Platform",
      category: "Streaming",
      description:
        "Streaming product with a React and Next.js UI, content discovery, watchlists, profiles, and a review and rating system on Prisma and MongoDB.",
      seoTitle: "OTT Platform — Streaming App",
      seoDescription:
        "Case study of a React and Next.js OTT streaming app with watchlists, profiles, and reviews, built by Full Stack Developer Midhun Das N K.",
      summary:
        "A streaming product with a React and Next.js interface for discovering shows, saving watchlists, managing profiles, and leaving reviews. The data layer uses Prisma with MongoDB.",
      challenge:
        "Viewers needed a familiar streaming experience — browse, save, switch profiles, and rate titles — while the app stayed fast enough to feel like a real OTT client rather than a content brochure.",
      solution:
        "I built the UI in React and Next.js with content discovery, watchlists, profiles, and a review and rating system, backed by Prisma and MongoDB so catalogs and user state stay consistent across sessions.",
      highlights: [
        "Content discovery UI in React and Next.js",
        "Watchlists and user profiles",
        "Review and rating system",
        "Prisma and MongoDB data layer",
      ],
      role: "Full Stack Developer",
      year: "2025",
      tags: ["React", "Next.js", "Prisma", "MongoDB"],
      image: "/projects/ott.png",
      imageAlt:
        "OTT streaming app interface by Midhun Das N K, a React and Next.js developer project",
      href: "https://showdropott.vercel.app/",
    },
    {
      id: "mobile-parts-finder",
      slug: "mobile-parts-finder",
      title: "Mobile Parts Finder",
      category: "Platform",
      description:
        "Spare-parts compatibility platform for mobile repair shops. Search by brand, model, or part number across web, Expo, and an admin catalog.",
      seoTitle: "Mobile Parts Finder — Repair Shop Platform",
      seoDescription:
        "Case study of Mobile Parts Finder, a Next.js and Expo spare-parts compatibility platform for mobile repair shops, built by Midhun Das N K.",
      summary:
        "Mobile Parts Finder helps repair shops look up which displays, batteries, and other parts fit which phones. It includes a Next.js web app, an Expo mobile client, and an admin dashboard for the catalog.",
      challenge:
        "Repair shops waste time checking whether a part fits a given brand and model. They needed search by brand, model, or part number, plus a way for admins to keep compatibility data accurate.",
      solution:
        "I built a Next.js web app, Expo mobile client, and admin dashboard for catalog CRUD, compatibility groups, CSV import/export, and verified links — on Express, Prisma, and PostgreSQL.",
      highlights: [
        "Search by brand, model, or part number",
        "Next.js web app and Expo mobile client",
        "Admin catalog CRUD and compatibility groups",
        "CSV import/export and verified part links",
        "Express, Prisma, and PostgreSQL backend",
      ],
      role: "Full Stack Developer",
      year: "2025",
      tags: ["Next.js", "Expo", "Prisma", "PostgreSQL"],
      image: "/projects/mobile-parts-finder.png",
      imageAlt:
        "Mobile Parts Finder web and mobile app by Midhun Das N K, a Next.js and Expo spare-parts compatibility platform",
      href: "https://mobilepartsfinder.vercel.app/",
    },
  ] satisfies Project[],
  education: [
    {
      id: "edu-1",
      role: "Master of Computer Applications",
      org: "MES College of Engineering, Kuttippuram · KTU University",
      period: "Oct 2022 — May 2024",
      detail: "CGPA 7.0. Postgraduate study in computer applications, software engineering, and applied computing.",
    },
    {
      id: "edu-2",
      role: "Bachelor of Computer Applications",
      org: "MES Keeveeyem College, Valanchery · University of Calicut",
      period: "Jun 2019 — Jul 2022",
      detail: "CGPA 6.5.",
    },
    {
      id: "edu-3",
      role: "Plus Two · Biology Science",
      org: "MES HSS, Valanchery",
      period: "Jun 2017 — Mar 2019",
      detail: "Completed higher secondary education with 85%.",
    },
  ] satisfies ResumeItem[],
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      org: "Wecypher Creative Consultants",
      period: "Mar 2025 — Present",
      detail:
        "Working on multiple live products with React.js, Next.js, and related web technologies. Building and maintaining REST APIs, databases, and backend logic, and collaborating with frontend developers, designers, and project managers to ship features on time.",
    },
  ] satisfies ResumeItem[],
  certifications: [
    {
      id: "cert-1",
      role: "Cloud Computing",
      org: "NPTEL · IIT Kharagpur",
      period: "Certified",
      detail:
        "NPTEL certification covering cloud models, virtualization, and distributed computing fundamentals.",
    },
    {
      id: "cert-2",
      role: "Introduction to Internet of Things",
      org: "NPTEL · IIT Kharagpur",
      period: "Certified",
      detail:
        "NPTEL certification on IoT architecture, connected devices, and application-layer concepts.",
    },
  ] satisfies ResumeItem[],
  contact: {
    heading: "Let's Talk About Ideas",
    address: "Kerala, India",
    freelance: "Open to opportunities",
    email: "midhundas3110@gmail.com",
    phone: "+91 92070 83110",
  },
};

export type Portfolio = typeof portfolio;

export function getProjectBySlug(slug: string) {
  return portfolio.projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 3) {
  return portfolio.projects.filter((project) => project.slug !== slug).slice(0, limit);
}

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}
