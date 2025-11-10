"use client"
import { useState } from "react"
import UserGuide from "../images/userguide.jpg"


const menuItems = [
  "Benefits Of Hiring Developers",
  "Key Factors To Consider While Hiring",
  "Defining Your Project Requirements",
  "Choosing The Right Development Model",
  "Typical Challenges For Hiring Developers",
  "Hiring Freelancers Vs. Dedicated Developers",
  "Communication With Remote Developers",
]

const benefits = [
  "Client-Centric Approach",
  "Best-in-Class Project Management",
  "Global Quality Standards",
  "Time-Zone Compatibility",
  "Cutting-Edge Infrastructure",
  "Agile Adaptability",
]

export default function GuideSection() {
  const [activeMenu, setActiveMenu] = useState(1)

  return (
    <section className="bg-linear-to-r from-cyan-50 via-white to-pink-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          User Guide To Hire Dedicated Software Developers
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Menu Navigation */}
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveMenu(index)}
                className={`w-full text-left px-4 py-3 font-medium transition-all ${
                  activeMenu === index ? "bg-emerald-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right - Benefits Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Benefits Of Hiring Developers</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem ipsum Has Been The
              Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And
              Scrambled It To Make A Type Specimen Book.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Image Placeholder */}
            <div className="bg-gray-800 h-56 rounded-lg flex items-center justify-center overflow-hidden">
              <img src={UserGuide.src} alt="Developer working" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
