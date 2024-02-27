import {
  SiReact as ReactIcon,
  SiTypescript as TSIcon,
  SiStyledcomponents as StyledComponentsIcon,
  SiGraphql as GraphQLIcon,
  SiRubyonrails as RailsIcon,
  SiCss3 as CSSIcon,
  SiJavascript as JSIcon,
  SiTestinglibrary as TestingLibraryIcon,
} from "react-icons/si";

import { LuLayers as LayersIcon } from "react-icons/lu";
import { MdCode as PerlIcon } from "react-icons/md";
import { RiPaintFill as UXIcon } from "react-icons/ri";

export const workHistoryData = [
  {
    id: "1",
    company: {
      name: "Qatalog",
      url: "https://qatalog.com/",
    },
    position: "Frontend Developer",
    startDate: "2022-02-01",
    endDate: "2023-08-30",
    lede: "AI-driven enterprise solution aimed at enhancing business efficiency and decision-making.",
    contributions: [
      "Led the development process of reworking the application for mobile devices, ensuring that essential features were accessible across a range of devices where previously they were not. This involved working closely with the design team to ensure the user experience was consistent and intuitive.",
      "Contributed to developing and expanding the internal React component library, enhancing platform scalability and maintainability.",
      "Collaborated in the re-architecting of the client-side application, focusing on enhancing code reusability and integrating an upgraded component/design system.",
      "Maintained and led the development of new features such as a mention system for a Notion-like documentation tool, enhancing the UX and increasing user engagement within the product.",
      "Demonstrated adaptability and a thirst for learning by embracing new technologies, Typescript, styled-components, Apollo client for handling data fetching, caching and optimistic UI updates and also an introduction to Next.js.",
    ],
    tags: [
      { icon: ReactIcon, label: "React" },
      { icon: TSIcon, label: "Typescript" },
      { icon: GraphQLIcon, label: "GraphQL" },
      { icon: TestingLibraryIcon, label: "Testing library" },
      { icon: StyledComponentsIcon, label: "Styled Components" },
    ],
  },
  {
    id: "2",
    company: {
      name: "Monolith.xyz",
      url: "https://monolith.xyz/",
    },
    position: "Frontend Developer",
    startDate: "2021-11-01",
    endDate: "2022-01-31",
    lede: "Secure platform for investing in curated cryptocurrency, emphasising community engagement and compliance.",
    contributions: [
      "Developed new UI functionalities for the Token crypto investment app utilising React Native and TypeScript.",
      "Enhanced the KYC procedure by refining views and collaborating with the design team for a refreshed appearance and user experience.",
    ],
    tags: [
      { icon: ReactIcon, label: "React Native" },
      { icon: TSIcon, label: "Typescript" },
    ],
  },
  {
    id: "3",
    company: {
      name: "Citizens Advice",
      url: "https://www.citizensadvice.org.uk/",
    },
    position: "Frontend Developer",
    startDate: "2017-04-01",
    endDate: "2021-10-31",
    lede: "A network of independent charities offering free confidential advice and information.",
    contributions: [
      "Design and development of the CA design system using a collection of functional CSS classes and components for improved DX, consistency and improved performance.",
      "Leading new feature development and contributing to existing features of a bespoke case management system using Ruby, Rails and React.",
      "Initiated the development of a React component library, aligning it with our newly established design system to accelerate feature delivery processes.",
      "Mentor junior team members, giving guidance on solving technical problems and planning features, ultimately giving them freedom to take more of a leadership role in other projects.",
      "Discovery and development for a new CMS to scale content and it's distribution.",
    ],
    tags: [
      { icon: ReactIcon, label: "React" },
      { icon: GraphQLIcon, label: "GraphQL" },
      { icon: RailsIcon, label: "Rails" },
      { icon: TestingLibraryIcon, label: "Testing library" },
      { icon: LayersIcon, label: "Design systems" },
    ],
  },
  {
    id: "4",
    company: {
      name: "NewsNow",
      url: "https://www.newsnow.co.uk/",
    },
    position: "Web Developer",
    startDate: "2016-03-01",
    endDate: "2017-03-28",
    lede: "A UK independent news aggregator, providing continuous automated content delivery.",
    contributions: [
      "Enhanced UI and added features using a custom Perl template system, optimised legacy CSS with BEM and ITCSS for improved DX. Designed and developed mobile-first views and a comprehensive brand update with new logo and guidelines.",
      "Managed system administration on custom Debian servers, including on-site maintenance in Canary Wharf, supporting the infrastructure behind NewsNow's digital presence.",
    ],
    tags: [
      { icon: PerlIcon, label: "Perl" },
      { icon: CSSIcon, label: "CSS" },
      { icon: JSIcon, label: "Vanilla JS" },
      { icon: UXIcon, label: "UX Design" },
    ],
  },
];
