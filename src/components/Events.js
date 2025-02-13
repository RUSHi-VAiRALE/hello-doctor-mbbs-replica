'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//import image from '../../public/400x300.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Events() {
  const [progress, setProgress] = useState(0);
  
  const events = [
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://placehold.co/400x300'
    },
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://placehold.co/400x300'
    },
    {
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://placehold.co/400x300'
    },{
      date: { day: '01', month: 'Oct' },
      time: '08:00 AM - 10:00 AM',
      title: 'Engaging Students in Real-World Problems Finding',
      location: 'United States',
      image: 'https://placehold.co/400x300'
    }
  ];

  return (
    <section className="bg-[#e7edff] py-16 overflow-hidden">
      <div className="container mx-auto w-[75%]">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Upcoming Events
          </span>
          <h2 className="text-3xl font-bold">Upcoming Events & Webinars</h2>
        </div>

        <Swiper
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
          spaceBetween={30}
          centeredSlides={true}
          breakpoints={{
            // Mobile
            640: {
              slidesPerView: 1.5,
              spaceBetween: 15
            },
            // Tablet
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            // Desktop
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30
            }
          }}
          onSlideChange={(swiper) => {
            const progress = ((swiper.realIndex + 1) / events.length) * 100;
            setProgress(progress);
          }}
          className="w-full mb-8 rounded-xl"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index} style={{ width: '500px' }}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">
                <div className="relative">
                  <Image
                    src="https://clatwallah.netlify.app/images/logo.png"
                    alt={event.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-[#E3D7B8] px-6 py-3 rounded-br-xl">
                    <div className="text-center">
                      <h5 className="text-2xl font-bold text-gray-800">{event.date.day}</h5>
                      <small className="text-gray-600 text-base">{event.date.month}</small>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <i className="bi bi-clock text-orange-500 mr-3 text-lg"></i>
                    <span className="text-base text-gray-600">{event.time}</span>
                  </div>

                  <h5 className="font-bold text-xl mb-4">{event.title}</h5>

                  <div className="flex items-center mb-6">
                    <i className="bi bi-geo-alt text-orange-500 mr-3 text-lg"></i>
                    <span className="text-base text-gray-600">{event.location}</span>
                  </div>

                  <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg text-base">
                    View Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons and Progress Bar */}
        <div className="w-[75%] mx-auto">
          <div className="flex items-center justify-between gap-4">
            <button className="relativeswiper-button-prev w-10 h-10 bg-white rounded-full flex items-center border-red-600 justify-center shadow-lg hover:bg-blue-50 transition-colors after:content-[''] group">
              <i className="bi bi-chevron-left text-red-600 group-hover:text-blue-600"></i>
            </button>
            
            <div className="flex-grow bg-gray-200 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <button className="relativeswiper-button-next w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-50 transition-colors after:content-[''] group">
              <i className="bi bi-chevron-right text-red-600 group-hover:text-blue-600"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 