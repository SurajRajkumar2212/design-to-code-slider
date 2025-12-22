import { Camera, Palette, Sparkles } from "lucide-react";

export const DesignSide = () => {
  return (
    <div className="w-full h-full bg-coral flex flex-col justify-center items-center px-8 lg:px-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-primary-foreground/20" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full border border-primary-foreground/10" />
      <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-primary-foreground/40" />
      
      {/* Content */}
      <div className="max-w-xl text-center z-10">
        {/* Icon cluster */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-float" style={{ animationDelay: "0s" }}>
            <Camera className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="w-14 h-14 rounded-full bg-primary-foreground/15 flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
            <Palette className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        
        <h2 className="text-lg font-sans font-medium tracking-widest text-primary-foreground/80 mb-4 uppercase">
          Design
        </h2>
        
        <h1 className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
          Visual Storyteller &<br />
          <span className="italic">Creative Director</span>
        </h1>
        
        <p className="text-lg lg:text-xl text-primary-foreground/90 font-sans font-light leading-relaxed mb-8">
          Capturing moments the eye might miss but the heart remembers. Photography, cinematography, and visual narratives that resonate.
        </p>
        
        {/* Skills tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["Photography", "Cinematography", "Figma", "Visual Design", "Creative Direction"].map((skill) => (
            <span 
              key={skill}
              className="px-4 py-2 rounded-full border border-primary-foreground/30 text-primary-foreground text-sm font-sans hover:bg-primary-foreground/10 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* CTA Button */}
        <button className="group px-8 py-4 rounded-full border-2 border-primary-foreground text-primary-foreground font-sans font-medium tracking-wide hover:bg-primary-foreground hover:text-coral transition-all duration-300">
          <span className="flex items-center gap-2">
            View Portfolio
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </button>
      </div>
      
      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-primary-foreground/60 text-sm font-sans">
        <span>Drag slider to explore</span>
        <div className="w-8 h-0.5 bg-primary-foreground/40" />
      </div>
    </div>
  );
};
