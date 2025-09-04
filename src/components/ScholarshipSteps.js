'use client'
import { useState } from 'react'

export default function ScholarshipSteps() {
  const [activeStep, setActiveStep] = useState(null)

  const steps = [
    {
      number: 1,
      title: "Fill the Form",
      description: "Fill the above form with your correct details to register for the scholarship test",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H12m-.75 3h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Wait for Response",
      description: "Our team will contact you through call/WhatsApp within 24 hours",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Take the Test",
      description: "Appear for online scholarship test and get instant results",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      )
    }
  ]

  return (
    <section className="py-12 bg-[#e7edff]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How to Take <span className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-md">Hello Doctor</span> Scholarship Test
          </h2>
          <p className="text-gray-600">Follow these simple steps to get your scholarship</p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transform -translate-x-1/2" />
              )}

              {/* Step Card */}
              <div className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 ${activeStep === index ? 'transform -translate-y-2 shadow-xl' : ''
                }`}>
                {/* Step Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white rounded-full font-bold">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ad4a16]/10 text-[#ad4a16]">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>

                {/* Animated Border on Hover */}
                <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none ${activeStep === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <div className="absolute inset-0 rounded-xl border-2 border-gradient-animate" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animated border */}
      <style jsx>{`
        @keyframes borderAnimation {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .border-gradient-animate {
          border: 2px solid;
          border-image: linear-gradient(45deg, #f59e0b, #ea580c, #dc2626) 1;
          animation: borderAnimation 2s ease infinite;
        }
      `}</style>
    </section>
  )
} 