# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Chris Brett built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Features a homepage with employment history, code examples, side projects, and a blog system with MDX-based articles. The site is deployed to Netlify.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production (outputs to ./dist)
npm run build

# Start production server
npm start

# Lint the codebase
npm run lint
```

## Architecture

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
  - `(homepage)/` - Route group for homepage with sections: hero, employment history, code examples, articles preview, side projects
  - `(blog)/articles/[slug]/` - Dynamic blog article pages
  - `layout.tsx` - Root layout with Header, Footer, and global styles
- `src/components/` - Shared reusable components (Container, Header, Footer, UI primitives)
- `src/data/` - Static content data files
  - `articles/` - MDX blog articles with frontmatter
  - `*.data.ts` - TypeScript data files (work history, code examples, side projects)
- `src/utils/` - Utility functions (article fetchers, date formatting, classnames)
- `src/types/` - TypeScript type definitions

### Key Patterns

**Route Groups**: Uses Next.js route groups `(homepage)` and `(blog)` to organize pages without affecting URL structure.

**Server Actions**: Article fetching in `src/utils/article-fetchers.ts` uses `"use server"` directive for filesystem operations.

**MDX Blog System**:
- Articles stored as `.mdx` files in `src/data/articles/`
- Each article has frontmatter (title, description, category, author, published date)
- Content parsed with `gray-matter`, rendered with `next-mdx-remote`
- Syntax highlighting via `rehype-highlight` with GitHub Dark theme
- Custom MDX components map HTML elements to styled UI components

**Static Data Pattern**: Work history, code examples, and side projects are defined in TypeScript files (`.data.ts`) in `src/data/`, not fetched from APIs.

**Component Organization**: Page-specific components live in `_components` directories next to their pages (e.g., `src/app/(homepage)/_components/`).

**Styling**:
- Tailwind CSS with `@tailwindcss/typography` plugin for prose content
- Global styles in `src/assets/globals.css`
- Color theming uses CSS custom properties (e.g., `--highlight-color`)
- Dark theme: `bg-[rgb(26,27,30)]` background, light gray text

## Configuration

- **Build Output**: Custom `distDir: "dist"` instead of default `.next`
- **Environment Variables**: `APP_VERSION` automatically injected from `package.json`
- **Branch**: `master` is the main branch for deployment
- **Deployment**: Automatic deploy to Netlify on merge to `master`

## Adding Content

**New Blog Article**:
1. Create `.mdx` file in `src/data/articles/`
2. Add frontmatter: `title`, `description`, `category`, `author`, `published`
3. Article automatically appears on homepage and generates static route

**Updating Static Data**:
- Edit `src/data/work-history.data.ts` for employment history
- Edit `src/data/code-examples.data.ts` for code examples showcase
- Edit `src/data/side-projects.data.ts` for side projects section
