'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/firebase'
import ClatiansLogo from '../../public/CLATiansLogo.webp'

const socialLinks = [
  { platform: 'https://www.facebook.com/mbbsyaatra', icon: 'bi-facebook', color: 'text-[#1877F2] hover:bg-[#1877F2]' },
  { platform: 'https://www.instagram.com/mbbsyaatra/', icon: 'bi-instagram', color: 'text-[#E4405F] hover:bg-[#E4405F]' },
  { platform: 'https://www.linkedin.com/in/mbbsyaatra/', icon: 'bi-linkedin', color: 'text-[#0A66C2] hover:bg-[#0A66C2]' },
]

const quickLinks = [
  { text: 'Home', link: '/' },
  { text: 'About Us', link: '/about' },
  { text: 'Photo Gallery', link: '/gallery' },
  { text: 'Study in India', link: '/mbbs-rajasthan' },
  { text: 'MBBS Abroad', link: '/mbbs-rajasthan' },
  { text: 'Study Abroad', link: '/mbbs-rajasthan' },
  { text: 'Blog', link: '/blog' },
  { text: 'Careers', link: '/career' },
  { text: 'Contact us', link: '/contactUs' },
  { text: 'Enquire Now', link: '/contactUs' }
]

const studyMBBSIndia = [
  { text: 'MBBS in Rajasthan', link: '/mbbs-india/study-mbbs-in-rajasthan' },
  { text: 'MBBS in Maharashtra', link: '/mbbs-india/study-mbbs-in-maharashtra' },
  { text: 'MBBS in Gujarat', link: '/mbbs-india/study-mbbs-in-gujarat' },
  { text: 'MBBS in Madhya Pradesh', link: '/mbbs-india/study-mbbs-in-madhya-pradesh' },
  { text: 'MBBS in Uttar Pradesh', link: '/mbbs-india/study-mbbs-in-uttar-pradesh' },
  { text: 'MBBS in Bihar', link: '/mbbs-india/study-mbbs-in-bihar' },
  { text: 'MBBS in Haryana', link: '/mbbs-india/study-mbbs-in-haryana' },
  { text: 'MBBS in Delhi', link: '/mbbs-india/study-mbbs-in-delhi' },
  { text: 'MBBS in Karnataka', link: '/mbbs-india/study-mbbs-in-karnataka' },
]

const studyAbroad = [
  { text: 'Study in USA', link: '/mbbs-india/study-mbbs-in-usa' },
  { text: 'Study in Canada', link: '/mbbs-india/study-mbbs-in-canada' },
  { text: 'Study in UK', link: '/mbbs-india/study-mbbs-in-uk' },
  { text: 'Study in Australia', link: '/mbbs-india/study-mbbs-in-australia' },
  { text: 'MBBS in Nepal', link: '/mbbs-india/study-mbbs-in-nepal' },
  { text: 'MBBS in Russia', link: '/mbbs-india/study-mbbs-in-russia' },
  { text: 'MBBS in Georgia', link: '/mbbs-india/study-mbbs-in-georgia' },
  { text: 'MBBS in Kyrgyzstan', link: '/mbbs-india/study-mbbs-in-kyrgyzstan' }
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState(null)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionStatus({
        success: false,
        message: 'Please enter a valid email address'
      })
      return
    }

    setIsSubmitting(true)
    setSubscriptionStatus(null)

    try {
      const db = getFirestore(app)

      await addDoc(collection(db, "newsletterSubscribers"), {
        email: email,
        subscribedAt: serverTimestamp(),
        source: 'website_footer'
      })

      setSubscriptionStatus({
        success: true,
        message: 'Thank you for subscribing!'
      })
      setEmail('')

      setTimeout(() => {
        setSubscriptionStatus(null)
      }, 5000)

    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      setSubscriptionStatus({
        success: false,
        message: 'Failed to subscribe. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                         radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)`
      }}></div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="container mx-auto px-6 py-16 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <i className="bi bi-envelope-heart mr-2"></i>
              GET LATEST UPDATES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Stay updated with the latest news, exam strategies, and special offers! Join our newsletter today.
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-4">
                <div className="relative w-full md:w-2/3">
                  <input
                    type="email"
                    placeholder="Enter Your E-Mail"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-6 py-4 rounded-xl text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-blue-400/50 border border-white/20 shadow-lg placeholder-gray-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap disabled:opacity-70 text-white shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <i className="bi bi-arrow-clockwise animate-spin mr-2"></i>
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe
                      <i className="bi bi-arrow-right ml-2"></i>
                    </span>
                  )}
                </button>
              </div>

              {subscriptionStatus && (
                <div className={`text-sm ${subscriptionStatus.success ? 'text-green-300' : 'text-red-300'} mt-3 font-medium`}>
                  {subscriptionStatus.message}
                </div>
              )}
            </form>

            <p className="text-sm text-blue-200/80 flex items-center justify-center">
              <i className="bi bi-shield-check mr-2"></i>
              No ads, No spam, Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6 py-12 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mr-3"></div>
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="text-blue-100 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                      >
                        <i className="bi bi-chevron-right text-xs mr-2 group-hover:text-blue-400"></i>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study MBBS In India */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-500 rounded-full mr-3"></div>
                  Study MBBS In India
                </h3>
                <ul className="space-y-3">
                  {studyMBBSIndia.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="text-blue-100 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                      >
                        <i className="bi bi-chevron-right text-xs mr-2 group-hover:text-green-400"></i>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study Abroad */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full mr-3"></div>
                  Study Abroad
                </h3>
                <ul className="space-y-3">
                  {studyAbroad.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="text-blue-100 hover:text-white hover:pl-2 transition-all duration-300 flex items-center group"
                      >
                        <i className="bi bi-chevron-right text-xs mr-2 group-hover:text-purple-400"></i>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Get in Touch */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-full mr-3"></div>
                  Get in Touch
                </h3>

                {/* Address */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-geo-alt-fill text-orange-400 text-lg mt-1"></i>
                    <p className="text-blue-100 leading-relaxed">
                      MBBS YAATRA, 11/5, Nath Mandir Rd, in front of Arora Bhawan, South Tukoganj, Indore, Madhya Pradesh 452001
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="bi bi-telephone-fill text-green-400"></i>
                    <div>
                      <p className="text-blue-100">+91 7898025252</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="bi bi-telephone-fill text-blue-400"></i>
                    <p className="text-blue-100">+91 9039038655</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <i className="bi bi-envelope-fill text-red-400"></i>
                    <p className="text-blue-100">Email : mbbsyaatra@gmail.com</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.platform}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center ${social.color} hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300`}
                      >
                        <i className={`bi ${social.icon} text-lg`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6 py-6 max-w-7xl">
            <div className="text-center">
              <p className="text-blue-200/80 text-sm">
                © {new Date().getFullYear()} MBBS YAATRA - All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}