import Link from "next/link";
import { MdOutlineEditCalendar as CalendarIcon } from "react-icons/md";

import { getAllArticles } from "@/utils/article-fetchers";
import { TextElement } from "@/components/ui/text-element";
import { Heading } from "@/components/ui/heading";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

import { HeroSection } from "./_components/hero-section";
import { HistoryItemsSection } from "./_components/history-items-section";
import { CodeExamplesSection } from "./_components/code-examples-section";

function articleFormattedDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

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
            <div className="">
              <ul className="space-y-10">
                {articles.map((article) => {
                  const publishedDate = articleFormattedDate(article.published);

                  return (
                    <li
                      key={article.slug}
                      className="flex flex-col gap-y-2 rounded-3xl bg-[rgb(31,32,36)] p-8"
                    >
                      <div className="flex items-center gap-x-2">
                        <CalendarIcon className="h-4 w-4" />
                        <TextElement className="text-xs">
                          {publishedDate}
                        </TextElement>
                      </div>
                      <Heading
                        level="4"
                        className="text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
                      >
                        <Link href={`/articles/${article.slug}`}>
                          {article.title}
                        </Link>
                      </Heading>
                      <TextElement className="line-clamp-3">
                        {article.description}
                      </TextElement>
                      <div>
                        <span className="inline-flex items-center gap-x-1 rounded-md bg-gray-600/20 px-2 py-1 text-xs text-gray-300">
                          {article.category}
                        </span>
                      </div>
                    </li>
                  );
                })}
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
        <TextElement className="text-center">
          For a more formal history of my work experience, check out my{" "}
          <a
            href="https://chrisbrett.notion.site/Resum-0a7c8d6b4f67459ba052da1c9e36b522"
            className="font-semibold text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
          >
            resumé
          </a>
          .
        </TextElement>
      </Container>
      <CodeExamplesSection />
    </>
  );
}
