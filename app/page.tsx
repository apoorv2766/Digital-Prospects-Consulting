import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhyHireSection from "@/components/why-hire-section"
import VettingSection from "@/components/vetting-section"
import TechStackSection from "@/components/tech-stack-section"
import DarkFeaturesSection from "@/components/dark-features-section"
import CompaniesSection from "@/components/companies-section"
import ProcessSection from "@/components/process-section"
import GuideSection from "@/components/guide-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <HeroSection />
      <WhyHireSection />
      <VettingSection />
      <TechStackSection />
      <DarkFeaturesSection />
      <CompaniesSection />
      <ProcessSection />
      <GuideSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
