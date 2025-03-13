'use client'
import { FaClock, FaRegCalendarAlt, FaLaptop, FaSchool, FaClipboardList, FaBook, FaChalkboardTeacher } from 'react-icons/fa'

export default function ScholarshipDetails() {
  const scholarshipDetails = [
    {
      id: 1,
      title: "Test Syllabus",
      icon: <FaBook className="text-2xl text-red-600" />,
      bgColor: "bg-red-100",
      textColor: "text-red-600",
      content: ["Completely based on your Knowledge, Language and IQ."]
    },
    {
      id: 2,
      title: "Duration",
      icon: <FaClock className="text-2xl text-blue-600" />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      content: ["1 hour", "Slots available between: 10:00 AM to 7:00 PM"]
    },
    {
      id: 3,
      title: "Test Modes",
      icon: <FaLaptop className="text-2xl text-green-600" />,
      bgColor: "bg-green-100",
      textColor: "text-green-600",
      content: [
        "Mode 1: Offline (at Law Prep Tutorial Bihar Centers)",
        "Mode 2: Online (from your home)"
      ]
    },
    {
      id: 4,
      title: "Test Details",
      icon: <FaClipboardList className="text-2xl text-purple-600" />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      content: [
        "No. of Questions = 50",
        "Time Duration = 50 min (For Online Test) & 60 min for (Offline Test)",
        "Timing = Online Test (24×7) & Offline Test 10:00am to 06:00pm",
        "Mode of Test = Online and Offline"
      ]
    },{
      id: 5,
      title: "Eligibility",
      icon: <FaRegCalendarAlt className="text-2xl text-amber-600" />,
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
      content: ["Students appearing for or who have completed Class 12th can apply for the scholarship test."]
    },
    {
      id: 6,
      title: "Subjects",
      icon: <FaChalkboardTeacher className="text-2xl text-indigo-600" />,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600",
      content: [
        "Reading Comprehension – 20Q",
        "Legal Awareness – 10Q",
        "Logical Reasoning – 10Q",
        "General Awareness – 5Q",
        "General Maths – 5Q"
      ]
    }
  ]

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
          {scholarshipDetails.map((detail) => (
            <div key={detail.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className={`p-3 ${detail.bgColor} rounded-lg`}>
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
                  <div className="space-y-2">
                    {detail.content.map((item, index) => (
                      <p key={index} className="text-gray-600 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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