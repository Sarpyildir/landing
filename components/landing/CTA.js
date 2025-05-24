
import { Button } from "@/components/ui/button"


export default function LandingPage() {
  return (
      <section className="w-full py-12 md:py-24 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Meetings?</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of teams who have already improved their meeting productivity
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Button size="lg" className="cursor-pointer bg-white text-purple-600 hover:bg-gray-300 transition-colors px-8">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer bg-purple hover:bg-white/10 px-8">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

  )
}
