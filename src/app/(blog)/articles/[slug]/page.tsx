import Image from "next/image";

import "@/assets/highlightjs-github-dark.css";
import { cn, getAllArticleSlugs, getArticleBySlug } from "@/utils";

const PROSE_STYLES = [
  "prose",
  "prose-invert",
  "prose-a:text-[rgb(var(--highlight-color))]",
  "prose-a:font-semibold",
  "prose-h1:tracking-[-0.03rem]",
  "prose-h1:font-semibold",
  "prose-h2:tracking-[-0.03rem]",
  "prose-h2:font-semibold",
  "prose-h3:tracking-[-0.03rem]",
  "prose-h3:font-semibold",
  "prose-h4:tracking-[-0.03rem]",
  "prose-h4:font-semibold",
  "mt-14",
  "text-base",
  "leading-relaxed",
  "text-[rgb(230,230,230)]",
];

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  const { articleFrontmatter, articleContent } = article;
  const { title, description, category, author, published } =
    articleFrontmatter;

  const date = new Date(published as string).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <header className="flex flex-col gap-y-6 border-b border-[rgba(75,85,99,0.3)] pb-12 pt-6 md:pt-10">
        <div className="flex items-center gap-x-3">
          <Image
            alt={`${author as string}'s avatar image`}
            src={`/images/avatar-${(author as string).toLocaleLowerCase().split(" ").join("-")}.png`}
            className="inline-block h-10 w-10 rounded-full ring-2 ring-[rgba(75,85,99,0.75)]"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="text-sm text-[rgb(105,117,135)]">Author</span>
            <span className="font-semibold">{author as string}</span>
          </div>
        </div>
        <h1 className="leading-tighter md:leading-tighter max-w-4xl text-balance text-5xl font-bold tracking-[-0.06rem] text-white md:text-wrap md:text-6xl">
          {title as string}
        </h1>
        <p className="max-w-[65ch] text-lg text-[rgb(105,117,135)]">
          {description as string}
        </p>
        <div>
          <span className="inline-flex rounded-md bg-[rgba(75,85,99,0.35)] px-2 py-1 text-xs font-semibold text-[rgb(230,230,230)]">
            {category as string}
          </span>
        </div>
      </header>
      <div className={cn("", PROSE_STYLES)}>{articleContent}</div>
    </article>
  );
}
