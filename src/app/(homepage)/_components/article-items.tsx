import Link from "next/link";
import { MdOutlineEditCalendar as CalendarIcon } from "react-icons/md";

import { articleFormattedDate } from "@/utils/date-formatting";
import { getAllArticles } from "@/utils/article-fetchers";
import { TextElement } from "@/components/ui/text-element";
import { Heading } from "@/components/ui/heading";

export async function ArticleItems() {
  const articles = await getAllArticles();

  return (
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
              <TextElement className="text-xs">{publishedDate}</TextElement>
            </div>
            <Heading
              level="2"
              className="text-[rgb(16,185,129)] underline [.js-enabled_&]:text-[rgb(var(--highlight-color))]"
            >
              <Link href={`/articles/${article.slug}`}>{article.title}</Link>
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
  );
}
