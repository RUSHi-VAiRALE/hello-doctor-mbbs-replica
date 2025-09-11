'use client'
import { useState, useEffect } from 'react'
import { X, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'

export default function PopupForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        message: ''
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    // Check if user has visited before
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited')
        if (!hasVisited) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsOpen(true)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const validateForm = () => {
        const newErrors = {}

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required'
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = 'Full name must be at least 2 characters'
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Mobile validation
        const mobileRegex = /^[6-9]\d{9}$/
        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required'
        } else if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number'
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Mark as visited
            localStorage.setItem('hasVisited', 'true')

            setIsSubmitted(true)

            // Close popup after success message
            setTimeout(() => {
                setIsOpen(false)
                setIsSubmitted(false)
                setFormData({
                    fullName: '',
                    email: '',
                    mobile: '',
                    message: ''
                })
            }, 3000)

        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleClose = () => {
        setIsOpen(false)
        localStorage.setItem('hasVisited', 'true')
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-6 rounded-t-2xl relative">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">Get Free Consultation</h2>
                        <p className="text-teal-100">Fill out the form below and our experts will contact you</p>
                    </div>
                </div>

                {/* Form */}
                <div className="p-6">
                    {isSubmitted ? (
                        <div className="text-center py-8">
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                            <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <User className="w-4 h-4 inline mr-2" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                                        }`}
                                    placeholder="Enter your full name"
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Mail className="w-4 h-4 inline mr-2" />
                                    Email ID *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                                        }`}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Mobile */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <Phone className="w-4 h-4 inline mr-2" />
                                    Mobile Number *
                                </label>
                                <input
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${errors.mobile ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                                        }`}
                                    placeholder="Enter your 10-digit mobile number"
                                    maxLength="10"
                                />
                                {errors.mobile && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.mobile}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <MessageSquare className="w-4 h-4 inline mr-2" />
                                    Write Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'
                                        }`}
                                    placeholder="Tell us about your educational goals and requirements..."
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1 flex items-center">
                                        <AlertCircle className="w-4 h-4 mr-1" />
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg hover:from-teal-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    'Get Free Consultation'
                                )}
                            </button>
                        </form>
                    )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
                    <p className="text-center text-sm text-gray-600">
                        By submitting this form, you agree to our{' '}
                        <a href="/privacy-policy" className="text-teal-600 hover:text-teal-700 font-medium">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
