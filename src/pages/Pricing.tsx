import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: { monthly: 0, yearly: 0 },
    features: [
      "3 AI-generated roadmaps",
      "Basic community access",
      "Progress tracking",
      "Mobile app access",
      "Email support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For dedicated learners",
    price: { monthly: 19, yearly: 190 },
    features: [
      "Unlimited roadmaps",
      "Full community access",
      "Advanced analytics",
      "Study groups",
      "Priority support",
      "Offline access",
      "Custom milestones",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Premium",
    description: "For teams & power users",
    price: { monthly: 49, yearly: 490 },
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "API access",
      "Dedicated success manager",
      "Custom integrations",
      "White-label options",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes! You can cancel your subscription at any time. No questions asked.",
  },
  {
    q: "What happens after my free roadmaps?",
    a: "You can continue using your existing roadmaps, but you'll need to upgrade to create new ones.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer a 14-day money-back guarantee on all paid plans.",
  },
  {
    q: "Can I switch plans?",
    a: "Absolutely! You can upgrade or downgrade at any time, and we'll prorate the difference.",
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

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
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10">
              Start free, upgrade when you're ready. No hidden fees.
            </p>

            {/* Toggle */}
            <div className="inline-flex items-center gap-4 p-1 rounded-full bg-muted">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  !isYearly ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  isYearly ? "bg-card shadow-soft text-foreground" : "text-muted-foreground"
                )}
              >
                Yearly
                <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative p-8 rounded-2xl border",
                  plan.popular
                    ? "bg-card border-primary shadow-glow"
                    : "bg-card border-border/50"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <span className="font-display text-5xl font-bold text-foreground">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-foreground">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "hero" : "outline-light"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/signup">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Our team is here to help. Reach out anytime.
            </p>
            <Button variant="cta" size="lg">
              Contact Sales
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
