'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Link from 'next/link'
import { collection, getFirestore, getDocs, query, limit } from 'firebase/firestore'
import { app } from '@/firebase'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ExploreTopCourses() {
  const [progress, setProgress] = useState(0)
  const [swiper, setSwiper] = useState(null)
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  // Default fallback courses in case Firebase fetch fails
  const defaultCourses = [
    {
      image: "https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg",
      category: "CLAT",
      title: "CLAT Foundation Course",
      level: "Beginner",
      price: "25,000",
      students: 320,
      lessons: 15,
      description: "Comprehensive preparation for CLAT examination with expert guidance and study materials.",
      link: "courses/online/0"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "AILET",
      title: "AILET Crash Course",
      level: "Advanced",
      price: "15,000",
      students: 250,
      lessons: 12,
      description: "Intensive preparation program for AILET with mock tests and personalized mentoring.",
      link: "courses/online/4"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "CUET(UG)",
      title: "CUET(UG) Complete Course",
      level: "Intermediate",
      price: "20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination.",
      link: "courses/online/2"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "CUET(PG)",
      title: "CUET(PG) Complete Course",
      level: "Intermediate",
      price: "20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination.",
      link: "courses/online/3"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "Booster",
      title: "Booster Course",
      level: "Intermediate",
      price: "20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination.",
      link: "courses/online/5"
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      category: "OLET",
      title: "OLET(Other Law Entrance Exam)  Complete Course",
      level: "Intermediate",
      price: "20,000",
      students: 280,
      lessons: 18,
      description: "Complete preparation package for CUET law entrance examination.",
      link: "courses/offline/4"
    }
  ]

  useEffect(() => {
    const db = getFirestore(app)
    const fetchCourses = async () => {
      try {
        setLoading(true)
        const coursesQuery = query(collection(db, "courses"), limit(2))
        const querySnapshot = await getDocs(coursesQuery)

        if (!querySnapshot.empty) {
          let allCourses = []

          // Process each document and fetch its subcollection
          const fetchPromises = querySnapshot.docs.map(async (doc) => {
            const data = doc.data()

            // Fetch the courseItems subcollection for this document
            const courseItemsRef = collection(db, "courses", doc.id, "courseItems")
            const courseItemsSnapshot = await getDocs(courseItemsRef)

            if (!courseItemsSnapshot.empty) {
              // Map each course item in the subcollection
              const docCourses = courseItemsSnapshot.docs.map(itemDoc => {
                const courseData = itemDoc.data()
                return {
                  id: itemDoc.id,
                  parentId: doc.id,
                  image: courseData.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
                  category: courseData.tag || data.examName || "Course",
                  title: courseData.title || "Course Program",
                  level: courseData.level || "Intermediate",
                  price: courseData.price || "Contact for Price",
                  students: courseData.students || Math.floor(Math.random() * 300) + 100,
                  lessons: courseData.lessons || Math.floor(Math.random() * 20) + 5,
                  description: data.description || "Comprehensive preparation with expert guidance and study materials.",
                  link: `courses/${data.batchType}/${doc.id}/courseCard/${itemDoc.id}`,
                  batchType: data.batchType || 'online'
                }
              })

              return docCourses
            } else if (data.courses && Array.isArray(data.courses) && data.courses.length > 0) {
              // Fallback to courses array if subcollection is empty
              return data.courses.map(course => ({
                id: doc.id,
                image: course.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
                category: course.tag || data.examName || "Course",
                title: course.title || "Course Program",
                level: course.level || "Intermediate",
                price: course.price || "Contact for Price",
                students: course.students || Math.floor(Math.random() * 300) + 100,
                lessons: course.lessons || Math.floor(Math.random() * 20) + 5,
                description: data.description || "Comprehensive preparation with expert guidance and study materials.",
                link: `courses/${data.batchType || 'online'}/${doc.id}`,
                batchType: data.batchType || 'online'
              }))
            } else {
              // If no subcollection or courses array, treat the document itself as a course
              return [{
                id: doc.id,
                image: data.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
                category: data.examName || data.category || "Course",
                title: data.title || "Course Program",
                level: data.level || "Intermediate",
                price: data.price || "Contact for Price",
                students: data.students || Math.floor(Math.random() * 300) + 100,
                lessons: data.lessons || Math.floor(Math.random() * 20) + 5,
                description: data.description || "Comprehensive preparation with expert guidance and study materials.",
                link: `courses/${data.batchType || 'online'}/${doc.id}`,
                batchType: data.batchType || 'online'
              }]
            }
          })

          // Wait for all subcollection fetches to complete
          const coursesArrays = await Promise.all(fetchPromises)

          // Flatten the array of arrays into a single array of courses
          allCourses = coursesArrays.flat()

          // Limit to 6 courses if we have more
          if (allCourses.length > 6) {
            allCourses = allCourses.slice(0, 6)
          }

          setCourses(allCourses.length > 0 ? allCourses : defaultCourses)
        } else {
          // If no courses found in Firebase, use default courses
          setCourses(defaultCourses)
        }
      } catch (error) {
        console.error("Error fetching courses:", error)
        // Use default courses on error
        setCourses(defaultCourses)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  return (
    <section className="py-12 bg-[#f3f3f3] overflow-hidden shadow-lg shadow-gray-300/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold uppercase">
            Explore Top <span className="text-[#ad4a16]">Courses</span>
          </h3>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
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
                pauseOnMouseEnter: true,
              }}
              loop={true}
              spaceBetween={15}
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 15
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
                  <CourseCard course={course} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Navigation and Progress Bar */}
        <div className="md:w-full w-[78%] mx-auto">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="w-10 h-10 bg-white rounded-full flex items-center border-red-600 justify-center shadow-lg hover:bg-blue-50 transition-colors group"
            >
              <i className="bi bi-chevron-left text-red-600 group-hover:text-blue-600"></i>
            </button>

            <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] transition-all duration-300"
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

function CourseCard({ course }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const hoverTimeoutRef = useRef(null)

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true)
    }, 50)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false)
    }, 3000)
  }

  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative w-[300px] sm:w-full mx-auto"
      style={{ height: '420px' }}
    >
      {/* Course Image */}
      <div
        className="relative h-48"
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
        />
        <span className="absolute top-0 left-0 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-3 py-1 rounded-r-lg text-sm font-medium">
          {course.category}
        </span>
      </div>

      {/* Course Details */}
      <div className="p-4 h-[calc(100%-192px)] flex flex-col">
        <h5 className="font-bold text-lg mb-3 transition-colors line-clamp-2">
          {course.title}
        </h5>

        <div className="flex justify-between items-center mb-3">
          <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
            {course.level}
          </span>
          <span className="text-green-600 font-bold text-lg">
            ₹ {course.price}
          </span>
        </div>

        <div className="flex items-center text-gray-500 text-sm gap-4 mb-auto">
          <div className="flex items-center">
            <i className="bi bi-people-fill mr-2 text-blue-600"></i>
            <span>{course.students} Students</span>
          </div>
          <div className="flex items-center">
            <i className="bi bi-journal-text mr-2 text-blue-600"></i>
            <span>{course.lessons} Lessons</span>
          </div>
        </div>

        {/* View Details Button */}
        <div
          className="relative z-30"
        >
          <Link href={`${course.link}`}>
            <button
              className={`w-full bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white py-2.5 rounded-full font-semibold text-sm transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg ${isHovered ? 'opacity-0' : 'opacity-100'}`}
              onClick={(e) => {
                e.stopPropagation();
                // Add your view details functionality here
              }}
            >
              View Details
            </button>
          </Link>
        </div>

        {/* Hover Overlay */}
        {isHovered && (
          <div className="course-overlay absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/90 transition-all duration-300 flex flex-col justify-end p-4 z-20">
            <p className="text-white mb-4 text-sm line-clamp-4">
              {course.description}
            </p>
            <button
              className="w-full bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white py-2.5 rounded-full font-semibold text-sm transform hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                // Add your enroll functionality here
              }}
            >
              Enroll Now
            </button>
          </div>
        )}

        {/* Quick Actions */}
        {isHovered && (
          <div className="absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
              <i className="bi bi-heart text-red-500"></i>
            </button>
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors">
              <i className="bi bi-share text-blue-600"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}