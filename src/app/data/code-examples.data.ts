import { CircleDollarSign, Palette, Store } from "lucide-react";

export const codeExamplesData = [
  {
    id: "1",
    title: "Venue search",
    icon: Store,
    description: "A simple application to search and display venues in London using the Foursquare API.",
    tags: [
      "React",
      "TypeScript",
      "CSS"
    ],
    urls: {
      source: "https://github.com/chic-geek/example-bcfa14",
      demo: "https://example-bcfa14.netlify.app/"
    }
  },
  {
    id: "2",
    title: "Persistent theming",
    icon: Palette,
    description: "An example React application to demonstrate persistent theming.",
    tags: [
      "React",
      "Context",
      "Tailwind"
    ],
    urls: {
      source: "https://github.com/chic-geek/example-p19vbw",
      demo: "https://example-p19vbw.netlify.app/"
    }
  },
  {
    id: "3",
    title: "Card transactions",
    icon: CircleDollarSign,
    description: "A React application to list card transactions for a group of users for a fraud department to review.",
    tags: [
      "React",
      "Vittest",
      "Tailwind"
    ],
    urls: {
      source: "https://github.com/chic-geek/example-amsp21",
      demo: "https://example-amsp21.netlify.app/"
    }
  }
]