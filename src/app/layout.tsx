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
    "React Developer Kerala",
    "Next.js Developer Kerala",
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
  category: "portfolio",

  openGraph: {
    type: "website",
    siteName: "Midhun Das N K",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
