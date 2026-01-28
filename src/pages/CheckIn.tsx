import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { MoodSelector } from "@/components/mood/MoodSelector";
import { JournalEntry } from "@/components/mood/JournalEntry";
import { Button } from "@/components/ui/button";

const steps = ["mood", "journal", "complete"];

export default function CheckIn() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalEntry, setJournalEntry] = useState("");

  const canProceed = currentStep === 0 ? selectedMood !== null : true;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Save check-in data
    console.log({ mood: selectedMood, journal: journalEntry });
    navigate("/insights");
  };

  return (
    <Layout showSafetyBanner={false}>
      <div className="min-h-[calc(100vh-5rem)] flex flex-col">
        {/* Progress bar */}
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-1.5 rounded-full transition-colors duration-300 ${
                    index <= currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 container mx-auto px-4 flex items-center justify-center pb-24">
          <div className="w-full max-w-lg">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="mood"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center"
                >
                  <div className="mb-8">
                    <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
                      Welcome back 💚
                    </h1>
                    <p className="text-muted-foreground">
                      Let's check in with how you're doing
                    </p>
                  </div>
                  <MoodSelector
                    selectedMood={selectedMood}
                    onSelect={setSelectedMood}
                  />
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="journal"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <div className="text-center mb-8">
                    <h1 className="font-display text-3xl font-semibold text-foreground mb-2">
                      Anything on your mind?
                    </h1>
                    <p className="text-muted-foreground">
                      Writing helps process emotions. But it's totally optional.
                    </p>
                  </div>
                  <JournalEntry value={journalEntry} onChange={setJournalEntry} />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
                    Check-in complete!
                  </h1>
                  <p className="text-muted-foreground text-lg mb-2">
                    Thank you for taking a moment for yourself today.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    Every check-in helps you understand yourself better. 🌱
                  </p>

                  <div className="bg-card rounded-2xl p-6 shadow-card mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-lavender-light flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-lavender" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-foreground">AI Insight</p>
                        <p className="text-sm text-muted-foreground">Based on your check-in</p>
                      </div>
                    </div>
                    <p className="text-foreground text-left">
                      {selectedMood && selectedMood >= 4
                        ? "It's wonderful to hear you're feeling good! Consider noting what contributed to this positive state."
                        : selectedMood && selectedMood <= 2
                        ? "Thank you for being honest about how you're feeling. Remember, difficult moments are temporary. Would you like to try a grounding exercise?"
                        : "Neutral days are part of the journey too. Sometimes 'okay' is perfectly okay."}
                    </p>
                  </div>

                  <Button
                    size="lg"
                    onClick={handleComplete}
                    className="btn-breathe rounded-2xl px-8 gap-2"
                  >
                    View Insights
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        {currentStep < 2 && (
          <div className="fixed bottom-0 left-0 right-0 glass py-4 border-t border-border">
            <div className="container mx-auto px-4">
              <div className="max-w-lg mx-auto flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="rounded-xl gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="btn-breathe rounded-xl gap-2 px-6"
                >
                  {currentStep === 1 ? (
                    journalEntry ? "Save & Continue" : "Skip for now"
                  ) : (
                    "Continue"
                  )}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
