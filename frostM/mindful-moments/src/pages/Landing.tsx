import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Brain, Shield, LineChart, Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const features = [
  {
    icon: <Heart className="w-6 h-6 text-coral" />,
    title: "Daily Check-Ins",
    description: "Quick mood tracking that meets you where you are. No pressure, just presence.",
    iconBg: "bg-coral-light",
  },
  {
    icon: <Brain className="w-6 h-6 text-lavender" />,
    title: "AI Insights",
    description: "Gentle pattern recognition to help you understand your emotional landscape.",
    iconBg: "bg-lavender-light",
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Calm Analytics",
    description: "Visualize your journey without judgment. See trends, celebrate progress.",
    iconBg: "bg-sage-light",
  },
  {
    icon: <Shield className="w-6 h-6 text-sky" />,
    title: "Privacy First",
    description: "Your thoughts are sacred. End-to-end encryption, zero data selling.",
    iconBg: "bg-sky-light",
  },
];

const benefits = [
  "Understand your emotional patterns",
  "Access grounding exercises anytime",
  "Get personalized journaling prompts",
  "Find support resources when you need them",
];

export default function Landing() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-calm opacity-50" />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-sage-light/30 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-lavender-light/40 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Your safe space for emotional wellness
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6"
            >
              Your feelings
              <br />
              <span className="text-primary">matter here</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
            >
              A gentle companion for tracking your mood, understanding your emotions, 
              and finding calm in the chaos of student life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/check-in">
                <Button size="lg" className="btn-breathe rounded-2xl px-8 gap-2 text-base">
                  Start Check-In
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="rounded-2xl px-8 text-base">
                  Create Account
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-muted-foreground mt-6"
            >
              No credit card required • Completely free for students
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-gentle bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Tools that care for you
            </h2>
            <p className="text-muted-foreground text-lg">
              Designed with empathy, built for your wellbeing. 
              Every feature exists to support, never to judge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-3xl p-6 shadow-card hover:shadow-float transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-gentle">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  A kinder way to{" "}
                  <span className="text-primary">understand yourself</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  MindBloom isn't a replacement for professional help — it's a daily companion 
                  that helps you notice patterns, find moments of calm, and know you're not alone.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card rounded-3xl p-8 shadow-float">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                      <span className="text-xl">🌱</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Today's Insight</p>
                      <p className="text-sm text-muted-foreground">Based on your patterns</p>
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">
                    "You tend to feel calmer on days when you journal in the morning. 
                    Consider making it a gentle ritual."
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="w-4 h-4 text-lavender" />
                    AI-powered, privacy-first
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-lavender-light rounded-full blur-2xl opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-light rounded-full blur-2xl opacity-50" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-gentle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center bg-card rounded-3xl p-12 shadow-float relative overflow-hidden"
          >
            <div className="absolute inset-0 gradient-calm opacity-30" />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-sage-light flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to start your journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Take your first check-in today. It only takes a minute, 
                and it might just change how you see your day.
              </p>
              <Link to="/check-in">
                <Button size="lg" className="btn-breathe rounded-2xl px-8 gap-2">
                  Begin Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-display font-medium text-foreground">MindBloom</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Not a replacement for professional mental health support. 
              If you're in crisis, please reach out to a helpline.
            </p>
            <Link to="/safety" className="text-sm text-primary hover:underline">
              Crisis Resources →
            </Link>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
