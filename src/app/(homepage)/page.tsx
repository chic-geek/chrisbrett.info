import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { HistoryItemsSection } from "@/components/history-items-section";
import { CodeExamplesSection } from "@/components/code-examples-section";
import { RootContainer } from "@/components/root-container";

export default function Homepage() {
  return (
    <RootContainer>
      <Header />
      <main>
        <HeroSection />
        <HistoryItemsSection />
        <CodeExamplesSection />
      </main>
      <Footer />
    </RootContainer>
  );
}
