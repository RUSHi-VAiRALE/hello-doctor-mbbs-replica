'use client'
import { useState } from 'react'

export default function CourseAbout() {
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  
  // ... batchFeatures array ...
  const batchFeatures = [
    {
      icon: "bi-calendar-event",
      title: "Duration:",
      content: "13 Jan 2025 - 25 Nov 2025"
    },
    {
      icon: "bi-star",
      title: "Validity:",
      content: "31 Dec 2025"
    },
    {
      icon: "bi-laptop",
      title: "Online Lectures",
      content: ""
    },
    {
      icon: "bi-journal-text",
      title: "DPPs and Test With Solutions",
      content: ""
    },
    // Hidden features that show on expansion
    {
      icon: "bi-book",
      title: "Study Material",
      content: "Comprehensive study materials and notes"
    },
    {
      icon: "bi-person-video3",
      title: "Live Classes",
      content: "Interactive sessions with expert faculty"
    },
    {
      icon: "bi-question-circle",
      title: "Doubt Resolution",
      content: "24/7 doubt solving support"
    },
    {
      icon: "bi-graph-up",
      title: "Performance Tracking",
      content: "Regular progress monitoring and analysis"
    }
  ]

  const visibleFeatures = showAllFeatures ? batchFeatures : batchFeatures.
  slice(0, 4)

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl">
      {/* ... About section content ... */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">About the Batch</h2>
      
      <div className="space-y-6">
        {visibleFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <i className={`bi ${feature.icon} text-amber-500 text-lg`}></i>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                {feature.title}
              </h3>
              {feature.content && (
                <p className="text-sm sm:text-base text-gray-600">{feature.content}</p>
              )}
            </div>
          </div>
        ))}

        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          className="w-full mt-4 py-3 px-6 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>{showAllFeatures ? 'Show Less' : 'More Features'}</span>
          <i className={`bi bi-chevron-${showAllFeatures ? 'up' : 'down'}`}></i>
        </button>
      </div>
    </div>
  )
} 