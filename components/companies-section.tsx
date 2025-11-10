import topCompanyImage from "../top_compony.jpg";

const trustFeatures = [
  "Client-Centric Approach",
  "Best-in-Class Project Management",
  "Global Quality Standards",
  "Time-Zone Compatibility",
  "Cutting-Edge Infrastructure",
  "Agile Adaptability",
]

export default function CompaniesSection() {
  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-gray-600">Developer at Work</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Companies Trust ValueCoders <br /> For Hiring Software Developers
            </h2>

            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
              Industry's Standard Dummy Text Ever Since The 1500s. When An Unknown Printer Took A Galley Of Type And
              Scrambled It To Make A Type Specimen Book.
            </p>

            {/* Grid of checkmark features */}
            <div className="grid grid-cols-2 gap-6">
              {trustFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
