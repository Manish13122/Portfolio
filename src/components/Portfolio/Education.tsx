import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";

export const Education = () => {
  const certifications = [
    {
      title: "FullStack Java Development",
      issuer: "Social Pracher",
      description:
        "Certified in building dynamic frontend and robust backend solutions using Java.",
    },
    {
      title: "Java Developer",
      issuer: "Besant Technologies",
      description:
        "Mastered scalable Java programming techniques for robust application development.",
    },
    {
      title: "Developer Job Simulation",
      issuer: "Accenture",
      description:
        "Executed real-world tasks to enhance problem-solving and technical expertise.",
    },
  ];

  const achievements = [
    {
      title: "Minor in AI & Machine Learning",
      description:
        "Excelled in advanced predictive modeling, machine learning algorithms, and AI-driven problem-solving.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: '"Best Project" Award',
      description:
        "Intinta Innovation of Technology – Recognized for developing a high-impact, innovative solution.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Flipkart Grid 4.0 Finalist",
      description:
        "Advanced in the prestigious software development challenge, competing among top-tier participants.",
      icon: <Trophy className="h-6 w-6" />,
    },
  ];

  return (
    <section id="education" className="py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl xl:max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-[90ch] mx-auto">
            My academic background and professional certifications
          </p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-5 text-center">
            Education
          </h3>
          <Card className="glass-card p-5 sm:p-8 card-3d">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0">
                <h4 className="text-lg sm:text-xl font-bold text-primary leading-snug">
                  B. Tech in Electronics and Communication
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground break-words">
                  CMR College of Engineering and Technology
                </p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-muted-foreground">Duration:</span>
                <span className="text-foreground font-semibold">
                  2020 - 2024
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-muted-foreground">CGPA:</span>
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  8.57
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h4 className="text-lg sm:text-xl font-bold mb-5 text-center">
            Key Achievements
          </h4>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="glass-card p-4 card-3d flex flex-col sm:flex-row items-start gap-3"
              >
                <div className="text-primary flex-shrink-0 mt-1">
                  {achievement.icon}
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1 text-base">
                    {achievement.title}
                  </h5>
                  <p className="text-sm text-muted-foreground break-words">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-5 text-center">
            Certifications
          </h3>
          <div className="space-y-5">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-card p-4 sm:p-6 card-3d flex flex-col sm:flex-row items-start gap-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base sm:text-lg font-bold text-primary mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-accent font-semibold mb-1 text-sm truncate">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed break-words">
                    {cert.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
