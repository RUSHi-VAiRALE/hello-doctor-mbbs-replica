'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '@/firebase';

export default function Events() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  // Fetch countries from Firebase
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const db = getFirestore(app);
        const countriesCollection = collection(db, "countries");
        const countriesSnapshot = await getDocs(countriesCollection);
        const countriesData = countriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (countriesData.length > 0) {
          setCountries(countriesData);
        } else {
          // Fallback data if no countries found
          setCountries([
            {
              id: "1",
              name: "Russia",
              image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop"
            },
            {
              id: "2",
              name: "Georgia",
              image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
            },
            {
              id: "3",
              name: "Kyrgyzstan",
              image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
            },
            {
              id: "4",
              name: "USA",
              image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop"
            },
            {
              id: "5",
              name: "Canada",
              image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop"
            },
            {
              id: "6",
              name: "UK",
              image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop"
            },
            {
              id: "7",
              name: "Australia",
              image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop"
            },
            {
              id: "8",
              name: "Germany",
              image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop"
            }
          ]);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
        // Fallback data in case of error
        setCountries([
          {
            id: "1",
            name: "Russia",
            image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop"
          },
          {
            id: "2",
            name: "Georgia",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
          },
          {
            id: "3",
            name: "Kyrgyzstan",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          },
          {
            id: "4",
            name: "USA",
            image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400&h=300&fit=crop"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === countries.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [countries.length])

  // Scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = 320 // Card width + gap
      carouselRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const scrollToIndex = (index) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? countries.length - 1 : prevIndex - 1
    )
  }

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
              <i className="bi bi-globe-americas mr-2"></i>
              GLOBAL EDUCATION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Study Destinations
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
            <i className="bi bi-globe-americas mr-2"></i>
            GLOBAL EDUCATION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Study Destinations
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Discover world-class medical education opportunities across the globe with our expert guidance
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {countries.map((country, index) => (
              <div
                key={country.id || index}
                className="flex-none w-72 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => scrollToIndex(index)}
              >
                <div className="relative overflow-hidden rounded-2xl h-80 bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${country.image})`
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Country Label */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-8 py-4 text-center transform transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:scale-105">
                      <h3 className="text-xl font-bold text-gray-900">
                        {country.name}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300"></div>

                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                    <i className="bi bi-arrow-right text-white text-sm"></i>
                  </div>

                  {/* Country Flag or Icon */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center opacity-90">
                    <i className="bi bi-flag-fill text-white text-xs"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {countries.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-gradient-to-r from-blue-400 to-purple-500 scale-125 shadow-lg'
                : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <i className="bi bi-airplane mr-2"></i>
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}