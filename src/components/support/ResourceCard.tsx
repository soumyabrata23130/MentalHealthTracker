import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  action?: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "exercise" | "article";
  delay?: number;
}

export function ResourceCard({
  icon,
  title,
  description,
  action = "Learn more",
  onClick,
  href,
  variant = "default",
  delay = 0,
}: ResourceCardProps) {
  const variantStyles = {
    default: "bg-card hover:shadow-float",
    exercise: "bg-sage-light hover:bg-sage-light/80",
    article: "bg-lavender-light hover:bg-lavender-light/80",
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -2 }}
      className={cn(
        "rounded-2xl p-5 shadow-soft transition-all cursor-pointer group",
        variantStyles[variant]
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-background/50 flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
          <div className="flex items-center gap-1 mt-3 text-sm font-medium text-primary">
            {action}
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick}>
      {content}
    </div>
  );
}
