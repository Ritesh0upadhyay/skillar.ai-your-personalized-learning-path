import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Database, Palette, MessageCircle, TrendingUp, Brain, Share2, Heart } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const roadmapExamples = [
  { icon: Code, title: "Web Development", duration: "3-6 months", level: "Beginner to Pro", color: "from-blue-500 to-cyan-500", shares: 1240 },
  { icon: Database, title: "Data Analyst", duration: "4-8 months", level: "Complete Path", color: "from-purple-500 to-pink-500", shares: 890 },
  { icon: Palette, title: "UI/UX Design", duration: "2-4 months", level: "Industry Ready", color: "from-orange-500 to-red-500", shares: 756 },
  { icon: MessageCircle, title: "Communication Skills", duration: "1-3 months", level: "Professional", color: "from-green-500 to-teal-500", shares: 432 },
  { icon: TrendingUp, title: "Digital Marketing", duration: "3-5 months", level: "Specialist", color: "from-pink-500 to-rose-500", shares: 567 },
  { icon: Brain, title: "Machine Learning", duration: "6-12 months", level: "Expert", color: "from-indigo-500 to-purple-500", shares: 1089 },
];

const Roadmaps = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Roadmaps
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Path to <span className="text-gradient">Mastery</span> in Seconds
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Our AI analyzes your goals and creates a personalized learning roadmap—faster than you can say "where do I start?"
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Generate My Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How AI Roadmaps Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us your goal, and our AI does the heavy lifting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Input Your Goal", desc: "Type what you want to learn—be as specific as you like." },
              { step: "2", title: "AI Analyzes", desc: "Our AI processes thousands of resources to find the best path." },
              { step: "3", title: "Start Learning", desc: "Get your personalized roadmap with milestones and resources." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Examples */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Popular Roadmaps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most-requested learning paths.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapExamples.map((roadmap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${roadmap.color} flex items-center justify-center`}>
                      <roadmap.icon className="w-7 h-7 text-white" />
                    </div>
                    <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors group/share">
                      <Share2 className="w-5 h-5 text-muted-foreground group-hover/share:text-primary transition-colors" />
                    </button>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{roadmap.title}</h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>{roadmap.duration}</span>
                      <span>•</span>
                      <span>{roadmap.level}</span>
                    </div>
                    <span className="flex items-center gap-1 text-xs">
                      <Heart className="w-3 h-3" /> {roadmap.shares}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              AI vs. Manual Learning
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Stop wasting time figuring out what to learn next. Our AI creates a structured path so you can focus on what matters—actually learning.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Generate My Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmaps;
