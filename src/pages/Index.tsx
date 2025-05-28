
import { useState, useEffect } from "react";
import { Palette, ArrowUp, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["hero", "about", "skills", "projects", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    "React", "Node.js", "Supabase", "Firebase", "Fiverr", 
    "Vanilla JS", "Vue.js", "TypeScript", "Tailwind CSS", "MongoDB"
  ];

  const projects = [
    {
      title: "Creative Portfolio Hub",
      description: "A collection of 4 stunning portfolio websites designed for various professionals including designers, photographers, and developers.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      type: "Portfolio Websites"
    },
    {
      title: "RealTime Chat Application",
      description: "A fully functional real-time chat application with user authentication, message history, and file sharing capabilities.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      status: "Completed",
      type: "Chat Application"
    },
    {
      title: "Modern E-Commerce Platform",
      description: "A complete e-commerce solution with shopping cart, payment integration, and admin dashboard for inventory management.",
      tech: ["Vue.js", "Node.js", "Stripe", "Firebase"],
      status: "Completed",
      type: "E-Commerce"
    },
    {
      title: "TaskMaster Suite",
      description: "A collection of 3 different task management applications, each with unique features for different productivity workflows.",
      tech: ["React", "Supabase", "TypeScript"],
      status: "Completed",
      type: "Task Management"
    },
    {
      title: "Personal Life Planner",
      description: "An intuitive personal planner application for managing daily schedules, goals, and habit tracking with beautiful UI.",
      tech: ["React", "Firebase", "Chart.js"],
      status: "Completed",
      type: "Personal Planner"
    },
    {
      title: "StudyMate - Learning Platform",
      description: "An innovative studying application that helps students organize their learning materials, create study schedules, and track progress.",
      tech: ["React", "Supabase", "OpenAPI"],
      status: "In Progress",
      type: "Education Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-accent/20 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-500">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/80 dark:bg-black/40 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Michelle
            </h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
              Michelle
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 mb-8 animate-fade-in bg-background/60 dark:bg-background/30 px-4 py-2 rounded-lg backdrop-blur-sm" style={{animationDelay: '0.2s'}}>
              Full Stack Web Developer
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-in bg-background/50 dark:bg-background/20 px-6 py-4 rounded-lg backdrop-blur-sm" style={{animationDelay: '0.4s'}}>
              Crafting beautiful, interactive web experiences with modern technologies. 
              Passionate about creating solutions that make a difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 bg-background/80 text-foreground hover:bg-accent/20 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-8 animate-fade-in bg-background/60 dark:bg-background/30 px-6 py-3 rounded-lg backdrop-blur-sm inline-block">About Me</h2>
            <Card className="bg-card/80 backdrop-blur-md border-border/30 text-foreground hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/80">
                  I'm Michelle, a passionate full-stack web developer with expertise in modern web technologies. 
                  I love creating interactive, user-friendly applications that solve real-world problems. 
                  With experience in both frontend and backend development, I bring ideas to life through clean, 
                  efficient code and beautiful design. Available for freelance projects on Fiverr.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in bg-background/60 dark:bg-background/30 px-6 py-3 rounded-lg backdrop-blur-sm inline-block">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-lg px-6 py-3 bg-gradient-to-r from-primary/80 to-secondary/80 text-primary-foreground border-0 hover:scale-110 transition-all duration-300 animate-fade-in cursor-pointer hover:shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in bg-background/60 dark:bg-background/30 px-6 py-3 rounded-lg backdrop-blur-sm inline-block">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`bg-card/80 backdrop-blur-md border-border/30 hover:bg-card/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in group cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-primary font-medium">{project.type}</span>
                  </div>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/50 text-primary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in bg-background/60 dark:bg-background/30 px-6 py-3 rounded-lg backdrop-blur-sm inline-block">Let's Work Together</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <Card className="bg-card/80 backdrop-blur-md border-border/30 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Mail className="h-6 w-6 text-primary" />
                    Get In Touch
                  </h3>
                  <p className="text-foreground/80 mb-8 text-lg">
                    Ready to bring your next project to life? I'd love to hear about your ideas and 
                    discuss how we can create something amazing together.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>michelle.dev2025@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-foreground/80">
                      <Palette className="h-5 w-5 text-primary" />
                      <span>Available on Fiverr</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Palette className="mr-2 h-5 w-5" />
                      View Fiverr
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
