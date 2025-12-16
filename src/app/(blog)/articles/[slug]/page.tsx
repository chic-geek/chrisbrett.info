import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import "@/assets/highlightjs-github-dark.css";
import { getAllArticleSlugs, getArticleBySlug } from "@/utils/article-fetchers";
import { articleFormattedDate } from "@/utils/date-formatting";
import { Title } from "./_components/title";
import { Description } from "./_components/description";
import { Prose } from "./_components/prose";
import { Author } from "./_components/author";
import { TextElement } from "@/components/ui/text-element";
import { Heading } from "@/components/ui/heading";
import { Container } from "@/components/container";

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const { articleFrontmatter, articleContent } = await getArticleBySlug({
    slug,
  });

  const {
    title,
    description,
    category,
    author,
    published: publishedDate,
  } = articleFrontmatter;

  return (
    <Container>
      <article>
        <header className="flex flex-col gap-y-2 border-b border-gray-600/30 pb-8 pt-6 md:pb-14 md:pt-10">
          <div>
            <span className="inline-block rounded-md bg-gray-600/20 px-2 py-1 text-xs font-semibold text-[rgb(230,230,230)]">
              {category}
            </span>
          </div>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <div className="flex items-center gap-x-4 pt-4 md:pt-6">
            <Author author={author} />
            <TextElement
              as="span"
              className="border-l border-gray-600/40 pl-4 text-sm font-semibold text-gray-300"
            >
              {articleFormattedDate(publishedDate)}
            </TextElement>
          </div>
        </header>
        <Prose>
          <MDXRemote
            source={articleContent}
            components={mdxCustomComponents}
            options={mdxOptions}
          />
        </Prose>
      </article>
    </Container>
  );
}

const mdxCustomComponents = {
  h1: (props: React.PropsWithChildren<{}>) => (
    <Heading level="1" {...props}>
      {props.children}
    </Heading>
  ),
  h2: (props: React.PropsWithChildren<{}>) => (
    <Heading level="2" {...props}>
      {props.children}
    </Heading>
  ),
  h3: (props: React.PropsWithChildren<{}>) => (
    <Heading level="3" {...props}>
      {props.children}
    </Heading>
  ),
  h4: (props: React.PropsWithChildren<{}>) => (
    <Heading level="4" {...props}>
      {props.children}
    </Heading>
  ),
  p: (props: React.PropsWithChildren<{}>) => (
    <TextElement {...props}>{props.children}</TextElement>
  ),
};

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};
