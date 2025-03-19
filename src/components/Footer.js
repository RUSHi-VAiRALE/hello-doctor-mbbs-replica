'use client'
import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
    { platform: 'https://www.facebook.com/IEECLATians', icon: 'bi-facebook', color: 'bg-[#1877F2]' },
    { platform: 'https://www.instagram.com/clatians/', icon: 'bi-instagram', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
    { platform: 'https://www.youtube.com/@CLATians', icon: 'bi-youtube', color: 'bg-[#FF0000]' },
    { platform: 'https://t.me/CLATians', icon: 'bi-telegram', color: 'bg-[#0088CC]' },
    { platform: 'https://g.co/kgs/3NcAYmD', icon: 'bi-google', color: 'bg-[#DB4437]' },
    { platform: 'https://twitter.com/CLATians', icon: 'bi-twitter', color: 'bg-[#1DA1F2]'},
    { platform: 'https://www.linkedin.com/in/clatians/', icon: 'bi-linkedin', color: 'bg-[#0A66C2]'},
  ]

// New arrays with text and link for each footer section
const quickLinks = [
  { text: 'Admission', link: '/admission' },
  { text: 'Student Zone', link: '/studentZone' },
  { text: 'Gallery', link: '/gallery' },
  { text: 'Test Series', link: '/mock-tests/online' },
  { text: 'FAQs', link: '/faqs' }
]

const resourceLinks = [
  { text: 'Previous Year Papers', link: '/onlineResources' },
  { text: 'Current Affairs', link: '/blogs' },
  { text: 'Quizzes', link: '/onlineResources' },
  { text: 'Mains Resources', link: '/onlieResources' }
]

const companyLinks = [
  { text: 'About Us', link: '/about' },
  { text: 'Careers', link: '/careers' },
  { text: 'Faculty', link: '/faculty' },
  { text: 'Contact', link: '/contact' },
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
  return (
    <footer className="bg-[#2143D4] text-white py-12">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-md text-sm font-medium mb-4">
            GET LATEST UPDATES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-base md:text-lg">
            Stay updated with the latest news, exam strategies, and special offers! Join our newsletter today.
          </p>

          {/* Newsletter Form */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 whitespace-nowrap">
              Subscribe →
            </button>
          </div>
          <p className="text-sm text-gray-300">No ads, No spam, Unsubscribe anytime.</p>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          {/* Logo & Address Section */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <Image
                src="https://clatwallah.netlify.app/images/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="mb-4 bg-white"
              />
              <p className="text-gray-200 mb-4">
                Your trusted institute for CLAT, AILET, and other law entrance preparations.
              </p>
              <div className="mb-4">
                <strong className="block mb-2">Address:</strong>
                <p className="text-gray-200">
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
                <h5 className="font-semibold text-lg mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-200 hover:text-yellow-400 transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 className="font-semibold text-lg mb-4">Resources</h5>
                <ul className="space-y-2">
                  {resourceLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-200 hover:text-yellow-400 transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 className="font-semibold text-lg mb-4">Company</h5>
                <ul className="space-y-2">
                  {companyLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-200 hover:text-yellow-400 transition-colors duration-300">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Courses */}
              <div>
                <h5 className="font-semibold text-lg mb-4">Courses</h5>
                <ul className="space-y-2">
                  {courseLinks.map((link) => (
                    <li key={link.text}>
                      <Link href={link.link} className="text-gray-200 hover:text-yellow-400 transition-colors duration-300">
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
        <div className="text-center pt-8 border-t border-white/20">
          <p className="text-gray-300 text-sm">
            © 2025 Zencodx - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}