'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function AlternatingCarousel() {
 

  // Placeholder images for development (replace with your actual images)
  const placeholderImages = {
    row1: [
      "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
      "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_640.jpg",
      "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/14/05/15/academic-1822682_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_640.jpg",
      "https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_640.jpg",
    ],
    row2: [
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_640.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_640.jpg",
      "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_640.jpg",
      "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_640.jpg",
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_640.jpg",
      "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_640.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_640.jpg",
      "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_640.jpg",
    ],
    row3: [
      "https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg",
      "https://cdn.pixabay.com/photo/2018/03/01/09/33/laptop-3190194_640.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_640.jpg",
      "https://cdn.pixabay.com/photo/2016/03/26/22/21/books-1281581_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_640.jpg",
      "https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/29/07/22/bible-1868070_640.jpg",
      "https://cdn.pixabay.com/photo/2015/09/05/21/51/reading-925589_640.jpg",
    ]
  }

  // Add the missing positions state
  const [positions, setPositions] = useState({
    row1: 0,
    row2: 0,
    row3: 0
  })
  
  // Animation speeds for each row (pixels per second)
  const [speeds] = useState({
    row1: 20, // First row speed
    row2: 25, // Second row speed
    row3: 15  // Third row speed
  })

  // References to track animation - add these lines
  const animationRef = useRef(null)
  const lastTimeRef = useRef(0)

  // Start the animation
  useEffect(() => {
    const animate = (time) => {
      if (lastTimeRef.current === 0) {
        lastTimeRef.current = time
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      const deltaTime = (time - lastTimeRef.current) / 1000 // Convert to seconds
      lastTimeRef.current = time

      setPositions(prev => {
        // Calculate new positions with alternating directions
        let newRow1 = prev.row1 - speeds.row1 * deltaTime // First row moves left
        let newRow2 = prev.row2 + speeds.row2 * deltaTime // Second row moves right
        let newRow3 = prev.row3 - speeds.row3 * deltaTime // Third row moves left

        // Reset positions when they go beyond a certain point to create infinite loop effect
        const rowWidth = 100 * 8 // 8 images of 100px each
        if (newRow1 < -rowWidth) newRow1 = 0
        if (newRow2 > rowWidth) newRow2 = 0
        if (newRow3 < -rowWidth) newRow3 = 0

        return {
          row1: newRow1,
          row2: newRow2,
          row3: newRow3
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speeds])

  // Duplicate images to create seamless loop
  const duplicatedImages = {
    row1: [...placeholderImages.row1, ...placeholderImages.row1],
    row2: [...placeholderImages.row2, ...placeholderImages.row2],
    row3: [...placeholderImages.row3, ...placeholderImages.row3]
  }

  return (
    <section className="py-8 md:py-16 overflow-hidden bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Glimpses of CLATians</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            Take a look at our vibrant community of students and faculty engaged in learning and growth.
          </p>
        </div>

        {/* First row - moving left */}
        <div className="relative mb-4 md:mb-6 overflow-hidden">
          <div 
            className="flex gap-2 md:gap-4 transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(${positions.row1}px)`, // Changed to positive
              width: 'fit-content'
            }}
          >
            {duplicatedImages.row1.map((img, index) => (
              <div 
                key={`row1-${index}`} 
                className="w-[100px] h-[100px] relative rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - moving right */}
        <div className="relative mb-4 md:mb-6 overflow-hidden">
          <div 
            className="flex gap-2 md:gap-4 transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(-${positions.row2}px)`, // Changed to negative
              width: 'fit-content'
            }}
          >
            {duplicatedImages.row2.map((img, index) => (
              <div 
                key={`row2-${index}`} 
                className="w-[100px] h-[100px] relative rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 9}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Third row - moving left */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-2 md:gap-4 transition-transform duration-1000 ease-linear"
            style={{ 
              transform: `translateX(${positions.row3}px)`, // Changed to positive
              width: 'fit-content'
            }}
          >
            {duplicatedImages.row3.map((img, index) => (
              <div 
                key={`row3-${index}`} 
                className="w-[100px] h-[100px] relative rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 17}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}