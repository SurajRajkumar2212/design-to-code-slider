import { Mail, Linkedin, Github } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Logo / Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">S</span>
          </div>
          <span className="font-display font-semibold text-lg hidden sm:block text-foreground mix-blend-difference">
            Suraj Rajkumar
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-sans font-medium text-foreground/70 hover:text-coral transition-colors mix-blend-difference">
            About
          </a>
          <a href="#work" className="text-sm font-sans font-medium text-foreground/70 hover:text-coral transition-colors mix-blend-difference">
            Work
          </a>
          <a href="#contact" className="text-sm font-sans font-medium text-foreground/70 hover:text-coral transition-colors mix-blend-difference">
            Contact
          </a>
        </nav>
        
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:surajrajkumar2212@gmail.com" 
            className="w-9 h-9 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-coral hover:text-primary-foreground transition-all"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/suraj-rajkumar-5337b8299" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-coral hover:text-primary-foreground transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center hover:bg-coral hover:text-primary-foreground transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
