import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Developer - Chris Brett",
  description: "Professional information and 'resumé' of Chris Brett",
  robots: "index, follow",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="h-full">
      {children}
    </html>
  );
}
