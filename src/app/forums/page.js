import AboutHero from "@/components/AboutHero"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaBell, FaUsers, FaComments, FaQuestion } from "react-icons/fa"

export default function ForumsComingSoon() {
  return (
    <>
      <AboutHero route="Home" page="Discussion Forums" />

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-md text-sm font-medium mb-4">
                COMING SOON
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Join Our Law Community</h1>
              <p className="text-gray-600 text-lg mb-8">
                We're building a vibrant community platform where law aspirants can connect, discuss, and learn together. Share your doubts, insights, and experiences with peers and experts.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <FaUsers className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Connect with Peers</h3>
                    <p className="text-gray-600">Network with fellow law aspirants preparing for the same exams</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <FaQuestion className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Ask Questions</h3>
                    <p className="text-gray-600">Get your doubts cleared by experts and experienced students</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <FaComments className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Participate in Discussions</h3>
                    <p className="text-gray-600">Engage in meaningful conversations about law topics</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Be the First to Join</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                    Notify Me <FaBell className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative h-[300px] md:h-[500px] w-full">
                <Image
                  src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
                  alt="Discussion Forums Coming Soon"
                  fill
                  className="object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}