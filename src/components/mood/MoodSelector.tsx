import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MoodOption {
  value: number;
  emoji: string;
  label: string;
  color: string;
}

const moodOptions: MoodOption[] = [
  { value: 1, emoji: "😢", label: "Struggling", color: "bg-mood-1/20 hover:bg-mood-1/30" },
  { value: 2, emoji: "😔", label: "Low", color: "bg-mood-2/20 hover:bg-mood-2/30" },
  { value: 3, emoji: "😐", label: "Okay", color: "bg-mood-3/20 hover:bg-mood-3/30" },
  { value: 4, emoji: "🙂", label: "Good", color: "bg-mood-4/20 hover:bg-mood-4/30" },
  { value: 5, emoji: "😊", label: "Great", color: "bg-mood-5/20 hover:bg-mood-5/30" },
];

interface MoodSelectorProps {
  selectedMood: number | null;
  onSelect: (mood: number) => void;
}

export function MoodSelector({ selectedMood, onSelect }: MoodSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-lg text-muted-foreground text-center">
        How are you feeling right now?
      </p>
      <p className="text-sm text-muted-foreground/70 text-center">
        There's no wrong answer. Just be honest with yourself.
      </p>
      
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {moodOptions.map((mood, index) => (
          <motion.button
            key={mood.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelect(mood.value)}
            className={cn(
              "mood-bubble flex flex-col items-center gap-2 w-16 md:w-20",
              mood.color,
              selectedMood === mood.value && "selected ring-primary/40"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl md:text-4xl">{mood.emoji}</span>
            <span className="text-xs font-medium text-foreground/80">
              {mood.label}
            </span>
          </motion.button>
        ))}
      </div>

      {selectedMood && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-muted-foreground mt-2"
        >
          Thank you for sharing. Whatever you're feeling is valid. 💚
        </motion.p>
      )}
    </div>
  );
}
