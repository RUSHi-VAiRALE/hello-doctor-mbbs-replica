// 'use client'
// import { useEffect, useRef } from 'react'

// export default function Timeline() {
//   const timelineRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Animate the sine wave path
//             const path = entry.target.querySelector('.timeline-path')
//             if (path) {
//               path.classList.add('animate-draw-path')
//             }
            
//             // Animate the dots and content with a staggered delay
//             entry.target.querySelectorAll('.milestone-point').forEach((point, index) => {
//               setTimeout(() => {
//                 // Animate dot
//                 point.querySelector('.timeline-dot')?.classList.add('animate-scale-in')
//                 // Animate content
//                 point.querySelector('.timeline-content')?.classList.add('animate-fade-in')
//               }, index * 400) // Longer stagger for smoother flow along the wave
//             })
//           }
//         })
//       },
//       { threshold: 0.1 }
//     )

//     if (timelineRef.current) {
//       observer.observe(timelineRef.current)
//     }

//     return () => {
//       if (timelineRef.current) {
//         observer.unobserve(timelineRef.current)
//       }
//     }
//   }, [])

//   const milestones = [
//     {
//       year: "2015",
//       title: "Foundation Year",
//       description: "Clatians was founded with the mission to prepare students for CLAT and law entrance exams.",
//       icon: "flag-fill",
//       color: "from-blue-400 to-blue-600"
//     },
//     {
//       year: "2017",
//       title: "First Batch Success",
//       description: "Our first batch saw a remarkable success rate with multiple students securing NLUs.",
//       icon: "award-fill",
//       color: "from-amber-400 to-orange-500"
//     },
//     {
//       year: "2019",
//       title: "Online Learning Launched",
//       description: "Introduced online coaching and study materials for better accessibility.",
//       icon: "laptop",
//       color: "from-green-400 to-green-600"
//     },
//     {
//       year: "2021",
//       title: "Highest Success Rate",
//       description: "We achieved our highest success rate with over 90% of students clearing CLAT.",
//       icon: "bar-chart-line-fill",
//       color: "from-purple-400 to-purple-600"
//     },
//     {
//       year: "2023",
//       title: "Nationwide Recognition",
//       description: "Ranked among India's top CLAT coaching institutes.",
//       icon: "globe",
//       color: "from-red-400 to-red-600"
//     }
//   ]

//   return (
//     <section className="bg-[#f7f9fc] py-20 overflow-hidden">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-2">Our Journey</h2>
//           <p className="text-gray-600 text-lg">Tracing Clatians' success step by step.</p>
//         </div>

//         <div ref={timelineRef} className="relative mx-auto">
//           {/* Container for the entire timeline with padding for content overflow */}
//           <div className="relative h-96 md:h-64 mx-auto px-4 py-32">
//             {/* SVG for the sine wave */}
//             <svg className="absolute top-0 left-0 w-full h-32" viewBox="0 0 1200 100" preserveAspectRatio="none">
//               <path 
//                 d="M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50" 
//                 fill="none" 
//                 stroke="url(#gradient)" 
//                 strokeWidth="6"
//                 strokeDasharray="1200"
//                 strokeDashoffset="1200"
//                 className="timeline-path transition-all duration-1500 ease-out"
//               />
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#F59E0B" />
//                   <stop offset="50%" stopColor="#F97316" />
//                   <stop offset="100%" stopColor="#EF4444" />
//                 </linearGradient>
//               </defs>
//             </svg>

//             {/* Milestone points positioned along the sine wave */}
//             {milestones.map((milestone, index) => {
//               // Calculate position along the wave
//               const xPos = (index / (milestones.length - 1)) * 100;
//               // Alternate between top and bottom positions
//               const isTop = index % 2 === 0;
              
//               return (
//                 <div 
//                   key={index} 
//                   className="milestone-point absolute"
//                   style={{
//                     left: `${xPos}%`,
//                     top: isTop ? '20px' : '64px', // Position at wave peak or trough
//                     transform: 'translate(-50%, 0)' // Center horizontally
//                   }}
//                 >
//                   {/* The dot marker */}
//                   <div 
//                     className={`timeline-dot w-10 h-10 bg-gradient-to-br ${milestone.color} 
//                     rounded-full flex items-center justify-center opacity-0 scale-0 shadow-md
//                     transition-all duration-500 ease-out`}
//                   >
//                     <i className={`bi bi-${milestone.icon} text-white text-lg`}></i>
//                   </div>

//                   {/* Content box */}
//                   <div 
//                     className={`timeline-content opacity-0 transform ${isTop ? '-translate-y-4' : 'translate-y-4'} 
//                     transition-all duration-500 ease-out w-56 md:w-64 absolute 
//                     ${isTop ? 'top-12' : 'bottom-12'} left-1/2 -translate-x-1/2`}
//                   >
//                     <div className="bg-white p-4 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
//                       <h3 className="text-lg font-bold text-gray-800 mb-1">
//                         {milestone.year} - {milestone.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm">{milestone.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes drawPath {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
        
//         .animate-draw-path {
//           animation: drawPath 1.5s ease-out forwards;
//         }
        
//         .animate-scale-in {
//           opacity: 1;
//           transform: scale(1);
//         }
        
//         .animate-fade-in {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'
import { useEffect, useRef } from 'react'

export default function Timeline() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the sine wave paths
            entry.target.querySelectorAll('.timeline-path').forEach(path => {
              if (path) {
                path.classList.add('animate-draw-path')
              }
            })
            
            // Animate the dots and content with a staggered delay
            entry.target.querySelectorAll('.milestone-point').forEach((point, index) => {
              setTimeout(() => {
                // Animate dot
                point.querySelector('.timeline-dot')?.classList.add('animate-scale-in')
                // Animate content
                point.querySelector('.timeline-content')?.classList.add('animate-fade-in')
              }, index * 400) // Longer stagger for smoother flow along the wave
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
    <section className="bg-[#f7f9fc] pb-0 pt-16 md:pt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase mb-2">Our Journey</h2>
          <p className="text-gray-600 text-lg">Tracing Clatians' success step by step.</p>
        </div>

        {/* Timeline container with responsive height adjustments */}
        <div ref={timelineRef} className="relative mx-auto">
          {/* Mobile View - Stack milestones vertically with wave */}
          <div className="md:hidden relative pt-10 pb-20">
            <svg className="absolute left-0 h-[700px] w-24" preserveAspectRatio="none" viewBox="0 0 100 800">
              <path 
                d="M50,10 C0,200 80,320 50,480 C0,740 80,800 30,1000" 
                fill="none" 
                stroke="url(#gradient-mobile)" 
                strokeWidth="6"
                strokeDasharray="1600"
                strokeDashoffset="1600"
                className="timeline-path"
              />
              <defs>
                <linearGradient id="gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#F97316" />
                  <stop offset="100%" stopColor="#EF4444" />
                </linearGradient>
              </defs>
            </svg>

            {milestones.map((milestone, index) => (
              <div key={index} className="milestone-point relative ml-24 mb-16">
                {/* Dot marker */}
                <div 
                  className={`timeline-dot absolute -left-20 w-10 h-10 bg-gradient-to-br ${milestone.color} 
                  rounded-full flex items-center justify-center opacity-0 scale-0 shadow-md`}
                  style={{ 
                    top: '0%',
                    transform: 'translateY(-50%)'
                  }}
                >
                  <i className={`bi bi-${milestone.icon} text-white text-lg`}></i>
                </div>

                {/* Content box */}
                <div className="timeline-content opacity-0 transform -translate-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {milestone.year} - {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet and Desktop View - Horizontal sine wave */}
          <div className="hidden md:block relative md:pr-24">
            {/* Container with responsive height and padding */}
            <div className="relative h-96 mx-auto pt-40 md:py-44 lg:py-40">
              {/* SVG for the sine wave with increased amplitude */}
              <svg className="absolute top-0 left-0 w-full h-60" viewBox="0 0 1200 200" preserveAspectRatio="none">
                <path 
                  d="M0,100 C200,20 400,180 600,100 C800,20 1000,180 1200,100" 
                  fill="none" 
                  stroke="url(#gradient)" 
                  strokeWidth="6"
                  strokeDasharray="2400"
                  strokeDashoffset="2400"
                  className="timeline-path"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Milestone points positioned along the sine wave */}
              {milestones.map((milestone, index) => {
                // Calculate position along the wave
                const xPos = (index / (milestones.length - 1)) * 100;
                // Alternate between top and bottom positions
                const isTop = index % 2 === 0;
                // Calculate vertical position with increased wave amplitude
                const topPosition = isTop ? '95px' : '110px';
                
                return (
                  <div 
                    key={index} 
                    className="milestone-point absolute"
                    style={{
                      left: `${xPos}%`,
                      top: topPosition,
                      transform: 'translate(-70%, 0)'
                    }}
                  >
                    {/* The dot marker */}
                    <div 
                      className={`timeline-dot w-10 h-10 bg-gradient-to-br ${milestone.color} 
                      rounded-full flex items-center justify-center opacity-0 scale-0 shadow-md`}
                    >
                      <i className={`bi bi-${milestone.icon} text-white text-lg`}></i>
                    </div>

                    {/* Content box with adjustments for top/bottom positioning */}
                    <div 
                      className={`timeline-content opacity-0 transform ${isTop ? '-translate-y-4' : 'translate-y-4'} 
                      w-48 md:w-56 lg:w-64 absolute 
                      ${isTop ? 'top-12' : 'bottom-12'} left-1/2 -translate-x-1/2`}
                    >
                      <div className="bg-white p-4 rounded-lg shadow-md hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-md font-bold text-gray-800 mb-1">
                          {milestone.year} - {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
          animation: drawPath 2s ease-out forwards;
        }
        
        .animate-scale-in {
          opacity: 1;
          transform: scale(1) !important;
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0) !important;
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}