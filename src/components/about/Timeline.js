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
      description: "Started our journey with a vision to transform legal education",
      icon: "bi-flag-fill",
      color: "from-blue-500 to-blue-600"
    },
    {
      year: "2016",
      title: "First Campus Established",
      description: "Opened our flagship center in Patna with state-of-the-art facilities",
      icon: "bi-building-fill",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      year: "2017",
      title: "First Batch Success",
      description: "Achieved remarkable results with 95% success rate in CLAT",
      icon: "bi-award-fill",
      color: "from-amber-500 to-orange-500"
    },
    {
      year: "2018",
      title: "Expanded to 3 Cities",
      description: "Extended our reach to Delhi and Mumbai with new centers",
      icon: "bi-geo-alt-fill",
      color: "from-teal-500 to-teal-600"
    },
    {
      year: "2019",
      title: "Online Learning Launched",
      description: "Pioneered digital education platform for law aspirants",
      icon: "bi-laptop",
      color: "from-green-500 to-green-600"
    },
    {
      year: "2020",
      title: "Virtual Classrooms",
      description: "Adapted to pandemic with seamless virtual learning experience",
      icon: "bi-camera-video-fill",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      year: "2021",
      title: "Highest Success Rate",
      description: "Achieved industry-leading 98% success rate across all programs",
      icon: "bi-graph-up-arrow",
      color: "from-purple-500 to-purple-600"
    },
    {
      year: "2022",
      title: "10,000+ Students Milestone",
      description: "Crossed the milestone of training 10,000+ successful candidates",
      icon: "bi-people-fill",
      color: "from-pink-500 to-pink-600"
    },
    {
      year: "2023",
      title: "Nationwide Recognition",
      description: "Received national awards for excellence in legal education",
      icon: "bi-trophy-fill",
      color: "from-red-500 to-red-600"
    },
    {
      year: "2024",
      title: "AI-Enhanced Learning",
      description: "Integrated cutting-edge AI technology for personalized learning",
      icon: "bi-robot",
      color: "from-emerald-500 to-emerald-600"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-teal-100 to-green-100 text-gray-800 relative overflow-hidden">
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
            <i className="bi bi-clock-history mr-2"></i>
            OUR JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-800 to-green-800 bg-clip-text text-transparent">
            Our Success Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tracing Hello Doctor's remarkable journey from inception to becoming India's leading medical education institute
          </p>
        </div>

        {/* Mobile view - vertical timeline */}
        <div className="md:hidden">
          <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-teal-400 before:to-green-500 before:left-4">
            {milestones.map((milestone, index) => (
              <div key={`mobile-${milestone.year}-${index}`} className="relative">
                {/* Dot */}
                <div className={`absolute -left-4 w-8 h-8 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <i className={`bi ${milestone.icon} text-white text-sm`}></i>
                </div>

                {/* Content */}
                <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-teal-600">{milestone.year}</span>
                    <div className="h-px bg-gradient-to-r from-teal-400 to-transparent flex-1"></div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view - horizontal timeline */}
        <div ref={timelineRef} className="relative mx-auto hidden md:block">
          {/* Container for the timeline with padding for content overflow */}
          <div className="relative h-80 mx-auto px-4 py-32">
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
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Milestone points positioned along the path */}
            {milestones.map((milestone, index) => {
              // Calculate position along the wave
              const xPos = (index / (milestones.length - 1 || 1)) * 100;

              // Calculate top position based on sine wave
              const waveHeight = 30;
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
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* The dot marker */}
                  <div
                    className={`timeline-dot w-12 h-12 bg-gradient-to-br ${milestone.color} 
                    rounded-full flex items-center justify-center opacity-0 scale-0 shadow-xl
                    transition-all duration-500 ease-out z-10 border-2 border-white`}
                  >
                    <i className={`bi ${milestone.icon} text-white text-lg`}></i>
                  </div>

                  {/* Content box with adjustments for top/bottom positioning */}
                  <div
                    className={`timeline-content opacity-0 transform ${isTop ? '-translate-y-4' : 'translate-y-4'} 
                    w-40 absolute z-20
                    ${isTop ? '-top-24' : 'top-20'} left-1/2 -translate-x-1/2`}
                  >
                    <div className="bg-white/80 backdrop-blur-sm border border-teal-200/50 p-4 rounded-xl shadow-xl hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-teal-600">{milestone.year}</span>
                        <div className="h-px bg-gradient-to-r from-teal-400 to-transparent flex-1"></div>
                      </div>
                      <h3 className="text-sm font-bold text-gray-800 mb-2 leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">25+</div>
              <div className="text-gray-600 text-sm">Years Journey</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">10K+</div>
              <div className="text-gray-600 text-sm">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Success Rate</div>
            </div>
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