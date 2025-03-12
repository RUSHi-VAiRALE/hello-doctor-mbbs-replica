import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedBlog() {
  return (
    <section className="bg-[#e7edff] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">FEATURED</span> BLOGS
          </h2>
          <p className="text-gray-600">Stay Updated with Latest Legal News and Current Affairs</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative h-[300px] lg:h-auto">
              <Image
                src="https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"
                alt="Featured Blog"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <i className="bi bi-calendar3 mr-2"></i>
                April 15, 2024
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Latest Updates in Legal Education
              </h2>
              <p className="text-gray-600 mb-6">
                Stay informed about the most recent changes in legal education and entrance examinations. Get expert insights and preparation tips.
              </p>
              <Link 
                href="/blogs/1" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Read More
                <i className="bi bi-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}