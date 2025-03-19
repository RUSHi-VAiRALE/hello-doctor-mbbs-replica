'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLaptop, FaBook, FaArrowRight, FaCheckCircle, FaClock, FaFileAlt } from 'react-icons/fa'

export default function MockTests() {
  const [activeTab, setActiveTab] = useState('offline')

  const mockTestData = {
    online: [
      {
        id: 0,
        title: "CLAT Full Mock Test 1",
        description: "Complete mock test covering all CLAT sections with detailed analysis",
        duration: "2 hours",
        questions: 150,
        difficulty: "Medium",
        image: "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg",
        isPremium: false
      },
      {
        id: 1,
        title: "Legal Reasoning Test",
        description: "Focused practice for the legal reasoning section",
        duration: "45 minutes",
        questions: 40,
        difficulty: "Hard",
        image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
        isPremium: false
      },
      {
        id: 2,
        title: "Current Affairs Test",
        description: "Test your knowledge of recent events and developments",
        duration: "30 minutes",
        questions: 35,
        difficulty: "Medium",
        image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg",
        isPremium: false
      },
      {
        id: 3,
        title: "AILET Full Mock Test",
        description: "Complete mock test for AILET preparation",
        duration: "1.5 hours",
        questions: 120,
        difficulty: "Medium",
        image: "https://cdn.pixabay.com/photo/2018/01/17/07/06/laptop-3087585_1280.jpg",
        isPremium: false
      }
    ],
    offline: [
      {
        id: 4,
        title: "CLAT Comprehensive Test Series",
        description: "Set of 10 printable mock tests with answer keys",
        pages: 250,
        tests: 10,
        difficulty: "Mixed",
        image: "https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg",
        isPremium: false
      },
      {
        id: 5,
        title: "AILET Practice Papers",
        description: "Collection of previous year papers with solutions",
        pages: 180,
        tests: 8,
        difficulty: "Hard",
        image: "https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg",
        isPremium: false
      },
      {
        id: 6,
        title: "Legal Aptitude Workbook",
        description: "Specialized practice material for legal reasoning",
        pages: 120,
        tests: 6,
        difficulty: "Medium",
        image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
        isPremium: false
      }
    ]
  }

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
              className={`px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${
                activeTab === 'online'
                ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white shadow-md'
                : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              <FaLaptop className="mr-2" />
              Online Tests
            </button>
            <button
              onClick={() => setActiveTab('offline')}
              className={`px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${
                activeTab === 'offline'
                ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white shadow-md'
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

        {/* Mock Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockTestData[activeTab].map((test) => (
            <div key={test.id} className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src={test.image}
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
                <p className="text-gray-600 mb-4">{test.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-5">
                  {activeTab === 'online' ? (
                    <>
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <FaClock className="mr-1" /> {test.duration}
                      </div>
                      <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <FaFileAlt className="mr-1" /> {test.questions} Questions
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <FaFileAlt className="mr-1" /> {test.pages} Pages
                      </div>
                      <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <FaBook className="mr-1" /> {test.tests} Tests
                      </div>
                    </>
                  )}
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {test.difficulty}
                  </div>
                </div>
                
                <Link href="#">
                  <button 
                    className={`w-full py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center ${
                      test.isPremium 
                        ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white hover:opacity-90'
                    }`}
                  >
                    {test.isPremium ? 'Upgrade to Access' : (activeTab === 'online' ? 'Start Test' : 'Download PDF')}
                    <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-600">CLAT 2023 AIR 42</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The mock tests were incredibly helpful in my preparation. The detailed analysis helped me identify my weak areas and improve them before the actual exam."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Rahul Verma</h4>
                  <p className="text-sm text-gray-600">AILET 2023 AIR 15</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I practiced with both online and offline tests. The variety of questions and the exam-like environment really prepared me for the pressure of the actual test day."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-bold">Aisha Khan</h4>
                  <p className="text-sm text-gray-600">CLAT 2023 AIR 78</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The legal reasoning section was my weakness, but after practicing with these specialized tests, I was able to improve significantly and perform well in the exam."
              </p>
            </div>
          </div>
        </div> */}

        {/* FAQ Section */}
        {/* <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">How do online mock tests work?</h3>
                <p className="text-gray-700">
                  Our online mock tests simulate the actual exam environment. You'll have a timed interface with questions similar to those in the real exam. After completion, you'll receive detailed analysis and performance metrics.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Can I access the tests on mobile devices?</h3>
                <p className="text-gray-700">
                  Yes, our online tests are fully responsive and can be accessed on any device including smartphones, tablets, and computers.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">How do I use the offline test materials?</h3>
                <p className="text-gray-700">
                  After purchasing, you can download the PDF files containing the test papers and answer keys. We recommend printing them out for an exam-like experience, but you can also use them digitally.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Are the mock tests updated regularly?</h3>
                <p className="text-gray-700">
                  Yes, we regularly update our test bank to reflect the latest exam patterns and include current affairs questions relevant to law entrance exams.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">What's the difference between free and premium tests?</h3>
                <p className="text-gray-700">
                  Free tests provide basic practice with limited questions and analysis. Premium tests offer comprehensive coverage, detailed performance analytics, comparison with other test-takers, and personalized improvement suggestions.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}