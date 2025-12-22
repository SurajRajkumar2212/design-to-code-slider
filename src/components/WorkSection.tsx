import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Code2, Camera, Film, Layout } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "iOS Application",
    category: "Development",
    description: "User-focused mobile applications built with Swift, UIKit, and clean architecture patterns.",
    icon: Code2,
    tags: ["Swift", "UIKit", "Xcode"],
    color: "coral",
  },
  {
    id: 2,
    title: "Event Photography",
    category: "Photography",
    description: "Professional event and portrait photography for university initiatives and campaigns.",
    icon: Camera,
    tags: ["Lightroom", "Photoshop", "Creative Direction"],
    color: "coral",
  },
  {
    id: 3,
    title: "Short Films",
    category: "Cinematography",
    description: "Direction of short films and promotional videos from concept to final edit.",
    icon: Film,
    tags: ["Premiere Pro", "Storytelling", "Direction"],
    color: "coral",
  },
  {
    id: 4,
    title: "Web Design",
    category: "Design",
    description: "Modern, responsive websites with attention to user experience and visual aesthetics.",
    icon: Layout,
    tags: ["React", "Figma", "CSS"],
    color: "coral",
  },
];

export const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-xs tracking-[0.3em] text-coral uppercase mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] max-w-2xl">
            Projects that bridge <em className="text-coral">design & code</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-coral/50 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-transparent transition-opacity duration-500 ${
                hoveredId === project.id ? "opacity-100" : "opacity-0"
              }`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral group-hover:text-primary-foreground transition-colors duration-300">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${
                    hoveredId === project.id ? "text-coral translate-x-1 -translate-y-1" : ""
                  }`} />
                </div>

                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-display mb-3 group-hover:text-coral transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
