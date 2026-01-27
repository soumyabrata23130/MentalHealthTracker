import { motion } from "framer-motion";
import { Mic, MicOff, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface JournalEntryProps {
  value: string;
  onChange: (value: string) => void;
}

const journalPrompts = [
  "What's on your mind today?",
  "What made you smile recently?",
  "What would make today a little better?",
  "What are you grateful for right now?",
  "Is there something weighing on you?",
];

export function JournalEntry({ value, onChange }: JournalEntryProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [currentPrompt] = useState(
    () => journalPrompts[Math.floor(Math.random() * journalPrompts.length)]
  );

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Voice recording would be implemented here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-lavender-light flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-lavender" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">
            Optional journaling
          </p>
          <p className="text-sm text-muted-foreground">
            {currentPrompt}
          </p>
        </div>
      </div>

      <div className="relative">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Write whatever feels right... or skip this step. It's okay."
          className="min-h-[120px] resize-none rounded-2xl border-border/50 bg-card focus:border-primary/30 focus:ring-primary/20 pr-14"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={toggleRecording}
          className={`absolute bottom-3 right-3 rounded-xl transition-colors ${
            isRecording
              ? "bg-coral/20 text-coral hover:bg-coral/30"
              : "hover:bg-muted"
          }`}
          title={isRecording ? "Stop recording" : "Start voice input"}
        >
          {isRecording ? (
            <MicOff className="w-5 h-5" />
          ) : (
            <Mic className="w-5 h-5 text-muted-foreground" />
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        Your entries are private and never shared. 🔒
      </p>
    </motion.div>
  );
}
