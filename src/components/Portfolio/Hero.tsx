import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-12">
      {/* Background visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-52 h-52 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-3xl animate-floating animate-morph-shape will-change-transform motion-safe:duration-[8s]" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tl from-accent/15 to-primary/10 rounded-full blur-3xl animate-floating animate-morph-shape will-change-transform motion-safe:duration-[8s]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/6 w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-floating will-change-transform"
          style={{ animationDelay: "2s" }}
        />

        <div className="absolute top-1/3 right-1/5 w-24 sm:w-32 h-24 sm:h-32 border border-primary/20 rotate-45 animate-rotate-3d" />
        <div className="absolute bottom-1/3 left-1/5 w-20 sm:w-24 h-20 sm:h-24 border border-accent/20 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl mt-5 pt-5 font-bold mb-4 leading-tight">
            <span className="gradient-text">PEDIMALLA</span>
            <br />
            <span className="text-foreground">MANISH</span>
          </h1>

          <div
            className="text-base sm:text-xl text-muted-foreground mb-4"
            aria-label="Professional title"
          >
            <span className="block">Frontend Developer</span>
            <span className="block text-primary">React • Redux • JavaScript</span>
          </div>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Passionate about building scalable and user-friendly applications with
            modern technologies. Currently working as a Frontend Developer Intern
            with expertise in the React ecosystem.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto mb-8">
            <div className="glass-card p-3 text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-0">
                6+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Months Experience
              </div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-0">
                5+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Projects Built
              </div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-xl sm:text-2xl font-bold text-primary mb-0">
                30%
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Performance Boost
              </div>
            </div>
            <div className="glass-card p-3 text-center">
              <div className="text-xl sm:text-2xl font-bold text-accent mb-0">
                8.57
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                CGPA
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              variant="default"
              className="glow w-full sm:w-auto"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" className="w-full sm:w-auto" asChild>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/pedimalla-manish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-full hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/pedimalla-manish"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-card rounded-full hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              aria-label="Email"
              href="mailto:pedimallamanish2003@gmail.com"
              className="p-2 glass-card rounded-full hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <ArrowDown
          className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
          onClick={() => scrollToSection("about")}
          aria-label="Scroll to about section"
        />
      </div>
    </section>
  );
};
