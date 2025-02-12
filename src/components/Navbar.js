export default function Navbar() {
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
            <a href="/clat/admission.html" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Admission
            </a>
            <a href="/clat/student-section.html" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Student Zone
            </a>
            <a href="#" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              MockTest
            </a>
            <a href="#" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50 relative">
              Live Classes
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>
            </a>
            <a href="#" className="px-4 py-1.5 text-sm border border-gray-300 rounded-full hover:bg-gray-50">
              Videos
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src="https://s6.imgcdn.dev/YDF6zi.png" alt="clatians-Logo" className="h-12" />
            </a>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-red-700 font-semibold">Home</a>
              <a href="/p/another-page.html" className="text-gray-700 hover:text-red-700 font-semibold">About</a>
              <a href="/offline-clatians/offline-courses.html" className="text-gray-700 hover:text-red-700 font-semibold">Offline Courses</a>
              <a href="/online-clatians/online-courses.html" className="text-gray-700 hover:text-red-700 font-semibold">Online Courses</a>
              <a href="/p/blog.html" className="text-gray-700 hover:text-red-700 font-semibold">Blogs</a>
              <a href="/clat/about-us.html" className="text-gray-700 hover:text-red-700 font-semibold">Contact</a>
            </div>

            {/* Right Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Call Us Dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 border-2 border-gray-600 text-gray-600 font-semibold rounded-full hover:bg-gray-600 hover:text-white transition-colors">
                  Call Us
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <a href="tel:+918507700177" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 8507700177
                  </a>
                </div>
              </div>

              {/* Download App Button */}
              <a href="#" className="px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg">
                Download App
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}