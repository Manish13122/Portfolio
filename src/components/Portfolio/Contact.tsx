import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "pedimallamanish2003@gmail.com",
      href: "mailto:pedimallamanish2003@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9866712360",
      href: "tel:+919866712360",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pedimalla-manish",
      href: "https://linkedin.com/in/pedimalla-manish",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/pedimalla-manish",
      href: "https://github.com/pedimalla-manish",
    },
  ];

  return (
    <section id="contact" className="py-12 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a conversation about technology. Let's connect!
          </p>
        </div>

        {/* Top: Connect + Message */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="glass-card p-5 sm:p-8 card-3d">
            <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              I'm currently seeking new opportunities as a Frontend Developer.
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm font-medium break-words">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Card>

          <Card className="glass-card p-5 sm:p-8 card-3d">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-muted-foreground mb-1 block"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-background/50 border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-muted-foreground mb-1 block"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full bg-background/50 border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-muted-foreground mb-1 block"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full bg-background/50 border-border/50 focus:border-primary/50"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-muted-foreground mb-1 block"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  className="w-full bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full glow flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Status */}
        <div className="max-w-5xl mx-auto mt-8">
          <Card className="glass-card p-5 sm:p-8 card-3d">
            <h4 className="text-lg sm:text-xl font-bold mb-3 text-primary">
              Current Status
            </h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 font-semibold text-sm">
                  Available for opportunities
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Open to Frontend Developer roles, contract work, and exciting
              collaborative projects.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
