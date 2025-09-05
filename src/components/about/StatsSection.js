'use client'
import { useState, useEffect, useRef } from 'react'

export default function StatsSection() {
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    teachers: 0,
    awards: 0
  })

  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    {
      id: 'students',
      target: 10000,
      label: 'Students Enrolled',
      icon: 'bi-people-fill',
      color: 'from-blue-500 to-blue-600',
      suffix: '+'
    },
    {
      id: 'courses',
      target: 50,
      label: 'Courses Available',
      icon: 'bi-book-fill',
      color: 'from-green-500 to-green-600',
      suffix: '+'
    },
    {
      id: 'teachers',
      target: 100,
      label: 'Expert Teachers',
      icon: 'bi-mortarboard-fill',
      color: 'from-purple-500 to-purple-600',
      suffix: '+'
    },
    {
      id: 'awards',
      target: 25,
      label: 'Years Experience',
      icon: 'bi-award-fill',
      color: 'from-orange-500 to-red-500',
      suffix: ''
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)

            // Animate counters
            stats.forEach((stat) => {
              let start = 0
              const end = stat.target
              const duration = 2000
              const increment = end / (duration / 50)

              const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                  setCounters(prev => ({ ...prev, [stat.id]: end }))
                  clearInterval(timer)
                } else {
                  setCounters(prev => ({ ...prev, [stat.id]: Math.floor(start) }))
                }
              }, 50)
            })
          }
        })
      },
      { threshold: 0.3 }
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-teal-100 to-green-100 text-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/30 via-green-200/30 to-teal-200/30"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-graph-up-arrow mr-2"></i>
            OUR ACHIEVEMENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-800 to-green-800 bg-clip-text text-transparent">
            Numbers That Speak
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our commitment to excellence is reflected in these remarkable achievements
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-2xl p-8 text-center hover:bg-white/90 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <i className={`bi ${stat.icon} text-2xl text-white`}></i>
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
                  {counters[stat.id].toLocaleString()}{stat.suffix}
                </div>

                {/* Label */}
                <div className="text-gray-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-4">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 