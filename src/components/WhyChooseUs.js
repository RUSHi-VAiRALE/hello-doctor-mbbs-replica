'use client'
import ChatComponent from './ChatComponent'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

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
    const steps1 = 1000
    const steps2 = 99
    const interval1 = duration / steps1
    const interval2 = duration / steps2

    const timer1 = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount < 1000) {
          return prevCount + 2
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
    <section ref={sectionRef} className="py-16 bg-[#f3f3f3] shadow-lg shadow-gray-300/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-16 lg:gap-24">
          {/* Text Section */}
          <div className={`md:w-1/2 lg:h-[450px] flex flex-col transition-all justify-between gap-6 md:gap-2 lg:gap-4 duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="md:text-xl text-2xl/10 lg:text-4xl font-bold leading-tight text-center md:text-left mb-2">
                Hello Doctor
              </h2>
              <p className="md:text-lg text-xl lg:text-2xl font-semibold text-gray-700 text-center md:text-left mb-4">
                India's Most Trusted & Best CLAT Coaching Institute
              </p>
            </div>
            <p className="text-gray-600 text-sm md:text-md lg:text-lg text-justify">
              Crack CLAT with India's affordable and comprehensive law entrance preparation program. From Legal Reasoning to Current Affairs, comprehensive study material to mock tests series, our expert mentors guide you through every section of CLAT to secure your seat in Top National Law Universities (NLUs).
              <br /><strong className='text-black'>Start your NLU journey today at unmatched Study Environment!</strong>

            </p>
            <div className="flex gap-8 md:gap-12 lg:gap-16">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-all duration-200">
                  {count1}+
                </h3>
                <p className="text-gray-500 text-sm md:text-xl">Fast Learning Student</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-all duration-200">
                  {count2}%
                </h3>
                <p className="text-gray-500 text-sm md:text-xl">Success Rate</p>
              </div>
            </div>
            <Link href="/admission" className="flex items-center gap-3 group cursor-pointer">
              <h5 className="font-bold text-base md:text-2xl lg:text-3xl bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-transparent bg-clip-text">
                Get Started
              </h5>
              <span className="text-lg md:text-3xl transform group-hover:translate-x-2 transition-transform bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-transparent bg-clip-text">
                →
              </span>
            </Link>
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