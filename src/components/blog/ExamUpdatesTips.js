import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaLightbulb, FaBookOpen, FaRegClock, FaRegCalendarAlt } from 'react-icons/fa'

export default function ExamUpdatesTips({ activeTabExam ,examTips }) {
  // Sample exam tips data - replace with your actual data
  console.log(examTips)

  // Get tips for the active exam tab
  const activeTips = examTips[activeTabExam] || []

  return (
    <div className="mt-8 mb-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Expert Tips for {activeTabExam.toUpperCase()}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Follow these strategic tips from our expert faculty to maximize your preparation for the {activeTabExam.toUpperCase()} exam.
        </p>
      </div>

      {activeTips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeTips.map((tip) => (
            <div key={tip.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    {tip.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{tip.content}</p>
              </div>
              
              <div className="px-6 pb-6">
                <Link 
                  href={`/blogs/${tip.id}`} 
                  className="inline-flex items-center text-orange-600 font-medium hover:text-orange-700 transition-colors"
                >
                  Read full strategy <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <FaLightbulb className="text-orange-400 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Tips Coming Soon</h3>
          <p className="text-gray-600">
            We're preparing expert tips for {activeTabExam.toUpperCase()}. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}