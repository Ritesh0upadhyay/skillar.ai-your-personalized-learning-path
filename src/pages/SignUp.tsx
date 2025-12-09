import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const benefits = [
  "3 free AI-generated roadmaps",
  "Access to community forums",
  "Progress tracking dashboard",
  "No credit card required",
];

const SignUp = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block"
            >
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Start Your Learning Journey{" "}
                <span className="text-gradient">Today</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of learners who've transformed their skills with personalized AI roadmaps.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent-foreground" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center lg:text-left mb-8 lg:hidden">
                <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                  Create Your Account
                </h1>
                <p className="text-muted-foreground">Start with 3 free roadmaps</p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-card">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 hidden lg:block">
                  Create Your Account
                </h2>

                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="password"
                        placeholder="Create a password"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Must be at least 8 characters
                    </p>
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border mt-1" />
                    <span className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <Button variant="hero" size="lg" className="w-full gap-2">
                    Create Account
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-card text-muted-foreground">or sign up with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline-light" className="w-full">
                    Google
                  </Button>
                  <Button variant="outline-light" className="w-full">
                    GitHub
                  </Button>
                </div>
              </div>

              <p className="text-center text-muted-foreground mt-6">
                Already have an account?{" "}
                <Link to="/signin" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
