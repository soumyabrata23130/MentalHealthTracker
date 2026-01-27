import { motion } from "framer-motion";
import { Phone, MessageCircle, Globe, Heart, ExternalLink, AlertTriangle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const crisisResources = [
  {
    name: "National Suicide Prevention Lifeline",
    number: "988",
    description: "24/7, free and confidential support for people in distress",
    icon: Phone,
    color: "bg-coral-light",
    iconColor: "text-coral",
    primary: true,
  },
  {
    name: "Crisis Text Line",
    number: "Text HOME to 741741",
    description: "Free, 24/7 text-based mental health support",
    icon: MessageCircle,
    color: "bg-lavender-light",
    iconColor: "text-lavender",
  },
  {
    name: "International Association for Suicide Prevention",
    number: "Find local resources",
    description: "Crisis centers around the world",
    icon: Globe,
    color: "bg-sky-light",
    iconColor: "text-sky",
    href: "https://www.iasp.info/resources/Crisis_Centres/",
  },
  {
    name: "SAMHSA National Helpline",
    number: "1-800-662-4357",
    description: "Treatment referrals and information service",
    icon: Heart,
    color: "bg-sage-light",
    iconColor: "text-primary",
  },
];

const selfCareReminders = [
  "You are not a burden for reaching out",
  "Asking for help is a sign of strength",
  "Your feelings are valid and temporary",
  "You've survived 100% of your worst days",
  "It's okay to not be okay right now",
];

export default function Safety() {
  return (
    <Layout showSafetyBanner={false}>
      <div className="container mx-auto px-4 py-8 pb-24">
        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-coral-light rounded-2xl p-4 mb-8 flex items-start gap-3"
        >
          <AlertTriangle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-foreground">
              If you're in immediate danger, please call emergency services (911)
            </p>
            <p className="text-sm text-foreground/80 mt-1">
              This page provides crisis resources. MindBloom is not a substitute for professional help.
            </p>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="w-16 h-16 rounded-2xl bg-coral-light flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-coral" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            You're not alone
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            If you're struggling right now, please know that help is available. 
            These resources are here for you, 24/7, no matter what you're going through.
          </p>
        </motion.div>

        {/* Crisis Resources */}
        <section className="max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
            Crisis Support Lines
          </h2>
          <div className="space-y-4">
            {crisisResources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-2xl p-5 shadow-card ${
                  resource.primary ? "ring-2 ring-coral/30" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${resource.color} flex items-center justify-center flex-shrink-0`}>
                    <resource.icon className={`w-6 h-6 ${resource.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground mb-1">
                      {resource.name}
                    </h3>
                    <p className="text-lg font-display font-semibold text-primary mb-1">
                      {resource.number}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  {resource.href ? (
                    <a href={resource.href} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-xl flex-shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <a href={`tel:${resource.number.replace(/\D/g, "")}`}>
                      <Button className="rounded-xl flex-shrink-0 gap-2">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Self-care reminders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-sage-light rounded-3xl p-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              Gentle Reminders 💚
            </h2>
            <div className="grid gap-4">
              {selfCareReminders.map((reminder, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 bg-background/50 rounded-xl p-4"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">{reminder}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto"
        >
          MindBloom is designed to support your wellbeing, but it's not a replacement 
          for professional mental health care. If you're struggling, please reach out 
          to a qualified professional or one of the resources above.
        </motion.p>
      </div>
    </Layout>
  );
}
