import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const phases = [
  { name: "Breathe in", duration: 4 },
  { name: "Hold", duration: 4 },
  { name: "Breathe out", duration: 4 },
  { name: "Hold", duration: 4 },
];

export function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [countdown, setCountdown] = useState(phases[0].duration);
  const [cycles, setCycles] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          const nextPhase = (currentPhase + 1) % phases.length;
          setCurrentPhase(nextPhase);
          if (nextPhase === 0) {
            setCycles((c) => c + 1);
          }
          return phases[nextPhase].duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, currentPhase]);

  const reset = () => {
    setIsActive(false);
    setCurrentPhase(0);
    setCountdown(phases[0].duration);
    setCycles(0);
  };

  const getScale = () => {
    if (currentPhase === 0) return 1.3; // Breathe in
    if (currentPhase === 2) return 0.9; // Breathe out
    return currentPhase === 1 ? 1.3 : 0.9; // Hold states
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-3xl p-8 shadow-card text-center"
    >
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
        Box Breathing
      </h3>
      <p className="text-sm text-muted-foreground mb-8">
        A simple technique to calm your nervous system
      </p>

      {/* Breathing circle */}
      <div className="relative w-48 h-48 mx-auto mb-8">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-sage-light" />
        
        {/* Animated circle */}
        <motion.div
          className="absolute inset-4 rounded-full bg-sage-light flex items-center justify-center"
          animate={{
            scale: isActive ? getScale() : 1,
          }}
          transition={{
            duration: phases[currentPhase].duration,
            ease: "easeInOut",
          }}
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-medium text-sage-dark"
              >
                {isActive ? phases[currentPhase].name : "Ready?"}
              </motion.p>
            </AnimatePresence>
            <p className="text-3xl font-display font-semibold text-sage-dark mt-1">
              {isActive ? countdown : "4:4:4:4"}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <Button
          onClick={() => setIsActive(!isActive)}
          className="rounded-xl px-6 gap-2"
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" /> Start
            </>
          )}
        </Button>
        <Button
          variant="outline"
          onClick={reset}
          className="rounded-xl"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      {cycles > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-muted-foreground mt-4"
        >
          {cycles} cycle{cycles !== 1 ? "s" : ""} completed ✨
        </motion.p>
      )}
    </motion.div>
  );
}
