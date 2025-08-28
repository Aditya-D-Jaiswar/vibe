import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe - AI Website Builder",
  description: "Build stunning websites with AI assistance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}