'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import { app } from '@/firebase'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function StudentTestimonials() {
  const [progress, setProgress] = useState(0)
  const [swiper, setSwiper] = useState(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch testimonials from Firebase
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const db = getFirestore(app)
        const testimonialsCollection = collection(db, "testimonials")
        const q = query(testimonialsCollection, orderBy("createdAt", "asc"));
        const testimonialsSnapshot = await getDocs(q)
        const testimonialsData = testimonialsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        console.log(testimonialsData)
        if (testimonialsData.length > 0) {
          setTestimonials(testimonialsData)
        } else {
          // Fallback data if no testimonials found
          setTestimonials([
            {
              id: "1",
              name: "Shivam",
              image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
              rank: 2,
              description: "I am incredibly grateful to CLATians, the best CLAT coaching institute, for helping me achieve my dream of securing AIR 10 in CLAT and becoming Bihar's 2nd Topper."
            }
          ])
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error)
        // Fallback data in case of error
        setTestimonials([
          {
            id: "1",
            name: "Shivam",
            image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
            rank: 2,
            description: "I am incredibly grateful to CLATians, the best CLAT coaching institute, for helping me achieve my dream of securing AIR 10 in CLAT and becoming Bihar's 2nd Topper."
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Add a function to handle scroll events
  const handleScroll = () => {
    if (swiper) {
      swiper.autoplay.stop();

      // Clear any existing timeout
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
      }

      // Set a timeout to restart autoplay after scrolling stops
      window.scrollTimeout = setTimeout(() => {
        swiper.autoplay.start();
      }, 2000); // Resume after 2 seconds of no scrolling
    }
  };

  // Featured testimonial (first one from the list)
  const mainTestimonial = testimonials.length > 0 ? testimonials[0] : null;

  if (loading) {
    return (
      <section className="py-12 bg-[#e7edff] overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">
              Student ❤️ <span className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-md">CLATians</span>
            </h3>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    )
  }

  if (!mainTestimonial) {
    return null;
  }

  return (
    <section className="py-12 bg-[#f3f3f3] overflow-hidden shadow-lg shadow-gray-300/50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">
            Student ❤️ <span className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-md">CLATians</span>
          </h3>
        </div>

        {/* Featured Testimonial Card */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            {/* Image */}
            <div className="relative md:w-1/2">
              <img
                src={mainTestimonial.image}
                alt={mainTestimonial.name}
                className="w-full h-48 md:h-full object-cover"
              />
              {/* Rank Badge - Only show if rank exists and is not empty */}
              {mainTestimonial.rank && mainTestimonial.rank !== "" && (
                <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform -rotate-12">
                    <div className="text-center">
                      <div className="text-[8px] font-semibold text-gray-600">RANK</div>
                      <div className="text-base font-bold text-red-600">{mainTestimonial.rank}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Content */}
            <div className="p-6 md:w-1/2">
              <div className="mb-4">
                <i className="bi bi-quote text-xl text-red-100"></i>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm text-justify">{mainTestimonial.description}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-base">{mainTestimonial.name}</p>
                <p className="text-xs text-gray-500">{mainTestimonial.collegeName}</p>
              </div>
            </div>
          </div>
        </div>

        {testimonials.length > 1 && (
          <div className="relative">
            <Swiper
              onSwiper={setSwiper}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              spaceBetween={16}
              breakpoints={{
                // Mobile
                400: {
                  slidesPerView: 1,
                  spaceBetween: 12
                },
                // Tablet
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16
                },
                // Laptop
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 16
                },
                // Desktop
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 16
                }
              }}
              onSlideChange={(swiper) => {
                const progress = ((swiper.realIndex + 1) / (testimonials.length - 1)) * 100;
                setProgress(progress);
              }}
              className="w-full mb-8"
            >
              {testimonials.slice(1).map((testimonial, index) => (
                <SwiperSlide key={testimonial.id || index}>
                  <div className="bg-white p-4 rounded-lg shadow-lg flex cursor-pointer flex-col h-full">
                    {/* Testimonial Content */}
                    <div className="flex-grow">
                      <p
                        className="text-gray-600 text-justify mb-4 leading-relaxed text-sm h-[120px] overflow-y-auto pr-2 scrollbar-hide"
                        onScroll={handleScroll}
                      >
                        {testimonial.description}
                      </p>
                    </div>
                    {/* User Info */}
                    <div className="text-center mt-auto">
                      <div className="relative inline-block">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full mx-auto mb-2 object-cover"
                        />
                        {/* Mini Rank Badge - Only show if rank exists and is not empty */}
                        {testimonial.rank && testimonial.rank !== "" && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-full flex items-center justify-center text-[8px] text-white font-bold">
                            {testimonial.rank}
                          </div>
                        )}
                      </div>
                      <p className="font-bold text-base">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.collegeName}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* Navigation and Progress Bar */}
        {testimonials.length > 1 && (
          <div className="md:w-full w-[78%] mx-auto">
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => swiper?.slidePrev()}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors group"
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
        )}
      </div>
    </section>
  )
}