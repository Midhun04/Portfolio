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
    name: "Alex Rivera",
    shortName: "Alex.",
    role: "Full Stack Developer",
    greeting: "Hello, My Name Is",
    tagline:
      "From a remote studio, I have rich experience in full stack development, interested to learn more about building products, designing systems, and solving hard problems. I love to talk with you about our unique.",
    yearsExperience: 4,
    projectsCompleted: 28,
    locationLabel: "Remote Worldwide",
    cvUrl: "#",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
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
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:hello@alexrivera.dev" },
  ],
  services: [
    {
      id: "web",
      title: "Web Development",
      subtitle: "Next.js & React",
      description:
        "Develop frontend experiences with React / Next.js and pair them with solid backend foundations.",
      icon: "web",
    },
    {
      id: "backend",
      title: "Backend Development",
      subtitle: "APIs & Data",
      description:
        "Build typed APIs, auth flows, and data models that stay clear and reliable as products grow.",
      icon: "backend",
    },
    {
      id: "product",
      title: "Product Engineering",
      subtitle: "End to end",
      description:
        "Own features from brief to ship — scoping, implementation, polish, and maintainable handoff.",
      icon: "product",
    },
  ] satisfies Service[],
  skills: [
    {
      name: "TypeScript",
      level: 90,
      blurb:
        "Typed application code across frontend and Node services for safer refactors.",
    },
    {
      name: "React / Next.js",
      level: 88,
      blurb:
        "App Router, server components, and performant client UX for modern web apps.",
    },
    {
      name: "Node.js",
      level: 85,
      blurb: "API design, background jobs, and integration layers that stay maintainable.",
    },
    {
      name: "PostgreSQL",
      level: 80,
      blurb: "Schema design, queries, and pragmatic relational data modeling.",
    },
    {
      name: "UI Engineering",
      level: 82,
      blurb: "Layout systems, motion, and accessible interaction patterns.",
    },
    {
      name: "DevOps basics",
      level: 70,
      blurb: "CI, preview deploys, and shipping to modern hosting platforms.",
    },
  ] satisfies Skill[],
  projectCategories: ["All", "E-Commerce", "Web Development", "AI"] as const,
  projects: [
    {
      id: "northline",
      title: "Northline Commerce",
      category: "E-Commerce",
      description:
        "Build on Next.js, Stripe, PostgreSQL. Product listing, cart, checkout, orders, and admin controls.",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      href: "#",
    },
    {
      id: "folio-kit",
      title: "Folio Kit",
      category: "Web Development",
      description:
        "Template-driven portfolio builder — accounts, content editing, and deployable static output.",
      tags: ["React", "Node", "Auth"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c8199c33ba4b?auto=format&fit=crop&w=800&q=80",
      href: "#",
    },
    {
      id: "signal-api",
      title: "Signal Desk",
      category: "AI",
      description:
        "Assistant workspace with ingestion, ranking, and dashboards for product teams.",
      tags: ["TypeScript", "AI", "Redis"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      href: "#",
    },
    {
      id: "clearpath",
      title: "Clearpath CRM",
      category: "Web Development",
      description:
        "Lightweight CRM for freelancers: contacts, pipelines, and activity timelines.",
      tags: ["Next.js", "Prisma", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      href: "#",
    },
    {
      id: "pulseboard",
      title: "Pulseboard",
      category: "Web Development",
      description:
        "Internal ops dashboard for status, deploy history, and service health at a glance.",
      tags: ["React", "Charts", "WebSockets"],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      href: "#",
    },
    {
      id: "vision-lab",
      title: "Vision Lab",
      category: "AI",
      description:
        "Computer-vision experiments for pointer control and gesture shortcuts.",
      tags: ["Python", "OpenCV"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      href: "#",
    },
  ] satisfies Project[],
  education: [
    {
      id: "edu-1",
      role: "B.S. Computer Science",
      org: "State University",
      period: "2018 — 2022",
      detail:
        "Focused on software engineering, databases, and human–computer interaction.",
    },
    {
      id: "edu-2",
      role: "Full Stack Intensive",
      org: "Dev Lab Institute",
      period: "2022",
      detail:
        "Project-based program covering modern web stacks, APIs, and deployment.",
    },
  ] satisfies ResumeItem[],
  experience: [
    {
      id: "exp-1",
      role: "Full Stack Developer",
      org: "Horizon Labs",
      period: "2023 — Present",
      detail:
        "Shipping product features across the stack, improving performance, and mentoring on frontend standards.",
    },
    {
      id: "exp-2",
      role: "Frontend Engineer",
      org: "Brightline Studio",
      period: "2022 — 2023",
      detail:
        "Built client sites and design systems; partnered with design on interaction and accessibility.",
    },
    {
      id: "exp-3",
      role: "Freelance Developer",
      org: "Independent",
      period: "2021 — 2022",
      detail:
        "Delivered MVPs and landing experiences for early-stage founders and small teams.",
    },
  ] satisfies ResumeItem[],
  contact: {
    heading: "Let's Talk About Ideas",
    address: "Remote · Prefer async first",
    freelance: "Available Right Now",
    email: "hello@alexrivera.dev",
    phone: "+1 (555) 010-2048",
  },
};

export type Portfolio = typeof portfolio;
