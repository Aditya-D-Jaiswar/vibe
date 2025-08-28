import type { Metadata } from "next"
import "./globals.css"
import { TRPCProvider } from "@/lib/trpc"

export const metadata: Metadata = {
  title: "Vibe - AI Website Builder",
  description: "Build beautiful websites with AI-powered assistance",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  )
}