import "@/assets/globals.css";
import { Inter } from "next/font/google";

type HomepageLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function HomepageLayout({ children }: HomepageLayoutProps) {
  return (
    <body
      className={`${inter.className} bg-[rgb(26,27,30)] text-[rgb(230,230,230)]`}
    >
      {children}

      <noscript>
        <style>
          {`
            #root-container {
              opacity: 1 !important;
              transform: none !important;
            }

            .history-list-item__button {
              display: none;
            }
          `}
        </style>
      </noscript>
    </body>
  );
}
