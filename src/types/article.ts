export type ArticleFrontmatter = {
  title: string;
  description: string;
  category: string;
  author: string;
  published: string;
};

export type Article = {
  slug: string;
} & ArticleFrontmatter;
