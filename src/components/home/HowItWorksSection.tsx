import { motion } from "framer-motion";
import { Target, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Define Your Goal",
    description: "Tell us what you want to learn. Whether it's web development, data science, or communication skills—we've got you covered.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Your Path",
    description: "Our AI analyzes thousands of resources and creates a personalized roadmap with the best content, exercises, and milestones.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Start Learning",
    description: "Follow your roadmap, track progress, join the community, and master your skill at your own pace.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Steps to <span className="text-gradient">Mastery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. No complex setup, no lengthy questionnaires—just you and your learning goal.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="relative z-10 p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-display text-6xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
