import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";

export default function Home() {
  return (
    <>
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
