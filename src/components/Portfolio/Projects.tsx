import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, ShoppingCart, Calculator } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Cryptocurrency Analytics Dashboard",
      description:
        "A real-time cryptocurrency dashboard with live market updates, filtering, and sorting for comprehensive data analysis.",
      features: [
        "Real-time market data integration",
        "Interactive charts with Chart.js and Recharts",
        "Advanced filtering and sorting capabilities",
        "Historical data visualization with tooltips",
        "Optimized API response handling",
      ],
      technologies: ["React", "Redux RTK", "Chart.js", "Recharts", "Tailwind CSS"],
      icon: <TrendingUp className="h-8 w-8" />,
      gradient: "from-green-400 to-blue-500",
    },
    {
      title: "E-commerce Web App",
      description:
        "A comprehensive e-commerce platform with dynamic product listings, secure authentication, and real-time database updates.",
      features: [
        "Responsive product catalog with dynamic listings",
        "User authentication and profile management",
        "Secure payment gateway integration",
        "Admin dashboard for inventory management",
        "Real-time analytics and reporting",
      ],
      technologies: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS"],
      icon: <ShoppingCart className="h-8 w-8" />,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Mini Projects Collection",
      description:
        "A collection of utility applications showcasing different aspects of frontend development.",
      features: [
        "Expense Tracker with data visualization",
        "Find My CA - Professional services locator",
        "Music App with streaming capabilities",
        "Responsive design across all projects",
      ],
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      icon: <Calculator className="h-8 w-8" />,
      gradient: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating my skills in React, Redux, and
            modern web development technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="glass-card p-6 card-3d group hover:glow transition-all duration-500 relative overflow-hidden flex flex-col"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />

              <div className="relative z-10 flex flex-col flex-1">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  aria-label={`${project.title} icon`}
                >
                  <div className="text-white">{project.icon}</div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold mb-2 text-primary">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <div className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:border-primary/50 transition-colors"
                    aria-label={`${project.title} demo`}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Demo
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 group-hover:bg-primary/10 transition-colors"
                    aria-label={`${project.title} code`}
                  >
                    <Github className="mr-2 h-3 w-3" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
