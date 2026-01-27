import { Phone, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function SafetyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-md"
    >
      <Link to="/safety">
        <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-card hover:shadow-float transition-shadow cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-coral-light flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-coral" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground">
              You're not alone
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Crisis support available 24/7 — tap for help
            </p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
            <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
