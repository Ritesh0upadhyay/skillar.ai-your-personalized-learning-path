import { motion } from "framer-motion";
import { Play, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    avatar: "S",
    content: "Skillar.ai transformed my learning journey. I went from complete beginner to landing my dream job in 6 months!",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    avatar: "M",
    content: "The personalized roadmap saved me hundreds of hours. It knew exactly what I needed to learn next.",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    avatar: "E",
    content: "The community is incredible. I found my study group here and we've been learning together for 8 months.",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "David Kim",
    role: "Product Manager",
    avatar: "D",
    content: "Finally, a platform that adapts to my busy schedule. I learn 30 mins daily and the progress is amazing!",
    rating: 5,
    hasVideo: true,
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Lead",
    avatar: "L",
    content: "The depth levels are perfect. Started with basics and now I'm tackling advanced data visualization!",
    rating: 5,
    hasVideo: false,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by <span className="text-gradient">12,000+ Learners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our community has to say about their learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 5).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${index === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-all duration-300">
                {/* Video indicator */}
                {testimonial.hasVideo && (
                  <div className="relative mb-6 rounded-xl overflow-hidden bg-muted aspect-video flex items-center justify-center group-hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" />
                    </div>
                    <span className="absolute bottom-3 right-3 px-2 py-1 rounded bg-foreground/80 text-background text-xs font-medium">
                      Watch Story
                    </span>
                  </div>
                )}

                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
