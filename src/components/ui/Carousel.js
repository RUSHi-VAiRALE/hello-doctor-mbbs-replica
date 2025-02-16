'use client'
import { useEffect } from 'react'
import Image from 'next/image'

export function Carousel({ slides, currentSlide, setCurrentSlide, autoPlay = true, interval = 5000 }) {
  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length, setCurrentSlide])

  return (
    <div className="relative h-[250px] md:h-[250px] w-full overflow-hidden py-4 mb-4">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0' 
              : index < currentSlide 
                ? '-translate-x-full' 
                : 'translate-x-full'
          }`}
        >
          <Image
            src="https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_1280.jpg"
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
} 