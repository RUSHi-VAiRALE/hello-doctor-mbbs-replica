import Link from "next/link"

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <i className="bi bi-mortarboard-fill mr-2"></i>
              EXPERIENCE & EXPERTISE
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              We're <span className="text-yellow-300">Experienced</span> in Consulting Abroad Education
            </h2>

            <p className="text-blue-100 mb-4 text-lg">
              With years of expertise in providing world-class education consulting, we have helped thousands of students
              achieve their dreams of studying abroad at top universities.
            </p>

            <p className="text-blue-200 mb-8 text-lg">
              <strong className="text-white">Join us today</strong> and experience expert guidance for your international education journey!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/onlineResources" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Learn More →
              </Link>
              <Link href="/admission" className="inline-block px-6 py-3 border-2 border-blue-400 text-blue-200 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                How it Works →
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px] mx-auto">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg border-2 border-white/20" alt="Student 1" />
              <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" className="absolute top-1/2 right-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg border-2 border-white/20" alt="Student 2" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg border-2 border-white/20" alt="Student 3" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" className="absolute top-1/2 left-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg border-2 border-white/20" alt="Student 4" />

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] md:w-[160px] h-[130px] md:h-[160px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-center text-white font-bold text-lg md:text-xl shadow-2xl">
                <span>25 <br /> Years Of <br /> Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 