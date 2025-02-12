'use client'
import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is CLATians coaching known for?",
      answer: "CLATians is the best CLAT coaching institute in Patna, offering structured courses for CLAT, AILET, CUET, and other law entrance exams."
    },
    {
      question: "How does the coaching help students succeed?",
      answer: "We provide expert mentorship, structured courses, and practice tests to prepare students for top NLUs and law schools."
    },
    // Add more FAQs...
  ]

  return (
    <section className="bg-[#e7edff] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">
            FREQUENTLY
          </span>{' '}
          ASKED QUESTIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-2 border-transparent rounded-xl bg-white shadow-lg overflow-hidden"
              style={{
                backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #fbbf24, #ea580c, #b91c1c)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
              }}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold flex items-center">
                  <i className="bi bi-question-circle text-orange-500 mr-2"></i>
                  {faq.question}
                </span>
                <i className={`bi bi-chevron-down transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}></i>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}>
                <p className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 