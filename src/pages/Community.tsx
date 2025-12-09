import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Trophy, Users, ArrowRight, TrendingUp, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const forumQuestions = [
  { title: "Best way to structure a React learning path?", author: "Alex M.", replies: 34, time: "2 hours ago" },
  { title: "Python for data science - where to start?", author: "Sarah K.", replies: 28, time: "4 hours ago" },
  { title: "How long did it take you to feel confident coding?", author: "Mike R.", replies: 56, time: "6 hours ago" },
  { title: "Looking for accountability partners for web dev", author: "Emma L.", replies: 19, time: "8 hours ago" },
];

const leaderboard = [
  { rank: 1, name: "David Chen", points: 12450, badge: "🏆" },
  { rank: 2, name: "Lisa Wang", points: 11280, badge: "🥈" },
  { rank: 3, name: "James Wilson", points: 10890, badge: "🥉" },
  { rank: 4, name: "Maria Garcia", points: 9760, badge: "" },
  { rank: 5, name: "Kevin Park", points: 9340, badge: "" },
];

const studyGroups = [
  { name: "React Beginners 2024", members: 234, topic: "Web Development", active: true },
  { name: "Python Data Science", members: 189, topic: "Data Science", active: true },
  { name: "UX Design Masters", members: 156, topic: "Design", active: false },
  { name: "Full Stack Journey", members: 298, topic: "Web Development", active: true },
];

const Community = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join the <span className="text-gradient">Learning Revolution</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Connect with thousands of motivated learners. Ask questions, share wins, and grow together.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Enter the Community
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Forum Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">Latest Forum Questions</h2>
              </div>
              <div className="space-y-4">
                {forumQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-soft transition-all cursor-pointer"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{question.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>by {question.author}</span>
                      <span>•</span>
                      <span>{question.replies} replies</span>
                      <span>•</span>
                      <span>{question.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leaderboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-accent" />
                <h2 className="font-display text-2xl font-bold text-foreground">Leaderboard</h2>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-xl ${index < 3 ? "bg-primary/5" : ""}`}
                    >
                      <span className="w-8 text-center font-bold text-muted-foreground">
                        {user.badge || `#${user.rank}`}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.points.toLocaleString()} pts</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Groups */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Popular Study Groups</h2>
            </div>
            <Button variant="outline-light">Create a Group</Button>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {group.topic}
                  </span>
                  {group.active && (
                    <span className="flex items-center gap-1 text-xs text-accent">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Active
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{group.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{group.members} members</span>
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
              Ready to Join?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Create your free account and become part of the Skillar.ai community today.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/signup" className="gap-2">
                Join Now — It's Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
