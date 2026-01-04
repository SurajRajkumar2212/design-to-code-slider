import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowDown, GripVertical } from "lucide-react";

export const HeroSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 20), 80));
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 20), 80));
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Design Side */}
      <div 
        className="absolute inset-y-0 left-0 bg-coral overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24" style={{ width: "100vw" }}>
          <div className="max-w-xl">
            <p className="text-primary-foreground/70 font-mono text-xs tracking-[0.3em] uppercase mb-6 animate-in stagger-1">
              Design / Visual
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-primary-foreground leading-[0.9] mb-8 animate-in stagger-2">
              Visual<br />
              <em className="font-normal">Storyteller</em>
            </h1>
            <p className="text-primary-foreground/80 font-sans text-lg leading-relaxed max-w-md animate-in stagger-3">
              Capturing moments through photography and cinematography that resonate.
            </p>
          </div>
        </div>
      </div>

      {/* Code Side */}
      <div 
        className="absolute inset-y-0 right-0 bg-background overflow-hidden"
        style={{ width: `${100 - sliderPosition}%` }}
      >
        <div 
          className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24"
          style={{ width: "100vw", marginLeft: `-${sliderPosition}vw` }}
        >
          <div className="max-w-xl ml-auto text-right">
            <p className="text-muted-foreground font-mono text-xs tracking-[0.3em] uppercase mb-6 animate-in stagger-1">
              Engineering / Code
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-foreground leading-[0.9] mb-8 animate-in stagger-2">
              iOS<br />
              <em className="text-coral font-normal">Developer</em>
            </h1>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed max-w-md ml-auto animate-in stagger-3">
              Building apps with clean logic and human-friendly design.
            </p>
          </div>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 z-50 cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%) translateY(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-coral/10 animate-pulse-subtle" />
          <div className="relative w-10 h-10 rounded-full bg-foreground flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <GripVertical className="w-4 h-4 text-background" />
          </div>
        </div>
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-foreground/20 to-transparent pointer-events-none" style={{ height: "100vh", top: "-50vh" }} />
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Corner text */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <p className="text-xs font-mono text-muted-foreground max-w-[200px] text-right leading-relaxed">
          Drag the slider to explore both sides of my work
        </p>
      </div>
    </section>
  );
};
