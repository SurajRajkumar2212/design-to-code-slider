import { useEffect, useRef, useState } from "react";

export const PrinciplesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[50vh] flex items-center justify-center px-6 py-24 md:py-32"
    >
      <div
        className={`max-w-xl text-center transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-muted-foreground/60 leading-relaxed tracking-wide italic">
          I don't design for attention.
        </p>
        <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed tracking-wide mt-1">
          I design for clarity.
        </p>
        
        <div className="my-10 w-12 h-px bg-border mx-auto" />
        
        <p className="font-display text-lg md:text-xl text-muted-foreground/50 leading-relaxed tracking-wide">
          Silence is not empty —
        </p>
        <p className="font-display text-lg md:text-xl text-muted-foreground/70 leading-relaxed tracking-wide">
          it's intentional.
        </p>
      </div>
    </section>
  );
};
