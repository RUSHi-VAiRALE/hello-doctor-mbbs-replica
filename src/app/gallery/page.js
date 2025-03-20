'use client'
import { useState } from 'react'
import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import { FaSearch, FaTimes } from "react-icons/fa"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'classroom', name: 'Classroom' },
    { id: 'events', name: 'Events' },
    { id: 'campus', name: 'Campus' },
    { id: 'students', name: 'Students' }
  ]

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
      alt: "Students collaborating in classroom",
      category: "classroom",
      title: "Collaborative Learning Session"
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
      alt: "Group discussion during class",
      category: "classroom",
      title: "Interactive Group Discussion"
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
      alt: "Students during a workshop",
      category: "events",
      title: "Legal Workshop"
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2017/07/31/11/46/laptop-2557571_1280.jpg",
      alt: "Digital learning session",
      category: "classroom",
      title: "Digital Learning Experience"
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg",
      alt: "Study materials and books",
      category: "students",
      title: "Preparation Materials"
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_1280.jpg",
      alt: "Student taking notes",
      category: "students",
      title: "Note-Taking Session"
    },
    {
      id: 7,
      src: "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
      alt: "Team planning session",
      category: "events",
      title: "Strategic Planning"
    },
    {
      id: 8,
      src: "https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg",
      alt: "Online learning setup",
      category: "classroom",
      title: "Virtual Classroom"
    },
    {
      id: 9,
      src: "https://cdn.pixabay.com/photo/2016/11/29/09/32/concept-1868728_1280.jpg",
      alt: "Campus building exterior",
      category: "campus",
      title: "Campus Main Building"
    },
    {
      id: 10,
      src: "https://cdn.pixabay.com/photo/2016/11/14/05/15/academic-1822682_1280.jpg",
      alt: "Graduation ceremony",
      category: "events",
      title: "Graduation Day"
    },
    {
      id: 11,
      src: "https://cdn.pixabay.com/photo/2017/09/08/00/37/friend-2727307_1280.jpg",
      alt: "Students celebrating success",
      category: "students",
      title: "Celebration of Achievement"
    },
    {
      id: 12,
      src: "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
      alt: "Campus library",
      category: "campus",
      title: "Resource Library"
    }
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <>
      <AboutHero route="Home" page="Gallery" />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Take a visual tour of our classrooms, events, and student activities at CLATians.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white shadow-md'
                  : 'bg-white hover:bg-gray-50 text-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredImages.map(image => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaSearch className="text-gray-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if no images match the filter */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-6 right-0 text-white hover:text-orange-400 transition-colors"
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>
            
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}