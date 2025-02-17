'use client'
import { useState } from 'react'
import CourseCard from './CourseSingleCard'

export default function CoursesList() {
  const [courses] = useState([
    {
      id: 1,
      title: "CLAT Achievers 2026 Batch",
      tag: "FOR CLAT & AILET 2026",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 2,
      title: "CLAT Achievers 2026 Batch",
      tag: "FOR CLAT & AILET 2026",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },{
      id: 3,
      title: "CLAT Achievers 2026 Batch",
      tag: "FOR CLAT & AILET 2026",
      badges: ["NEW", "Hinglish"],
      startDate: "13 Jan, 2025",
      endDate: "31 Dec, 2025",
      features: "Premium Features Included",
      price: "₹9,999",
      originalPrice: "₹21,000",
      discount: "55% OFF",
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
    },
    // Add more courses...
  ])

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold mb-8">
          LAW <span className="text-blue-600">Courses</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto gap-2">
            View All Batches
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  )
} 