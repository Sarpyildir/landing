import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block text-purple-700 text-sm font-medium mb-2">
                  <span className="px-3 py-1 rounded-full bg-purple-100">AI-Powered Meeting Assistant</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Transform Your <span className="text-purple-600">Meetings</span> with AI
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Automatically capture, transcribe, and summarize your meetings. Never miss an action item again.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 transition-colors px-8">
                  Register For Free Trial
                </Button>
                <Button disabled size="lg" variant="outline" className="border-gray-300 text-purple-900 hover:bg-gray-100 px-8">
                  Planned Release August
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>1-day free trial</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-md flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="MeetingGPT dashboard preview"
                  className="max-w-full max-h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
