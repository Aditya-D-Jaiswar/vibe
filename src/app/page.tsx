import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Code, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Vibe</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <Link href="/demo" className="text-gray-600 hover:text-gray-900 font-medium">
              Demo
            </Link>
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Build Stunning Websites with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create professional websites in minutes, not hours. Our AI-powered platform 
            understands your vision and brings it to life with cutting-edge design and functionality.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Button size="lg" className="h-12 px-8">
              Start Building Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="h-12 px-8">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything you need to create amazing websites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features that make website building effortless and enjoyable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Generate complete websites in seconds with our advanced AI engine
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-cyan-600" />
              </div>
              <CardTitle>Clean Code</CardTitle>
              <CardDescription>
                Export production-ready code with modern frameworks and best practices
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Smart Design</CardTitle>
              <CardDescription>
                AI-powered design suggestions that adapt to your brand and content
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators building amazing websites with Vibe
          </p>
          <Link href="/demo">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Try Demo Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Vibe AI Website Builder. Built with ❤️ and AI.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}