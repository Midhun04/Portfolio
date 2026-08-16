import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Midhun Das N K | Full Stack Developer",
    short_name: "Midhun Das",
    description:
      "Portfolio of Midhun Das N K, a Full Stack Developer in Kerala specializing in React, Next.js, Node.js, and TypeScript.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#29A37A",
    icons: [
      {
        src: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
  };
}
