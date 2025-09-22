import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-900 p-8 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8 border-b-2 border-blue-600 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Syed Mujtaba Abbas</h1>
        <h2 className="text-xl text-blue-600 mb-4">Full Stack Developer & AI Engineer</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>syedmujtabaabbas@email.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>Pakistan</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="h-4 w-4" />
            <span>github.com/syedmujtabaabbas</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          Professional Summary
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Passionate Full Stack Developer and AI Engineer with 3+ years of experience in building scalable web applications 
          and intelligent systems. Expert in modern JavaScript frameworks, backend technologies, and cutting-edge AI development. 
          Specialized in React, Node.js, and agentic AI systems with a strong focus on clean code and innovative solutions.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "API Routes", "Python"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Databases</h4>
            <div className="flex flex-wrap gap-2">
              {["MongoDB", "Supabase", "Firebase"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">AI & Automation</h4>
            <div className="flex flex-wrap gap-2">
              {["Prompt Engineering", "Agentic AI Development", "OpenAI API"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-pink-100 text-pink-800 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          Professional Experience
        </h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">Full Stack Developer & AI Engineer</h4>
                <p className="text-blue-600">Freelance</p>
              </div>
              <span className="text-gray-600 text-sm">2021 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Developed 50+ modern web applications using React, Next.js, and Node.js</li>
              <li>Implemented AI-powered features using OpenAI API and prompt engineering</li>
              <li>Built scalable backend systems with Express.js and various databases</li>
              <li>Created agentic AI systems capable of autonomous task execution</li>
              <li>Optimized application performance and implemented responsive designs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          Featured Projects
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900">AI-Powered Task Manager</h4>
            <p className="text-gray-700 text-sm mb-2">
              Full-stack application with intelligent task prioritization and automated scheduling using OpenAI API.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "OpenAI API", "Supabase"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">E-Commerce Platform</h4>
            <p className="text-gray-700 text-sm mb-2">
              Modern e-commerce solution with payment integration, inventory management, and admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "Express", "MongoDB", "Stripe API"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Agentic AI Assistant</h4>
            <p className="text-gray-700 text-sm mb-2">
              Intelligent assistant capable of planning, reasoning, and executing complex multi-step tasks.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "React", "OpenAI API", "LangChain"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          Education & Certifications
        </h3>
        <div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-semibold text-gray-900">Computer Science</h4>
              <p className="text-blue-600">Self-Taught Developer</p>
            </div>
            <span className="text-gray-600 text-sm">2020 - 2023</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
            <li>Intensive self-study in modern web development technologies</li>
            <li>Completed multiple online courses in AI and machine learning</li>
            <li>Active contributor to open-source projects</li>
            <li>Continuous learning through practical project development</li>
          </ul>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">
          Key Achievements
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Successfully delivered 50+ projects with 100% client satisfaction rate</li>
          <li>Expertise in cutting-edge AI technologies and prompt engineering</li>
          <li>Strong focus on clean, maintainable, and scalable code architecture</li>
          <li>Passionate about innovation and staying updated with latest tech trends</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;