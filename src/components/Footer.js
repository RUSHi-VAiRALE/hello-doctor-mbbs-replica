'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { app } from '@/firebase'
import ClatiansLogo from '../../public/CLATiansLogo.webp'

const socialLinks = [
  { platform: 'https://www.facebook.com/IEECLATians', icon: 'bi-facebook', color: 'bg-[#1877F2]' },
  { platform: 'https://www.instagram.com/clatians/', icon: 'bi-instagram', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
  { platform: 'https://www.youtube.com/@CLATians', icon: 'bi-youtube', color: 'bg-[#FF0000]' },
  { platform: 'https://t.me/CLATians', icon: 'bi-telegram', color: 'bg-[#0088CC]' },
  { platform: 'https://g.co/kgs/3NcAYmD', icon: 'bi-google', color: 'bg-[#DB4437]' },
  { platform: 'https://twitter.com/CLATians', icon: 'bi-twitter', color: 'bg-[#1DA1F2]' },
  { platform: 'https://www.linkedin.com/in/clatians/', icon: 'bi-linkedin', color: 'bg-[#0A66C2]' },
]

// New arrays with text and link for each footer section
const quickLinks = [
  { text: 'Admission', link: '/admission' },
  { text: 'Student Zone', link: '/studentZone' },
  { text: 'Gallery', link: '/gallery' },
  { text: 'Test Series', link: '/mock-tests/online' },
]

const resourceLinks = [
  { text: 'Previous Year Papers', link: '/onlineResources' },
  { text: 'Current Affairs', link: '/blogs' },
  { text: 'Quizzes', link: '/quizzes' },
  { text: 'Online Resources', link: '/onlieResources' }
]

const companyLinks = [
  { text: 'About Us', link: '/about' },
  { text: 'Careers', link: '/careers' },
  { text: 'Faculty', link: '/gallery' },
  { text: 'Contact', link: '/contactUs' },
  { text: 'Privacy policy', link: '/privacy-policy' },
  { text: 'Legal', link: '/legal' }
]

const courseLinks = [
  { text: 'CLAT', link: '/courses/online/0' },
  { text: 'CLAT+AILET', link: '/courses/online/1' },
  { text: 'CUET(UG)', link: '/courses/online/2' },
  { text: 'CUET(PG)', link: '/courses/online/3' },
  { text: 'OLET', link: '/courses/offline/4' },
  { text: 'CLAT+OLET', link: '/courses/offline/3' },
  { text: 'Booster Course', link: '/courses/online/5' }
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

      // Add to newsletter subscribers collection
      await addDoc(collection(db, "newsletterSubscribers"), {
        email: email,
        subscribedAt: serverTimestamp(),
        source: 'website_footer'
      })

      // Success
      setSubscriptionStatus({
        success: true,
        message: 'Thank you for subscribing!'
      })
      setEmail('')

      // Clear success message after 5 seconds
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
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-12">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-md text-sm font-medium mb-4">
            GET LATEST UPDATES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Stay updated with the latest news, exam strategies, and special offers! Join our newsletter today.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="mb-4">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-2">
              <input
                type="email"
                placeholder="Enter Your E-Mail"
                value={email}
                onChange={handleEmailChange}
                className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ad4a16] border border-gray-300"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 whitespace-nowrap disabled:opacity-70 text-white"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe →'}
              </button>
            </div>

            {/* Status Message */}
            {subscriptionStatus && (
              <div className={`text-sm ${subscriptionStatus.success ? 'text-green-400' : 'text-red-400'} mt-2`}>
                {subscriptionStatus.message}
              </div>
            )}
          </form>

          <p className="text-sm text-gray-400">No ads, No spam, Unsubscribe anytime.</p>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Logo & Address Section */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Image
                src={ClatiansLogo}
                alt="Logo"
                width={150}
                height={50}
                className="mb-4 bg-white rounded-lg p-2"
              />
              <p className="text-gray-300 mb-4">
                Your trusted institute for CLAT, AILET, and other law entrance preparations.
              </p>
              <div className="mb-4">
                <strong className="block mb-2 text-gray-200">Address:</strong>
                <p className="text-gray-300">
                  2nd Floor, Gangotri Palace, Boring Rd, near Sumati Palace<br />
                  Nageshwar Colony, Kidwaipuri, Patna, Bihar 800001.
                </p>
              </div>
              <div className="flex gap-2 md:gap-1 md:w-[300px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={`${social.platform}`}
                    target='_blank'
                    className={`${social.color} w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-lg transform hover:scale-110 transition-transform shadow-lg`}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Quick Links */}
              <div>
                <h5 className="font-semibold text-lg mb-4 text-gray-100">Quick Links</h5>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-300 hover:text-[#ad4a16] transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 className="font-semibold text-lg mb-4 text-gray-100">Resources</h5>
                <ul className="space-y-2">
                  {resourceLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-300 hover:text-[#ad4a16] transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 className="font-semibold text-lg mb-4 text-gray-100">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-300 hover:text-[#ad4a16] transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h5 className="font-semibold text-lg mb-4 text-gray-100">Courses</h5>
                <ul className="space-y-2">
                  {courseLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-300 hover:text-[#ad4a16] transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-600">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CLATians - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}