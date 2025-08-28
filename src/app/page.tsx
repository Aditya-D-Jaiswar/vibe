import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Zap, Code, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-7xl font-bold gradient-text">
              Welcome to Vibe
            </h1>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
              Build stunning websites with AI-powered tools. Transform your ideas into reality in minutes, not hours.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js 15, React 19, and Tailwind v4
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button variant="outline" size="lg">
              <Code className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powered by AI</h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Generate websites in seconds with our advanced AI engine
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Palette className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle>Beautiful Designs</CardTitle>
              <CardDescription>
                Modern, responsive designs that look great on any device
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Code className="h-10 w-10 text-pink-600 mb-2" />
              <CardTitle>Clean Code</CardTitle>
              <CardDescription>
                Production-ready code following best practices and standards
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Status Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Next.js 15</span>
              <span className="text-green-600 font-medium">✓ Active</span>
            </div>
            <div className="flex justify-between">
              <span>React 19</span>
              <span className="text-green-600 font-medium">✓ Active</span>
            </div>
            <div className="flex justify-between">
              <span>Tailwind v4</span>
              <span className="text-green-600 font-medium">✓ Active</span>
            </div>
            <div className="flex justify-between">
              <span>Neon Database</span>
              <span className="text-green-600 font-medium">✓ Connected</span>
            </div>
            <div className="flex justify-between">
              <span>AI Integration</span>
              <span className="text-yellow-600 font-medium">⏳ Ready</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}