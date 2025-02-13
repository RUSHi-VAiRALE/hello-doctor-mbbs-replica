import Image from 'next/image'

export default function BlogSection() {
  return (
    <section className="py-8 bg-[#e7edff]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">FEATURED</span> NEWS
          </h2>
          <p className="text-gray-600">Explore Latest Blogs From Here</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Featured Blog */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg h-[500px]">
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3">Featured News</h3>
              <p className="text-gray-600 mb-4 text-base">
                Libero integer duis facilisis magna etiam tempor orci. Sem et tortor consequat egestas tellus.
              </p>
              
              <div className="relative flex-grow rounded-xl overflow-hidden">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
                  alt="Featured Blog"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-white mb-2 flex items-center text-base">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    April 2024
                  </p>
                  <h5 className="text-white text-lg font-bold">
                    The Role Of Online Tutors In Education
                  </h5>
                </div>
              </div>

              <div className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600 mt-6">
                <h5 className="font-bold mr-2 text-base">Read More</h5>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="lg:col-span-3">
            <div className="h-[500px] overflow-y-auto pr-2">
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col min-h-[320px]">
                    <div className="relative h-56">
                      <Image
                        src="https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
                        alt={`Blog ${index}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <p className="text-gray-500 text-sm mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        April 2024 | 
                        <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        1 Comment
                      </p>
                      <h5 className="font-bold text-base mb-3">
                        10 Benefits Of Taking Online Courses
                      </h5>
                      <p className="text-gray-600 mb-4 text-sm">
                        Odio faucibus ante ante nibh imperdiet ornare aliquam suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit...
                      </p>
                      <div className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600 mt-auto">
                        <span className="transform group-hover:translate-x-2 transition-transform mr-2">→</span>
                        <p className="font-medium text-base">Read More</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 