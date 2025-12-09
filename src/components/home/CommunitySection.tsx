import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MessageCircle,
    title: "Active Forums",
    description: "Get answers to your questions from experienced learners and experts.",
    stat: "1.2K+ daily discussions",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Compete with fellow learners and earn badges for your achievements.",
    stat: "500+ weekly participants",
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Join or create groups to learn together and stay accountable.",
    stat: "200+ active groups",
  },
];

export const CommunitySection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              Community
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Learn Together,{" "}
              <span className="text-gradient">Grow Faster</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join a vibrant community of learners who support each other, share insights, and celebrate wins together.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      {feature.description}
                    </p>
                    <span className="text-primary text-sm font-medium">
                      {feature.stat}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="cta" size="lg" asChild>
              <Link to="/community" className="gap-2">
                Join the Community
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-card">
              {/* Mock Forum UI */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-display font-semibold text-foreground">Recent Discussions</h4>
                  <span className="text-sm text-muted-foreground">View all</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "Best resources for learning React?", replies: 24, author: "Sarah K." },
                    { title: "How long to master Python basics?", replies: 18, author: "Mike R." },
                    { title: "Study group for Data Science", replies: 42, author: "Emma L." },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <h5 className="font-medium text-foreground mb-2">{item.title}</h5>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{item.author}</span>
                        <span>•</span>
                        <span>{item.replies} replies</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Leaderboard */}
            <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-card border border-border shadow-card animate-float">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-accent" />
                <div>
                  <p className="font-semibold text-foreground">Top Learner</p>
                  <p className="text-sm text-muted-foreground">This Week</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
