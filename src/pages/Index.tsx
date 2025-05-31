import { useState, useEffect } from "react";
import { Palette, ArrowUp, Mail, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [skillsLoaded, setSkillsLoaded] = useState(false);

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
            // Trigger skills animation when skills section is visible
            if (section === "skills" && !skillsLoaded) {
              setTimeout(() => setSkillsLoaded(true), 500);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [skillsLoaded]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    { name: "React", proficiency: 95 },
    { name: "Node.js", proficiency: 90 },
    { name: "TypeScript", proficiency: 88 },
    { name: "JavaScript", proficiency: 95 },
    { name: "Tailwind CSS", proficiency: 92 },
    { name: "Vue.js", proficiency: 85 },
    { name: "MongoDB", proficiency: 80 },
    { name: "Firebase", proficiency: 88 },
    { name: "Supabase", proficiency: 85 },
    { name: "Next.js", proficiency: 87 }
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
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black dark:text-white">
              Michelle
            </h1>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105 ${
                    activeSection === item.toLowerCase() 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-gray-600 dark:text-gray-300"
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
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-black dark:via-gray-900 dark:to-blue-950">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10"></div>
        <div className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black dark:text-white animate-fade-in">
              Michelle
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8 animate-fade-in bg-white/80 dark:bg-black/50 px-6 py-3 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 inline-block" style={{animationDelay: '0.2s'}}>
              Full Stack Web Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in bg-white/60 dark:bg-black/30 px-8 py-6 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700" style={{animationDelay: '0.4s'}}>
              Crafting beautiful, interactive web experiences with modern technologies. 
              Passionate about creating solutions that make a difference.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black dark:text-white mb-8 animate-fade-in bg-white dark:bg-black px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 inline-block shadow-sm">About Me</h2>
            <Card className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                  I'm Michelle Akudo, a passionate full-stack web developer with expertise in modern web technologies. 
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
      <section id="skills" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12 animate-fade-in bg-gray-50 dark:bg-gray-900 px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 inline-block shadow-sm">Technical Skills</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-semibold text-black dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skillsLoaded ? `${skill.proficiency}%` : '0%'}
                  </span>
                </div>
                <Progress 
                  value={skillsLoaded ? skill.proficiency : 0} 
                  className="h-3 bg-gray-200 dark:bg-gray-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12 animate-fade-in bg-white dark:bg-black px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 inline-block shadow-sm">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in group cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      className={project.status === "Completed" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{project.type}</span>
                  </div>
                  <CardTitle className="text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/30">
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
      <section id="contact" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-12 animate-fade-in bg-gray-50 dark:bg-gray-900 px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 inline-block shadow-sm">Let's Work Together</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <Card className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6 flex items-center gap-2">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                    Ready to bring your next project to life? I'd love to hear about your ideas and 
                    discuss how we can create something amazing together.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span>michelle.dev2025@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Palette className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <span>Available on Fiverr</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <a 
                        href="https://www.linkedin.com/in/michelle-akudo-99301a369" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8 flex-wrap">
                    <Button 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <Palette className="mr-2 h-5 w-5" />
                      View Fiverr
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://www.linkedin.com/in/michelle-akudo-99301a369', '_blank')}
                    >
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
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
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 border-0"
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Index;
