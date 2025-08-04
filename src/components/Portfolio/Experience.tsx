import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            My professional journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-6 sm:p-8 card-3d">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  Frontend Developer Intern
                </h3>
                <h4 className="text-lg sm:text-xl text-foreground mb-3">
                  Social Tek AI & ML Business Solutions Pvt Ltd
                </h4>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-muted-foreground text-sm">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    <span>June 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Built a <span className="text-primary font-semibold">multi-tenant SaaS platform</span> with
                    role-based dashboards, subscription-based access, and Stripe payment integration.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Integrated an <span className="text-accent font-semibold">AI-powered chatbot</span> for automated
                    learning support, enhancing user engagement.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Designed a scalable <span className="text-primary font-semibold">React-Redux architecture</span>,
                    improving performance by <span className="text-accent font-bold">30%</span> through API and UI
                    optimizations, while following Agile and Git best practices.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-3 text-foreground">
                Technologies Used
              </h5>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Redux",
                  "JavaScript",
                  "Stripe API",
                  "AI Integration",
                  "SaaS Architecture",
                  "Agile",
                  "Git",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
