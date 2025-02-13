'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ExploreTopCourses() {
  const [progress, setProgress] = useState(0)
  const [swiper, setSwiper] = useState(null)
  const courses = [
    {
      image: "https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg",
      category: "CLAT",
      title: "CLAT Foundation Course",
      level: "Beginner",
      price: "₹25,000",
      students: 320,
      lessons: 15,
      description: "Comprehensive preparation for CLAT examination with expert guidance and study materials."
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "AILET",
      title: "AILET Crash Course",
      level: "Advanced",
      price: "₹15,000",
      students: 250,
      lessons: 12,
      description: "Intensive preparation program for AILET with mock tests and personalized mentoring."
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "CUET",
      title: "CUET Complete Course",
      level: "Intermediate",
      price: "₹20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination."
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg", 
      category: "CUET",
      title: "CUET Complete Course",
      level: "Intermediate",
      price: "₹20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination."
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "CUET",
      title: "CUET Complete Course",
      level: "Intermediate",
      price: "₹20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination."
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "CUET",
      title: "CUET Complete Course",
      level: "Intermediate",
      price: "₹20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination."
    }
  ]

  return (
    <section className="py-12 bg-[#e7edff] overflow-hidden">
      <div className="container mx-auto w-[85%] lg:w-[80%]">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold uppercase">
            Explore Top <span className="text-blue-600">Courses</span>
          </h3>
        </div>

        <div className="relative">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 15
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20
              }
            }}
            onSlideChange={(swiper) => {
              const progress = ((swiper.realIndex + 1) / courses.length) * 100;
              setProgress(progress);
            }}
            className="w-full mb-8"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative"
                  style={{ height: '420px' }}
                >
                  {/* Course Image */}
                  <div className="relative h-48">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 600px) 100vw, 600px"
                    />
                    <span className="absolute bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-3 py-1 rounded-xl text-sm font-medium">
                      {course.category}
                    </span>
                  </div>

                  {/* Course Details */}
                  <div className="p-4">
                    <h5 className="font-bold text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {course.title}
                    </h5>
                    
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                      <span className="text-green-600 font-bold text-lg">
                        {course.price}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm gap-4 mb-3">
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
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white mb-4 text-sm">
                        {course.description}
                      </p>
                      <button className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white py-2.5 rounded-full font-semibold text-sm transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg">
                        Enroll Now
                      </button>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                      <i className="bi bi-heart text-red-500"></i>
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
                      <i className="bi bi-share text-blue-600"></i>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation and Progress Bar */}
        <div className="w-[75%] mx-auto">
          <div className="flex items-center justify-between gap-4">
            <button 
              onClick={() => swiper?.slidePrev()}
              className="w-10 h-10 bg-white rounded-full flex items-center border-red-600 justify-center shadow-lg hover:bg-blue-50 transition-colors group"
            >
              <i className="bi bi-chevron-left text-red-600 group-hover:text-blue-600"></i>
            </button>
            
            <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <button 
              onClick={() => swiper?.slideNext()}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors group"
            >
              <i className="bi bi-chevron-right text-red-600 group-hover:text-blue-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 