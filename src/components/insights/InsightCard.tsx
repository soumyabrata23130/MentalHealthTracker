import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconBg?: string;
  delay?: number;
}

export function InsightCard({
  icon,
  title,
  description,
  className,
  iconBg = "bg-sage-light",
  delay = 0,
}: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={cn(
        "bg-card rounded-3xl p-6 shadow-card hover:shadow-float transition-shadow",
        className
      )}
    >
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4", iconBg)}>
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
