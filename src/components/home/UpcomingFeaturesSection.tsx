import { motion } from "framer-motion";
import { Rocket, Sparkles, Zap, Globe, Brain, Gamepad2 } from "lucide-react";

const upcomingFeatures = [
  {
    icon: Brain,
    title: "AI Voice Tutor",
    description: "Practice speaking with an AI that gives real-time feedback",
    eta: "Coming Q1 2025",
  },
  {
    icon: Gamepad2,
    title: "Learning Games",
    description: "Gamified challenges to make learning even more fun",
    eta: "Coming Q2 2025",
  },
  {
    icon: Globe,
    title: "Mobile App",
    description: "Learn on the go with our native iOS and Android apps",
    eta: "Coming Q2 2025",
  },
  {
    icon: Zap,
    title: "Live Sessions",
    description: "Join live expert sessions and workshops",
    eta: "Coming Q3 2025",
  },
];

export const UpcomingFeaturesSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/20 via-primary/10 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">What's Next</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Exciting Features <span className="text-gradient">Coming Soon</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're constantly innovating to make your learning journey even better. Here's a sneak peek at what's coming.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 overflow-hidden">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  
                  <span className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
                    {feature.eta}
                  </span>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Animated sparkle */}
                <Sparkles className="absolute top-4 right-4 w-5 h-5 text-accent/40 group-hover:text-accent animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <p className="text-foreground font-medium">
              Want to be the first to try new features?
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
