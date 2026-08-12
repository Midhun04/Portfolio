import type { Metadata } from "next";
import { Caveat, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alex Rivera — Full Stack Developer",
  description:
    "Personal portfolio of Alex Rivera, a full stack developer building reliable web products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full bg-bg font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}
