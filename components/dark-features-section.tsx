import bgBlue from "../images/bg-blue.jpg";

const features = [
  "English Speaking Programmers",
  "Flexible Work Hours",
  "Rapid Onboarding Process",
  "Expertise In Top Technologies",
  "Reliable Partner Credentials",
]

export default function DarkFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Heading above Image */}
          <div className="flex flex-col h-96 bg-transparent rounded-lg overflow-visible relative justify-start">
            <h4 className="z-20 relative text-3xl md:text-4xl font-bold text-white pl-2 pt-2 leading-tight ">
              Why Hire Software Developers
              <br />
              <span className="block mt-1 text-3xl md:text-4xl">In India?</span>
            </h4>
            <div className="flex-1 relative rounded-lg overflow-hidden">
              <img
                src={bgBlue.src}
                alt="People at Window"
                className="absolute inset-0 w-full h-full object-cover "
                style={{
                  objectPosition: "center",
                  opacity: 0.52,
                  zIndex: 0,
                }}
              />
              <div className="absolute inset-0 rounded-lg bg-blue-900/70 z-10"></div>
            </div>
          </div>
          {/* Right - Features list */}
          <div>
            <div className="space-y-0">
              {features.map((feature, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between py-6">
                    <p className="text-white font-medium text-lg">{feature}</p>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  {idx !== features.length - 1 && <div className="border-b border-slate-700"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
