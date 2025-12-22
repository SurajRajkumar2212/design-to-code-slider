import { useEffect, useRef, useState } from "react";

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "Development", items: ["Swift", "UIKit", "SwiftUI", "React", "TypeScript"] },
    { category: "Design", items: ["Figma", "Photography", "Cinematography", "Motion"] },
    { category: "Tools", items: ["Xcode", "Git", "Lightroom", "Premiere Pro"] },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="font-mono text-xs tracking-[0.3em] text-coral uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] mb-8">
              An engineer who writes in two languages:
              <em className="text-coral"> code & light</em>
            </h2>
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                I'm Suraj Rajkumar — a Computer Science student at PES University, Bengaluru. 
                By day, I build iOS applications and digital solutions. By night, I craft 
                visual narratives through photography and cinematography.
              </p>
              <p>
                At the intersection of technology, creativity, and strategy is where I work 
                best — building solutions that are not only efficient, but unforgettable.
              </p>
            </div>
          </div>

          <div className={`space-y-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-full border border-border bg-background text-sm font-sans hover:border-coral hover:text-coral transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-display text-coral">2+</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">Years Exp</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-coral">10+</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-display text-coral">5</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
