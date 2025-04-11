'use client'
import { useState } from 'react'

export default function CourseSchedule({courseData}) {
  const [showAllSubjects, setShowAllSubjects] = useState(false)
  const [expandedSection, setExpandedSection] = useState(null)
  
  // Main sections with their subsections
  const courseSections = [
    {
      id: 'subjects',
      title: 'Subject Covering',
      items: [
        { title: 'English Language', description: '8+ Lectures' },
        { title: 'Current Affairs including GK', description: '12+ Lectures' },
        { title: 'Legal Reasoning', description: '10+ Lectures' },
        { title: 'Logical Reasoning', description: '10+ Lectures' },
        { title: 'Quantitative Techniques', description: '7+ Lectures' }
      ],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'basic',
      title: 'Basic Syllabus',
      items: [
        { title: 'Topic wise Classes', description: 'Comprehensive coverage of all topics with expert faculty' },
        { title: 'Questions Practice Session including Solution Classes', description: 'Practice sessions for each topic covered with detailed solutions' },
        { title: 'Additional Doubt Session', description: 'Special sessions to clear doubts on topics covered' },
        { title: 'Test (Topic Covered)', description: 'Regular tests to assess understanding of completed topics' }
      ],
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'advanced',
      title: 'Advanced Syllabus',
      items: [
        { title: 'Advance Level Question Practice Session', description: 'Challenging questions to develop higher-order thinking skills' },
        { title: 'Doubt Session', description: 'Dedicated sessions to resolve complex doubts' },
        { title: 'Weekly Tests (like Mock Test)', description: 'Weekly assessments simulating exam conditions' }
      ],
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'mock',
      title: 'Mock Test Series & Revision Classes',
      subtitle: 'Till CLAT Examinations',
      items: [
        { title: 'Mock Test', description: 'Full-length tests simulating actual CLAT exam conditions' },
        { title: 'Solution Classes', description: 'Detailed analysis and solutions for all mock tests' }
      ],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50'
    }
  ]
  let len = (courseData.batchStrategy.length < 3)? courseData.batchStrategy.length : 3
  // Original schedule subjects for reference
  const visibleSubjects = showAllSubjects ? courseData.batchStrategy : 
  courseData.batchStrategy.slice(0, len)

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null)
    } else {
      setExpandedSection(sectionId)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Batch Strategy</h2>
      
      {/* Course sections */}
      <div className="space-y-4 mb-8">
        {visibleSubjects.map((section) => (
          <div key={section.id} className={`border-l-4 ${section.borderColor} ${section.bgColor} p-4 sm:p-6 rounded-lg`}>
            <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="text-sm text-gray-600">{section.subtitle}</p>
                )}
              </div>
              <i className={`bi bi-chevron-${expandedSection === section.id ? 'up' : 'down'} text-gray-600`}></i>
            </div>
            
            {/* Expanded content */}
            {expandedSection === section.id && (
              <div className="mt-4 space-y-3 pl-2 border-l-2 border-gray-200">
                {section.items.map((item, index) => (
                  <div key={index} className="ml-2">
                    <p className="font-medium text-gray-800">• {item.title}</p>
                    <p className="text-sm text-gray-600 ml-4">{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      
      <div className="space-y-4">

        {courseSections.length > 3 && (
          <button
            onClick={() => setShowAllSubjects(!showAllSubjects)}
            className="w-full mt-4 py-3 px-6 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>
              {showAllSubjects ? 'Show Less' : `+${courseSections.length - 3} more sections`}
            </span>
            <i className={`bi bi-chevron-${showAllSubjects ? 'up' : 'down'}`}></i>
          </button>
        )}
      </div>
    </div>
  )
}