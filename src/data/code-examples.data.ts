import {
  SiReact as ReactIcon,
  SiTypescript as TSIcon,
  SiCss3 as CSSIcon,
  SiTailwindcss as TailwindIcon,
  SiVitest as VitestIcon,
} from "react-icons/si";

import {
  LuCircleDollarSign as CircleDollarSignIcon,
  LuPalette as PaletteIcon,
  LuStore as StoreIcon,
  LuCircleDotDashed as CircleDotDashedIcon,
} from "react-icons/lu";
import { randomUUID } from "crypto";

export async function getCodeExamplesData() {
  const examples = [
    {
      title: "Venue search",
      icon: StoreIcon,
      description:
        "A simple application to search and display venues in London using the Foursquare API.",
      tags: [
        { icon: ReactIcon, label: "React" },
        { icon: TSIcon, label: "Typescript" },
        { icon: CSSIcon, label: "CSS" },
      ],
      urls: {
        source: "https://github.com/chic-geek/example-bcfa14",
        demo: "https://example-bcfa14.netlify.app/",
      },
    },
    {
      title: "Persistent theming",
      icon: PaletteIcon,
      description:
        "An example React application to demonstrate persistent theming.",
      tags: [
        { icon: ReactIcon, label: "React" },
        { icon: CircleDotDashedIcon, label: "Context" },
        { icon: TailwindIcon, label: "Tailwind" },
      ],
      urls: {
        source: "https://github.com/chic-geek/example-p19vbw",
        demo: "https://example-p19vbw.netlify.app/",
      },
    },
    {
      title: "Card transactions",
      icon: CircleDollarSignIcon,
      description:
        "A React application to list card transactions for a group of users for a fraud department to review.",
      tags: [
        { icon: ReactIcon, label: "React" },
        { icon: VitestIcon, label: "Vitest" },
        { icon: TailwindIcon, label: "Tailwind" },
      ],
      urls: {
        source: "https://github.com/chic-geek/example-amsp21",
        demo: "https://example-amsp21.netlify.app/",
      },
    },
  ];

  return examples.map((example) => ({
    ...example,
    id: randomUUID(),
  }));
}
