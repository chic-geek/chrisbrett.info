import { HeroSection } from "./_components/hero-section";
import { HistoryItemsSection } from "./_components/history-items-section";
import { CodeExamplesSection } from "./_components/code-examples-section";
import { GoogleSigninButton } from "@/components/google-signin-button";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <HistoryItemsSection />
      <CodeExamplesSection />
    </>
  );
}
