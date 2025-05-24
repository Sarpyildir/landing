
export default function LandingPage() {
  return (
      <section id="features" className="w-full py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-2">
              Features
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Powerful Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to make your meetings more productive
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-purple-100 rounded-full text-purple-600">
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
                  className="h-6 w-6"
                >
                  <path d="M21 15V6" />
                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M12 12H3" />
                  <path d="M16 6H3" />
                  <path d="M12 18H3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Automatic Transcription</h3>
              <p className="text-gray-500 text-center">
                Captures audio and transcribes every speaker with high accuracy
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-blue-100 rounded-full text-blue-600">
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
                  className="h-6 w-6"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                  <path d="M9 9h1" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Concise Summaries</h3>
              <p className="text-gray-500 text-center">
                Delivers bullet-point summaries of decisions, risks, and next steps
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-green-100 rounded-full text-green-600">
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
                  className="h-6 w-6"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Action Item Detection</h3>
              <p className="text-gray-500 text-center">
                Automatically detects action items and turns them into assignable tasks
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-amber-100 rounded-full text-amber-600">
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
                  className="h-6 w-6"
                >
                  <rect width="16" height="13" x="4" y="5" rx="2" />
                  <path d="m19 5-7 7-7-7" />
                  <path d="M4 19h16" />
                  <path d="M4 15h4" />
                  <path d="M16 15h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Follow-up Emails</h3>
              <p className="text-gray-500 text-center">Generates polished follow-up email drafts with a single click</p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-teal-100 rounded-full text-teal-600">
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
                  className="h-6 w-6"
                >
                  <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
                  <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
                  <path d="M4 12h16" />
                  <path d="M15 12v4" />
                  <path d="M9 12v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Secure Dashboard</h3>
              <p className="text-gray-500 text-center">
                All meeting data is stored in a secure web dashboard for easy access
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 bg-indigo-100 rounded-full text-indigo-600">
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
                  className="h-6 w-6"
                >
                  <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Tool Integration</h3>
              <p className="text-gray-500 text-center">Connect with tools like Zoom, Teams or any online call app.</p>
            </div>
          </div>
        </div>
      </section>

  )
}
