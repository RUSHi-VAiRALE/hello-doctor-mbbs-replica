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
      title: "Daily Live",
      description: "Interactive classes"
    },
    {
      icon: "bi-journal-text",
      title: "10 Million +",
      description: "Tests, sample papers & notes"
    },
    {
      icon: "bi-chat-dots-fill",
      title: "24 x 7",
      description: "Doubt solving sessions"
    },
    {
      icon: "bi-building",
      title: "100 +",
      description: "Offline centres"
    }
  ]

  return (
    <section className="py-12 bg-[#e7edff]" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-transform duration-300 min-h-[180px] overflow-hidden"
            >
              <div 
                className={hasAnimated ? 'animate-fade-up' : 'opacity-0 translate-y-8'}
                style={{ 
                  animationDelay: `${index * 250}ms`,
                  animationFillMode: 'both'
                }}
              >
                <i className={`bi ${feature.icon} text-4xl text-blue-600 mb-4 block text-center`}></i>
                <h5 className="text-lg font-bold mb-2 text-center">{feature.title}</h5>
                <p className="text-gray-600 text-center text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
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
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}