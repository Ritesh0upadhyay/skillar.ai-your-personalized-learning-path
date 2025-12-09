import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Sliders, BookOpen, Brain, MessageCircle, Trophy, Users, 
  Share2, Bookmark, Zap, Target, BarChart3, Bell, ChevronDown,
  Gem, Award, Lock, UserPlus
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const featureCategories = [
  {
    id: "personalization",
    title: "Personalization Engine",
    description: "Every roadmap is uniquely yours",
    icon: Sliders,
    color: "from-blue-500 to-indigo-600",
    features: [
      { icon: Sliders, title: "Time Sliders", desc: "Set daily learning time from 15 mins to 4 hours. Your roadmap automatically adjusts lessons to fit your schedule perfectly." },
      { icon: Target, title: "Depth Settings", desc: "Choose from basic overview to expert mastery. Whether you want a quick intro or deep expertise, we've got you covered." },
      { icon: Brain, title: "Adaptive Challenges", desc: "AI continuously monitors your progress and adjusts difficulty in real-time. Struggling? We slow down. Flying through? We level up." },
    ],
  },
  {
    id: "learning",
    title: "Integrated Learning System",
    description: "Everything you need in one place",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-600",
    features: [
      { icon: BookOpen, title: "Micro-lessons", desc: "Bite-sized 5-10 minute lessons perfect for busy schedules. Learn during your commute, lunch break, or whenever you have a moment." },
      { icon: Zap, title: "Quizzes & Practice", desc: "Reinforce learning with interactive exercises. Spaced repetition ensures you remember what you learn long-term." },
      { icon: Bookmark, title: "Notes & Bookmarks", desc: "Save important concepts for quick review. Highlight, annotate, and create your personal knowledge library." },
    ],
  },
  {
    id: "community",
    title: "Community & Rewards",
    description: "Learn faster together and earn while you learn",
    icon: Trophy,
    color: "from-amber-500 to-orange-600",
    features: [
      { icon: MessageCircle, title: "Q&A Forums", desc: "Get answers from experts and peers. Our community of thousands is always ready to help you overcome any learning obstacle." },
      { icon: Trophy, title: "Badges & Milestones", desc: "Earn badges for completing milestones! The more badges you collect, the higher your popularity in the community. Show off your achievements!" },
      { icon: Gem, title: "Gems System", desc: "Earn gems by completing tasks, maintaining streaks, and staying active. Collect enough gems for perks like free additional roadmaps!" },
      { icon: Users, title: "Study Groups", desc: "Join or create groups for accountability. Learn together, motivate each other, and celebrate wins as a team." },
    ],
  },
  {
    id: "sharing",
    title: "Sharing & Collaboration",
    description: "Connect and spread the knowledge",
    icon: Share2,
    color: "from-purple-500 to-pink-600",
    features: [
      { icon: Share2, title: "Share Roadmaps", desc: "Found a roadmap you love? Share it with friends so they can learn from your path. Help others discover the best learning journeys." },
      { icon: BarChart3, title: "Share Progress", desc: "Show off your achievements on social media. Inspire others with your learning journey and celebrate your wins publicly." },
      { icon: UserPlus, title: "1:1 Connections", desc: "Connect directly with other Skillar users. Share experiences, get advice, and build meaningful learning partnerships." },
      { icon: Lock, title: "Encrypted Chats", desc: "All your conversations are end-to-end encrypted. Chat freely knowing your discussions are completely private and secure." },
      { icon: Bell, title: "Invite Friends", desc: "Learn together with referral bonuses. When friends join, you both earn bonus gems and exclusive perks!" },
    ],
  },
];

const Features = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

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

      {/* Feature Categories - Expandable Cards */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {featureCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="relative"
              >
                {/* Category Card */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 text-left ${
                    expandedCategory === category.id
                      ? "bg-card border-primary/50 shadow-card"
                      : "bg-card/50 border-border/50 hover:border-primary/30 hover:shadow-soft"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0`}>
                        <category.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground">{category.description}</p>
                        <p className="text-sm text-primary mt-2 font-medium">
                          {category.features.length} features included
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-muted-foreground" />
                    </motion.div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4">
                        {category.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-5 rounded-xl bg-muted/50 border border-border/30"
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <feature.icon className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground mb-1">
                                  {feature.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {feature.desc}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gems Highlight Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/10 to-transparent blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <Gem className="w-5 h-5 text-accent" />
              <span className="font-medium text-accent">Gems Reward System</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Earn <span className="text-gradient">Gems</span>, Unlock Perks
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Stay active, complete tasks, and maintain your streak to earn gems. Use them for exclusive benefits!
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { gems: 100, perk: "Unlock premium themes" },
                { gems: 500, perk: "1 Free additional roadmap" },
                { gems: 1000, perk: "Priority support access" },
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-accent/20 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Gem className="w-6 h-6 text-accent" />
                    <span className="text-3xl font-bold text-foreground">{tier.gems}</span>
                  </div>
                  <p className="text-muted-foreground">{tier.perk}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
