import { HeroSection } from "./_components/hero-section";
import { HistoryItemsSection } from "./_components/history-items-section";
import { CodeExamplesSection } from "./_components/code-examples-section";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <HistoryItemsSection />
      <CodeExamplesSection />
    </>
  );
}
