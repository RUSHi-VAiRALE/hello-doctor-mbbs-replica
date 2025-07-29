'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import { app } from '@/firebase'

export default function StudentTestimonials() {
  const [testimonials, setTestimonials] = useState([
    {
      id: "1",
      name: "Rajasthan",
      image: "https://cdn.pixabay.com/photo/2016/06/14/17/03/india-1457055_1280.jpg",
      description: "Top MBBS colleges with excellent infrastructure"
    },
    {
      id: "2",
      name: "Maharashtra",
      image: "https://cdn.pixabay.com/photo/2018/08/13/18/40/gateway-3603678_1280.jpg",
      description: "Premier medical education destination"
    },
    {
      id: "3",
      name: "Gujarat",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500&h=300&fit=crop",
      description: "Quality medical colleges with modern facilities"
    },
    {
      id: "4",
      name: "Madhya Pradesh",
      image: "https://cdn.pixabay.com/photo/2018/12/17/15/04/mahadev-3880558_1280.jpg",
      description: "Affordable medical education options"
    },
    {
      id: "5",
      name: "Uttar Pradesh",
      image: "https://cdn.pixabay.com/photo/2014/06/30/08/09/taj-mahal-380045_1280.jpg",
      description: "Renowned medical institutions"
    },
    {
      id: "6",
      name: "Bihar",
      image: "https://cdn.pixabay.com/photo/2022/03/11/15/46/mausoleum-7062519_1280.jpg",
      description: "Growing medical education hub"
    },
    {
      id: "7",
      name: "Delhi",
      image: "https://cdn.pixabay.com/photo/2022/04/13/13/55/india-7130382_1280.jpg",
      description: "Capital's premier medical colleges"
    },
    {
      id: "8",
      name: "Karnataka",
      image: "https://cdn.pixabay.com/photo/2019/12/20/11/03/pettadkal-4708204_1280.jpg",
      description: "South India's medical education center"
    }
  ])
  const [loading, setLoading] = useState(false)



  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
        }}></div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <i className="bi bi-mortarboard-fill mr-2"></i>
              STUDY DESTINATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Study MBBS In India
            </h2>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-mortarboard-fill mr-2"></i>
            STUDY DESTINATIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Study MBBS In India
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Explore top medical colleges across India with excellent infrastructure and quality education
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.id || index}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-2xl h-64 md:h-72 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Label */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-2 py-1 text-center transform transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:scale-105">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    {/* {item.description && (
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    )} */}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                  <i className="bi bi-arrow-right text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <i className="bi bi-globe mr-2"></i>
            Explore All States
          </button>
        </div>
      </div>
    </section>
  )
}