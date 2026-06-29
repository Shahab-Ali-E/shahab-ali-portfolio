import { Header } from "../sections/Header";
import { HeroSection } from "../sections/Hero";
import { ServiceNowSection } from "../sections/ServiceNow";
import { TapeSection } from "../sections/Tape";
import { ProjectsSection } from "../sections/Projects";
import { AboutSection } from "../sections/About";
import { ContactSection } from "../sections/Contact";
import { Footer } from "../sections/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServiceNowSection />
      <TapeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
