import { motion } from "framer-motion";
import { LayoutDashboard, Plus, TrendingUp, Calendar, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { MoodChart } from "@/components/insights/MoodChart";
import { Button } from "@/components/ui/button";

const mockMoodData = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 3 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 5 },
  { day: "Sun", mood: 4 },
];

const recentEntries = [
  { date: "Today", mood: 4, emoji: "🙂", note: "Feeling productive after morning walk" },
  { date: "Yesterday", mood: 5, emoji: "😊", note: "Great day! Coffee with a friend helped" },
  { date: "2 days ago", mood: 3, emoji: "😐", note: "Just okay, lots of homework" },
];

const stats = [
  { label: "Check-ins this month", value: "23", icon: Calendar, color: "text-primary" },
  { label: "Current streak", value: "6 days", icon: TrendingUp, color: "text-coral" },
  { label: "Monthly average", value: "3.7", icon: Target, color: "text-lavender" },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 pb-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-light flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-sky" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                Your Dashboard
              </h1>
              <p className="text-muted-foreground">
                Welcome back! Here's your wellness overview.
              </p>
            </div>
          </div>
          <Link to="/check-in">
            <Button className="btn-breathe rounded-xl gap-2">
              <Plus className="w-4 h-4" />
              New Check-In
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-4 md:p-6 shadow-soft text-center"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
              <p className="font-display text-xl md:text-2xl font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Chart */}
            <MoodChart data={mockMoodData} />

            {/* Recent Entries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Recent Check-Ins
              </h3>
              <div className="space-y-4">
                {recentEntries.map((entry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="text-3xl">{entry.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-foreground">{entry.date}</p>
                        <span className="text-xs text-muted-foreground">
                          Mood: {entry.mood}/5
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {entry.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4 text-muted-foreground">
                View all entries →
              </Button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Link to="/check-in" className="block">
                  <Button variant="outline" className="w-full justify-start rounded-xl gap-3">
                    <span className="text-lg">📝</span>
                    Daily Check-In
                  </Button>
                </Link>
                <Link to="/support" className="block">
                  <Button variant="outline" className="w-full justify-start rounded-xl gap-3">
                    <span className="text-lg">🧘</span>
                    Breathing Exercise
                  </Button>
                </Link>
                <Link to="/insights" className="block">
                  <Button variant="outline" className="w-full justify-start rounded-xl gap-3">
                    <span className="text-lg">📊</span>
                    View Insights
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Today's insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-sage-light rounded-3xl p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">
                  Today's Insight
                </h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                You've been consistent with check-ins this week! 
                Consistency builds self-awareness. 
                Keep showing up for yourself. 🌱
              </p>
            </motion.div>

            {/* Goal tracker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-3xl p-6 shadow-card"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                Weekly Goal
              </h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Check-ins</span>
                  <span className="font-medium text-foreground">6/7 days</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                One more check-in to hit your weekly goal! 🎯
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
