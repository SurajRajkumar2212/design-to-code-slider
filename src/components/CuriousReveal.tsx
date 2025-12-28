import { useState, useCallback } from "react";
import { Sparkles, ArrowRight, X, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface RevealItem {
  type: "project" | "thought" | "insight";
  title: string;
  content: string;
  link?: string;
  linkText?: string;
}

const curiousItems: RevealItem[] = [
  {
    type: "project",
    title: "Silence-Aware Interface",
    content: "A mobile UI designed to reduce cognitive load instead of maximizing engagement.",
    link: "#work",
    linkText: "View case",
  },
  {
    type: "thought",
    title: "",
    content: "I design for people who don't speak loudly.",
  },
  {
    type: "project",
    title: "Gesture Controlled Car",
    content: "Real-time hand gesture recognition controlling robotic movement in ROS.",
    link: "#work",
    linkText: "See the system",
  },
  {
    type: "insight",
    title: "Why I avoided micro-interactions here",
    content: "Because motion without intent becomes noise.",
    link: "#work",
    linkText: "See implementation",
  },
  {
    type: "thought",
    title: "",
    content: "Good interfaces disappear. Great interfaces were never there.",
  },
  {
    type: "project",
    title: "PocketChai",
    content: "A virtual chai café app promoting mindful digital conversations and ambient relaxation.",
    link: "#work",
    linkText: "Explore",
  },
  {
    type: "insight",
    title: "On calm design",
    content: "Silence is part of the UX. The absence of elements can be as intentional as their presence.",
  },
  {
    type: "thought",
    title: "",
    content: "The best products make you feel less, not more.",
  },
  {
    type: "project",
    title: "Autonomous Navigation System",
    content: "SLAM-based mapping with obstacle avoidance and sensor fusion in simulated environments.",
    link: "#work",
    linkText: "See the work",
  },
  {
    type: "insight",
    title: "Memory vs Reality",
    content: "Conceptual photography exploring the contrast between public identity and private emotion.",
  },
];

export const CuriousReveal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<RevealItem | null>(null);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  const getRandomItem = useCallback(() => {
    let availableIndices = curiousItems
      .map((_, i) => i)
      .filter((i) => !usedIndices.has(i));

    if (availableIndices.length === 0) {
      setUsedIndices(new Set());
      availableIndices = curiousItems.map((_, i) => i);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedIndices((prev) => new Set([...prev, randomIndex]));
    return curiousItems[randomIndex];
  }, [usedIndices]);

  const handleCuriousClick = () => {
    const item = getRandomItem();
    setCurrentItem(item);
    setIsOpen(true);
  };

  const handleShowAnother = () => {
    const item = getRandomItem();
    setCurrentItem(item);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentItem(null), 300);
  };

  return (
    <>
      {/* The Button */}
      <button
        onClick={handleCuriousClick}
        className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-foreground/20 hover:border-coral hover:bg-coral/5 transition-all duration-300"
      >
        <Sparkles className="w-4 h-4 text-coral" />
        <span className="font-mono text-sm tracking-wide">I'm Feeling Curious</span>
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </button>

      {/* The Reveal Modal */}
      <AnimatePresence>
        {isOpen && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute -top-12 right-0 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                {currentItem.type === "thought" ? (
                  <blockquote className="text-2xl md:text-3xl font-display leading-relaxed text-center italic">
                    "{currentItem.content}"
                  </blockquote>
                ) : (
                  <div className="space-y-4">
                    {currentItem.title && (
                      <h3 className="text-2xl md:text-3xl font-display">
                        {currentItem.title}
                      </h3>
                    )}
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {currentItem.content}
                    </p>
                    {currentItem.link && (
                      <a
                        href={currentItem.link}
                        onClick={handleClose}
                        className="inline-flex items-center gap-2 text-coral font-mono text-sm hover:underline mt-4"
                      >
                        {currentItem.linkText || "View"}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Curious again */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleShowAnother}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-mono text-sm transition-colors"
                >
                  <span>Curious again?</span>
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
