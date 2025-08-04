import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const skills = {
    frontend: [
      "React.js",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "TypeScript",
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Spring",
      "MySQL",
      "Hibernate",
      "JPA",
      "JPQL",
    ],
    tools: [
      "Git",
      "GitHub",
      "Webpack",
      "Vite",
      "Postman",
      "VS Code",
    ],
  };

  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm a passionate Frontend Developer with a strong foundation in modern
            web technologies. Currently pursuing my career as a Frontend Developer
            Intern, I love creating intuitive and scalable applications.
          </p>
        </div>

        {/* Top summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card p-6 sm:p-8 card-3d group hover:glow transition-all duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">
              Professional Background
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Recently graduated with a B.Tech in Electronics and Communication
              Engineering from CMR College of Engineering and Technology (CGPA:
              8.57). Successfully transitioned into software development with focus
              on modern frontend technologies.
            </p>
          </Card>

          <Card className="glass-card p-6 sm:p-8 card-3d group hover:glow transition-all duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-accent">
              Current Role
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Frontend Developer Intern at Social Tek AI & ML, building multi-tenant
              SaaS platforms, integrating AI chatbots, and achieving 30% performance
              improvements through React-Redux architecture optimization.
            </p>
          </Card>

          <Card className="glass-card p-6 sm:p-8 card-3d group hover:glow transition-all duration-500">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/80 to-accent/80 rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">
              Future Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Passionate about creating scalable, user-centric applications using
              cutting-edge technologies. Actively seeking opportunities to contribute
              to innovative projects and grow as a full-stack developer.
            </p>
          </Card>
        </div>

        {/* Highlights + Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-8">
            <div className="glass-card p-6 sm:p-8 card-3d">
              <h3 className="text-2xl font-bold mb-5 text-primary">
                Professional Highlights
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">
                    6+ months of professional frontend development experience
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">
                    Improved application performance by 30% through optimization
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">
                    Built and deployed multi-tenant SaaS platform
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">
                    Integrated AI chatbots and payment systems
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Technical Skills</h3>

              <div className="space-y-6">
                <div aria-label="Frontend skills">
                  <h4 className="text-lg font-semibold mb-3 text-primary">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div aria-label="Backend skills">
                  <h4 className="text-lg font-semibold mb-3 text-accent">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div aria-label="Tools and platforms">
                  <h4 className="text-lg font-semibold mb-3 text-muted-foreground">
                    Tools & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="hover:bg-muted/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  );
};
