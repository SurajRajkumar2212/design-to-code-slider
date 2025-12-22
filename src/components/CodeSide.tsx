import { Code2, Cpu, Smartphone } from "lucide-react";

export const CodeSide = () => {
  return (
    <div className="w-full h-full bg-cream flex flex-col justify-center items-center px-8 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full border border-navy/10" />
      <div className="absolute bottom-32 left-20 w-16 h-16 rounded-full border border-coral/20" />
      <div className="absolute top-1/3 left-8 w-3 h-3 rounded-full bg-coral/40" />
      
      {/* Content */}
      <div className="max-w-xl text-center z-10">
        {/* Icon cluster */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center animate-float" style={{ animationDelay: "0.2s" }}>
            <Code2 className="w-6 h-6 text-navy" />
          </div>
          <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center animate-float" style={{ animationDelay: "0.7s" }}>
            <Smartphone className="w-7 h-7 text-coral" />
          </div>
          <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center animate-float" style={{ animationDelay: "1.2s" }}>
            <Cpu className="w-6 h-6 text-navy" />
          </div>
        </div>
        
        <h2 className="text-lg font-sans font-medium tracking-widest text-muted-foreground mb-4 uppercase">
          Engineering
        </h2>
        
        <h1 className="text-4xl lg:text-6xl font-display font-bold text-navy leading-tight mb-6">
          iOS Developer &<br />
          <span className="text-coral italic">Digital Architect</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-navy-light font-sans font-light leading-relaxed mb-8">
          Building apps, websites, and digital solutions with clean logic and human-friendly design. Swift, UIKit, and beyond.
        </p>
        
        {/* Code snippet preview */}
        <div className="bg-code-bg rounded-xl p-5 text-left mb-8 shadow-xl overflow-hidden">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-coral" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <code className="font-mono text-sm leading-relaxed">
            <span className="text-code-syntax-keyword">func</span>{" "}
            <span className="text-primary-foreground">createExperience</span>
            <span className="text-muted-foreground">()</span>{" "}
            <span className="text-code-syntax-keyword">-&gt;</span>{" "}
            <span className="text-coral">Impact</span>{" "}
            <span className="text-muted-foreground">{"{"}</span>
            <br />
            <span className="text-muted-foreground pl-4">{"  "}</span>
            <span className="text-code-syntax-keyword">return</span>{" "}
            <span className="text-code-syntax-string">"unforgettable"</span>
            <br />
            <span className="text-muted-foreground">{"}"}</span>
          </code>
        </div>
        
        {/* Skills tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Swift", "UIKit", "Xcode", "React", "Python", "OpenCV"].map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 rounded-full border border-navy/20 text-navy text-sm font-sans hover:border-coral hover:text-coral transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="group px-8 py-4 rounded-full bg-coral text-primary-foreground font-sans font-medium tracking-wide hover:bg-coral-dark transition-all duration-300 shadow-lg hover:shadow-xl">
          <span className="flex items-center gap-2">
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-muted-foreground text-sm font-sans">
        <div className="w-8 h-0.5 bg-muted-foreground/40" />
        <span>Discover the code</span>
      </div>
    </div>
  );
};
