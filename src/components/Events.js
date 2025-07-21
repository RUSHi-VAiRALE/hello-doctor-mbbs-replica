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
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Study Destinations
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
            Study Destinations
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="relative overflow-hidden rounded-3xl shadow-lg h-80 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${country.image})`
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Country Label */}
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 text-center transform transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
                      <h3 className="text-xl font-bold text-gray-900">
                        {country.name}
                      </h3>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500/50 rounded-3xl transition-all duration-300"></div>
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
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}