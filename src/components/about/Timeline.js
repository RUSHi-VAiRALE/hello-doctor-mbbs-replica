'use client'
import { useEffect, useRef } from 'react'

export default function Timeline() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the line
            entry.target.querySelector('.timeline-line')?.classList.add('animate-draw-line')
            // Animate the content
            entry.target.querySelectorAll('.timeline-content').forEach((content, index) => {
              setTimeout(() => {
                content.classList.add('animate-fade-in')
              }, index * 300) // Stagger the animations
            })
            // Animate the dots
            entry.target.querySelectorAll('.timeline-dot').forEach((dot, index) => {
              setTimeout(() => {
                dot.classList.add('animate-scale-in')
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  const milestones = [
    {
      year: "2015",
      title: "Foundation Year",
      description: "Clatians was founded with the mission to prepare students for CLAT and law entrance exams.",
      icon: "flag-fill",
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2017",
      title: "First Batch Success",
      description: "Our first batch saw a remarkable success rate with multiple students securing NLUs.",
      icon: "award-fill",
      color: "from-amber-400 to-orange-500"
    },
    {
      year: "2019",
      title: "Online Learning Launched",
      description: "Introduced online coaching and study materials for better accessibility.",
      icon: "laptop",
      color: "from-green-400 to-green-600"
    },
    {
      year: "2021",
      title: "Highest Success Rate",
      description: "We achieved our highest success rate with over 90% of students clearing CLAT.",
      icon: "bar-chart-line-fill",
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2023",
      title: "Nationwide Recognition",
      description: "Ranked among India's top CLAT coaching institutes.",
      icon: "globe",
      color: "from-red-400 to-red-600"
    }
  ]

  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-2">Our Journey</h2>
          <p className="text-gray-600 text-lg">Tracing Clatians' success step by step.</p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line with animation */}
          <div className="timeline-line absolute left-4 md:left-1/2 h-full w-1.5 bg-gradient-to-b from-amber-400 via-orange-500 to-red-700 transform -translate-x-1/2 origin-top"></div>

          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative flex md:justify-between items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="timeline-content md:w-5/12 ml-12 md:ml-0 opacity-0 transform translate-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>

              <div className="timeline-dot absolute left-0 md:left-1/2 w-8 h-8 bg-gradient-to-br from-amber-400 via-orange-500 to-red-700 rounded-full flex items-center justify-center transform -translate-x-1/2 mt-2 opacity-0 scale-0">
                <i className={`bi bi-${milestone.icon} text-white text-lg`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 