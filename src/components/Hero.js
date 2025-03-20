'use client'
import { useState } from 'react'
import { Carousel } from '@/components/ui/Carousel'

export default function Hero({slides,height}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  

  return (
    <section className="relative w-full h-full overflow-hidden">
      <Carousel
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        autoPlay={true}
        interval={5000}
        height = {height}
      />
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index 
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