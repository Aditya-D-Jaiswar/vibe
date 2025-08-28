import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Palette, Code } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Vibe</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/demo">
              <Button variant="outline">Try Demo</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Build Websites with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Magic
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create stunning, professional websites in minutes with our AI-powered builder. 
            No coding required, just describe your vision and watch it come to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Building Free
            </Button>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>AI-Powered Design</CardTitle>
              <CardDescription>
                Describe your website and our AI creates beautiful, responsive designs instantly.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Build and deploy websites in minutes, not days. Perfect for rapid prototyping.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Infinite Customization</CardTitle>
              <CardDescription>
                Fine-tune every aspect of your design with intuitive visual controls.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle>Clean Code Export</CardTitle>
              <CardDescription>
                Export production-ready code in React, Vue, or vanilla HTML/CSS.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Smart Components</CardTitle>
              <CardDescription>
                Pre-built components that adapt to your content and design needs automatically.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to build your dream website?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already building amazing websites with Vibe AI.
          </p>
          <Button size="lg" className="text-lg px-8 py-3">
            Get Started for Free
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2024 Vibe. All rights reserved. Built with ❤️ and AI.</p>
      </footer>
    </div>
  );
}