import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Syed Mujtaba</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              Building the future with Full Stack Development & Agentic AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h4 className="font-semibold text-foreground">Explore</h4>
            <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="/about" className="hover:text-electric-blue transition-colors">About Me</a>
              <a href="/portfolio" className="hover:text-electric-blue transition-colors">Portfolio</a>
              <a href="/blog" className="hover:text-electric-blue transition-colors">Tech Blog</a>
              <a href="/contact" className="hover:text-electric-blue transition-colors">Contact</a>
            </nav>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end gap-2">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-electric-blue/10 hover:text-electric-blue border-muted" asChild>
                <a href="https://github.com/syed-mujtaba-stack" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-electric-blue/10 hover:text-electric-blue border-muted" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-electric-blue/10 hover:text-electric-blue border-muted" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-electric-blue/10 hover:text-electric-blue border-muted" asChild>
                <a href="mailto:abbasmjtaba125@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Syed Mujtaba Abbas. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
