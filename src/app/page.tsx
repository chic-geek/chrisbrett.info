"use client";

import { useEffect } from "react";
import { getRandomColor } from "@/app/utils";
import {workHistoryData} from "@/app/data/work-history.data";
import {codeExamplesData} from "@/app/data/code-examples.data";
import AppHead from "@/app/components/AppHead";
import AppFoot from "@/app/components/AppFoot";
import HeroSection from "@/app/components/HeroSection";
import HistoryList, {
  HistoryListItem,
  HistoryItemType,
} from "@/app/components/HistoryList";
import CodeExamplesList, { 
  CodeExampleListItem,
  CodeExampleItemType 
} from "@/app/components/CodeExamplesList";

export default function Home() {
  const changeColor = () => {
    const randomColor = getRandomColor();

    document.documentElement.style.setProperty(
      "--dark-highlight-color",
      randomColor
    );
  };

  useEffect(() => {
    changeColor();
  }, []);

  return (
    <main className="animated">
      <AppHead />
      <HeroSection />
      <HistoryList>
        {workHistoryData.map((item: HistoryItemType) => (
          <HistoryListItem key={Number(item.id)} history={item} />
        ))}

        <section className="flex alignItems-center justifyContents-center">
          <p className="further-history">
            For a more formal history of my work experience, check out my{" "}
            <a href="https://chrisbrett.notion.site/Resum-0a7c8d6b4f67459ba052da1c9e36b522">
              resumé
            </a>
            .
          </p>
        </section>
      </HistoryList>
      <CodeExamplesList>
        {codeExamplesData.map((item: CodeExampleItemType) => (
          <CodeExampleListItem key={Number(item.id)} example={item} />
        ))}
      </CodeExamplesList>
      <AppFoot />
    </main>
  );
}
