import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { MobileMenu } from './components/MobileMenu';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full relative overflow-x-hidden">
      {/* Fixed Navigation */}
      <Navigation onOpenMobileMenu={() => setIsMobileMenuOpen(true)} />

      {/* Mobile Fullscreen Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Main Portfolio Structure */}
      <main>
        {/* Fullscreen Hero Section with Spotlight Canvas Reveal */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Featured Projects Showcase */}
        <ProjectsSection />

        {/* Skills & Work Experience */}
        <SkillsSection />

        {/* Contact Form & Footer */}
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
