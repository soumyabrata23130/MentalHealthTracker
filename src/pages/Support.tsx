import { motion } from "framer-motion";
import { Heart, BookOpen, Wind, MessageCircle, Headphones, PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ResourceCard } from "@/components/support/ResourceCard";
import { BreathingExercise } from "@/components/support/BreathingExercise";
import { Button } from "@/components/ui/button";

const groundingExercises = [
  {
    icon: <Wind className="w-5 h-5 text-primary" />,
    title: "Box Breathing",
    description: "A calming 4-4-4-4 breathing pattern used by Navy SEALs to reduce stress.",
  },
  {
    icon: <Headphones className="w-5 h-5 text-lavender" />,
    title: "Body Scan",
    description: "A gentle 5-minute practice to release tension from head to toe.",
  },
  {
    icon: <Heart className="w-5 h-5 text-coral" />,
    title: "Self-Compassion",
    description: "Guided phrases to speak kindly to yourself during difficult moments.",
  },
];

const journalPrompts = [
  "What's one thing you did well today, even if it was small?",
  "If your feelings could speak, what would they say?",
  "What would you tell a friend who was feeling the way you feel now?",
  "Name three things that brought you comfort this week.",
  "What do you need to hear right now?",
];

const articles = [
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: "Understanding Anxiety",
    description: "Learn what's happening in your body and mind when anxiety shows up.",
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-lavender" />,
    title: "How to Ask for Help",
    description: "Scripts and tips for reaching out when you need support.",
  },
  {
    icon: <PenLine className="w-5 h-5 text-coral" />,
    title: "The Power of Journaling",
    description: "Why putting pen to paper can help process difficult emotions.",
  },
];

export default function Support() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pb-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center">
              <Heart className="w-5 h-5 text-coral" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Personalized Support
              </h1>
              <p className="text-muted-foreground">
                Tools and resources curated for your wellbeing
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Breathing Exercise */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Grounding Exercise
              </h2>
              <BreathingExercise />
            </section>

            {/* More Exercises */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                More Exercises
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {groundingExercises.map((exercise, index) => (
                  <ResourceCard
                    key={exercise.title}
                    icon={exercise.icon}
                    title={exercise.title}
                    description={exercise.description}
                    action="Try now"
                    variant="exercise"
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </section>

            {/* Educational Resources */}
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                Learn & Understand
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {articles.map((article, index) => (
                  <ResourceCard
                    key={article.title}
                    icon={article.icon}
                    title={article.title}
                    description={article.description}
                    action="Read article"
                    variant="article"
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Journal Prompts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                ✨ Journal Prompts
              </h3>
              <ul className="space-y-3">
                {journalPrompts.slice(0, 3).map((prompt, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-sage-light"
                  >
                    {prompt}
                  </li>
                ))}
              </ul>
              <Link to="/check-in">
                <Button variant="outline" className="w-full mt-4 rounded-xl">
                  Start Journaling
                </Button>
              </Link>
            </motion.div>

            {/* Crisis banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-coral-light rounded-3xl p-6"
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                Need immediate support?
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                If you're in crisis or having thoughts of self-harm, please reach out. 
                You matter, and help is available 24/7.
              </p>
              <Link to="/safety">
                <Button className="w-full rounded-xl">
                  View Crisis Resources
                </Button>
              </Link>
            </motion.div>

            {/* Daily affirmation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-lavender-light rounded-3xl p-6 text-center"
            >
              <p className="text-2xl mb-3">🌸</p>
              <p className="font-display text-lg font-medium text-foreground mb-2">
                Today's Affirmation
              </p>
              <p className="text-foreground/80 italic">
                "I am doing my best, and that is enough."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
