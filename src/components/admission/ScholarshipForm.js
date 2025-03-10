'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ScholarshipForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Animated Text Section */}
          <div className="lg:w-1/2">
            <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px] mx-auto">
              <img src="https://placehold.co/150x150" className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 1" />
              <img src="https://placehold.co/150x150" className="absolute top-1/2 right-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 2" />
              <img src="https://placehold.co/150x150" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 3" />
              <img src="https://placehold.co/150x150" className="absolute top-1/2 left-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg" alt="Student 4" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] md:w-[160px] h-[130px] md:h-[160px] rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-center text-white font-bold text-lg md:text-xl shadow-xl">
                <span>25 <br/> Years Of <br/> Experience</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 rounded-2xl transform rotate-1 blur-sm"></div>
            <form 
              onSubmit={handleSubmit}
              className="relative bg-white p-6 md:p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in-up"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Scholarship Application
              </h3>

              <div className="space-y-6">
              <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500 peer"
                    placeholder="First Name"
                  />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500"
                  placeholder="Phone Number"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500"
                  placeholder="Email Address"
                />

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500"
                  placeholder="Enter Your City"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity transform hover:scale-[0.99] duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
} 