import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "EduGenius - AI-Powered Learning Platform",
      description: "A comprehensive e-learning platform that combines artificial intelligence with modern web technologies to deliver personalized learning experiences. Features include AI-powered tutoring, interactive exercises, real-time collaboration, and comprehensive analytics.",
      image: "/src/assets/projects/Edugenius.png",
      technologies: ["Next.js", "TypeScript", "Firebase", "OpenAI", "Tailwind CSS", "Redux"],
      category: "Full Stack",
      date: "2025-09",
      status: "Active Development",
      github: "https://github.com/syed-mujtaba-stack/edugenius",
      demo: "https://mj-edugenius.vercel.app/"
    },
    {
      id: 2,
      title: "Visually AI - AI Image Generator",
      description: "A powerful AI-powered image generation platform that transforms text prompts into stunning visual art. Features include multiple AI models, style presets, and high-resolution image generation with advanced customization options.",
      image: "/src/assets/projects/VisuallyAI.png",
      technologies: ["Next.js", "TypeScript", "OpenAI DALL-E", "Tailwind CSS", "Vercel AI SDK"],
      category: "AI Development",
      date: "2024-04",
      status: "Active Development",
      github: "https://github.com/syed-mujtaba-stack/Visually",
      demo: "https://visually-m6hbu6rc4-syed-mujtaba-abbas-projects-8b12dc40.vercel.app/"
    },
    {
      id: 3,
      title: "Chat-Buddy - AI Chatbot",
      description: "An intelligent AI chatbot powered by Google's Gemini AI API, built with Next.js and Node.js. Features natural language understanding, context-aware responses, and a clean, responsive interface.",
      image: "/src/assets/projects/ChatBuddy.png",
      technologies: ["Next.js", "Google Gemini AI", "Node.js", "TypeScript", "Tailwind CSS"],
      category: "AI Development",
      date: "2024-05",
      status: "Completed",
      github: "https://github.com/syed-mujtaba-stack/Chat-Buddy",
      demo: "https://chat-buddy-pearl.vercel.app/"
    },
    {
      id: 4,
      title: "Khizar Luxury Market",
      description: "An elegant e-commerce platform for luxury goods, featuring a modern UI built with Vite, React, and TypeScript. Includes product listings, search functionality, and a responsive design with smooth animations.",
      image: "/src/assets/projects/KhizarLuxuryMarket.png",
      technologies: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS"],
      category: "E-commerce",
      date: "2024-06",
      status: "Completed",
      github: "https://github.com/syed-mujtaba-stack/khizar-luxury-market",
      demo: "https://khizar-luxury-market.vercel.app/"
    },
    {
      id: 5,
      title: "Code Mentor AI",
      description: "An AI-powered interactive programming tutor featuring AI-generated MCQs, viva mode for interview practice, and project mode with code reviews. Includes a progress dashboard to track learning achievements and skill development.",
      image: "/src/assets/projects/CodeMentorAI.png",
      technologies: ["Next.js 15", "React 19", "Tailwind CSS", "Clerk Auth", "OpenRouter AI"],
      category: "Education & AI",
      date: "2024-07",
      status: "Active Development",
      github: "https://github.com/syed-mujtaba-stack/Update-Code-Mentor-AI",
      demo: "https://update-code-mentor-ai.vercel.app/"
    },
    {
      id: 6,
      title: "J.A.R.V.I.S. - AI Assistant",
      description: "A sophisticated AI assistant inspired by the iconic J.A.R.V.I.S. from Iron Man. Features natural language processing, voice recognition, and integration with various APIs to assist with tasks, answer questions, and control smart home devices.",
      image: "/src/assets/projects/JARVIS.png",
      technologies: ["React", "Node.js", "Web Speech API", "OpenAI API", "WebSockets"],
      category: "AI & Automation",
      date: "2024-08",
      status: "Active Development",
      github: "https://github.com/syed-mujtaba-stack/J.A.R.V.I.S",
      demo: "https://j-a-r-v-i-s-mujtaba.vercel.app/"
    }
  ];

  const categories = ["All", "Full Stack", "AI Development", "CMS", "Analytics"];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative projects spanning full-stack development, AI engineering, and cutting-edge web technologies.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "hero" : "outline"}
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="gradient-card hover:glow transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/api/placeholder/600/400';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="hero" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects. Let's discuss how we can bring your ideas to life.
          </p>
          <Button variant="hero" size="lg">
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;