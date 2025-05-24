export default function LandingPage() {
  return (
    <section className="w-full py-12 md:py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-2">
              Roadmap
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Development Timeline</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Follow our journey from concept to launch
              </p>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Items */}
            <div className="relative flex justify-between">
              {/* Item 1 */}
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 5v14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">Concept</h3>
                  <p className="text-sm text-gray-500">Q1 2025</p>
                  <div className="mt-2 max-w-[150px] text-sm">Initial idea and market research</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">Development</h3>
                  <p className="text-sm text-gray-500">Q2 2025</p>
                  <div className="mt-2 max-w-[150px] text-sm">Building core features</div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">Alpha Testing</h3>
                  <p className="text-sm text-gray-500">Q2 2025</p>
                  <div className="mt-2 max-w-[150px] text-sm">Internal testing and refinement</div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">Beta Release</h3>
                  <p className="text-sm text-gray-500">Q3 2025</p>
                  <div className="mt-2 max-w-[150px] text-sm">Limited user testing</div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center relative">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-bold text-gray-900">Official Launch</h3>
                  <p className="text-sm text-gray-500">Q4 2025</p>
                  <div className="mt-2 max-w-[150px] text-sm">Public release</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative border-l-2 border-gray-200 ml-4 pl-8 space-y-10">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 5v14"></path>
                    <path d="M18 13l-6 6"></path>
                    <path d="M6 13l6 6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Concept</h3>
                  <p className="text-sm text-gray-500">Q1 2023</p>
                  <div className="mt-1 text-sm">Initial idea and market research</div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Development</h3>
                  <p className="text-sm text-gray-500">Q2 2023</p>
                  <div className="mt-1 text-sm">Building core features</div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Alpha Testing</h3>
                  <p className="text-sm text-gray-500">Q3 2023</p>
                  <div className="mt-1 text-sm">Internal testing and refinement</div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Beta Release</h3>
                  <p className="text-sm text-gray-500">Q4 2023</p>
                  <div className="mt-1 text-sm">Limited user testing</div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Official Launch</h3>
                  <p className="text-sm text-gray-500">Q1 2024</p>
                  <div className="mt-1 text-sm">Public release</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}
