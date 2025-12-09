import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sliders, BookOpen, Brain, MessageCircle, Trophy, Users, 
  Share2, Bookmark, Zap, Target, BarChart3, Bell
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const featureCategories = [
  {
    title: "Personalization Engine",
    description: "Every roadmap is uniquely yours",
    features: [
      { icon: Sliders, title: "Time Sliders", desc: "Set daily learning time from 15 mins to 4 hours" },
      { icon: Target, title: "Depth Settings", desc: "Choose from basic overview to expert mastery" },
      { icon: Brain, title: "Adaptive Challenges", desc: "AI adjusts difficulty based on your progress" },
    ],
  },
  {
    title: "Integrated Learning System",
    description: "Everything you need in one place",
    features: [
      { icon: BookOpen, title: "Micro-lessons", desc: "Bite-sized content perfect for busy schedules" },
      { icon: Zap, title: "Quizzes & Practice", desc: "Reinforce learning with interactive exercises" },
      { icon: Bookmark, title: "Notes & Bookmarks", desc: "Save important concepts for quick review" },
    ],
  },
  {
    title: "Community Learning",
    description: "Learn faster together",
    features: [
      { icon: MessageCircle, title: "Q&A Forums", desc: "Get answers from experts and peers" },
      { icon: Trophy, title: "Points & Rewards", desc: "Earn badges and climb the leaderboard" },
      { icon: Users, title: "Study Groups", desc: "Join or create groups for accountability" },
    ],
  },
  {
    title: "Sharing & Collaboration",
    description: "Spread the knowledge",
    features: [
      { icon: Share2, title: "Share Roadmaps", desc: "Share your learning path with friends" },
      { icon: BarChart3, title: "Share Progress", desc: "Show off your achievements" },
      { icon: Bell, title: "Invite Friends", desc: "Learn together with referral bonuses" },
    ],
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features for{" "}
              <span className="text-gradient">Serious Learners</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Everything you need to go from curious beginner to confident expert.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`py-20 lg:py-32 ${catIndex % 2 === 1 ? "bg-muted/50" : ""}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {category.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Experience the Future of Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Join thousands of learners who've already transformed their skills with Skillar.ai.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup">Start Free Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
