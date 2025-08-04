import { Navigation } from "./Navigation";
import { Hero } from "./Hero";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { AnimatedBackground, FloatingShapes } from "./AnimatedBackground";
import { LoadingScreen } from "./LoadingScreen";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Add reveal animation to sections on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      }, observerOptions);

      // Observe all sections
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const SectionDivider = () => (
    <div className="relative py-8">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Animated Background Components */}
      <AnimatedBackground />
      <FloatingShapes />
      
      <Navigation />
      
      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        
        <SectionDivider />
        <About />
        
        <SectionDivider />
        <Experience />
        
        <SectionDivider />
        <Projects />
        
        <SectionDivider />
        <Education />
        
        <SectionDivider />
        <Contact />
      </main>

      {/* Professional Footer */}
      <footer className="relative z-10 py-12 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PM</span>
              </div>
              <span className="text-lg font-bold gradient-text">Pedimalla Manish</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Frontend Developer • React Specialist • Problem Solver
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 Pedimalla Manish. Crafted with passion using React, TypeScript & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};