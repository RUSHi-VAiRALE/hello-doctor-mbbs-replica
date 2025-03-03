'use client'
import { useState } from 'react'

export default function CourseSchedule() {
  const [showAllSubjects, setShowAllSubjects] = useState(false)
  
  // ... scheduleSubjects array ...
    const scheduleSubjects = [
    {
      title: "Notices",
      lectures: "16 Lectures",
      teacher: "",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Legal Reasoning I",
      lectures: "6 Lectures",
      teacher: "Mansi Jain Ma'am",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Legal Reasoning II",
      lectures: "9 Lectures",
      teacher: "Israa Rais Ma'am",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50"
    },
    // Hidden subjects that show on expansion
    {
      title: "Current Affairs",
      lectures: "12 Lectures",
      teacher: "Rahul Kumar Sir",
      borderColor: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "English Language",
      lectures: "8 Lectures",
      teacher: "Priya Singh Ma'am",
      borderColor: "border-red-500",
      bgColor: "bg-red-50"
    },
    {
      title: "Logical Reasoning",
      lectures: "10 Lectures",
      teacher: "Amit Sharma Sir",
      borderColor: "border-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Quantitative Techniques",
      lectures: "7 Lectures",
      teacher: "Neha Gupta Ma'am",
      borderColor: "border-pink-500",
      bgColor: "bg-pink-50"
    }
  ]

  const visibleSubjects = showAllSubjects ? scheduleSubjects : 
  scheduleSubjects.slice(0, 3)

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl">
      {/* ... Schedule section content ... */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Batch Schedules</h2>
      
      <div className="space-y-4">
        {visibleSubjects.map((subject, index) => (
          <div 
            key={index} 
            className={`border-l-4 ${subject.borderColor} ${subject.bgColor} p-4 sm:p-6 rounded-lg`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {subject.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {subject.lectures}
                  {subject.teacher && (
                    <span className="ml-2 text-gray-500">• {subject.teacher}</span>
                  )}
                </p>
              </div>
              {subject.teacher && (
                <button className="self-start sm:self-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                  Download
                </button>
              )}
            </div>
          </div>
        ))}

        {scheduleSubjects.length > 3 && (
          <button
            onClick={() => setShowAllSubjects(!showAllSubjects)}
            className="w-full mt-4 py-3 px-6 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>
              {showAllSubjects ? 'Show Less' : `+${scheduleSubjects.length - 3} more subjects`}
            </span>
            <i className={`bi bi-chevron-${showAllSubjects ? 'up' : 'down'}`}></i>
          </button>
        )}
      </div>
    </div>
  )
} 