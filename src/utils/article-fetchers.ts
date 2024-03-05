"use server";

import fs from "fs";
import path from "path";
import rehypeHighlight from "rehype-highlight";
import { compileMDX } from "next-mdx-remote/rsc";

const CONTENT_DIR = path.join(process.cwd(), "src/data/articles");

export async function getAllArticleSlugs() {
  const files = fs.readdirSync(CONTENT_DIR);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));

  return slugs;
}

export async function getArticleBySlug(slug: string) {
  const file = path.join(CONTENT_DIR, `${slug}.mdx`);
  const file_contents = fs.readFileSync(file, "utf-8");

  const { frontmatter: articleFrontmatter, content: articleContent } =
    await compileMDX({
      source: file_contents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [rehypeHighlight as any],
        },
      },
    });

  return {
    articleFrontmatter,
    articleContent,
    articleSlug: path.parse(file).name,
  };
}
