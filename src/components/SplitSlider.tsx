import { useState, useRef, useCallback, useEffect } from "react";
import { GripVertical } from "lucide-react";
import { DesignSide } from "./DesignSide";
import { CodeSide } from "./CodeSide";

export const SplitSlider = () => {
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
    
    setSliderPosition(Math.min(Math.max(percentage, 15), 85));
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 15), 85));
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
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Design Side (Left) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="w-screen h-full">
          <DesignSide />
        </div>
      </div>

      {/* Code Side (Right) */}
      <div 
        className="absolute top-0 right-0 h-full overflow-hidden"
        style={{ width: `${100 - sliderPosition}%` }}
      >
        <div 
          className="h-full"
          style={{ 
            width: "100vw",
            marginLeft: `-${sliderPosition}vw`
          }}
        >
          <CodeSide />
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="slider-handle flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%) translateY(-50%)" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute -inset-4 rounded-full bg-coral/20 animate-pulse-glow" />
          
          {/* Main handle */}
          <div className="relative w-12 h-12 rounded-full bg-coral shadow-2xl flex items-center justify-center border-4 border-primary-foreground transition-transform hover:scale-110">
            <GripVertical className="w-5 h-5 text-primary-foreground" />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-coral bg-transparent" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border-2 border-coral bg-transparent" />
        </div>
        
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-coral/50 to-transparent pointer-events-none" style={{ height: "100vh", top: "-50vh" }} />
      </div>
    </div>
  );
};
