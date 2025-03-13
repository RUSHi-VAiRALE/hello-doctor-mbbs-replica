'use client'
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa'

export default function ScholarshipBenefits() {
  const scholarshipTiers = [
    { marks: "49 to 50", percentage: "100", icon: <FaTrophy className="text-yellow-500 text-4xl" /> },
    { marks: "46 to 48", percentage: "70", icon: <FaMedal className="text-slate-400 text-4xl" /> },
    { marks: "41 to 45", percentage: "50", icon: <FaMedal className="text-amber-600 text-4xl" /> },
    { marks: "36 to 40", percentage: "40", icon: <FaStar className="text-blue-500 text-4xl" /> },
    { marks: "31 to 35", percentage: "35", icon: <FaStar className="text-green-500 text-4xl" /> },
    { marks: "26 to 30", percentage: "30", icon: <FaStar className="text-purple-500 text-4xl" /> },
    { marks: "21 to 25", percentage: "25", icon: <FaStar className="text-pink-500 text-4xl" /> },
    { marks: "16 to 20", percentage: "20", icon: <FaStar className="text-indigo-500 text-4xl" /> },
    { marks: "11 to 15", percentage: "15", icon: <FaStar className="text-red-500 text-4xl" /> },
    { marks: "Upto 10", percentage: "10", icon: <FaStar className="text-orange-500 text-4xl" /> },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Scholarship Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our merit-based scholarship program rewards your performance. Check the marks-to-scholarship conversion below.
          </p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Group scholarshipTiers into pairs */}
          {Array.from({ length: Math.ceil(scholarshipTiers.length / 2) }, (_, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scholarshipTiers.slice(i * 2, i * 2 + 2).map((tier, index) => (
                <div 
                  key={index}
                  className="bg-white relative rounded-t-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-6 flex items-center justify-between space-x-4">
                    <div className="flex flex-col items-center gap-2 w-1/3">
                      <div className="transform group-hover:scale-110 transition-transform duration-300">
                        {tier.icon}
                      </div>
                      
                    </div>
                    <div className="text-center w-1/3">
                      <p className="font-semibold text-gray-900">{tier.marks}</p>
                      <p className="text-sm text-gray-600 text-center">Marks</p>
                    </div>
                    <div className="text-center w-1/3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {tier.percentage}%
                      </h3>
                      <p className="text-sm text-gray-600">Scholarship</p>
                    </div>
                  </div>
                  <div className="h-1 absolute w-full bottom-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}