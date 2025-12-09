import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  MessageCircle, Trophy, Users, ArrowRight, Award, Gem, 
  Lock, UserPlus, Shield, Star 
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const forumQuestions = [
  { title: "Best way to structure a React learning path?", author: "Alex M.", replies: 34, time: "2 hours ago" },
  { title: "Python for data science - where to start?", author: "Sarah K.", replies: 28, time: "4 hours ago" },
  { title: "How long did it take you to feel confident coding?", author: "Mike R.", replies: 56, time: "6 hours ago" },
  { title: "Looking for accountability partners for web dev", author: "Emma L.", replies: 19, time: "8 hours ago" },
];

const leaderboard = [
  { rank: 1, name: "David Chen", points: 12450, badge: "🏆", badges: 28, gems: 2340 },
  { rank: 2, name: "Lisa Wang", points: 11280, badge: "🥈", badges: 24, gems: 1890 },
  { rank: 3, name: "James Wilson", points: 10890, badge: "🥉", badges: 22, gems: 1650 },
  { rank: 4, name: "Maria Garcia", points: 9760, badge: "", badges: 19, gems: 1420 },
  { rank: 5, name: "Kevin Park", points: 9340, badge: "", badges: 17, gems: 1280 },
];

const studyGroups = [
  { name: "React Beginners 2024", members: 234, topic: "Web Development", active: true },
  { name: "Python Data Science", members: 189, topic: "Data Science", active: true },
  { name: "UX Design Masters", members: 156, topic: "Design", active: false },
  { name: "Full Stack Journey", members: 298, topic: "Web Development", active: true },
];

const badges = [
  { name: "First Steps", icon: "🎯", desc: "Complete your first lesson" },
  { name: "Week Warrior", icon: "🔥", desc: "7-day learning streak" },
  { name: "Quiz Master", icon: "🧠", desc: "Score 100% on 10 quizzes" },
  { name: "Helpful Hand", icon: "🤝", desc: "Answer 50 community questions" },
  { name: "Roadmap Creator", icon: "🗺️", desc: "Create 5 custom roadmaps" },
  { name: "Gem Collector", icon: "💎", desc: "Earn 1000 gems" },
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
              Connect with thousands of motivated learners. Ask questions, share wins, earn badges, and grow together.
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

      {/* Badges Section */}
      <section className="py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Achievement System</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Earn Badges, Build Your Reputation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete milestones to earn badges. The more badges you collect, the higher your popularity and recognition in the community!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-card transition-all text-center group"
              >
                <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">
                  {badge.icon}
                </span>
                <h3 className="font-semibold text-foreground text-sm mb-1">{badge.name}</h3>
                <p className="text-xs text-muted-foreground">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
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
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{user.name}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="w-3 h-3" /> {user.badges}
                          </span>
                          <span className="flex items-center gap-1">
                            <Gem className="w-3 h-3 text-accent" /> {user.gems}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1:1 Connections Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <UserPlus className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Connect & Collaborate</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Connect One-to-One with Fellow Learners
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Build meaningful connections with other Skillar.ai users. Share experiences, get advice, and learn from each other's journeys.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <UserPlus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Direct Messaging</h3>
                    <p className="text-sm text-muted-foreground">Reach out to any community member for advice or collaboration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">End-to-End Encrypted</h3>
                    <p className="text-sm text-muted-foreground">All your conversations are fully encrypted. Chat freely and securely.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">Your chats stay between you and them. We never read your messages.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Mock Chat UI */}
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
                <div className="flex items-center gap-3 pb-4 border-b border-border/50 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sarah Johnson</p>
                    <p className="text-xs text-accent flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-accent" /> Online
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    <Lock className="w-3 h-3" /> Encrypted
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">Hey! I saw you completed the Python roadmap. Any tips for a beginner?</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm">Of course! Start with the basics and don't skip the exercises. They really help!</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-sm text-foreground">That's great advice. Would you mind sharing your roadmap?</p>
                    </div>
                  </div>
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
