'use client'
import React from 'react'

const examData = {
  cuet: {
    title: "Common University Entrance Test (CUET)",
    shortTitle: "CUET",
    description: "Your Gateway to Prestigious Universities! Explore the exam details, preparation tips, and expert strategies.",
    features: [
      {
        icon: "bi-laptop",
        name: "Exam Mode",
        details: "Computer-Based Test (CBT) conducted online"
      },
      {
        icon: "bi-clock-history",
        name: "Duration",
        details: "2-3 hours (varies based on selected subjects)"
      },
      {
        icon: "bi-book",
        name: "Sections",
        details: "Language Test, Domain Subjects, General Test"
      },
      {
        icon: "bi-people",
        name: "Eligibility",
        details: "12th grade completion from recognized board"
      }
    ],
    prepTips: [
      {
        icon: "bi-journal-text",
        title: "Know the Syllabus",
        description: "Understand the CUET exam pattern and syllabus before starting your preparation."
      },
      {
        icon: "bi-lightbulb",
        title: "Practice Mock Tests",
        description: "Regular mock tests help improve speed and accuracy."
      },
      {
        icon: "bi-calendar-check",
        title: "Time Management",
        description: "Allocate time wisely for each section to maximize performance."
      }
    ]
  },
  
  clat: {
    title: "Common Law Admission Test (CLAT)",
    shortTitle: "CLAT",
    description: "Your path to top National Law Universities in India!",
    features: [
      {
        icon: "bi-laptop",
        name: "Exam Mode",
        details: "Online Computer-Based Test"
      },
      {
        icon: "bi-clock",
        name: "Duration",
        details: "2 hours"
      },
      {
        icon: "bi-journal",
        name: "Pattern",
        details: "150 MCQs from English, Legal Reasoning, Logical Reasoning, Quantitative Techniques"
      },
      {
        icon: "bi-mortarboard",
        name: "Eligibility",
        details: "Minimum 45% in 12th (40% for SC/ST)"
      }
    ],
    prepTips: [
      {
        icon: "bi-book",
        title: "Master Legal Concepts",
        description: "Focus on understanding basic legal principles and terminology."
      },
      {
        icon: "bi-newspaper",
        title: "Current Affairs",
        description: "Stay updated with legal news and developments."
      },
      {
        icon: "bi-graph-up",
        title: "Practice Regularly",
        description: "Solve previous year papers and mock tests."
      }
    ]
  },

  ailet: {
    title: "All India Law Entrance Test (AILET)",
    shortTitle: "AILET",
    description: "Gateway to National Law University, Delhi!",
    features: [
      {
        icon: "bi-pencil",
        name: "Exam Mode",
        details: "Offline pen-paper based test"
      },
      {
        icon: "bi-clock",
        name: "Duration",
        details: "1.5 hours"
      },
      {
        icon: "bi-list-check",
        name: "Sections",
        details: "English, Legal Aptitude, Mathematics, GK, Reasoning"
      },
      {
        icon: "bi-person-check",
        name: "Eligibility",
        details: "12th pass with minimum 50% marks"
      }
    ],
    prepTips: [
      {
        icon: "bi-bullseye",
        title: "Focus on Basics",
        description: "Strong foundation in fundamental concepts is crucial."
      },
      {
        icon: "bi-clock-history",
        title: "Speed & Accuracy",
        description: "Practice to improve time management skills."
      },
      {
        icon: "bi-journal-check",
        title: "Mock Tests",
        description: "Take regular mock tests to assess preparation."
      }
    ]
  }
}

const ExamDetails = () => {
  return (
    <div className="bg-[#E7EDFF]">
      {Object.entries(examData).map(([key, exam]) => (
        <div key={key} className="mb-20">
          <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12 sm:py-16 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{exam.title}</h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">{exam.description}</p>
            </div>
          </section>

          <section className="py-12 sm:py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
                Key Features of {exam.shortTitle}
              </h2>
              <p className="text-gray-600 text-center mb-8 sm:mb-12 text-base sm:text-lg">
                Get a complete overview of the {exam.shortTitle} exam structure, eligibility, and pattern.
              </p>

              <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="w-full bg-white">
                  <thead className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white">
                    <tr>
                      <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base">Feature</th>
                      <th className="py-3 sm:py-4 px-4 sm:px-6 text-left text-sm sm:text-base">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exam.features.map((feature, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 sm:py-4 px-4 sm:px-6 flex items-center text-sm sm:text-base">
                          <i className={`bi ${feature.icon} text-orange-500 mr-2`}></i>
                          {feature.name}
                        </td>
                        <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base">{feature.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 px-4">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">
                Top Tips to Crack {exam.shortTitle}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {exam.prepTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 transform transition-transform hover:scale-105 shadow-md"
                  >
                    <div className="w-12 sm:w-16 h-12 sm:h-16 flex-shrink-0 rounded-full bg-red-50 flex items-center justify-center">
                      <i className={`bi ${tip.icon} text-xl sm:text-2xl text-red-700`}></i>
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2">{index + 1}. {tip.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default ExamDetails 