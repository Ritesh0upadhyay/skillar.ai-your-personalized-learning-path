import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Start Free Today
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Three roadmaps are on us.{" "}
            <span className="text-gradient">What will you master first?</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of learners who have already started their journey. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Build Your First Roadmap — FREE
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            ✓ 3 free roadmaps · ✓ No credit card · ✓ Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
