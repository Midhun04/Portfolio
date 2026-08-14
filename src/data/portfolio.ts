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
};

export type Skill = {
  name: string;
  level: number;
  blurb: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
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
      title: "PEEDI",
      category: "E-Commerce",
      description:
        "Multi-tenant WhatsApp commerce and automation platform. Store catalog sync, in-chat checkout, booking with Google Calendar, a visual flow builder, and CRM routing.",
      tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
      image: "/projects/peedi.png",
      imageAlt:
        "PEEDI WhatsApp commerce platform by Midhun Das N K, a Next.js and GraphQL full stack project",
      href: "https://peedi.io",
    },
    {
      id: "llyk",
      title: "LLYK",
      category: "Platform",
      description:
        "Rewards-as-a-service platform with merchant, participant, and admin apps. Digital wallet, OCR task verification, Razorpay payments, and fraud-prevention tools.",
      tags: ["Next.js", "GraphQL", "Prisma", "Razorpay"],
      image: "/projects/llyk.png",
      imageAlt:
        "LLYK rewards platform by Midhun Das N K, built with Next.js, GraphQL, and Prisma",
    },
    {
      id: "ott",
      title: "OTT Platform",
      category: "Streaming",
      description:
        "Streaming product with a React and Next.js UI, content discovery, watchlists, profiles, and a review and rating system on Prisma and MongoDB.",
      tags: ["React", "Next.js", "Prisma", "MongoDB"],
      image: "/projects/ott.png",
      imageAlt:
        "OTT streaming app interface by Midhun Das N K, a React and Next.js developer project",
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
