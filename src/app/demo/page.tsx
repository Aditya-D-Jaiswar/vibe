"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Sparkles, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { api } from "@/lib/trpc";

export default function DemoPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
  };

  // Example query to test tRPC
  const { data: users } = api.user.getAll.useQuery();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900">Vibe Demo</span>
          </div>
        </nav>
      </header>

      {/* Demo Interface */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI Website Builder{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Demo
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Describe the website you want to build and watch our AI create it in real-time.
            </p>
          </div>

          {/* Input Section */}
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle>Describe Your Website</CardTitle>
              <CardDescription>
                Tell us what kind of website you want to build. Be as specific as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="e.g., A modern portfolio website for a photographer with gallery, about page, and contact form..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  className="px-6"
                >
                  {isGenerating ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Generate
                    </div>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Website Preview</CardTitle>
              <CardDescription>
                Your generated website will appear here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                {isGenerating ? (
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">AI is generating your website...</p>
                  </div>
                ) : prompt ? (
                  <div className="text-center">
                    <Sparkles className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-600">Click &quot;Generate&quot; to see your website come to life!</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">Enter a description to get started</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Example Prompts */}
          <Card className="mt-8 shadow-lg">
            <CardHeader>
              <CardTitle>Try These Examples</CardTitle>
              <CardDescription>
                Click on any example to see how Vibe AI works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "A minimalist portfolio for a UI/UX designer with dark theme",
                  "A modern restaurant website with menu and reservation system",
                  "A tech startup landing page with pricing tiers",
                  "A personal blog about travel with photo galleries"
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="p-4 text-left bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border"
                  >
                    <p className="text-sm text-gray-700">{example}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Debug Info */}
          {users && (
            <Card className="mt-8 shadow-lg">
              <CardHeader>
                <CardTitle>tRPC Connection Test</CardTitle>
                <CardDescription>
                  Database connection status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-600">
                  ✅ tRPC connected successfully. Found {users.length} users in database.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}