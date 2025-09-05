export default function AboutHero({ route, page }) {
  return (
    <div className="relative h-[300px] md:h-[400px] overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-green-100"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 via-green-200/30 to-teal-200/30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-info-circle-fill mr-2"></i>
            ABOUT US
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-800 to-green-800 bg-clip-text text-transparent uppercase tracking-wider">
            {page}
          </h1>

          {/* Breadcrumb */}
          <nav className="text-base md:text-lg font-medium">
            <a href="/" className="text-teal-600 hover:text-teal-800 transition-colors font-bold">
              {route}
            </a>
            <span className="text-teal-500 mx-3">
              <i className="bi bi-chevron-right"></i>
            </span>
            <span className="text-gray-800 font-semibold">{page}</span>
          </nav>

          {/* Decorative elements */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
          <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="white"></path>
        </svg>
      </div>
    </div>
  )
} 