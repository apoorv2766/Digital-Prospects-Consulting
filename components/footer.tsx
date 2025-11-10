export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <span className="text-xl font-bold">Logosipsum</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-emerald-500 hover:text-white transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.29 20v-7.21H5.733V9.25h2.557V7.151c0-2.537 1.55-3.918 3.8-3.918 1.08 0 2.009.08 2.28.116v2.644h-1.562c-1.228 0-1.465.582-1.465 1.436v1.881h2.926l-.381 3.54h-2.545V20H8.29z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-emerald-500 hover:text-white transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-emerald-500 hover:text-white transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm-1.337 9.763h2.674V7.748H3.668v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-emerald-500 hover:text-white transition"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Software Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Dedicated Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Staff Augmentation Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  Development Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-400">Envato, Level 13, 2 Elizabeth Victoria 3000 India</p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-emerald-500">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.311 3.903 1.096 1.096 2.638 1.893 3.903 2.311l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57C6.75 18 2 13.25 2 7.43V3z" />
                  </svg>
                </div>
                <a href="tel:+918619441176" className="text-gray-400 hover:text-emerald-500 transition">
                  +91 861 944 1176
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-5 h-5 text-emerald-500">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:ezyoga@gmail.com" className="text-gray-400 hover:text-emerald-500 transition">
                  ezyoga@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-500 py-4 text-center">
        <p className="text-white font-medium">logoname. 2023. All rights reserved</p>
      </div>
    </footer>
  )
}
