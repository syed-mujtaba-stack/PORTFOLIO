import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-slate-900 p-12 shadow-2xl min-h-[297mm] ring-1 ring-slate-200">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-blue-600 pb-8 mb-8">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 mb-2 uppercase">Syed Mujtaba Abbas</h1>
          <h2 className="text-2xl font-medium text-blue-600 mb-4">Full Stack Developer & AI Engineer</h2>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>abbasmjtaba125@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>Rawalpindi, Pakistan</span>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col gap-2 items-end">
          <div className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Github className="h-4 w-4" />
            <a href="https://github.com/syedmujtabaabbas" target="_blank" rel="noopener noreferrer">github.com/syedmujtabaabbas</a>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Linkedin className="h-4 w-4" />
            <a href="https://linkedin.com/in/syedmujtabaabbas" target="_blank" rel="noopener noreferrer">linkedin.com/in/syedmujtabaabbas</a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-8 border-r md:pr-8 border-slate-100">
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">Skills</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "TypeScript", "Tailwind", "Vite"].map(s => <span key={s} className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-700">{s}</span>)}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-2">Backend</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Node.js", "Python", "FastAPI", "Flask"].map(s => <span key={s} className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-700">{s}</span>)}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-2">AI & Agents</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["OpenAI SDK", "Prompt Engineering", "Agents"].map(s => <span key={s} className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-700">{s}</span>)}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-blue-600 uppercase mb-2">Databases</h4>
                <div className="flex flex-wrap gap-1.5">
                  {["Supabase", "Neon", "Sanity", "Firebase"].map(s => <span key={s} className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-700">{s}</span>)}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-800">Computer Science Specialist</h4>
                <p className="text-xs text-blue-600 italic">Self-Directed Learning</p>
                <p className="text-[10px] text-slate-500 mt-1">Focused on Full Stack & AI Engineering</p>
                <p className="text-[10px] text-slate-400">2021 - Present</p>
              </div>
            </div>
          </section>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">Professional Summary</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Dynamic Full Stack Developer and AI Engineer with a proven track rate in building 50+ projects.
              Specializing in React, Next.js, and autonomous Agentic AI systems.
              Committed to writing "Clean Code" and delivering high-performance solutions that bridge the gap
              between modern web development and intelligent automation.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">Key Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-md font-bold text-slate-800">Full Stack & AI Specialist</h4>
                  <span className="text-[10px] font-bold text-slate-400">FREELANCE</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-2 list-disc ml-4 font-light">
                  <li>Engineered 50+ scalable web applications using React and Next.js.</li>
                  <li>Architected agentic AI systems for workflow automation.</li>
                  <li>Integrated complex APIs (OpenRouter, Stripe, OpenAI).</li>
                  <li>Optimized load times and UI/UX for production environments.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">Personal Projects</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-sm font-bold text-slate-800">Agentic AI Task Assistant</h4>
                <p className="text-xs text-slate-600 mt-1 leading-snug">Autonomous system for planning and executing complex development tasks.</p>
                <p className="text-[10px] text-blue-500 mt-2 font-mono">React • Python • LangChain • FastAPI</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-sm font-bold text-slate-800">E-Commerce Ecosystem</h4>
                <p className="text-xs text-slate-600 mt-1 leading-snug">Full-featured platform with inventory, payments, and analytics dashboard.</p>
                <p className="text-[10px] text-blue-500 mt-2 font-mono">Next.js • Supabase • Stripe • Tailwind</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">Accolades</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">100% Success Rate</Badge>
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">AI Innovation Specialist</Badge>
              <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">Clean Code Advocate</Badge>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 font-medium">This resume was generated dynamically from syedmujtaba.portfolio</p>
      </div>
    </div>
  );
};

export default Resume;