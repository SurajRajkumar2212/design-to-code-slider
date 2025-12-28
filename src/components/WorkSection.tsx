import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Code2, Camera, Film, Layout, X, ChevronRight, Bot, Palette, Network } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  insights: string[];
  year: string;
}

interface Category {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  tags: string[];
  projects: Project[];
}

const categories: Category[] = [
  {
    id: 1,
    title: "iOS Applications",
    category: "Development",
    description: "User-focused mobile applications built with Swift, SwiftUI, and clean architecture patterns.",
    icon: Code2,
    tags: ["Swift", "SwiftUI", "iOS", "UIKit"],
    projects: [
      {
        id: "ios-1",
        title: "PocketChai – Virtual Chai Café",
        description: "A cozy virtual chai café app that promotes mindful digital conversations and ambient relaxation. Features custom chai preferences, ambient virtual tables, and an AI conversation companion. Integrated ambient soundscapes, privacy modes, and a reflective journaling feature called 'Tea Leaves.'",
        tech: ["Swift", "SwiftUI", "iOS", "UI/UX Design"],
        insights: ["UI inspired by real Indian cafés", "Warm tones with light/dark modes", "Mindful digital experience"],
        year: "2025",
      },
      {
        id: "ios-2",
        title: "Does Nothing – Fashion App",
        description: "Digital extension of a philosophy-driven fashion brand grounded in minimalism and intentional living. Built a calm, distraction-free browsing experience with minimalist product discovery, capsule wardrobe collections, and mindful shopping flows.",
        tech: ["Swift", "SwiftUI", "Figma", "HCI Principles"],
        insights: ["Reduced decision fatigue UX", "Lifestyle content integration", "Seamless fashion-wellness ecosystem"],
        year: "2025",
      },
    ],
  },
  {
    id: 2,
    title: "Autonomous Systems",
    category: "Robotics",
    description: "ROS-based autonomous systems for navigation, perception, and real-time gesture control.",
    icon: Bot,
    tags: ["ROS", "OpenCV", "Python", "Gazebo"],
    projects: [
      {
        id: "ros-1",
        title: "Gesture Controlled Car",
        description: "Developed a gesture-controlled robotic car system using ROS where vehicle movement is controlled through real-time hand gesture recognition. Designed, tested, and validated in Gazebo simulation environment for safe behavior before deployment.",
        tech: ["ROS Noetic", "OpenCV", "Python", "Gazebo", "Linux"],
        insights: ["Low-latency gesture detection", "Modular ROS architecture", "Reliable motion control (forward, stop, turn)"],
        year: "2025",
      },
    ],
  },
  {
    id: 3,
    title: "UI/UX & HCI Design",
    category: "Design",
    description: "Human-centered design focusing on mindfulness, accessibility, and delightful user experiences.",
    icon: Palette,
    tags: ["Figma", "User Research", "HCI", "Prototyping"],
    projects: [
      {
        id: "ux-1",
        title: "Does Nothing – Brand Experience",
        description: "Philosophy-driven fashion and lifestyle brand celebrating the luxury of stillness. Designed digital spaces that reduce mental clutter, inspire slow living, and help people reconnect with themselves through intentional design.",
        tech: ["Figma", "UI/UX Design", "HCI", "Swift"],
        insights: ["Transforms simplicity into sophistication", "Design feels like a pause, not a push", "Calm, minimal, meaningful UX"],
        year: "2025",
      },
      {
        id: "ux-2",
        title: "PocketChai – UX Design",
        description: "Designed the complete user experience for a virtual chai café app with focus on mindful digital conversations. Created warm, serene interactions inspired by real Indian cafés.",
        tech: ["Figma", "UI/UX Design", "iOS Design", "User Research"],
        insights: ["Ambient soundscape integration", "Privacy-first design", "Reflective journaling feature"],
        year: "2025",
      },
    ],
  },
  {
    id: 4,
    title: "Web Applications",
    category: "Development",
    description: "Modern, responsive web applications with immersive UI and real-time functionality.",
    icon: Layout,
    tags: ["React", "TypeScript", "Tailwind", "Shadcn/ui"],
    projects: [
      {
        id: "web-1",
        title: "RagaTherapy.ai",
        description: "Wellness platform delivering AI-personalized Indian raga therapy based on user mood, circadian rhythm, and therapeutic goals. Smart matching engine for ragas like Bhairav, Yaman, and Darbari aligned with time-of-day healing practices.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "React Router"],
        insights: ["Ancient sound healing meets modern tech", "Addresses stress, insomnia, anxiety", "Immersive audio playback UI"],
        year: "2025",
      },
      {
        id: "web-2",
        title: "Raw Audio Streamer",
        description: "Audio streaming simulation application replicating real-time streaming over socket-based architecture. Mirrors the workflow and UX of platforms like Spotify with buffering visualization and state-managed controls.",
        tech: ["React", "TypeScript", "Tailwind CSS", "HTML5 Audio API"],
        insights: ["Educational streaming prototype", "Modern UI patterns", "Modular extensible architecture"],
        year: "2025",
      },
      {
        id: "web-3",
        title: "Portfolio Website",
        description: "This very website - a minimal, sophisticated portfolio showcasing the intersection of design and development skills with custom cursor, theme toggle, and smooth animations.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
        insights: ["Custom cursor effects", "Dark/light theme system", "Mobile-first responsive design"],
        year: "2025",
      },
    ],
  },
  {
    id: 5,
    title: "Network Engineering",
    category: "Infrastructure",
    description: "Enterprise network design and simulation with security-first architecture.",
    icon: Network,
    tags: ["Packet Tracer", "VLANs", "Security", "Cisco"],
    projects: [
      {
        id: "net-1",
        title: "Hotel Network Infrastructure",
        description: "Designed and simulated a secure, efficient, and scalable network for a hotel covering guest services, staff operations, and management systems. Implemented segregated VLANs, Layer 3 routing, and comprehensive security measures.",
        tech: ["Cisco Packet Tracer", "VLANs", "ACLs", "DHCP", "VoIP"],
        insights: ["5 segregated VLANs for security", "Firewall & port security", "Redundant links with EtherChannel"],
        year: "2025",
      },
    ],
  },
  {
    id: 6,
    title: "Event Photography",
    category: "Photography",
    description: "Professional event and portrait photography for university initiatives and campaigns.",
    icon: Camera,
    tags: ["Lightroom", "Photoshop", "Creative Direction"],
    projects: [
      {
        id: "photo-1",
        title: "PESU Annual Fest 2024",
        description: "Complete event coverage including performances, candid moments, and backstage content. Delivered 500+ edited photographs within 48 hours.",
        tech: ["Sony A7III", "Lightroom Classic", "Photoshop", "Capture One"],
        insights: ["3-day event coverage", "15K+ social media reach", "Featured in university magazine"],
        year: "2024",
      },
      {
        id: "photo-2",
        title: "Corporate Headshots - PIXELS",
        description: "Professional portrait series for team members and executives. Consistent lighting and backdrop for brand cohesion.",
        tech: ["Studio Lighting", "Lightroom", "Color Grading"],
        insights: ["50+ portraits delivered", "Same-day turnaround", "Used across LinkedIn & website"],
        year: "2024",
      },
    ],
  },
  {
    id: 7,
    title: "Short Films",
    category: "Cinematography",
    description: "Direction of short films and promotional videos from concept to final edit.",
    icon: Film,
    tags: ["Premiere Pro", "Storytelling", "Direction"],
    projects: [
      {
        id: "film-1",
        title: "Echoes of Tomorrow",
        description: "A 12-minute narrative short exploring themes of memory and connection in a digital age. Shot on location across 5 days with a crew of 8.",
        tech: ["Blackmagic 6K", "DaVinci Resolve", "Premiere Pro", "After Effects"],
        insights: ["Film festival selection", "Best Student Film nomination", "10K+ YouTube views"],
        year: "2024",
      },
      {
        id: "film-2",
        title: "PESU Talkies Promos",
        description: "Series of promotional videos for university film club events and screenings. Quick turnaround content for social media.",
        tech: ["Sony A7III", "Premiere Pro", "Motion Graphics"],
        insights: ["20+ videos produced", "Consistent brand identity", "Increased event attendance 40%"],
        year: "2023-24",
      },
    ],
  },
];

export const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setSelectedProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  const handleClose = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
  };

  return (
    <>
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
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group relative p-8 md:p-10 rounded-2xl border border-border bg-card hover:border-coral/50 transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCategoryClick(category)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-coral/5 to-transparent transition-opacity duration-500 ${
                  hoveredId === category.id ? "opacity-100" : "opacity-0"
                }`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral group-hover:text-primary-foreground transition-colors duration-300">
                      <category.icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className={`w-5 h-5 text-muted-foreground transition-all duration-300 ${
                      hoveredId === category.id ? "text-coral translate-x-1 -translate-y-1" : ""
                    }`} />
                  </div>

                  <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-2">
                    {category.category}
                  </p>
                  <h3 className="text-2xl font-display mb-3 group-hover:text-coral transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
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

      {/* Category Dialog */}
      <Dialog open={!!selectedCategory && !selectedProject} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] sm:w-full max-h-[85vh] p-0 gap-0 bg-background border-border overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b border-border">
            <div className="flex items-center gap-4">
              {selectedCategory && (
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                  <selectedCategory.icon className="w-5 h-5 text-coral" />
                </div>
              )}
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                  {selectedCategory?.category}
                </p>
                <DialogTitle className="text-xl font-display">
                  {selectedCategory?.title}
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          
          <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
            {selectedCategory?.projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="w-full text-left p-4 rounded-xl border border-border hover:border-coral/50 hover:bg-coral/5 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-display text-lg group-hover:text-coral transition-colors">
                        {project.title}
                      </h4>
                      <span className="font-mono text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-coral group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && handleBack()}>
        <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] sm:w-full max-h-[85vh] p-0 gap-0 bg-background border-border overflow-hidden">
          <DialogHeader className="p-6 pb-4 border-b border-border">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-coral transition-colors mb-3 -ml-1"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to {selectedCategory?.title}
            </button>
            <div className="flex items-center gap-3">
              <DialogTitle className="text-2xl font-display">
                {selectedProject?.title}
              </DialogTitle>
              <span className="font-mono text-xs text-coral bg-coral/10 px-2 py-1 rounded">
                {selectedProject?.year}
              </span>
            </div>
          </DialogHeader>
          
          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Description */}
            <div>
              <h5 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Overview
              </h5>
              <p className="text-foreground leading-relaxed">
                {selectedProject?.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h5 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Tech & Tools
              </h5>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-secondary text-sm font-mono text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Insights */}
            <div>
              <h5 className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mb-3">
                Key Insights
              </h5>
              <ul className="space-y-2">
                {selectedProject?.insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                    <span className="text-foreground">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
