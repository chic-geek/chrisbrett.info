"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ArticleFrontmatter } from "@/types/article";

const CONTENT_DIR = path.join(process.cwd(), "src/data/articles");

export async function getAllArticleSlugs() {
  const files = fs.readdirSync(CONTENT_DIR);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));

  return slugs;
}

export async function getArticleBySlug({ slug }: { slug: string }) {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  const markdownFileContents = fs.readFileSync(file, "utf-8");

  const { data: articleFrontmatter, content: articleContent } =
    matter(markdownFileContents);

  return {
    articleFrontmatter,
    articleContent,
    articleSlug: slug,
  };
}

export async function getAllArticles() {
  const files = fs.readdirSync(CONTENT_DIR);

  const articles = files
    .map((file) => {
      const slug = path.parse(file).name;
      const markdownFileContents = fs.readFileSync(
        path.join(CONTENT_DIR, file),
        "utf-8",
      );

      const { data: articleFrontmatter } = matter(markdownFileContents);
      const typedArticleFrontmatter = articleFrontmatter as ArticleFrontmatter;

      return {
        slug,
        ...typedArticleFrontmatter,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.published).getTime() - new Date(a.published).getTime(),
    );

  return articles;
}
