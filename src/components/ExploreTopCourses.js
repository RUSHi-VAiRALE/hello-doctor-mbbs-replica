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

  const totalSlides = courses.length

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
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
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
          <div className="overflow-hidden px-11 w-[80%] mx-auto">
            <div 
              className="flex overflow-hidden"
              style={{ 
                transform: `translateX(-${currentSlide * 50}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {courses.concat(courses).map((course, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: '280px', height: '327px' }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
                    {/* Course Image */}
                    <div className="relative h-40">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-2 py-1 rounded-md text-xs font-medium">
                        {course.category}
                      </span>
                    </div>

                    {/* Course Details */}
                    <div className="p-3">
                      <h5 className="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h5>
                      
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                          {course.level}
                        </span>
                        <span className="text-green-600 font-bold text-md">
                          {course.price}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-500 text-xs gap-4 mb-2">
                        <div className="flex items-center">
                          <i className="bi bi-people-fill mr-1 text-blue-600"></i>
                          <span>{course.students} Students</span>
                        </div>
                        <div className="flex items-center">
                          <i className="bi bi-journal-text mr-1 text-blue-600"></i>
                          <span>{course.lessons} Lessons</span>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <p className="text-white mb-2 text-xs">
                          {course.description}
                        </p>
                        <button className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white py-2 rounded-full font-semibold transform hover:scale-100 transition-transform duration-300 hover:shadow-lg">
                          Enroll Now
                        </button>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                        <i className="bi bi-heart text-red-500"></i>
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                        <i className="bi bi-share text-blue-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons and Progress Indicator */}
          <div className="navigation-buttons-section flex justify-between items-center mt-3 px-8 w-1/2 mx-auto">
            <button className="btn btn-light m-3 bg-gray-400 w-11 h-11" onClick={handlePrev}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <div className="progress-indicator-section w-full flex-grow-1 mx-3 relative">
              <div className="progress-bar-section bg-gray-300 w-full h-2 rounded-md">
                <div 
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 h-full rounded-md" 
                  style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                ></div>
              </div>
            </div>
            <button className="btn btn-light bg-gray-400 w-11 h-11" onClick={handleNext}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 