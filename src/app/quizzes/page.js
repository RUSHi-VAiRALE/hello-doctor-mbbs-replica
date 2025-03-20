import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaBell, FaCheckCircle } from "react-icons/fa"

export default function QuizzesComingSoon() {
  return (
    <>
      <AboutHero route="Home" page="Quizzes" />
      
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium mb-4">
              LAUNCHING SOON
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Interactive Law Quizzes</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              Test your knowledge with our upcoming interactive quizzes designed specifically for law entrance exam preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Subject-Specific Quizzes</h3>
              <p className="text-gray-600 text-center">
                Focused quizzes on Legal Reasoning, Logical Reasoning, English, Current Affairs, and more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Performance Analytics</h3>
              <p className="text-gray-600 text-center">
                Detailed insights into your strengths and areas for improvement with personalized recommendations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Timed Challenges</h3>
              <p className="text-gray-600 text-center">
                Practice under exam-like conditions with timed quizzes to improve your speed and accuracy.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Early Access</h3>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center whitespace-nowrap">
                Join Waitlist <FaBell className="ml-2" />
              </button>
            </div>
            <p className="text-sm text-gray-500 text-center">
              We'll notify you as soon as our quizzes are ready. No spam, promise!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}