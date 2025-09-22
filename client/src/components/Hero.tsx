import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          {/* Greeting */}
          <p className="text-primary font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Syed Mujtaba Abbas</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full Stack Developer & AI Engineer
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative web applications and AI-powered solutions with modern technologies. 
            Specializing in React, Next.js, and cutting-edge AI development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/portfolio">
              <Button variant="hero" size="lg" className="glow">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="hover:glow transition-all duration-300">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glow transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:glow transition-all duration-300">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;