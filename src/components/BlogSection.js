import Image from 'next/image'

export default function BlogSection() {
  return (
    <section className="py-16 bg-[#e7edff]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            Explore Latest Blogs From Here
          </span>
          <h2 className="text-3xl font-bold mt-4">Featured News</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured Blog */}
          <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Featured News</h3>
            <p className="text-gray-600 mb-4">
              Libero integer duis facilisis magna etiam tempor orci. Sem et tortor consequat egestas tellus.
            </p>
            
            <div className="relative rounded-xl overflow-hidden mb-4">
              <Image
                src="https://clatwallah.netlify.app/images/logo.png"
                alt="Featured Blog"
                width={900}
                height={500}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
                <p className="text-white mb-2">
                  <i className="bi bi-calendar-event mr-2"></i>
                  April 2024
                </p>
                <h5 className="text-white text-lg font-bold">
                  The Role Of Online Tutors In Education
                </h5>
              </div>
            </div>

            <div className="group inline-flex items-center cursor-pointer">
              <h5 className="font-bold mr-2">Read More</h5>
              <span className="transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto">
              {/* Blog Cards */}
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://clatwallah.netlify.app/images/logo.png"
                    alt={`Blog ${index}`}
                    width={600}
                    height={400}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">
                      <i className="bi bi-calendar-event mr-2"></i>
                      April 2024 | <i className="bi bi-chat-dots mr-2"></i>1 Comment
                    </p>
                    <h5 className="font-bold text-md mb-2">
                      10 Benefits Of Taking Online Courses
                    </h5>
                    <p className="text-gray-600 mb-4">
                      Odio faucibus ante ante nibh imperdiet ornare aliquam suscipit...
                    </p>
                    <div className="group inline-flex items-center cursor-pointer">
                      <span className="transform group-hover:translate-x-2 transition-transform mr-2">→</span>
                      <p className="font-medium">Read More</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 