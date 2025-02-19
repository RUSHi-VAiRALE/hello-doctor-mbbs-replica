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
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6">
              <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 rounded-lg blur opacity-25 animate-pulse"></span>
              <span className="relative inline-block px-4 py-2 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-clip-text text-transparent">
                  Admissions Open
                </h2>
              </span>
            </div>
            
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-xl text-gray-700 leading-relaxed">
                Take the first step towards your legal career. Apply now for scholarships and secure your future with us.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="bi bi-check-circle-fill text-green-500"></i>
                  <span>Merit-based Scholarships</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <i className="bi bi-check-circle-fill text-green-500"></i>
                  <span>Financial Aid Available</span>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  href="#" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg transform hover:scale-[0.99] duration-200"
                >
                  Download App
                </Link>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500 peer"
                    placeholder="First Name"
                  />
                </div>

                <div className="group">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500 peer"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="space-y-6">
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