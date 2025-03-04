'use client'

import { useEffect, useRef, useState } from 'react'

export default function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          startCounting()
          setHasAnimated(true)
        }
      },
      {
        threshold: 0.1 // Triggers when 20% of the section is visible
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

  const startCounting = () => {
    const counters = document.querySelectorAll(".counter")
    
    counters.forEach(counter => {
      let startValue = 0
      const endValue = parseFloat(counter.getAttribute("data-target"))
      const duration = 2000 // Animation duration in milliseconds
      const steps = 50 // Number of steps in the animation
      const increment = endValue / steps
      const stepTime = duration / steps

      const updateCounter = () => {
        startValue += increment
        if (startValue < endValue) {
          counter.innerText = Math.round(startValue * 100) / 100
          setTimeout(updateCounter, stepTime)
        } else {
          counter.innerText = endValue
        }
      }

      updateCounter()
    })
  }

  const stats = [
    { icon: "person-plus-fill", value: 256, label: "Enrolled Learner" },
    { icon: "journal-bookmark-fill", value: 2.36, label: "Finished Session" },
    { icon: "emoji-smile-fill", value: 99, label: "Satisfaction Rate", suffix: "%" },
    { icon: "award-fill", value: 83, label: "Awards Winning" },
  ]

  return (
    <section 
      ref={sectionRef}
      className="bg-[#e7edff] py-10 md:py-16"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300"
            >
              <i className={`bi bi-${stat.icon} text-4xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-700 bg-clip-text text-transparent mb-4 block`}></i>
              <h3 className="text-3xl font-bold bg-gradient-to-br from-amber-400 via-orange-500 to-red-700 bg-clip-text text-transparent mb-2">
                <span className="counter" data-target={stat.value}>0</span>
                {stat.suffix || "+"}
              </h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 