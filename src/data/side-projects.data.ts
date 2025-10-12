import { IoLanguage as LanguageIcon } from "react-icons/io5";
import { IoPieChart as PieChartIcon } from "react-icons/io5";

export const sideProjectsData = [
  {
    id: crypto.randomUUID(),
    title: "Artikel",
    icon: LanguageIcon,
    description:
      "Articles are important in German, normally I have post-it's around the house, but this is a more permanent solution.",
    urls: {
      demo: "https://artikel-buddy.vercel.app/",
    },
  },
  {
    id: crypto.randomUUID(),
    title: "Finance tracker",
    icon: PieChartIcon,
    description:
      "A tool I created whilst looking to buy a house to keep track of my finances and help plan out mortgage scenarios.",
    urls: {
      demo: "https://financial-tracker-azure.vercel.app/",
    },
  },
];
