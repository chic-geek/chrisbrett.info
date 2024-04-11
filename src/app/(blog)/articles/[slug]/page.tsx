import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import langJS from "highlight.js/lib/languages/javascript";
import langTS from "highlight.js/lib/languages/typescript";
import langCSS from "highlight.js/lib/languages/css";

import "@/assets/highlightjs-github-dark.css";
import { getAllArticleSlugs, getArticleBySlug } from "@/utils";
import { Title } from "./_components/title";
import { Description } from "./_components/description";
import { Prose } from "./_components/prose";
import { Author } from "./_components/author";
import { TextElement } from "@/components/ui/text-element";
import { Heading } from "@/components/ui/heading";
import { Container } from "@/components/container";

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
    rehypePlugins: [
      rehypeHighlight as any,
      {
        languages: {
          javascript: langJS,
          typescript: langTS,
          css: langCSS,
        },
      },
    ],
  },
};

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleFrontmatter, articleContent } = await getArticleBySlug(params);

  const { title, description, category, author, published } =
    articleFrontmatter;

  const date = new Date(published as string).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
              {date}
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
