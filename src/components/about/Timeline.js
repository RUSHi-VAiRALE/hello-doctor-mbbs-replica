'use client'
import { useEffect, useRef, useState } from 'react'

export default function Timeline() {
  const timelineRef = useRef(null)
  const [animationTriggered, setAnimationTriggered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered) {
            setAnimationTriggered(true)

            // Animate the path
            const path = entry.target.querySelector('.timeline-path')
            if (path) {
              path.classList.add('animate-draw-path')
            }

            // Animate the dots and content with a staggered delay
            const visibleMilestones = Array.from(entry.target.querySelectorAll('.milestone-point'))
            visibleMilestones.forEach((point, index) => {
              setTimeout(() => {
                point.querySelector('.timeline-dot')?.classList.add('animate-scale-in')
                point.querySelector('.timeline-content')?.classList.add('animate-fade-in')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [animationTriggered])

  const milestones = [
    {
      year: "2015",
      title: "Foundation Year",
      icon: "flag-fill",
      color: "from-blue-400 to-blue-600"
    },
    {
      year: "2016",
      title: "First Campus Established",
      icon: "building",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      year: "2017",
      title: "First Batch Success",
      icon: "award-fill",
      color: "from-amber-400 to-orange-500"
    },
    {
      year: "2018",
      title: "Expanded to 3 Cities",
      icon: "geo-alt-fill",
      color: "from-teal-400 to-teal-600"
    },
    {
      year: "2019",
      title: "Online Learning Launched",
      icon: "laptop",
      color: "from-green-400 to-green-600"
    },
    {
      year: "2020",
      title: "Virtual Classrooms",
      icon: "camera-video-fill",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      year: "2021",
      title: "Highest Success Rate",
      icon: "bar-chart-line-fill",
      color: "from-purple-400 to-purple-600"
    },
    {
      year: "2022",
      title: "10,000+ Students Milestone",
      icon: "people-fill",
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2023",
      title: "Nationwide Recognition",
      icon: "globe",
      color: "from-red-400 to-red-600"
    },
    {
      year: "2024",
      title: "AI-Enhanced Learning",
      icon: "cpu-fill",
      color: "from-emerald-400 to-emerald-600"
    },
  ]

  return (
    <section className="bg-[#f7f9fc] py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-2">Our Journey</h2>
          <p className="text-gray-600 text-lg">Tracing Clatians' success step by step.</p>
        </div>

        {/* Timeline period indicator */}
        {/* <div className="text-center mb-10">
          <span className="inline-block bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            {milestones[0]?.year} - {milestones[milestones.length - 1]?.year}
          </span>
        </div> */}

        {/* Mobile view - vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-orange-400 before:to-red-500 before:left-4">
            {milestones.map((milestone, index) => (
              <div key={`mobile-${milestone.year}-${index}`} className="relative">
                {/* Dot */}
                <div className={`absolute -left-4 w-8 h-8 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-md z-10`}>
                  <i className={`bi bi-${milestone.icon} text-white text-sm`}></i>
                </div>

                {/* Content */}
                <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100">
                  <h3 className="font-bold text-gray-800">
                    <span className="text-[#ad4a16]">{milestone.year}</span> - {milestone.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - horizontal timeline */}
        <div ref={timelineRef} className="relative mx-auto hidden md:block">
          {/* Container for the timeline with padding for content overflow */}
          <div className="relative h-64 mx-auto px-4 py-32">
            {/* SVG for the path */}
            <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path
                d="M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeDasharray="1200"
                strokeDashoffset="1200"
                className="timeline-path transition-all duration-1500 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ad4a16" />
                  <stop offset="50%" stopColor="#8f3a17" />
                  <stop offset="100%" stopColor="#312518" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestone points positioned along the path */}
            {milestones.map((milestone, index) => {
              // Calculate position along the wave
              const xPos = (index / (milestones.length - 1 || 1)) * 100;

              // Calculate top position based on sine wave
              // This creates a smoother distribution along the wave
              const waveHeight = 30; // Height of the wave in pixels
              const topPosition = 50 + Math.sin((index / (milestones.length - 1 || 1)) * Math.PI) * waveHeight;

              // Alternate content position (above/below)
              const isTop = index % 2 === 0;

              return (
                <div
                  key={`desktop-${milestone.year}-${milestone.title}-${index}`}
                  className="milestone-point absolute"
                  style={{
                    left: `${xPos}%`,
                    top: topPosition,
                    transform: 'translate(-50%, -50%)' // Center both horizontally and vertically
                  }}
                >
                  {/* The dot marker */}
                  <div
                    className={`timeline-dot w-10 h-10 bg-gradient-to-br ${milestone.color} 
                    rounded-full flex items-center justify-center opacity-0 scale-0 shadow-md
                    transition-all duration-500 ease-out z-10`}
                  >
                    <i className={`bi bi-${milestone.icon} text-white text-lg`}></i>
                  </div>

                  {/* Content box with adjustments for top/bottom positioning */}
                  <div
                    className={`timeline-content opacity-0 transform ${isTop ? '-translate-y-4' : 'translate-y-4'} 
                    w-32 absolute z-20
                    ${isTop ? '-top-20' : 'top-16'} left-1/2 -translate-x-1/2`}
                  >
                    <div className="bg-white p-3 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300 border border-gray-100">
                      <h3 className="text-sm font-bold text-gray-800 text-center">
                        <span className="text-[#ad4a16]">{milestone.year}</span>
                        <br />
                        {milestone.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw-path {
          animation: drawPath 1.5s ease-out forwards;
        }
        
        .animate-scale-in {
          opacity: 1;
          transform: scale(1);
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}