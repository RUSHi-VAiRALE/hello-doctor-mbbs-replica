import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaBell, FaBriefcase, FaGraduationCap, FaHandshake } from "react-icons/fa"

export default function CareersComingSoon() {
  return (
    <>
      <AboutHero route="Home" page="Careers" />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium mb-4">
              LAUNCHING SOON
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Join Our Growing Team</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're building a team of passionate educators and professionals dedicated to helping law aspirants achieve their dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaBriefcase className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Teaching Positions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Legal Studies Faculty
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Current Affairs Expert
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  English Language Trainer
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGraduationCap className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Content Creation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Legal Content Writers
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Question Bank Developers
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Video Content Creators
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaHandshake className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Support Roles</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Student Counselors
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Academic Coordinators
                </li>
                <li className="flex items-center">
                  <FaArrowRight className="text-orange-500 mr-2" />
                  Operations Staff
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Get Notified About Job Openings</h2>
              <p className="text-gray-600">
                Be the first to know when we start hiring. We'll notify you as soon as positions become available.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap">
                Join Talent Pool <FaBell className="ml-2" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              By joining our talent pool, you'll receive updates about job openings and career opportunities.
            </p>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
            >
              Have questions? Contact us <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}