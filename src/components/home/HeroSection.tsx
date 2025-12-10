import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LaptopMockup } from "./LaptopMockup";

export const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      navigate(`/signup?goal=${encodeURIComponent(prompt.trim())}`);
    } else {
      navigate("/signup");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-20 lg:py-32 flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              AI-Powered Learning Roadmaps
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground max-w-4xl mb-6"
          >
            Master Anything.{" "}
            <span className="text-gradient">Personalized by AI.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-12"
          >
            Get started with <span className="text-primary font-semibold">3 free custom roadmaps</span>. 
            Our AI creates personalized learning paths tailored to your goals, pace, and schedule.
          </motion.p>

          {/* Prompt Input Box */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-2xl mt-4 mb-20"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
              
              {/* Input container */}
              <div className="relative flex items-center bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
                <div className="flex items-center pl-5 text-muted-foreground">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="What do you want to learn? e.g., Web Development, Data Science..."
                  className="flex-1 bg-transparent px-4 py-5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none text-base sm:text-lg"
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="m-2 px-6 gap-2 shrink-0"
                >
                  <span className="hidden sm:inline">Generate Roadmap</span>
                  <span className="sm:hidden">Start</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <span className="text-sm text-muted-foreground">Try:</span>
              {["Web Development", "Machine Learning", "UI/UX Design", "Python"].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setPrompt(suggestion)}
                  className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </motion.form>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-16"
          >
            {[
              { icon: Zap, label: "Roadmaps Generated", value: "50K+" },
              { icon: Target, label: "Success Rate", value: "94%" },
              { icon: Sparkles, label: "Active Learners", value: "12K+" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-display font-bold text-2xl text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Laptop Mockup with Scroll Animation */}
        <LaptopMockup />
      </div>
    </section>
  );
};
