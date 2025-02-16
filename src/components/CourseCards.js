import Image from 'next/image'

export default function CourseCards() {
  return (
    <section className="bg-[#e7edff] py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
          {/* Online Courses Card */}
          <div className="bg-white w-full gap-y-3 flex-col justify-between rounded-lg shadow-lg">
            <div className="flex flex-col gap-y-3 mb-3 justify-between items-center">
              <div className="py-1">
                <Image
                  src="https://clatwallah.netlify.app/images/logo.png"
                  alt="CLATians Logo"
                  width={120}
                  height={120}
                  className="w-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3 px-6">
                {['CLAT', 'CLAT + AILET', 'CUET-LAW', 'OLET', 'CLAT + OLET', 'Mock Test Series'].map((course) => (
                  <button
                    key={course}
                    className="flex-1 min-w-[150px] px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <button className="w-full py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Explore Online Courses
              </button>
            </div>
          </div>

          {/* Offline Courses Card */}
          <div className="bg-white w-full gap-y-3 flex-col justify-between rounded-lg shadow-lg">
            <div className="flex flex-col gap-y-3 mb-3 justify-between items-center">
              <div className="py-1">
                <Image
                  src="https://clatwallah.netlify.app/images/logo.png"
                  alt="CLATians Logo"
                  width={120}
                  height={120}
                  className="w-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center gap-3 px-6">
                {['CLAT', 'CLAT + AILET', 'CUET-LAW', 'OLET', 'CLAT + OLET', 'Mock Test Series'].map((course) => (
                  <button
                    key={course}
                    className="flex-1 min-w-[150px] px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <button className="w-full py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Explore Offline Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 