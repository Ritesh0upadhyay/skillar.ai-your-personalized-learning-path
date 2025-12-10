import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

// Placeholder screenshots - these would be replaced with actual images
const screenshots = [
  {
    id: 1,
    title: "Enter Your Goal",
    description: "Tell us what you want to learn",
    content: (
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">What do you want to learn?</h3>
          <p className="text-muted-foreground text-sm mb-6">Enter your learning goal to get started</p>
          <div className="w-full max-w-md bg-muted/50 rounded-xl p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-10 bg-background rounded-lg flex items-center px-4">
                <span className="text-primary font-medium">Web Development</span>
                <span className="animate-pulse ml-1">|</span>
              </div>
              <div className="px-4 py-2 bg-gradient-primary rounded-lg text-primary-foreground font-medium text-sm">
                Generate
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "AI Analyzing",
    description: "Our AI analyzes the best learning path",
    content: (
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">AI is Generating Your Roadmap</h3>
          <p className="text-muted-foreground text-sm mb-6">Analyzing 1000+ resources for the best path...</p>
          <div className="w-full max-w-md space-y-3">
            {["Analyzing your goal...", "Finding best resources...", "Optimizing learning path..."].map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${i < 2 ? 'bg-primary text-primary-foreground' : 'bg-muted animate-pulse'}`}>
                  {i < 2 && <span className="text-xs">✓</span>}
                </div>
                <span className={`text-sm ${i < 2 ? 'text-foreground' : 'text-muted-foreground'}`}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Your Roadmap",
    description: "Personalized learning path ready",
    content: (
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Web Development Roadmap</h3>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">12 weeks</span>
        </div>
        <div className="flex-1 space-y-4 overflow-hidden">
          {[
            { week: "1-2", title: "HTML & CSS Fundamentals", status: "current" },
            { week: "3-4", title: "JavaScript Basics", status: "upcoming" },
            { week: "5-6", title: "React Framework", status: "upcoming" },
            { week: "7-8", title: "Backend with Node.js", status: "upcoming" },
            { week: "9-10", title: "Database & APIs", status: "upcoming" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                item.status === "current" 
                  ? "bg-gradient-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}>
                {item.week}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">{item.title}</div>
                <div className="h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                  {item.status === "current" && (
                    <div className="h-full w-1/3 bg-gradient-primary rounded-full" />
                  )}
                </div>
              </div>
              <div className={`px-2 py-1 rounded text-xs font-medium ${
                item.status === "current"
                  ? "bg-accent/20 text-accent"
                  : "bg-muted text-muted-foreground"
              }`}>
                {item.status === "current" ? "In Progress" : "Upcoming"}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Track Progress",
    description: "Monitor your learning journey",
    content: (
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 rounded-full bg-destructive" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-foreground">Your Progress</h3>
          <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">Day 14</span>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Completed", value: "23", icon: "✓" },
            { label: "Streak", value: "7 days", icon: "🔥" },
            { label: "Gems", value: "450", icon: "💎" },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-muted/30 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-3">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground">🏆</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">New Badge Earned!</div>
              <div className="text-xs text-muted-foreground">HTML Master - Completed all HTML lessons</div>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-accent-foreground">💎</div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">+50 Gems Earned!</div>
              <div className="text-xs text-muted-foreground">Keep your streak going for bonus gems</div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const LaptopMockup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Update active screenshot based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Map scroll progress to screenshot index
      const index = Math.min(
        Math.floor(latest * screenshots.length * 1.5),
        screenshots.length - 1
      );
      setActiveIndex(Math.max(0, index));
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 1]);

  return (
    <div ref={containerRef} className="relative py-10">
      {/* Step Indicators */}
      <div className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.id}
            onClick={() => setActiveIndex(index)}
            className={`group flex items-center gap-3 transition-all duration-300 ${
              activeIndex === index ? "opacity-100" : "opacity-50 hover:opacity-75"
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30"
              }`}
            />
            <span
              className={`text-sm font-medium transition-all duration-300 ${
                activeIndex === index
                  ? "text-primary translate-x-0 opacity-100"
                  : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-75"
              }`}
            >
              {screenshot.title}
            </span>
          </button>
        ))}
      </div>

      {/* Laptop Frame */}
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto max-w-4xl"
      >
        {/* Laptop Screen */}
        <div className="relative rounded-t-2xl overflow-hidden border-[12px] border-foreground/10 bg-foreground/5 shadow-2xl">
          {/* Screen Bezel */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-foreground/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-foreground/20" />
          </div>
          
          {/* Screen Content */}
          <div className="relative aspect-[16/10] bg-card overflow-hidden pt-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={false}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.95,
                  y: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 pt-6"
                style={{ pointerEvents: activeIndex === index ? "auto" : "none" }}
              >
                {screenshot.content}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Laptop Base */}
        <div className="relative h-4 bg-gradient-to-b from-foreground/10 to-foreground/5 rounded-b-lg mx-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-foreground/10 rounded-b-full" />
        </div>
        <div className="h-1 bg-foreground/5 rounded-b-xl mx-4" />

        {/* Floating Badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-accent text-accent-foreground font-medium shadow-lg z-10"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {screenshots[activeIndex].title}
          </span>
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl -z-10 opacity-50" />
      </motion.div>

      {/* Mobile Step Indicators */}
      <div className="flex md:hidden justify-center gap-2 mt-6">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-primary w-6"
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      {/* Current Step Description */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center mt-8"
      >
        <p className="text-lg font-medium text-foreground">
          Step {activeIndex + 1}: {screenshots[activeIndex].title}
        </p>
        <p className="text-muted-foreground">
          {screenshots[activeIndex].description}
        </p>
      </motion.div>
    </div>
  );
};
