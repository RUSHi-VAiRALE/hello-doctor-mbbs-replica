'use client'
import { useState } from 'react'

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-teal-100 to-green-100 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 via-green-200/30 to-teal-200/30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-question-circle-fill mr-2"></i>
            HELP CENTER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-800 to-green-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about MBBS abroad, medical education, and our consultation services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.index || index}
              className={`group relative bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/90 ${activeIndex === index ? 'bg-white/90 shadow-2xl' : 'hover:shadow-xl'
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Question Button */}
              <button
                className="w-full flex justify-between items-center p-6 text-left transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 ${hoveredIndex === index || activeIndex === index
                    ? 'bg-gradient-to-r from-teal-500 to-green-600 shadow-lg'
                    : 'bg-teal-100/50'
                    }`}>
                    <i className="bi bi-question-circle text-teal-700"></i>
                  </div>
                  <span className={`font-semibold text-lg leading-relaxed transition-colors duration-300 ${hoveredIndex === index || activeIndex === index ? 'text-teal-800' : 'text-gray-700'
                    }`}>
                    {faq.question}
                  </span>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${hoveredIndex === index || activeIndex === index
                  ? 'bg-gradient-to-r from-green-500 to-teal-600'
                  : 'bg-teal-100/50'
                  }`}>
                  <i className={`bi bi-chevron-down transition-all duration-300 text-teal-700 ${activeIndex === index ? 'rotate-180' : ''
                    }`}></i>
                </div>
              </button>

              {/* Answer Content */}
              {activeIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pl-14 pr-12">
                    <div className="h-px bg-gradient-to-r from-teal-400/50 via-green-400/50 to-transparent mb-4"></div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 rounded-2xl transition-all duration-300 pointer-events-none ${hoveredIndex === index || activeIndex === index
                ? 'border-teal-400/50'
                : 'border-transparent'
                }`}></div>

              {/* Active Indicator */}
              {activeIndex === index && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-green-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our medical education consultants are here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contactUs" className="bg-gradient-to-r from-teal-500 via-green-500 to-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-center">
                <i className="bi bi-chat-dots-fill mr-2"></i>
                Contact Us
              </a>
              <a href="tel:+919211607005" className="border-2 border-teal-300/50 text-teal-700 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-teal-50 hover:border-teal-400/70 inline-block text-center">
                <i className="bi bi-telephone-fill mr-2"></i>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}