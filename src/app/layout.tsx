import "@/assets/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RootContainer } from "@/components/root-container";

export const metadata: Metadata = {
  title: "Frontend Developer - Chris Brett",
  description: "Professional information and 'resumé' of Chris Brett",
  robots: "index, follow",
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} h-full bg-[rgb(26,27,30)] text-gray-100`}
      >
        <RootContainer>
          <Header />
          <main className="flex-grow">{children}</main>
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
    </html>
  );
}
