import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Hulki Enes Uysal",
  description: "Full Stack Engineer dedicated to building high-quality products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
