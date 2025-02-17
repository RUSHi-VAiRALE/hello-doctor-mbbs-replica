'use client'
import ChatComponent from './ChatComponent'
import { useState, useEffect, useRef } from 'react'

export default function WhyChooseUs() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          startCounting()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const startCounting = () => {
    const duration = 2000
    const steps1 = 5
    const steps2 = 99
    const interval1 = duration / steps1
    const interval2 = duration / steps2

    const timer1 = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount < 5) {
          return prevCount + 1
        }
        clearInterval(timer1)
        return prevCount
      })
    }, interval1)

    const timer2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount < 99) {
          return prevCount + 1
        }
        clearInterval(timer2)
        return prevCount
      })
    }, interval2)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
    }
  }

  return (
    <section ref={sectionRef} className="py-16 bg-[#e7edff]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16 lg:gap-24">
          {/* Text Section */}
          <div className={`md:w-1/2 lg:h-[450px] flex flex-col transition-all justify-between gap-6 md:gap-8 lg:gap-12 duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="md:text-4xl/10 text-3xl/10 lg:text-5xl font-bold leading-tight">
              Why choose our<br /> learning platform?
            </h2>
            <p className="text-gray-600 text-sm md:text-xl lg:text-xl">
              Expert guidance and structured courses to help you succeed in CLAT, AILET, and other law entrance exams.
            </p>
            <div className="flex gap-8 md:gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-all duration-200">
                  {count1} X
                </h3>
                <p className="text-gray-500 text-sm md:text-xl">Faster Learning</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-all duration-200">
                  {count2}%
                </h3>
                <p className="text-gray-500 text-sm md:text-xl">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <h5 className="font-bold text-base md:text-lg lg:text-xl">Get Started</h5>
              <span className="text-lg md:text-xl transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Chat Section */}
          <div className={`md:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ChatComponent />
          </div>
        </div>
      </div>
    </section>
  )
} 