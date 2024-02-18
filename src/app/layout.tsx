import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/assets/globals.css";

export const metadata: Metadata = {
  title: "Frontend Developer - Chris Brett",
  description: "Professional information or 'resumé' of Chris Brett",
  robots: "index, follow",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark-theme`}>
        {children}

        <noscript>
          <style>
            {`
            main {
              opacity: 1 !important;
              transform: none !important;
            }

            .history-item-body ul {
              mask-image: none !important;
              max-height: 100% !important;
              overflow: visible !important;
            }

            .history-item-expand-button {
              display: none !important;
              height: 0 !important;
            }
          `}
          </style>
        </noscript>
      </body>
    </html>
  );
}
