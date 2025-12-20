import Header from '@/components/protfolio/Header';
import HeroSection from '@/components/protfolio/HeroSection';
import AboutSection from '@/components/protfolio/AboutSection';
import SkillsSection from '@/components/protfolio/SkillsSection';
import ProjectsSection from '@/components/protfolio/ProjectsSection';
import ContributionsSection from '@/components/protfolio/ContributionsSection';
import HobbiesSection from '@/components/protfolio/HobbiesSection';
import ContactSection from '@/components/protfolio/ContactSection';
import Footer from '@/components/protfolio/Footer';

export default function Index() {
  return (
    <div className="relative bg-background text-foreground">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContributionsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
