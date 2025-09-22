import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Code, Brain, Database, Server } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpg";
import { downloadResume, downloadResumeAsPDF } from "@/utils/downloadResume";

const About = () => {
  const skills = [
    { name: "HTML", category: "Frontend", level: "Expert" },
    { name: "CSS", category: "Frontend", level: "Expert" },
    { name: "JavaScript", category: "Frontend", level: "Expert" },
    { name: "TypeScript", category: "Frontend", level: "Expert" },
    { name: "React", category: "Frontend", level: "Expert" },
    { name: "Next.js", category: "Frontend", level: "Expert" },
    { name: "Node.js", category: "Backend", level: "Advanced" },
    { name: "Express", category: "Backend", level: "Advanced" },
    { name: "MongoDB", category: "Database", level: "Advanced" },
    { name: "Supabase", category: "Database", level: "Advanced" },
    { name: "Firebase", category: "Database", level: "Advanced" },
    { name: "Python", category: "Programming", level: "Advanced" },
    { name: "Prompt Engineering", category: "AI", level: "Expert" },
    { name: "Agentic AI Development", category: "AI", level: "Advanced" },
    { name: "API Routes", category: "Backend", level: "Advanced" },
  ];

  const skillCategories = {
    Frontend: { icon: Code, color: "bg-blue-500" },
    Backend: { icon: Server, color: "bg-green-500" },
    Database: { icon: Database, color: "bg-purple-500" },
    Programming: { icon: Code, color: "bg-orange-500" },
    AI: { icon: Brain, color: "bg-pink-500" },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section with Profile Picture */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden gradient-border p-1">
              <img
                src={profilePicture}
                alt="Syed Mujtaba Abbas"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer dedicated to creating innovative solutions and pushing the boundaries of technology.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="gradient-card p-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                <img
                  src={profilePicture}
                  alt="Syed Mujtaba Abbas"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Syed Mujtaba Abbas</h3>
              <p className="text-primary mb-4">Full Stack Developer & AI Engineer</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">3+ Years</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-medium">50+</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="text-muted-foreground">Specialization</span>
                  <span className="font-medium">Full Stack & AI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Status</span>
                  <span className="font-medium text-green-500">Available</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <Button 
                  onClick={downloadResume}
                  variant="outline"
                  className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button 
                  onClick={downloadResumeAsPDF}
                  className="bg-gradient-to-r from-electric-blue to-cyan hover:from-electric-blue/80 hover:to-cyan/80 text-background font-medium shadow-lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              I'm Syed Mujtaba Abbas, a dedicated full-stack developer and AI engineer with a passion for creating 
              cutting-edge web applications and intelligent systems. My journey in technology has been driven by 
              curiosity and a desire to solve complex problems through innovative solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With expertise spanning modern web technologies like React, Next.js, and Node.js, combined with 
              advanced knowledge in AI development and prompt engineering, I bridge the gap between traditional 
              web development and the emerging world of artificial intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building scalable applications using modern frameworks and databases, while also 
              developing agentic AI systems that can autonomously plan, reason, and execute complex tasks. 
              My goal is to create technology that not only meets current needs but anticipates future possibilities.
            </p>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-accent-orange/10 border border-accent-orange/20">
                <div className="text-2xl font-bold text-accent-orange">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="text-2xl font-bold text-green-500">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, config]) => {
              const Icon = config.icon;
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <Card key={category} className="gradient-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`p-2 rounded-lg ${config.color} mr-3`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold">{category}</h3>
                    </div>
                    <div className="space-y-3">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between">
                          <span className="text-sm">{skill.name}</span>
                          <Badge variant="secondary">{skill.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, efficient, and well-documented code that stands the test of time.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly exploring new technologies and approaches to solve complex problems creatively.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance</h3>
              <p className="text-muted-foreground">
                Building scalable solutions that perform excellently under any load or condition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;