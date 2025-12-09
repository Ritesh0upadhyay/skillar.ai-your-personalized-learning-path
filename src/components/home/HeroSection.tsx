import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
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
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8"
          >
            Get started with <span className="text-primary font-semibold">3 free custom roadmaps</span>. 
            Our AI creates personalized learning paths tailored to your goals, pace, and schedule.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Build Your First Roadmap — FREE
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/roadmaps">See Examples</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
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

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative mx-auto max-w-5xl pb-20"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card border border-border/50 bg-card">
            {/* Mock Roadmap UI */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">1</div>
                  <div className="flex-1">
                    <div className="h-4 bg-primary/20 rounded-full w-48 mb-2" />
                    <div className="h-3 bg-muted rounded-full w-72" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">In Progress</div>
                </div>
                
                <div className="ml-5 w-0.5 h-8 bg-border" />
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold">2</div>
                  <div className="flex-1">
                    <div className="h-4 bg-muted rounded-full w-40 mb-2" />
                    <div className="h-3 bg-muted rounded-full w-64" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">Upcoming</div>
                </div>
                
                <div className="ml-5 w-0.5 h-8 bg-border" />
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground font-bold">3</div>
                  <div className="flex-1">
                    <div className="h-4 bg-muted rounded-full w-56 mb-2" />
                    <div className="h-3 bg-muted rounded-full w-80" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium">Upcoming</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-accent text-accent-foreground font-medium shadow-soft animate-float">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              AI Generating...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
