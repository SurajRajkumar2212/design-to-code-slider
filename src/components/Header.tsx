import { useState, useEffect } from "react";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-border/50" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-coral group-hover:scale-150 transition-transform" />
          <span className="font-display text-base md:text-lg tracking-tight">
            Suraj <span className="text-coral">Rajkumar</span>
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-10">
          {["Work", "Experience", "About", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-sans text-muted-foreground hover:text-foreground transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-coral group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a 
            href="mailto:surajrajkumar2212@gmail.com" 
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-coral hover:bg-coral hover:text-primary-foreground transition-all duration-300 text-sm font-sans"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Contact</span>
            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
          <a 
            href="https://www.linkedin.com/in/suraj-rajkumar-5337b8299" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-coral hover:text-coral transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
