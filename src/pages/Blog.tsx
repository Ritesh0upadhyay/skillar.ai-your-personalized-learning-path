import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const categories = ["All", "Career", "Productivity", "Learning", "Roadmaps"];

const blogPosts = [
  {
    title: "How to Learn Any Skill in Half the Time",
    excerpt: "Discover the science-backed techniques that can dramatically accelerate your learning journey.",
    category: "Learning",
    author: "Sarah Chen",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "The Ultimate Web Development Roadmap for 2024",
    excerpt: "A comprehensive guide to becoming a full-stack developer in the modern era.",
    category: "Roadmaps",
    author: "Mike Johnson",
    date: "Dec 3, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    title: "Why Spaced Repetition Works (And How to Use It)",
    excerpt: "Understanding the memory technique that's revolutionizing how we learn.",
    category: "Productivity",
    author: "Emma Wilson",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "Landing Your Dream Tech Job: A Complete Guide",
    excerpt: "From portfolio building to interview prep, everything you need to know.",
    category: "Career",
    author: "David Park",
    date: "Nov 25, 2024",
    readTime: "15 min read",
    featured: false,
  },
  {
    title: "The Power of Learning Communities",
    excerpt: "How studying with others can 10x your results and keep you motivated.",
    category: "Learning",
    author: "Lisa Wang",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    title: "Building a Data Science Career from Scratch",
    excerpt: "Your step-by-step roadmap to becoming a data scientist.",
    category: "Roadmaps",
    author: "James Liu",
    date: "Nov 15, 2024",
    readTime: "10 min read",
    featured: false,
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Blog & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Tips, insights, and strategies to accelerate your learning journey.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group cursor-pointer ${post.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className="h-full p-6 rounded-2xl bg-card border border-border/50 hover:shadow-card transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className={`font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors ${
                    post.featured ? "text-2xl lg:text-3xl" : "text-xl"
                  }`}>
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-6 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <span>by {post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get weekly learning tips, roadmaps, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="cta" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
