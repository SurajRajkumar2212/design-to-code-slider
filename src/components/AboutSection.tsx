import { useEffect, useRef, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface SkillDetail {
  name: string;
  category: string;
  description: string;
  learned: string[];
  realWorld: { challenge: string; solution: string }[];
}

const skillDetails: Record<string, SkillDetail> = {
  Swift: {
    name: "Swift",
    category: "Development",
    description: "Apple's powerful and intuitive programming language for iOS, macOS, and beyond.",
    learned: [
      "Protocol-oriented programming and generics",
      "Memory management with ARC",
      "Concurrency with async/await and actors",
      "Unit testing and TDD practices",
    ],
    realWorld: [
      { challenge: "Optimizing app launch time for a complex iOS app", solution: "Implemented lazy loading and reduced initial view hierarchy complexity, cutting launch time by 40%" },
      { challenge: "Handling complex data synchronization", solution: "Built a custom sync engine using Combine and Core Data for offline-first architecture" },
    ],
  },
  UIKit: {
    name: "UIKit",
    category: "Development",
    description: "Apple's framework for building traditional iOS user interfaces with fine-grained control.",
    learned: [
      "Auto Layout and constraint-based layouts",
      "Custom view controllers and transitions",
      "Collection views with compositional layouts",
      "Gesture recognizers and touch handling",
    ],
    realWorld: [
      { challenge: "Building a smooth infinite-scroll feed", solution: "Implemented prefetching and cell reuse optimization for 60fps scrolling with thousands of items" },
      { challenge: "Creating custom navigation transitions", solution: "Built interactive dismissal gestures with UIViewControllerAnimatedTransitioning" },
    ],
  },
  SwiftUI: {
    name: "SwiftUI",
    category: "Development",
    description: "Apple's modern declarative framework for building UIs across all Apple platforms.",
    learned: [
      "Declarative UI patterns and state management",
      "Property wrappers (@State, @Binding, @ObservedObject)",
      "Custom view modifiers and animations",
      "Integrating with UIKit when needed",
    ],
    realWorld: [
      { challenge: "Migrating a legacy UIKit app to SwiftUI", solution: "Created a hybrid architecture using UIHostingController for incremental adoption" },
      { challenge: "Building complex animations", solution: "Leveraged matchedGeometryEffect and custom timing curves for fluid hero transitions" },
    ],
  },
  React: {
    name: "React",
    category: "Development",
    description: "A JavaScript library for building dynamic and interactive user interfaces.",
    learned: [
      "Hooks and functional components",
      "State management patterns (Context, Zustand)",
      "Performance optimization with memo and useMemo",
      "Server-side rendering concepts",
    ],
    realWorld: [
      { challenge: "Building a real-time collaborative editor", solution: "Used WebSockets with optimistic updates and conflict resolution" },
      { challenge: "Optimizing bundle size for faster loads", solution: "Implemented code splitting and lazy loading, reducing initial bundle by 60%" },
    ],
  },
  TypeScript: {
    name: "TypeScript",
    category: "Development",
    description: "A typed superset of JavaScript that enhances code quality and developer experience.",
    learned: [
      "Advanced type inference and generics",
      "Utility types and conditional types",
      "Strict null checking and type guards",
      "Integration with React and Node.js",
    ],
    realWorld: [
      { challenge: "Refactoring a large JavaScript codebase", solution: "Incrementally migrated with strict mode, catching 200+ potential runtime errors" },
      { challenge: "Building type-safe API layers", solution: "Created shared type definitions between frontend and backend for end-to-end type safety" },
    ],
  },
  Figma: {
    name: "Figma",
    category: "Design",
    description: "A collaborative design tool for creating interfaces, prototypes, and design systems.",
    learned: [
      "Component variants and auto-layout",
      "Design tokens and style guides",
      "Interactive prototyping",
      "Developer handoff workflows",
    ],
    realWorld: [
      { challenge: "Maintaining consistency across a large app", solution: "Built a comprehensive design system with 100+ reusable components" },
      { challenge: "Rapid iteration on user feedback", solution: "Created interactive prototypes for user testing before development" },
    ],
  },
  Photography: {
    name: "Photography",
    category: "Design",
    description: "The art of capturing moments and telling stories through still images.",
    learned: [
      "Manual exposure and composition",
      "Lighting techniques and color theory",
      "Post-processing workflows",
      "Portrait and street photography",
    ],
    realWorld: [
      { challenge: "Capturing authentic brand imagery", solution: "Developed a visual style guide ensuring consistent brand storytelling across platforms" },
      { challenge: "Low-light event photography", solution: "Mastered high-ISO techniques and off-camera flash for professional results" },
    ],
  },
  Cinematography: {
    name: "Cinematography",
    category: "Design",
    description: "The craft of visual storytelling through motion pictures and video.",
    learned: [
      "Camera movement and shot composition",
      "Color grading and LUTs",
      "Audio synchronization",
      "Narrative pacing and editing",
    ],
    realWorld: [
      { challenge: "Creating engaging product videos", solution: "Combined cinematic techniques with clear messaging for 3x engagement increase" },
      { challenge: "Documentary-style content creation", solution: "Developed interview techniques and B-roll strategies for authentic storytelling" },
    ],
  },
  Motion: {
    name: "Motion",
    category: "Design",
    description: "Creating dynamic animations and motion graphics for digital experiences.",
    learned: [
      "Keyframe animation principles",
      "Easing and timing curves",
      "Motion design for UI/UX",
      "After Effects and Lottie exports",
    ],
    realWorld: [
      { challenge: "Enhancing app onboarding experience", solution: "Created micro-interactions that improved user retention by 25%" },
      { challenge: "Building loading states that delight", solution: "Designed skeleton loaders and progress animations that reduced perceived wait time" },
    ],
  },
  Xcode: {
    name: "Xcode",
    category: "Tools",
    description: "Apple's integrated development environment for building apps across all Apple platforms.",
    learned: [
      "Debugging with LLDB and breakpoints",
      "Instruments for performance profiling",
      "Interface Builder and Storyboards",
      "Schemes and build configurations",
    ],
    realWorld: [
      { challenge: "Diagnosing memory leaks in production", solution: "Used Instruments' Leaks and Allocations tools to identify and fix retain cycles" },
      { challenge: "Optimizing CI/CD build times", solution: "Configured parallel builds and caching, reducing CI time by 50%" },
    ],
  },
  Git: {
    name: "Git",
    category: "Tools",
    description: "A distributed version control system for tracking code changes and collaboration.",
    learned: [
      "Branching strategies (GitFlow, trunk-based)",
      "Interactive rebasing and cherry-picking",
      "Resolving merge conflicts",
      "Git hooks and automation",
    ],
    realWorld: [
      { challenge: "Managing releases for a team of 10+", solution: "Implemented GitFlow with automated versioning and changelog generation" },
      { challenge: "Recovering from a botched deployment", solution: "Used git bisect to quickly identify the problematic commit and revert" },
    ],
  },
  Lightroom: {
    name: "Lightroom",
    category: "Tools",
    description: "Adobe's professional photo editing and organization software.",
    learned: [
      "RAW processing and exposure correction",
      "Color grading and presets",
      "Batch editing workflows",
      "Catalog management",
    ],
    realWorld: [
      { challenge: "Processing 1000+ event photos efficiently", solution: "Developed preset-based workflow with AI-assisted culling, reducing edit time by 70%" },
      { challenge: "Maintaining consistent brand colors", solution: "Created custom presets ensuring brand consistency across all deliverables" },
    ],
  },
  "Premiere Pro": {
    name: "Premiere Pro",
    category: "Tools",
    description: "Adobe's industry-standard video editing software for professional productions.",
    learned: [
      "Multi-track timeline editing",
      "Color correction with Lumetri",
      "Audio mixing and sound design",
      "Export optimization for various platforms",
    ],
    realWorld: [
      { challenge: "Delivering videos for multiple platforms", solution: "Created export presets and templates for YouTube, Instagram, and TikTok formats" },
      { challenge: "Tight deadline project delivery", solution: "Mastered proxy workflows and keyboard shortcuts for 2x faster editing" },
    ],
  },
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

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
            {/* Profile Photo */}
            <div className="relative">
              <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Suraj Rajkumar - iOS Developer and Visual Storyteller"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-coral/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral/10 rounded-2xl -z-10" />
            </div>

            {/* Skills */}
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <button 
                      key={skill}
                      onClick={() => setSelectedSkill(skillDetails[skill] || null)}
                      className="px-4 py-2 rounded-full border border-border bg-background text-sm font-sans hover:border-coral hover:text-coral hover:scale-105 transition-all cursor-pointer"
                    >
                      {skill}
                    </button>
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

      {/* Skill Detail Dialog */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedSkill && (
            <>
              <DialogHeader>
                <p className="font-mono text-xs tracking-[0.2em] text-coral uppercase mb-1">
                  {selectedSkill.category}
                </p>
                <DialogTitle className="text-2xl md:text-3xl font-display">
                  {selectedSkill.name}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedSkill.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* What I Learned */}
                <div>
                  <h4 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                    What I Learned
                  </h4>
                  <ul className="space-y-2">
                    {selectedSkill.learned.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real-World Challenges */}
                <div>
                  <h4 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                    Real-World Challenges
                  </h4>
                  <div className="space-y-4">
                    {selectedSkill.realWorld.map((item, index) => (
                      <div key={index} className="p-4 rounded-xl bg-secondary/50 border border-border">
                        <p className="font-medium text-foreground mb-2">
                          <span className="text-coral">Challenge:</span> {item.challenge}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="text-coral">Solution:</span> {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
