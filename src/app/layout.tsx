import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Dinwood Furniture | Custom Wood Design",
  description:
    "Premium handcrafted furniture, restoration and custom wood solutions.",
  keywords: ["Furniture", "Woodwork", "Custom Furniture"],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}