'use client'
import { useState } from 'react'
import { Carousel } from '@/components/ui/Carousel'
import Desk1 from '../../public/Desk1.webp'
import Desk2 from '../../public/Desk2.webp'
import Desk3 from '../../public/Desk3.webp'
import Desk4 from '../../public/Desk4.webp'
import Mob1 from '../../public/Mob1.webp'
import Mob2 from '../../public/Mob2.webp'
import Mob3 from '../../public/Mob3.webp'
import Mob4 from '../../public/Mob4.webp'

const slides =
  [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      mobileImage: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      mobileImage: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      mobileImage: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      alt: "Slide 3"
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      mobileImage: "https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg",
      alt: "Slide 4"
    }
  ]

export default function Hero({ height }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative w-full h-screen overflow-hidden shadow-lg shadow-gray-300/50">
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        autoPlay={true}
        interval={5000}
        height={height}
      />

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${currentSlide === index
              ? 'bg-white w-4'
              : 'bg-white/50'
              }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute sm:left-12 left-5 top-1/2 -translate-y-1/2 bg-black/20 p-2 rounded-full text-white hover:bg-black/40 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute sm:right-12 right-5 top-1/2 -translate-y-1/2 bg-black/20 p-2 rounded-full text-white hover:bg-black/40 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}