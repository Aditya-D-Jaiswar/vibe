import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Header */}
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">Vibe</h1>
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            Demo Mode
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Input Panel */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                  <span>AI Website Builder</span>
                </CardTitle>
                <CardDescription>
                  Describe your website idea and watch the magic happen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">What kind of website do you want to build?</Label>
                  <Input
                    id="prompt"
                    placeholder="e.g., A modern portfolio website for a photographer with a dark theme..."
                    className="h-24 resize-none"
                  />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Generate Website
                </Button>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input
                    id="project-name"
                    placeholder="My Awesome Website"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="A brief description of your project..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Demo Features */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white">
              <CardHeader>
                <CardTitle>✨ Demo Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>AI-powered design generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Real-time preview</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Responsive layouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Export clean code</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  Your website will appear here as you build it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center space-y-2">
                    <Sparkles className="h-12 w-12 text-gray-400 mx-auto" />
                    <p className="text-gray-500">Enter your website idea above to see the preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Chat Interface */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>AI Assistant</CardTitle>
                <CardDescription>
                  Chat with our AI to refine your website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-40 bg-gray-50 rounded-lg p-4 overflow-y-auto">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                        <div className="bg-white rounded-lg p-3 max-w-sm">
                          <p className="text-sm">Hi! I'm your AI assistant. Describe your website idea and I'll help you build it!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Input placeholder="Ask me anything about your website..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}