"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "../images/arrow_back.jpg";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with lightning bolt icon */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {/* Green circular logo */}
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Logosipsum</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1">
                Software Team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Technologies
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Resources
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Company
            </Link>
            <button className="px-6 py-2 border-2 border-emerald-500 text-emerald-500 rounded-lg hover:bg-emerald-50 text-sm font-medium transition flex items-center gap-2">
              Get In Touch
              <img src={Image.src} alt="arrow back" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
            <img src={Image.src} alt="menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="#" className="block text-gray-600 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="block text-gray-600 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="#" className="block text-gray-600 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="#" className="block text-gray-600 py-2 text-sm font-medium">
              Blogs
            </Link>
            <button className="w-full px-6 py-2 border border-emerald-500 text-emerald-500 rounded-md hover:bg-emerald-50 text-sm font-medium mt-2">
              Sign up
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
