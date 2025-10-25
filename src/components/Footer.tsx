import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground">
              © {currentYear} LynxLoop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
