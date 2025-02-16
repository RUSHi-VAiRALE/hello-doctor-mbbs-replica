'use client'
import ChatComponent from './ChatComponent'
import { useState, useEffect } from 'react'

export default function WhyChooseUs() {
  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)

  useEffect(() => {
    const duration = 1000 // 2 seconds
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
  }, [])

  return (
    <section className="py-16 px-16 bg-[#e7edff]">
      <div className="container mx-auto lg:pl-20">
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* Text Section */}
          <div className="md:w-1/2 h-full flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Why choose our<br /> learning platform?
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Expert guidance and structured courses to help you succeed in CLAT, AILET, and other law entrance exams.
            </p>
            <div className="flex gap-16 mb-12">
              <div>
                <h3 className="text-4xl font-bold mb-2 transition-all duration-200">
                  {count1} X
                </h3>
                <p className="text-gray-500 text-lg">Faster Learning</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 transition-all duration-200">
                  {count2}%
                </h3>
                <p className="text-gray-500 text-lg">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <h5 className="font-bold text-xl">Get Started</h5>
              <span className="text-xl transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Chat Section */}
          <div className="md:w-1/2">
            <ChatComponent />
          </div>
        </div>
      </div>
    </section>
  )
} 