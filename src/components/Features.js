'use client'
import { useEffect, useRef, useState } from 'react'

export default function Features() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      {
        threshold: 0.1 // Triggers when 10% of the section is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const features = [
    {
      icon: "bi-camera-video-fill",
      title: "15000 +",
      description: "Students",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: "bi-journal-text",
      title: "85 +",
      description: "Universities",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: "bi-chat-dots-fill",
      title: "400 +",
      description: "Colleges",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: "bi-building",
      title: "20 +",
      description: "Year Teaching Experience",
      color: "from-purple-500 to-indigo-600"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden" ref={sectionRef}>
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
            <i className="bi bi-star-fill mr-2"></i>
            OUR FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Experience excellence in education with our comprehensive features designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl min-h-[220px] flex flex-col justify-center ${hasAnimated ? 'animate-fade-up' : 'opacity-0 translate-y-8'}`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <i className={`bi ${feature.icon} text-2xl text-white`}></i>
                </div>

                <h5 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </h5>
                <p className="text-blue-200 text-sm leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            Explore All Features
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
      `}</style>
    </section>
  )
}