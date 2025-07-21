'use client'
import { useState } from 'react'

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-question-circle-fill mr-2"></i>
            HELP CENTER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our courses, admissions, and services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/20 ${activeIndex === index ? 'bg-white/20 shadow-2xl' : 'hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Question Button */}
              <button
                className={`w-full flex justify-between items-center p-6 text-left transition-all duration-300 ${activeIndex === index ? 'pb-4' : ''
                  }`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 ${hoveredIndex === index || activeIndex === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg'
                      : 'bg-white/20'
                    }`}>
                    <i className={`bi bi-question-circle text-white transition-all duration-300 ${activeIndex === index ? 'rotate-180' : ''
                      }`}></i>
                  </div>
                  <span className={`font-semibold text-lg leading-relaxed transition-colors duration-300 ${hoveredIndex === index || activeIndex === index ? 'text-white' : 'text-blue-100'
                    }`}>
                    {faq.question}
                  </span>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${hoveredIndex === index || activeIndex === index
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600'
                    : 'bg-white/20'
                  }`}>
                  <i className={`bi bi-chevron-down transition-all duration-300 text-white ${activeIndex === index ? 'rotate-180' : ''
                    }`}></i>
                </div>
              </button>

              {/* Answer Content */}
              <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 pb-6">
                  <div className="pl-14 pr-12">
                    <div className="h-px bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-transparent mb-4"></div>
                    <p className="text-blue-100 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-300 ${hoveredIndex === index || activeIndex === index
                  ? 'border-blue-400/50'
                  : 'border-transparent'
                }`}></div>

              {/* Active Indicator */}
              {activeIndex === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Still have questions?</h3>
            <p className="text-blue-100 mb-6">
              Can't find the answer you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <i className="bi bi-chat-dots-fill mr-2"></i>
                Live Chat
              </button>
              <button className="border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                <i className="bi bi-envelope-fill mr-2"></i>
                Email Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}