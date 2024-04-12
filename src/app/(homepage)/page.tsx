import { Container } from "@/components/container";

import { HeroSection } from "./_components/hero-section";
import { HistoryItemsSection } from "./_components/history-items-section";
import { CodeExamplesSection } from "./_components/code-examples-section";
import { SectionHeading } from "@/components/section-heading";
import { getAllArticles } from "@/utils/article-fetchers";
import Link from "next/link";
import { ArticleFrontmatter } from "@/types/article";

export default async function Homepage() {
  const articles = await getAllArticles();

  return (
    <>
      <HeroSection />
      <SectionHeading type="tertiary" />
      <Container>
        <div className="flex flex-col gap-8 md:flex-row">
          <aside className="w-full md:order-2 md:max-w-80">
            <SectionHeading type="secondary">
              <h2>Articles</h2>
            </SectionHeading>
            <div className="rounded-3xl bg-[rgb(31,32,36)] p-8">
              <ul>
                {articles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/articles/${article.slug}`}>
                      <h3>{article.title}</h3>
                    </Link>
                    <p>{article.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div className="w-full md:order-1">
            <SectionHeading type="secondary">
              <h2>Employment</h2>
            </SectionHeading>
            <HistoryItemsSection />
          </div>
        </div>
      </Container>
      <CodeExamplesSection />
    </>
  );
}
