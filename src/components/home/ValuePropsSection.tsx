import { motion } from "framer-motion";
import { Clock, Layers, BarChart3, Users, Gem, Share2 } from "lucide-react";

const valueProps = [
  {
    icon: Clock,
    title: "Time Control",
    description: "Set your own pace. Learn 15 minutes a day or dive deep for hours—your roadmap adapts to your schedule.",
  },
  {
    icon: Layers,
    title: "Duration Flexibility",
    description: "Whether you have 2 weeks or 2 years, customize your learning journey to fit your timeline.",
  },
  {
    icon: BarChart3,
    title: "Depth Levels",
    description: "From beginner basics to advanced mastery, progress through levels that match your expertise.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join study groups, ask questions, and learn with thousands of motivated learners worldwide.",
  },
  {
    icon: Gem,
    title: "Earn Gems & Rewards",
    description: "Stay active, maintain streaks, and complete tasks to earn gems. Unlock perks like free roadmaps!",
  },
  {
    icon: Share2,
    title: "Share Roadmaps",
    description: "Found a great learning path? Share it with friends and help them succeed on their journey too.",
  },
];

export const ValuePropsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learning on <span className="text-gradient">Your Terms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No rigid schedules. No one-size-fits-all. Our AI creates a roadmap that's uniquely yours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <prop.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
