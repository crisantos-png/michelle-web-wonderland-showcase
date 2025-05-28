
import { useState, useEffect } from "react";
import { Github, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    "React", "Node.js", "Supabase", "Firebase", "GitHub", 
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
      tech: ["React", "Supabase", "AI Integration"],
      status: "In Progress",
      type: "Education Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Michelle</h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-purple-300 ${
                    activeSection === item.toLowerCase() ? "text-purple-300" : "text-white/80"
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Michelle
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8">Full Stack Web Developer</p>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
              Crafting beautiful, interactive web experiences with modern technologies. 
              Passionate about creating solutions that make a difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
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
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  I'm Michelle, a passionate full-stack web developer with expertise in modern web technologies. 
                  I love creating interactive, user-friendly applications that solve real-world problems. 
                  With experience in both frontend and backend development, I bring ideas to life through clean, 
                  efficient code and beautiful design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-lg px-6 py-3 bg-gradient-to-r from-purple-600/80 to-pink-600/80 text-white border-0 hover:scale-110 transition-all duration-300 animate-fade-in`}
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
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className={project.status === "Completed" ? "bg-green-600" : "bg-yellow-600"}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-purple-300 font-medium">{project.type}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-purple-300 text-purple-300">
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
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <p className="text-white/80 mb-8 text-lg">
                  Ready to bring your next project to life? I'd love to hear about your ideas and 
                  discuss how we can create something amazing together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
