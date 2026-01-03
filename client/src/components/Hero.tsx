import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { ProfileCard } from "./ProfileCard";
import Lightning from "./Lightning";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Lightning hue={220} xOffset={0} speed={1} intensity={1.5} size={1} />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in order-2 lg:order-1">
            <p className="text-electric-blue font-medium mb-4 tracking-wide text-lg">
              Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Syed Mujtaba Abbas</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Full Stack Developer & AI Engineer
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting innovative web applications and AI-powered solutions with modern technologies.
              Specializing in React, Next.js, and cutting-edge AI development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
              <Link to="/portfolio">
                <Button variant="hero" size="lg" className="glow w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-full max-w-md transform hover:scale-[1.02] transition-transform duration-500">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;