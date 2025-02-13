import React from 'react';


// Install Swiper modules

export default function StudentSection() {
  // Main featured testimonial data
  const mainTestimonial = {
    name: "Tathagat Awatar",
    role: "NEET 2024 AIR 1",
    image: "http://placehold.co/600x250",
    content: "My name is Tathagat Awatar. I secured All India Rank 1 by scoring full score in NEET UG 2024. I started my preparation with Physics Wallah in 12th grade by joining the Lakshya NEET batch, then I took 2 drops by joining Yakeen NEET batch and I completed my full preparation from the online PW batch. PW teachers and their guidance helped me achieve AIR 1 and motivated me during my drop year...."
  }

  // Other testimonials data
  const testimonials = [
    {
      name: "Anmol Rathore",
      role: "UPSC CSE 2023 AIR 7",
      avatar: "https://placehold.co/50",
      content: "The videos and classes on Physics Wallah helped me secure AIR 7 in UPSC CSE 2023. I truly recommend this platform for comprehensive preparation."
    },
    {
      name: "Raja Majhi",
      role: "GATE 2024 AIR 1",
      avatar: "https://placehold.co/50",
      content: "I am thrilled to share that I secured AIR 1 in GATE 2024. Physics Wallah's structured curriculum and in-depth explanations made a big difference!"
    },
    {
      name: "Amit Kumar Mandal",
      role: "IBPS Topper",
      avatar: "https://placehold.co/50",
      content: "Physics Wallah helped me establish the basics of every subject and allowed me to progress quickly while maintaining accuracy. It was a game-changer!"
    },
    {
      name: "Jane Doe",
      role: "NEET 2023 AIR 10",
      avatar: "https://placehold.co/50",
      content: "Physics Wallah gave me confidence and structured my learning to crack my exam. I owe my success to their excellent teaching!"
    }
  ]

  return (
    <>
      {/* Testimonials Section */}
      <section className="py-8 bg-[#e7edff]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">Students ❤️ CLATians</h2>
            <p className="text-gray-600 mt-2">Hear from our students</p>
          </div>

          {/* Featured Testimonial Card */}
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
              {/* Image */}
              <div className="md:w-1/2">
                <img 
                  src={mainTestimonial.image} 
                  alt="Main Testimonial" 
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:w-1/2">
                <div className="mb-4">
                  <img src="/images/comma.webp" alt="quote" className="w-6 h-6" />
                  <p className="mt-3 text-gray-600 leading-relaxed text-sm">{mainTestimonial.content}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-base">{mainTestimonial.name}</p>
                  <p className="text-xs text-gray-500">{mainTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex flex-col h-full">
                {/* Testimonial Content */}
                <div className="flex-grow">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{testimonial.content}</p>
                </div>
                {/* User Info */}
                <div className="text-center mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full mx-auto mb-2"
                  />
                  <p className="font-bold text-base">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 