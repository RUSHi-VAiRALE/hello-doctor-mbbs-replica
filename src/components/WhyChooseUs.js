'use client'
import ChatComponent from './ChatComponent'



export default function WhyChooseUs() {
  return (
    <section className="py-16 px-16 bg-[#e7edff]">
      <div className="container mx-auto lg:pl-20">
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Why choose our learning platform?</h2>
            <p className="text-gray-600 mb-8">
              Expert guidance and structured courses to help you succeed in CLAT, AILET, and other law entrance exams.
            </p>
            <div className="flex gap-12 mb-8">
              <div>
                <h3 className="text-3xl font-bold">5 X</h3>
                <p className="text-gray-500">Faster Learning</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold">99%</h3>
                <p className="text-gray-500">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <h5 className="font-bold">Get Started</h5>
              <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Chat Section */}
          <div className="md:w-1/2">
            <ChatComponent />
          </div>
        </div>
      </div>
    </section>
  )
} 