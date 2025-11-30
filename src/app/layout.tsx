import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Digital Guild System | 地方創生×Web3",
  description: "地方の短期労働とステーブルコイン決済を統合した新しいプラットフォーム",
};

import { WalletProvider } from "@/context/WalletContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-noto-sans-jp), var(--font-inter), sans-serif' }}
      >
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
