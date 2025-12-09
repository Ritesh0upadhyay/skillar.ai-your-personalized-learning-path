import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Heart, Zap, Users, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe everyone deserves access to personalized, high-quality education.",
  },
  {
    icon: Heart,
    title: "Learner-First",
    description: "Every feature we build starts with one question: How does this help learners succeed?",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We leverage cutting-edge AI to create learning experiences that were never before possible.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Learning is better together. We foster connections that last beyond the classroom.",
  },
];

const team = [
  { name: "Alex Chen", role: "CEO & Founder", avatar: "A" },
  { name: "Sarah Williams", role: "CTO", avatar: "S" },
  { name: "Michael Park", role: "Head of AI", avatar: "M" },
  { name: "Emma Johnson", role: "Head of Design", avatar: "E" },
];

const About = () => {
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              We're on a Mission to{" "}
              <span className="text-gradient">Democratize Learning</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Skillar.ai was born from a simple belief: that personalized education shouldn't be a privilege reserved for the few.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In 2023, our founder Alex spent months trying to learn data science. He jumped between dozens of courses, tutorials, and books—never sure if he was on the right track.
                </p>
                <p>
                  The frustration wasn't unique. Millions of learners face the same challenge: information overload, no clear path forward, and no one to guide them.
                </p>
                <p>
                  That's when the idea for Skillar.ai was born: What if AI could create a personalized curriculum for anyone, on any topic, in seconds?
                </p>
                <p className="text-foreground font-medium">
                  Today, we've helped over 50,000 learners master new skills with our AI-powered roadmaps.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "50K+", label: "Roadmaps Generated" },
                { number: "12K+", label: "Active Learners" },
                { number: "94%", label: "Completion Rate" },
                { number: "4.9", label: "Average Rating" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/50 text-center"
                >
                  <p className="font-display text-4xl font-bold text-gradient mb-2">{stat.number}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate educators, engineers, and learners building the future of education.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Whether you're a learner, educator, or investor—we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup" className="gap-2">
                  Start Learning
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
