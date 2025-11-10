import ArrowBackIcon from "../images/arrow_back_icon 1 (1).png";
import ArrowForwardIcon from "../images/352020_arrow_back_icon 1 (1).png";
import Line from "../images/line.png";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-100 via-blue-50 to-pink-100"></div>

      {/* Decorative dots pattern */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div>
            <div className="mb-4 flex items-center gap-2 ">
              <span className="text-emerald-500 font-bold text-3xl uppercase tracking-widest">
                Hire Dedicated
              </span>
              <img
                src={Line.src}
                alt="Hire Dedicated Icon"
                className="w-53 object-contain"
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-6 leading-tight">
              Developers
            </h1>

            <p className="text-slate-700 text-base font-semibold mb-6">
              Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
            </p>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-rose-400 text-white rounded-lg hover:bg-rose-500 font-semibold text-base transition flex items-center justify-center gap-2">
                View More
                <img
                  src={ArrowBackIcon.src}
                  alt="arrow back"
                  className="w-6 h-6"
                />
              </button>
              <button className="px-8 py-3 border-2 border-emerald-500 text-emerald-600 rounded-lg hover:bg-emerald-50 font-semibold text-base transition flex items-center justify-center gap-2">
                Get In Touch
                <img
                  src={ArrowForwardIcon.src}
                  alt="arrow back"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Create Your Team
            </h3>
            <p className="text-gray-600 text-sm mb-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter You Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter You Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter You Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="Enter You Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Project Brief
                </label>
                <textarea
                  placeholder="Enter You Project Brief"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 bg-rose-400 text-white rounded-lg hover:bg-rose-500 font-semibold text-base transition flex items-center justify-center gap-2">
                Hire Software Developer
                <img
                  src={ArrowBackIcon.src}
                  alt="arrow back"
                  className="w-6 h-6"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
