'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLaptop, FaBook, FaArrowRight, FaCheckCircle, FaClock, FaFileAlt, FaBullseye } from 'react-icons/fa'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'

export default function MockTests() {
  const [activeTab, setActiveTab] = useState('online')
  const [mockTestData, setMockTestData] = useState({
    online: [],
    offline: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const mockTestsCollection = collection(db, "mockTests")
        const mockTestsSnapshot = await getDocs(mockTestsCollection)

        const mockTests = mockTestsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        // Separate online and offline tests
        const onlineTests = mockTests.filter(test => test.type === "Online")
        const offlineTests = mockTests.filter(test => test.type === "Offline")

        setMockTestData({
          online: onlineTests,
          offline: offlineTests
        })
      } catch (error) {
        console.error("Error fetching mock tests:", error)
        // Keep the default data if there's an error
      } finally {
        setLoading(false)
      }
    }

    fetchMockTests()
  }, [])

  const features = {
    online: [
      "Instant results and detailed analysis",
      "Performance comparison with other students",
      "Timed environment similar to actual exam",
      "Personalized improvement suggestions",
      "Accessible from any device"
    ],
    offline: [
      "Printable PDF format for practice anywhere",
      "Detailed solutions and explanations",
      "No internet connection required",
      "Perfect for simulating exam conditions",
      "Comprehensive answer keys included"
    ]
  }

  return (
    <div className="bg-[#fdf6f4] min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Mock Tests</h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Practice with our comprehensive mock tests designed to simulate the actual exam experience and improve your performance.
        </p>

        {/* Tab Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-3 mb-12 max-w-xl mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab('online')}
              className={`px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeTab === 'online'
                ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white shadow-md'
                : 'hover:bg-gray-50 text-gray-600'
                }`}
            >
              <FaLaptop className="mr-2" />
              Online Tests
            </button>
            <button
              onClick={() => setActiveTab('offline')}
              className={`px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeTab === 'offline'
                ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white shadow-md'
                : 'hover:bg-gray-50 text-gray-600'
                }`}
            >
              <FaBook className="mr-2" />
              Offline Tests
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {activeTab === 'online' ? 'Online Mock Test Features' : 'Offline Mock Test Features'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features[activeTab].map((feature, index) => (
              <div key={index} className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          /* Mock Tests Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTestData[activeTab].length > 0 ? (
              mockTestData[activeTab].map((test) => (
                <div key={test.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={test.image || "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg"}
                      alt={test.title}
                      fill
                      className="object-cover"
                    />
                    {test.isPremium && (
                      <div className="absolute top-4 right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                        Premium
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{test.title}</h3>
                    <p className="text-gray-600 mb-4">{test.description || "Comprehensive test to help you prepare for your exam"}</p>

                    <div className="flex flex-wrap gap-3 mb-5">
                      {activeTab === 'online' ? (
                        <>
                          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FaClock className="mr-1" /> {test.duration || "N/A"} hours
                          </div>
                          <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FaFileAlt className="mr-1" /> {test.questions || "N/A"} Questions
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FaFileAlt className="mr-1" /> {test.pages || "N/A"} Pages
                          </div>
                          <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FaBook className="mr-1" /> {test.tests || "N/A"} Tests
                          </div>
                        </>
                      )}
                      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {test.difficulty || "Medium"}
                      </div>
                    </div>

                    {/* Features Bullet Points */}
                    {test.features && test.features.length > 0 && (
                      <div className="mb-5">
                        <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {test.features.map((feature, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <FaBullseye className="text-[#ad4a16] mt-1 mr-2 flex-shrink-0 text-xs" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Link href={test.purchaseLink} target='_blank'>
                      <button
                        className={`w-full py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${test.isPremium
                          ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white hover:opacity-90'
                          : 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white hover:opacity-90'
                          }`}
                      >
                        {test.isPremium ? 'Upgrade to Access' : (activeTab === 'online' ? 'Start Test' : 'Download PDF')}
                        <FaArrowRight className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                <p className="text-gray-500">No mock tests available in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}