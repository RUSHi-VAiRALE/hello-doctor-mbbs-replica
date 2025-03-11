'use client'
import { FaClock, FaRegCalendarAlt, FaLaptop, FaSchool } from 'react-icons/fa'

export default function ScholarshipDetails() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Details of CLAT Scholarship Test
          </h2>
          <p className="text-gray-600">
            Check the LPSAT's eligibility, pattern, duration, and more.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Eligibility Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <FaRegCalendarAlt className="text-2xl text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                <p className="text-gray-600 text-sm">
                  Students appearing for or who have completed Class 12th can apply for the scholarship test.
                </p>
              </div>
            </div>
          </div>

          {/* Duration Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <FaClock className="text-2xl text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Duration</h3>
                <p className="text-gray-600 text-sm">1 hour</p>
                <p className="text-gray-600 text-sm mt-2">
                  Slots available between: 10:00 AM to 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Test Modes Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <FaLaptop className="text-2xl text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Test Modes</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaSchool className="text-red-500" />
                    <p className="text-gray-600 text-sm">Mode 1: Offline (at Law Prep Tutorial Bihar Centers)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLaptop className="text-blue-500" />
                    <p className="text-gray-600 text-sm">Mode 2: Online (from your home)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity transform hover:scale-[0.99] duration-200 shadow-lg">
            Register Now
          </button>
        </div>
      </div>
    </section>
  )
}