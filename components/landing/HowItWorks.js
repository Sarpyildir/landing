
export default function LandingPage() {
  return (
      <section id="how-it-works" className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-2">
              Simple Process
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MeetingGPT seamlessly integrates into your workflow
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg bg-white shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Connect</h3>
              <p className="text-gray-500">
                Open MeetingGPT app and start recording
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg bg-white shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Meet</h3>
              <p className="text-gray-500">
                MeetingGPT automatically listens to your meetings and works silently in the background
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg bg-white shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Review</h3>
              <p className="text-gray-500">
                Access your meeting summaries, action items, and follow-up emails in your secure dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

  )
}
