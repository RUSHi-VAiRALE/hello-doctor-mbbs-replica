'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function StudentTestimonials() {
  const [progress, setProgress] = useState(0)
  const [swiper, setSwiper] = useState(null)

  const testimonials = [
    {
      name: "Shivam",
      image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
      rank: 2,
      description: "I am incredibly grateful to CLATians, the best CLAT coaching institute, for helping me achieve my dream of securing AIR 10 in CLAT and becoming Bihar's 2nd Topper. The expert guidance, personalized mentoring, and high-quality study material provided by CLATians played a crucial role in my preparation.The regular mock tests, doubt-clearing sessions, and smart preparation strategies boosted my confidence and helped me perform well in the CLAT exam. I am now pursuing my law degree at NLSIU, Bengaluru, and I sincerely thank CLATians for their immense support.If you are an aspiring law student aiming for top NLUs, I highly recommend CLATians for CLAT preparation. With the right coaching and dedication, cracking CLAT becomes much easier.Thank you, CLATians, for shaping my journey to success!"
    },{
      name: "Badal",
      image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
      rank: 9,
      description: "I am currently studying at HNLU, Raipur, and I also cleared the AIL-LET exam. I am really thankful to CLATians for their excellent CLAT coaching and guidance. Their experienced faculty, mock tests, and study material helped me crack CLAT with confidence. If you are looking for the best CLAT coaching institute, I highly recommend CLATians for your law entrance preparation."
    },{
      name: "Nihal Swaraj Pal",
      image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
      rank: 55,
      description: "I am grateful to CLATians for their excellent CLAT coaching. Their expert guidance, study material, and regular mock tests helped me clear CLAT and secure admission to CNLU, Patna. The personalized attention and doubt-solving sessions boosted my confidence. I highly recommend CLATians to every CLAT aspirant looking for the best CLAT coaching institute. Thank you, CLATians!"
    },{
      name: "Saatvika Singh",
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/56/asian-1870022_1280.jpg",
      rank: 99,
      description: "CLATians is the best CLAT coaching institute for anyone aiming to crack the exam. Their expert faculty, personalized guidance, and effective strategies helped me secure admission to CNLU, Patna. I highly recommend CLATians to every law aspirant looking for top-notch CLAT preparation and success."
    },{
      name: "Kumar Satyam",
      image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
      rank: 65,
      description: "I am grateful to CLATians for helping me crack CLAT and secure my place at CNLU, Patna. The expert faculty, personalized guidance, and excellent study material made my CLAT preparation smooth and effective. I highly recommend CLATians to anyone aiming for top NLUs. It’s truly the best CLAT coaching institute for achieving your law career dreams"
    },{
      name: "Annu Kumar",
      image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
      rank: 9,
      description: "I am grateful to CLATians for helping me achieve my dream of getting into NLU, Odisha. Their expert guidance, comprehensive study material, and regular mock tests prepared me well for the CLAT exam. The faculty's support and the focused learning environment made a huge difference. I highly recommend CLATians for the best CLAT coaching to all aspirants. Thank you, CLATians!"
    },{
      name: "Parul",
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/56/asian-1870022_1280.jpg",
      rank: 89,
      description: "I am grateful to CLATians for their excellent CLAT coaching that helped me clear my CLAT exam and secure admission to IIULER, Goa. The faculty's guidance, regular mock tests, and study materials were really helpful. I highly recommend CLATians to anyone preparing for CLAT 2025. It's the best place to achieve your law entrance dream. Thank you, CLATians!"
    },{
      name: "Nisha Kumari",
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/56/asian-1870022_1280.jpg",
      rank: 89,
      description: "I highly recommend CLATians for CLAT coaching! Their expert faculty, structured curriculum, and personalized guidance helped me crack the exam and secure a seat at NLU, Nagpur. The mock tests and doubt-solving sessions were incredibly helpful in boosting my confidence. If you're aiming for success in CLAT, CLATians is the best place to start your preparation!"
    },{
      name: "Sneha",
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/56/asian-1870022_1280.jpg",
      rank: 89,
      description: "I am extremely grateful to CLATians for their amazing support and guidance in my CLAT preparation. The expert faculty, study material, and regular mock tests helped me a lot to clear my concepts and boost my confidence. If you're looking for the best CLAT coaching institute, I highly recommend CLATians. They truly make your CLAT journey smooth and successful."
    },
    {
      name: "Diksha",
      image: "https://cdn.pixabay.com/photo/2016/11/29/13/56/asian-1870022_1280.jpg",
      rank: 89,
      description: "CLATians is the best CLAT coaching institute for anyone aiming to crack the exam. Their expert faculty, well-structured study material, and regular mock tests helped me improve tremendously. The personalized guidance and doubt-clearing sessions made learning easy and effective. I highly recommend CLATians to all aspiring law students seeking top-notch CLAT preparation support."
    },{
      name: "Harsh",
      image: "https://cdn.pixabay.com/photo/2021/03/08/20/14/child-6080185_1280.jpg",
      rank: 41,
      description: "CLATians is the best CLAT coaching institute for anyone aiming to crack the exam. Their expert faculty, well-structured study material, and regular mock tests helped me improve tremendously. The personalized guidance and doubt-clearing sessions made learning easy and effective. I highly recommend CLATians to all aspiring law students seeking top-notch CLAT preparation support."
    }
    // Add more testimonials...
  ]

  return (
    <section className="py-12 bg-[#e7edff] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold">
            Our <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">SUCCESS</span> STORIES
          </h3>
        </div>

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
                slidesPerView: 2,
                spaceBetween: 12
              },
              // Tablet
              768: {
                slidesPerView: 3,
                spaceBetween: 16
              },
              // Laptop
              1024: {
                slidesPerView: 4,
                spaceBetween: 16
              },
              // Desktop
              1280: {
                slidesPerView: 5,
                spaceBetween: 16
              }
            }}
            onSlideChange={(swiper) => {
              const progress = ((swiper.realIndex + 1) / testimonials.length) * 100;
              setProgress(progress);
            }}
            className="w-full mb-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation and Progress Bar */}
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

function TestimonialCard({ testimonial }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Student Image and Rank */}
      <div className="relative h-44 sm:h-48 md:h-44">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        
        {/* Rank Badge */}
        <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform -rotate-12">
            <div className="text-center">
              <div className="text-[8px] font-semibold text-gray-600">RANK</div>
              <div className="text-base font-bold text-red-600">{testimonial.rank}</div>
            </div>
          </div>
        </div>

        {/* Student Name */}
        <div className="absolute bottom-2 left-3 right-3">
          <h4 className="text-white text-lg font-bold truncate">{testimonial.name}</h4>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="p-4">
        <div className="relative">
          <i className="bi bi-quote text-xl text-red-100 absolute -top-3 -left-1"></i>
          <p className="text-gray-600 text-xs leading-relaxed pl-4 line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
            {testimonial.description}
          </p>
        </div>

        {/* Read More Button */}
        <button 
          className="mt-2 text-xs text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
          onClick={() => {/* Add read more functionality */}}
        >
          Read More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}