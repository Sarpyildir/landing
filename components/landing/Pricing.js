
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (

      <section id="pricing" className="w-full py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-2">
              Pricing
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Simple, Transparent Pricing
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that's right for your team
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:gap-8 mt-12 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col p-6 bg-white border rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Starter</h3>
                <p className="text-gray-500">For small teams or students getting started</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$7</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-2 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Up to 5 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>10 hours of meeting recordings per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Basic summaries and action items</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>7-day data retention</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
            <div className="flex flex-col p-6 bg-white border-2 border-purple-200 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Professional</h3>
                <p className="text-gray-500">For growing teams</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$17</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-2 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Up to 15 team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>30 hours of meeting recordings per month</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Summaries and Action items</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Creating E-Mails and ToDos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>30-day data retention</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
            <div className="flex flex-col p-6 bg-white border rounded-lg shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
                <p className="text-gray-500">For large organizations</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">$20</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mb-8 space-y-2 flex-grow">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited team members</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited meeting recordings</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Summaries and Action items</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Creating E-Mails and ToDos</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Unlimited data retention</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Live support</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

  )
}
