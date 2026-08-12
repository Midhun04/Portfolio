export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "web" | "backend" | "product";
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
    shortName: "Midhun.",
    role: "Full Stack Developer",
    greeting: "Hello, My Name Is",
    tagline:
      "Based in Kerala, I build full stack products with React, Next.js, Node.js, and GraphQL — from WhatsApp commerce and rewards platforms to streaming apps. I like shipping reliable features and working closely with design and product teams.",
    yearsExperience: 1,
    projectsCompleted: 3,
    locationLabel: "Kerala, India",
    cvUrl: "/MidhunDas-CV.pdf",
    image: "/profile.png",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#work" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  socials: [
    { label: "GitHub", href: "https://github.com/midhun04" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/midhun04/" },
    { label: "Email", href: "mailto:midhundas3110@gmail.com" },
  ],
  services: [
    {
      id: "web",
      title: "Web Development",
      subtitle: "Next.js & React",
      description:
        "Build responsive product UIs with React, Next.js, TypeScript, and Tailwind CSS — from merchant dashboards to customer-facing apps.",
      icon: "web",
    },
    {
      id: "backend",
      title: "Backend Development",
      subtitle: "APIs & Data",
      description:
        "Design REST and GraphQL APIs, data models, and backend logic with Node.js, Prisma, PostgreSQL, and MongoDB.",
      icon: "backend",
    },
    {
      id: "product",
      title: "Product Engineering",
      subtitle: "End to end",
      description:
        "Own features across the stack — multi-tenant platforms, WhatsApp commerce, bookings, payments, and admin tools.",
      icon: "product",
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
      level: 80,
      blurb:
        "Layout systems and polished UI for responsive web apps across merchant and customer experiences.",
    },
    {
      name: "Python / Django",
      level: 72,
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
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "llyk",
      title: "LLYK",
      category: "Platform",
      description:
        "Rewards-as-a-service platform with merchant, participant, and admin apps. Digital wallet, OCR task verification, Razorpay payments, and fraud-prevention tools.",
      tags: ["Next.js", "GraphQL", "Prisma", "Razorpay"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "ott",
      title: "OTT Platform",
      category: "Streaming",
      description:
        "Streaming product with a React and Next.js UI, content discovery, watchlists, profiles, and a review and rating system on Prisma and MongoDB.",
      tags: ["React", "Next.js", "Prisma", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
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
      detail: "CGPA 6.5. Undergraduate foundation in programming, databases, and application development.",
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
