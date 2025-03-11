'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function AdmissionFAQ() {
  const [activeIndex, setActiveIndex] = useState(null)
  const scholarshipFaqs = [
    {
      index: 0,
      question: "Scholarship Test Details",
      answer: "Our scholarship test consists of multiple-choice questions covering logical reasoning, legal aptitude, and general knowledge. Duration: 90 minutes."
    },
    {
      index: 1,
      question: "Eligibility for the Test",
      answer: "Students who have completed or are appearing in Class 12th examinations are eligible to apply for the scholarship test."
    },
    {
      index: 2,
      question: "What are the Test Syllabus ?",
      answer: "The test covers Legal Reasoning, Logical Reasoning, English Language, Current Affairs, and Basic Mathematics."
    },
    {
      index: 3,
      question: "What are the Subjects ?",
      answer: "Key subjects include Legal Aptitude (25%), English (25%), Current Affairs (25%), and Logical Reasoning (25%)."
    },
    {
      index: 4,
      question: "Scholarship Test Benefits!",
      answer: "Students can get up to 100% scholarship based on their performance. Additional benefits include free study materials and mentorship sessions."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Section */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <div className="relative h-full">
              <Image 
                src="https://cdn.pixabay.com/photo/2015/04/12/16/33/hammer-719066_1280.jpg" 
                alt="Law Symbols"
                width={1280}
                height={853}
                className="w-full h-[600px] object-cover rounded-lg shadow-xl transform transition-all duration-500 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Scholarship Test</h3>
                  <p className="text-sm">Your Gateway to Legal Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Custom FAQ Section */}
          <div className="bg-white rounded-lg shadow-xl h-[600px] overflow-y-auto custom-scrollbar">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {scholarshipFaqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <span className={`transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div 
                      className={`px-6 transition-all duration-200 ease-in-out ${
                        activeIndex === index 
                          ? 'max-h-48 py-4 opacity-100' 
                          : 'max-h-0 py-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}