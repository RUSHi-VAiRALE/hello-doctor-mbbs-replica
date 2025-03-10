'use client'
import React from 'react'

const studentZoneData = [
  {
    icon: "bi-chat-left-text",
    title: "Discussion Forums",
    description: "Engage in discussions, ask questions, and collaborate with fellow students.",
    buttonText: "Join Forum",
    link: "#"
  },
  {
    icon: "bi-calendar-event",
    title: "Exam Updates & Notifications",
    description: "Get real-time alerts on exam schedules, syllabus updates, and results and updates.",
    buttonText: "View Updates",
    link: "#"
  },
  {
    icon: "bi-journal-check",
    title: "Study Groups",
    description: "Join study groups, share resources, and prepare together for better results.",
    buttonText: "Join Groups",
    link: "#"
  },
  {
    icon: "bi-person-video3",
    title: "Quizzes",
    description: "Participate in live doubt clearing sessions with expert faculty members.",
    buttonText: "Join Quizzes",
    link: "#"
  }
]

export default function StudentZone() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Student Zone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with discussions and exam updates. Join our vibrant student community.
          </p>
        </div>

        {/* Info Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {studentZoneData.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 flex items-center justify-center text-white">
                  <i className={`bi ${item.icon} text-3xl`}></i>
                </div>

                {/* Content */}
                <div className="flex-grow text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {item.description}
                  </p>
                  <a 
                    href={item.link}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        {/* <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-700">
            <i className="bi bi-info-circle"></i>
            <span className="text-sm font-medium">New features coming soon!</span>
          </div>
        </div> */}
      </div>
    </section>
  )
} 