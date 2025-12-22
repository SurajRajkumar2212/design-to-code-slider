import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Club Head",
    company: "PIXELS Photography Club",
    period: "Aug 2025 — Present",
    description: "Leading the university's premier photography club, overseeing creative direction and team management.",
  },
  {
    role: "Director",
    company: "PESU Talkies",
    period: "Nov 2023 — Aug 2025",
    description: "Directed short films and promotional videos. Managed cross-functional creative teams and implemented workflows that cut editing timelines by 30%.",
  },
  {
    role: "Media Intern",
    company: "Center for Innovation & Entrepreneurship",
    period: "Sep 2025 — Dec 2025",
    description: "Created media content for entrepreneurship initiatives at PES University.",
  },
  {
    role: "Photographer",
    company: "Kannada Koota PESU",
    period: "Mar 2024 — Present",
    description: "Lead visual storytelling for cultural events. Developed digital content strategies that improved engagement.",
  },
];

export const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-xs tracking-[0.3em] text-coral uppercase mb-4">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] max-w-2xl">
            Building through <em className="text-coral">collaboration</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-12">
          {/* Timeline navigation */}
          <div className={`space-y-1 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                  activeIndex === index 
                    ? "bg-coral text-primary-foreground" 
                    : "hover:bg-background/10"
                }`}
              >
                <p className={`font-sans font-medium text-sm ${activeIndex === index ? "" : "text-background/60"}`}>
                  {exp.company}
                </p>
                <p className={`font-mono text-xs mt-1 ${activeIndex === index ? "text-primary-foreground/80" : "text-background/40"}`}>
                  {exp.period}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative pl-8 border-l border-background/20">
              <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-coral via-coral/50 to-transparent" 
                   style={{ height: `${((activeIndex + 1) / experiences.length) * 100}%` }} />
              
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-coral" />
              
              <div key={activeIndex} className="animate-in">
                <p className="font-mono text-xs tracking-[0.2em] text-background/50 uppercase mb-2">
                  {experiences[activeIndex].period}
                </p>
                <h3 className="text-3xl md:text-4xl font-display mb-2">
                  {experiences[activeIndex].role}
                </h3>
                <p className="text-coral font-sans font-medium mb-6">
                  {experiences[activeIndex].company}
                </p>
                <p className="text-background/70 font-sans leading-relaxed max-w-lg">
                  {experiences[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
