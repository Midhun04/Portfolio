import type { Metadata } from "next";
import { Caveat, Instrument_Serif, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midhundas.vercel.app"),

  title: {
    default: "Midhun Das N K | Full Stack Developer in Kerala",
    template: "%s | Midhun Das N K",
  },

  description:
    "Midhun Das N K (Midhun Das) is a Full Stack Developer in Kerala specializing in React, Next.js, Node.js, GraphQL, and TypeScript. View projects, skills, and contact.",

  keywords: [
    "Midhun Das N K",
    "Midhun Das",
    "Full Stack Developer",
    "Full Stack Developer Kerala",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "GraphQL Developer",
    "Web Developer Kerala",
  ],

  authors: [
    {
      name: "Midhun Das N K",
      url: "https://midhundas.vercel.app",
    },
  ],

  creator: "Midhun Das N K",

  alternates: {
    canonical: "https://midhundas.vercel.app",
  },

  openGraph: {
    type: "profile",
    url: "https://midhundas.vercel.app",
    title: "Midhun Das N K | Full Stack Developer in Kerala | React & Next.js",
    description:
      "Portfolio of Midhun Das N K (Midhun Das), a Full Stack Developer in Kerala specializing in React, Next.js, Node.js, GraphQL, and TypeScript.",
    siteName: "Midhun Das N K",
    locale: "en_IN",
    firstName: "Midhun",
    lastName: "Das N K",
    images: [
      {
        url: "/profile.png",
        alt: "Portrait of Midhun Das N K, Full Stack Developer in Kerala",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Midhun Das N K | Full Stack Developer in Kerala",
    description:
      "Full Stack Developer in Kerala specializing in React, Next.js, Node.js, GraphQL, and TypeScript.",
    images: ["/profile.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${jost.variable} ${caveat.variable} ${instrumentSerif.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>

      <body className="min-h-full bg-bg font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}