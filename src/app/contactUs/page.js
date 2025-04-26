'use client'
import React, { useState } from 'react'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/firebase'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    
    try {
      const db = getFirestore(app)
      
      // Add the contact form data to the "contacts" collection
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        createdAt: serverTimestamp()
      })
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setSubmitSuccess(true)
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting contact form:", error)
      setSubmitError("Failed to submit form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-[#e7edff] py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md inline-block">
            GET IN TOUCH
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Form */}
          <div className="w-full">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Do not hesitate to reach out. Just fill in the contact form here, and we'll be sure to reply as fast as possible.
              </p>
              
              {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  {submitError}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control border rounded-lg p-4 w-full" 
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control border rounded-lg p-4 w-full" 
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <input 
                    type="number" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-control border rounded-lg p-4 w-full" 
                    placeholder="Your Phone Number" 
                    required 
                  />
                </div>
                <div className="mb-4">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-control border rounded-lg p-4 w-full" 
                    rows="5" 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn-gradient"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Social Media & Map */}
          <div className="w-full">
            <div className="bg-white p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
              <p className="text-gray-600 mb-6">Follow us on our social media platforms or visit our location.</p>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mb-6">
                <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
              </div>

              {/* Google Map */}
              <div className="map-container mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902621848769!2d85.1375663149814!3d25.594095983711217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58d578c3f6c7%3A0x6e2e32b2a0f482e9!2sPatna%2C%20Bihar%2C%20India!5e0!3m2!1sen!2s!4v1649360072336!5m2!1sen!2s" 
                  width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS Styles */}
      <style jsx>{`
        .btn-gradient {
          background: linear-gradient(to right, #fbbf24, #ea580c, #b91c1c);
          color: white;
          padding: 14px 28px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 30px;
          border: none;
          display: block;
          width: 100%;
          text-align: center;
          transition: 0.3s ease-in-out;
        }

        .btn-gradient:hover {
          opacity: 0.9;
        }

        .btn-gradient:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .social-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(to right, #fbbf24, #ea580c, #b91c1c);
          color: white;
          font-size: 22px;
          text-decoration: none;
          transition: 0.3s ease-in-out;
        }

        .social-icon:hover {
          opacity: 0.9;
        }

        .map-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  )
}