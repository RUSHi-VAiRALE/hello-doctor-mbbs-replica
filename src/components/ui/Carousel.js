'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Carousel({ slides, currentSlide, setCurrentSlide, autoPlay = true, interval = 5000, height }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Initial check
      setIsMobile(window.innerWidth < 768)

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, slides.length, setCurrentSlide])

  return (
    <div className={`relative h-[250px] sm:h-[135px] md:h-[150px] lg:h-[200px] xl:h-[250px] w-full overflow-hidden`}>
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
            src={isMobile && slide.mobileImage ? slide.mobileImage : slide.image}
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