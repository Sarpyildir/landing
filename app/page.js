import Navbar from "@/components/landing/Navbar"
import HeroSection from "@/components/landing/HeroSection"
import Roadmap from "@/components/landing/Roadmap"
import Integrations from "@/components/landing/Integrations"
import FeaturesSection from "@/components/landing/Features"
import HowItWorks from "@/components/landing/HowItWorks"
import Testimonials from "@/components/landing/Testimonials"
import PricingSection from "@/components/landing/Pricing"
import CTASection from "@/components/landing/CTA"
import Footer from "@/components/landing/Footer"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Roadmap />
      <Integrations />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  )
}