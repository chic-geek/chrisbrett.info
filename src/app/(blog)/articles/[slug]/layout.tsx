import { Inter } from "next/font/google";

import "@/assets/globals.css";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RootContainer } from "@/components/root-container";

type ArticleLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <body
      className={`${inter.className} h-full bg-[rgb(26,27,30)] text-[rgb(230,230,230)]`}
    >
      <RootContainer>
        <Header />
        <main className="flex-grow">
          <section className="py-4">
            <Container>{children}</Container>
          </section>
        </main>
        <Footer />
      </RootContainer>

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
