import mainPhoto from "../images/photo1.jpg";

export default function WhyHireSection() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative wavy lines on left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="200" height="400" viewBox="0 0 200 400" className="text-gray-400">
          <path d="M 20 0 Q 40 50 20 100 Q 0 150 20 200" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 40 0 Q 60 50 40 100 Q 20 150 40 200" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 60 0 Q 80 50 60 100 Q 40 150 60 200" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Dotted pattern on right */}
      <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
        <div className="flex flex-wrap gap-2 w-64">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Hire Developers From Our Name</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The
            Industry's Standard Dummy Text Ever Since
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration placeholder */}
          <div className="flex justify-center">
            <div
              className="flex items-center justify-center"
              style={{
                position: "relative",
                width: "407.73px",
                height: "321.38px",
                top: "75.3px",
                left: "28.07px",
                opacity: 1,
                transform: "rotate(0deg)"
              }}
            >
              <img
                src={mainPhoto.src}
                alt="Developer at Work"
                style={{
                  width: "407.73px",
                  height: "321.38px",
                  maxWidth: "100%",
                  maxHeight: "100%"
                }}
              />
            </div>
          </div>

          {/* Right - Features */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">High Quality/Cost Ratio</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hire Silicon Valley Caliber At Half The Cost. Hire The Top 1% Of 1.5 Million+ Developers From 150+
                  Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100+ Skills Available</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
