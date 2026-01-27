import { ReactNode } from "react";
import { Header } from "./Header";
import { SafetyBanner } from "./SafetyBanner";

interface LayoutProps {
  children: ReactNode;
  showSafetyBanner?: boolean;
}

export function Layout({ children, showSafetyBanner = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      {showSafetyBanner && <SafetyBanner />}
    </div>
  );
}
