import { useState } from "react";

interface ProcessArtifactProps {
  label: string;
  note: string;
}

export const ProcessArtifact = ({ label, note }: ProcessArtifactProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail placeholder - greyed, low contrast */}
      <div className="artifact-thumbnail w-14 h-14 rounded border border-border bg-muted/30 flex items-center justify-center">
        <div className="w-6 h-6 rounded-sm bg-muted-foreground/10" />
      </div>
      
      {/* Hover tooltip */}
      <div
        className={`absolute bottom-full left-0 mb-2 p-3 bg-card border border-border rounded-lg shadow-lg min-w-40 max-w-48 transition-all duration-300 z-20 ${
          isHovered
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <p className="text-xs font-medium text-foreground mb-1">{label}</p>
        <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
      </div>
    </div>
  );
};
