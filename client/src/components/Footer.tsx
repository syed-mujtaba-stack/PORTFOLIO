import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-2">Syed Mujtaba</h3>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <a 
                href="tel:+923460630802"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="font-medium">Phone:</span> +92 346 0630802
              </a>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://github.com/syed-mujtaba-stack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://linkedin.com/in/your-linkedin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://twitter.com/your-twitter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="mailto:abbasmjtaba125@gmail.com"
                  aria-label="Email"
                  className="flex items-center gap-1"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm hidden md:inline">abbasmjtaba125@gmail.com</span>
                </a>
              </Button>
              <a 
                href="mailto:abbasmjtaba125@gmail.com"
                className="md:hidden flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="font-medium">Email:</span> abbasmjtaba125@gmail.com
              </a>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="/about" className="hover:text-foreground transition-colors">About</a>
              <a href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</a>
              <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
              <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
              <a href="/ai-chat" className="hover:text-foreground transition-colors">AI Chat</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
