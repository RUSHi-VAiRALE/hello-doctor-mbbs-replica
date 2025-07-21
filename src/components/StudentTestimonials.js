'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import { app } from '@/firebase'

export default function StudentTestimonials() {
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

        if (testimonialsData.length > 0) {
          setTestimonials(testimonialsData)
        } else {
          // Fallback data if no testimonials found
          setTestimonials([
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
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error)
        // Fallback data in case of error
        setTestimonials([
          {
            id: "1",
            name: "Rajasthan",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
            description: "Top MBBS colleges with excellent infrastructure"
          },
          {
            id: "2",
            name: "Maharashtra",
            image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&h=300&fit=crop",
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
            image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop",
            description: "Affordable medical education options"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Study MBBS In India
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Study MBBS In India
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.id || index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 md:h-72">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Label */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 text-center transform transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>

                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All States
          </button>
        </div>
      </div>
    </section>
  )
}