const steps = [
  {
    number: "1",
    icon: "❓",
    title: "INQUIRY",
    description: "Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    number: "2",
    icon: "💻",
    title: "SELECT DEVELOPERS",
    description: "Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    number: "3",
    icon: "👤",
    title: "TEAM INTEGRATION",
    description: "Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    number: "4",
    icon: "🪟",
    title: "TEAM SCALING",
    description: "Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-gradient-to-r from-cyan-50 via-white to-pink-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take A Look At Our Simple And Straightforward Process To Hire Software Developers From ValueCoders.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Circle with border */}
                <div className="relative mb-6 w-full flex justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-emerald-500 relative">
                    {/* Pink numbered badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    {/* Icon */}
                    <span className="text-4xl">{step.icon}</span>
                  </div>

                  {/* Connecting arrow - hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="absolute -right-3 md:-right-8 top-1/2 transform -translate-y-1/2 text-3xl text-gray-300">
                      →
                    </div>
                  )}
                </div>

                {/* Step label and description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
