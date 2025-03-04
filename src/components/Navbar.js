'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [selectedCourseType, setSelectedCourseType] = useState('online')
  const [expandedMobileType, setExpandedMobileType] = useState(null)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsCoursesOpen(false)
    setExpandedMobileType(null)
  }, [pathname])

  const courseTypes = {
    online: {
      label: 'Online Coaching',
      courses: [
        { name: 'CLAT', href: '/courses/online/0' },
        { name: 'CLAT+AILET', href: '/courses/online/1' },
        { name: 'CUET-Law (UG)', href: '/courses/online/2' },
        { name: 'CUET-Law (PG)', href: '/courses/online/3' },
        { name: 'AIL-LET', href: '/courses/online/4' },
        { name: 'Booster Courses', href: '/courses/online/5' },
      ]
    },
    offline: {
      label: 'Offline Coaching',
      courses: [
        { name: 'CLAT', href: '/courses/offline/0' },
        { name: 'CLAT+AILET', href: '/courses/offline/1' },
        { name: 'CUET-Law', href: '/courses/offline/2' },
        { name: 'CLAT + OLET', href: '/courses/offline/3' },
        { name: 'OLET(CUET-LAW + AIL-LET + MH-CET', href: '/courses/offline/4' },
      ]
    },
    mock: {
      label: 'Mock Test',
      courses: [
        { name: 'CLAT Mock Test', href: '/courses/mock/clat' },
        { name: 'All Exams Mock Test', href: '/courses/mock/all-exams' },
      ]
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses', hasDropdown: true },
    { href: '/studentZone', label: 'Student Zone' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contactUs', label: 'Contact' }
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
            <Link href="/lawEntranceExams" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Law Entrance Exams
            </Link>
            <Link href="/onlineResources" className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 relative">
              Online Resources
              {/* <span className="absolute -top-1 -right-1 h-1.5 w-1.5 bg-red-500 rounded-full animate-ping"></span> */}
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
                src="https://clatwallah.netlify.app/images/logo.png" 
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
                <div key={link.href} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                      onMouseEnter={() => setIsCoursesOpen(true)}
                      className={`relative font-semibold transition-colors ${
                        isActive(link.href) || isCoursesOpen
                          ? 'text-red-700'
                          : 'text-gray-700 hover:text-red-700'
                      }`}
                    >
                      {link.label}
                      <span className={`ml-1 align-middle inline-block transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg></span>
                      {(isActive(link.href) || isCoursesOpen) && (
                        <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-700 rounded-full"></span>
                      )}
                    </button>
                  ) : (
                    <Link 
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
                  )}

                  {/* Courses Dropdown */}
                  {link.hasDropdown && isCoursesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-[650px] bg-white shadow-xl rounded-lg overflow-hidden"
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <div className="flex">
                        {/* Course Types */}
                        <div className="w-1/2 bg-white">
                          {Object.entries(courseTypes).map(([type, { label }]) => (
                            <button
                              key={type}
                              className={`w-full flex justify-between text-left py-2 pl-4 mb-2 ${
                                selectedCourseType === type
                                  ? 'bg-[#F8F8F8] text-black font-semibold'
                                  : 'hover:bg-gray-100'
                              }`}
                              onMouseEnter={() => setSelectedCourseType(type)}
                            >
                              {label}
                              <span className={`ml-1 align-middle inline-block`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</span>
                            </button>
                          ))}
                        </div>
                        {/* Course List */}
                        <div className="w-2/3 p-4 bg-[#F8F8F8]">
                          <div className="grid grid-cols-2 gap-4 bg-[#F8F8F8]">
                            {courseTypes[selectedCourseType].courses.map((course) => (
                              <Link
                                key={course.href}
                                href={course.href}
                                className="px-3 py-[14px] md:h-12 shadow-xl rounded-[4px] bg-[#FFFFFF] text-sm truncate  hover:text-black hover:border-[1px] hover:border-black transition-colors"
                              >
                                {course.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
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
              isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 space-y-4 border-t border-gray-200">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => {
                          setIsCoursesOpen(!isCoursesOpen)
                          if (!isCoursesOpen) {
                            setExpandedMobileType(null)
                          }
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          isActive(link.href) || isCoursesOpen
                            ? 'bg-red-50 text-red-700 font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {link.label}
                        <span className={`ml-1 inline-block align-middle transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                      {isCoursesOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {Object.entries(courseTypes).map(([type, { label, courses }]) => (
                            <div key={type} className="space-y-2 bg-[#F8F8F8] rounded-md">
                              <button
                                onClick={() => setExpandedMobileType(expandedMobileType === type ? null : type)}
                                className={`w-full flex items-center justify-between px-4 py-2 font-semibold ${
                                  expandedMobileType === type ? 'text-gray-700' : 'text-gray-700'
                                }`}
                              >
                                {label}
                                <span className={`transition-transform ${expandedMobileType === type ? 'rotate-180' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </span>
                              </button>
                              <div className={`overflow-hidden transition-all duration-300 ${
                                expandedMobileType === type ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                              }`}>
                                <div className="grid grid-cols-2 gap-2 px-4 py-2">
                                  {courses.map((course) => (
                                    <Link
                                      key={course.href}
                                      href={course.href}
                                      className="px-3 py-[14px] shadow-xl rounded-[4px] bg-[#FFFFFF] text-sm truncate hover:text-black hover:border-[1px] hover:border-black transition-colors"
                                    >
                                      {course.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 rounded-lg transition-colors ${
                        isActive(link.href)
                          ? 'bg-red-50 text-red-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
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