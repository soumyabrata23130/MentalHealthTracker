import { motion } from "framer-motion";
import { Brain, TrendingUp, Lightbulb, Calendar, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { InsightCard } from "@/components/insights/InsightCard";
import { MoodChart } from "@/components/insights/MoodChart";

const mockMoodData = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 3 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 5 },
  { day: "Sun", mood: 4 },
];

const insights = [
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "Upward Trend",
    description: "Your mood has been improving over the past week. You've checked in 6 out of 7 days — that consistency matters!",
    iconBg: "bg-sage-light",
  },
  {
    icon: <Calendar className="w-5 h-5 text-lavender" />,
    title: "Best Days",
    description: "Weekends tend to be your highest mood days. Consider what makes them different — rest, social time, or less pressure?",
    iconBg: "bg-lavender-light",
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-coral" />,
    title: "Pattern Noticed",
    description: "Wednesday dips seem common. This might be midweek fatigue. A brief walk or breathing exercise could help.",
    iconBg: "bg-coral-light",
  },
];

const emotionTags = [
  { name: "Calm", count: 4, color: "bg-sage-light text-sage-dark" },
  { name: "Focused", count: 3, color: "bg-sky-light text-sky" },
  { name: "Grateful", count: 3, color: "bg-lavender-light text-lavender" },
  { name: "Tired", count: 2, color: "bg-sand text-foreground" },
  { name: "Anxious", count: 1, color: "bg-coral-light text-coral" },
];

export default function Insights() {
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
            <div className="w-10 h-10 rounded-xl bg-lavender-light flex items-center justify-center">
              <Brain className="w-5 h-5 text-lavender" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                AI Insights
              </h1>
              <p className="text-muted-foreground">
                Gentle observations about your emotional patterns
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Chart */}
            <MoodChart data={mockMoodData} />

            {/* Insights Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {insights.map((insight, index) => (
                <InsightCard
                  key={insight.title}
                  icon={insight.icon}
                  title={insight.title}
                  description={insight.description}
                  iconBg={insight.iconBg}
                  delay={index * 0.1}
                />
              ))}
            </div>

            {/* AI Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sage-light to-lavender-light flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Weekly Summary
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This week brought a mix of emotions, which is completely normal. 
                    You showed up for yourself consistently, and that's something to be proud of. 
                    The midweek dip you experienced is common — consider scheduling something 
                    restorative on Wednesdays. Your weekend highs suggest rest and autonomy 
                    are important for your wellbeing.
                  </p>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Remember: These insights are meant to support reflection, not diagnose. 
                    You know yourself best. 💚
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emotion Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                This Week's Emotions
              </h3>
              <div className="flex flex-wrap gap-2">
                {emotionTags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${tag.color}`}
                  >
                    {tag.name} ({tag.count})
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Check-in streak */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-3xl p-6 shadow-card text-center"
            >
              <p className="text-5xl mb-2">🔥</p>
              <p className="font-display text-3xl font-semibold text-foreground mb-1">
                6 days
              </p>
              <p className="text-muted-foreground">
                Current streak
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                You're building a beautiful habit of self-awareness.
              </p>
            </motion.div>

            {/* Quick tip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-sage-light rounded-3xl p-6"
            >
              <h3 className="font-display font-semibold text-foreground mb-2">
                💡 Today's Tip
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Try the "5-4-3-2-1" grounding technique: Name 5 things you see, 
                4 you can touch, 3 you hear, 2 you smell, and 1 you taste.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
