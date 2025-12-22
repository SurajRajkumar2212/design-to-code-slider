import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Linkedin, MapPin } from "lucide-react";

export const ContactSection = () => {
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

  return (
    <section id="contact" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-mono text-xs tracking-[0.3em] text-coral uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] mb-6">
            Let's create something<br />
            <em className="text-coral">unforgettable</em>
          </h2>
          <p className="text-muted-foreground font-sans max-w-md mx-auto">
            Looking for someone who can think like an engineer, create like an artist, 
            and deliver like a strategist? Let's talk.
          </p>
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a 
            href="mailto:surajrajkumar2212@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-coral text-primary-foreground font-sans font-medium hover:bg-coral-dark transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>surajrajkumar2212@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a 
            href="https://www.linkedin.com/in/suraj-rajkumar-5337b8299"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-coral hover:text-coral font-sans font-medium transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className={`flex items-center justify-center gap-2 mt-12 text-muted-foreground transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <MapPin className="w-4 h-4" />
          <span className="font-mono text-sm">Bengaluru, Karnataka, India</span>
        </div>
      </div>
    </section>
  );
};
