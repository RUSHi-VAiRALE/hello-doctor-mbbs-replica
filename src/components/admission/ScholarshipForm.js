'use client'
import { useState } from 'react'
import Link from 'next/link'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/firebase'

export default function ScholarshipForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form data
    if (!formData.fullName || !formData.phone || !formData.email || !formData.city) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields'
      })
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const db = getFirestore(app)
      
      // Add document to "scholarshipApplications" collection
      await addDoc(collection(db, "scholarshipApplications"), {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city,
        appliedAt: serverTimestamp(),
        status: 'pending'
      })
      
      // Show success message
      setSubmitStatus({
        success: true,
        message: 'Your application has been submitted successfully!'
      })
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: ''
      })
      
    } catch (error) {
      console.error("Error submitting scholarship application:", error)
      setSubmitStatus({
        success: false,
        message: 'Failed to submit application. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
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
          {/* Left Section with Text and Images */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Animated Text Section */}
            <div className="text-center lg:text-left w-full">
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
              </div>
            </div>

            {/* Images Section */}
            <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px] mt-8 lg:mt-12">
              <img src="https://placehold.co/150x150" className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg transform hover:scale-105 transition-transform" alt="Student 1" />
              <img src="https://placehold.co/150x150" className="absolute top-1/2 right-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg transform hover:scale-105 transition-transform" alt="Student 2" />
              <img src="https://placehold.co/150x150" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg transform hover:scale-105 transition-transform" alt="Student 3" />
              <img src="https://placehold.co/150x150" className="absolute top-1/2 left-0 -translate-y-1/2 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full object-cover shadow-lg transform hover:scale-105 transition-transform" alt="Student 4" />
              
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

              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.success 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none transition-colors duration-300 focus:border-red-500 peer"
                  placeholder="Full Name"
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
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity transform hover:scale-[0.99] duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}