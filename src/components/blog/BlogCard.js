import Image from 'next/image'
import Link from 'next/link'

export default function BlogCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-[250px] w-full flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/blogs/1"
            className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
} 