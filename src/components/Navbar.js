'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/online-clatians/online-courses.html', label: 'Student Zone' },
    { href: '/p/blog.html', label: 'Blogs' },
    { href: '/clat/about-us.html', label: 'Contact' }
  ]

  const isActive = (path) => {
    if (path === '/' && pathname !== '/') return false
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Top Navbar */}
      <div className="container mx-auto px-4 bg-white">
        <div className="flex flex-col lg:flex-row justify-between items-center py-1 border-b border-gray-200">
          {/* Left: Notification Marquee */}
          <div className="w-full lg:w-auto overflow-hidden mb-1 lg:mb-0">
            <marquee className="py-1.5 text-sm">
              <span className="bg-gray-600 text-white px-2 py-0.5 rounded-full text-sm font-semibold mr-2">
                🔥 New Batches Starting Soon!
              </span>
              <span className="bg-gray-600 text-white px-2 py-0.5 rounded-full text-sm font-semibold mr-2">
                🎯 Enroll Now
              </span>
              <span className="bg-gray-600 text-white px-2 py-0.5 rounded-full text-sm font-semibold">
                🏆 Best CLAT Coaching in Patna
              </span>
            </marquee>
          </div>

          {/* Right: Menu Buttons */}
          <div className="flex flex-wrap justify-center gap-1.5">
            <Link href="/admission" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Admission
            </Link>
            {/* <Link href="/clat/student-section.html" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Student Zone
            </Link> */}
            <Link href="#" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              MockTest
            </Link>
            <Link href="#" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 relative">
              Live Classes
              <span className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-red-500 rounded-full animate-ping"></span>
            </Link>
            <Link href="#" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Videos
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="https://s6.imgcdn.dev/YDF6zi.png" 
                alt="clatians-Logo" 
                width={90} 
                height={42} 
                className="w-auto h-[42px]"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                className={`w-5 h-5 transition-transform duration-200 ${isMobileMenuOpen ? 'transform rotate-90' : ''}`}
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
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`relative font-semibold transition-colors ${
                    isActive(link.href)
                      ? 'text-red-700'
                      : 'text-gray-700 hover:text-red-700'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-700 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="px-3 py-1.5 border-2 border-gray-600 text-gray-600 font-semibold rounded-full hover:bg-gray-600 hover:text-white transition-colors text-sm">
                Call Us
              </button>
              <Link href="#" className="px-4 py-1.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-sm">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'bg-red-50 text-red-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Buttons */}
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