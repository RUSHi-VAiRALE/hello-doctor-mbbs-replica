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
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide
        const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
        const isNext = index === (currentSlide + 1) % slides.length

        // Only render current slide and adjacent slides
        if (!isActive && !isPrev && !isNext) return null

        return (
          <div
            key={slide.id}
            className="absolute w-full h-full transition-transform duration-500 ease-in-out"
            style={{
              transform: isActive
                ? 'translateX(0)'
                : isPrev
                  ? 'translateX(-100%)'
                  : 'translateX(100%)',
              willChange: 'transform'
            }}
          >
            {/* Desktop Image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-contain hidden md:block"
              priority={isActive}
              sizes="100vw"
              quality={isActive ? 90 : 75}
              loading={isActive ? 'eager' : 'lazy'}
            />

            {/* Mobile Image */}
            <Image
              src={slide.mobileImage}
              alt={slide.alt}
              className="object-cover aspect-square md:hidden"
              priority={isActive}
              sizes="100vw"
              quality={isActive ? 90 : 75}
              loading={isActive ? 'eager' : 'lazy'}
            />
          </div>
        )
      })}
    </div>
  )
}