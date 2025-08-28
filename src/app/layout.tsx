import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe - AI Website Builder",
  description: "Build stunning websites with AI-powered tools. Transform your ideas into reality in minutes, not hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}