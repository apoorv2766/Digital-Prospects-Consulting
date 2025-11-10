import vettingPhoto from "../images/photo2.jpg";

export default function VettingSection() {
  return (
    <section className="bg-linear-to-b from-white to-rose-50 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative wavy lines on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <svg width="150" height="300" viewBox="0 0 150 300" className="text-gray-400">
          <path d="M 20 0 Q 40 50 20 100 Q 0 150 20 200" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 40 0 Q 60 50 40 100 Q 20 150 40 200" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Rigorous Vetting</h2>

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
                <h3 className="text-lg font-bold text-gray-900 mb-2">5+ Hours Of Tests And Interviews</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">Seniority Tests</h3>
                <p className="text-gray-600 leading-relaxed">
                  Hire The Top 1% Of 1.5 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Illustration placeholder */}
          <div 
            className="flex justify-center" 
            style={{ 
              position: "relative", 
              top: "71.65px", 
              left: "95.31px", 
              opacity: 1,
              transform: "rotate(0deg)"
            }}
          >
            <div className="text-center">
              <img
                src={vettingPhoto.src}
                alt="Developer Vetting"
                style={{
                  width: "411.7px",
                  height: "438.74px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
                className="mx-auto mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
