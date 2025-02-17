'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center py-2 border-b border-gray-200">
          {/* Left: Notification Marquee */}
          <div className="w-full lg:w-auto overflow-hidden mb-2 lg:mb-0">
            <marquee className="py-3 text-sm">
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full h-24 text-sm font-semibold mr-2">
                🔥 New Batches Starting Soon!
              </span>
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2">
                🎯 Enroll Now
              </span>
              <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏆 Best CLAT Coaching in Patna
              </span>
            </marquee>
          </div>

          {/* Right: Menu Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/clat/admission.html" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Admission
            </Link>
            <Link href="/clat/student-section.html" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Student Zone
            </Link>
            <Link href="#" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              MockTest
            </Link>
            <Link href="#" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50 relative">
              Live Classes
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            </Link>
            <Link href="#" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Videos
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image src="https://s6.imgcdn.dev/YDF6zi.png" alt="clatians-Logo" width={100} height={28} />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? 'transform rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-red-700 font-semibold">Home</Link>
              <Link href="/p/another-page.html" className="text-gray-700 hover:text-red-700 font-semibold">About</Link>
              <Link href="/offline-clatians/offline-courses.html" className="text-gray-700 hover:text-red-700 font-semibold">Offline Courses</Link>
              <Link href="/online-clatians/online-courses.html" className="text-gray-700 hover:text-red-700 font-semibold">Online Courses</Link>
              <Link href="/p/blog.html" className="text-gray-700 hover:text-red-700 font-semibold">Blogs</Link>
              <Link href="/clat/about-us.html" className="text-gray-700 hover:text-red-700 font-semibold">Contact</Link>
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative group">
                <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-semibold rounded-full hover:bg-gray-600 hover:text-white transition-colors">
                  Call Us
                </button>
              </div>

              <Link href="#" className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg">
                Download App
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4 border-t border-gray-200">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Home</Link>
              <Link href="/p/another-page.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">About</Link>
              <Link href="/offline-clatians/offline-courses.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Offline Courses</Link>
              <Link href="/online-clatians/online-courses.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Online Courses</Link>
              <Link href="/p/blog.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Blogs</Link>
              <Link href="/clat/about-us.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">Contact</Link>
              
              <div className="px-4 py-2 space-y-3">
                <button className="w-full px-4 py-2 border-2 border-gray-600 text-gray-600 font-semibold rounded-full hover:bg-gray-600 hover:text-white transition-colors">
                  Call Us
                </button>
                <Link href="#" className="block w-full px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full text-center hover:opacity-90 transition-opacity shadow-lg">
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}