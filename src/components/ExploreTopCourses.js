'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ExploreTopCourses() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const courses = [
    {
      image: "https://placehold.co/600x400",
      category: "CLAT",
      title: "CLAT Foundation Course",
      level: "Beginner",
      price: "₹25,000",
      students: 320,
      lessons: 15,
      description: "Comprehensive preparation for CLAT examination with expert guidance and study materials."
    },
    {
      image: "https://placehold.co/600x400",
      category: "AILET",
      title: "AILET Crash Course",
      level: "Advanced",
      price: "₹15,000",
      students: 250,
      lessons: 12,
      description: "Intensive preparation program for AILET with mock tests and personalized mentoring."
    },
    {
      image: "https://placehold.co/600x400",
      category: "CUET",
      title: "CUET Complete Course",
      level: "Intermediate",
      price: "₹20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination."
    }
  ]

  // Auto-play functionality with slower speed (5 seconds)
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length)
  }

  return (
    <section className="py-16 bg-[#e7edff] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold uppercase">
            Explore Top <span className="text-blue-600">Courses</span>
          </h3>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * (100 / 2)}%)`,
                width: `${(courses.length * 50)}%` // Adjusted to accommodate the width of each card
              }}
            >
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="w-1/2 flex-shrink-0 px-4" // Each card takes half the width
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
                    {/* Course Image */}
                    <div className="relative h-48">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {course.category}
                      </span>
                    </div>

                    {/* Course Details */}
                    <div className="p-6">
                      <h5 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h5>
                      
                      <div className="flex justify-between items-center mb-4">
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          {course.level}
                        </span>
                        <span className="text-green-600 font-bold text-lg">
                          {course.price}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm gap-6 mb-4">
                        <div className="flex items-center">
                          <i className="bi bi-people-fill mr-2 text-blue-600"></i>
                          <span>{course.students} Students</span>
                        </div>
                        <div className="flex items-center">
                          <i className="bi bi-journal-text mr-2 text-blue-600"></i>
                          <span>{course.lessons} Lessons</span>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <p className="text-white mb-4 text-sm">
                          {course.description}
                        </p>
                        <button className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                          Enroll Now
                        </button>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                        <i className="bi bi-heart text-red-500"></i>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                        <i className="bi bi-share text-blue-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10 -ml-5"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <i className="bi bi-chevron-left text-2xl text-gray-800"></i>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-colors z-10 -mr-5"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <i className="bi bi-chevron-right text-2xl text-gray-800"></i>
          </button>
        </div>
      </div>
    </section>
  )
} 