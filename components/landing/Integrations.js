

export default function LandingPage() {
  return (
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-medium tracking-tight text-gray-700">
                Seamlessly integrates with your favorite tools
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
              <div className="flex items-center justify-center">
                <img src="/zoom-logo.png" alt="Zoom logo" className="h-32 w-auto" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/teams-logo.png" alt="Teams logo" className="h-16 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}
