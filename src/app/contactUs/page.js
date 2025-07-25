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
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
        }}></div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <i className="bi bi-envelope-fill mr-2"></i>
            GET IN TOUCH
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8">
            Ready to start your journey to studying abroad? Get in touch with our expert consultants today and let us help you achieve your educational dreams.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#f3f3f3] py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Contact Form */}
            <div className="w-full">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours to discuss your study abroad plans.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                    <i className="bi bi-check-circle-fill text-green-500 mr-2"></i>
                    <span>Thank you! Your message has been sent successfully.</span>
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                    <i className="bi bi-exclamation-triangle-fill text-red-500 mr-2"></i>
                    <span>{submitError}</span>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      rows="5"
                      placeholder="Tell us about your study abroad goals and how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="bi bi-arrow-clockwise animate-spin mr-2"></i>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message
                        <i className="bi bi-send ml-2"></i>
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side: Contact Info & Social Media */}
            <div className="w-full space-y-8">
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Visit Our Office</h4>
                      <p className="text-gray-600">11/5, Nath Mandir Rd, in front of Arora Bhawan,<br /> South Tukoganj, Indore, Madhya Pradesh 452001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600">+91 7898025252</p>
                      <p className="text-gray-600">+91 9039038655</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600">mbbsyaatra@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Follow Us
                </h3>

                <p className="text-gray-600 mb-6">Stay connected with us on social media for updates and educational content.</p>

                <div className="flex gap-4">
                  {[
                    { href: "https://www.facebook.com/mbbsyaatra", icon: "bi-facebook", color: "from-blue-500 to-blue-600" },
                    { href: "https://www.instagram.com/mbbsyaatra/", icon: "bi-instagram", color: "from-pink-500 to-purple-600" },
                    { href: "https://www.linkedin.com/in/mbbsyaatra/", icon: "bi-linkedin", color: "from-blue-600 to-blue-700" },
                    { href: "https://www.youtube.com/@mbbsyaatra", icon: "bi-youtube", color: "from-red-500 to-red-600" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <i className={`bi ${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              {/* <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Find Us
                </h3>

                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7810394534963!2d85.11985489999999!3d25.612191199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583b9bbaaaab%3A0xc1f3c1f67fa76e14!2sCLATians!5e0!3m2!1sen!2sin!4v1746105817784!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}