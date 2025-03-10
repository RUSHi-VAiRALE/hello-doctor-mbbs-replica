import Image from 'next/image'
import Link from 'next/link'

export default function CourseSingleCard({ course ,batchType}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full">
      <div className="relative">
        <div className="relative h-48 w-full">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute top-0 left-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-3 py-1 rounded-r-lg text-sm">
          {course.tag}
        </div>
        
        <div className="absolute top-3 right-3 flex gap-2">
          {course.badges.map((badge, index) => (
            <span 
              key={index}
              className="bg-white text-blue-600 px-2 py-1 rounded-lg text-xs font-medium shadow-md"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-3">{course.title}</h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <i className="bi bi-calendar3"></i>
          <span>Starts on {course.startDate}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <i className="bi bi-clock"></i>
          <span>Ends on {course.endDate}</span>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg mb-4">
          <p className="text-sm font-medium text-blue-600">
            {course.features}
          </p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-bold text-xl">{course.price}</span>
            <span className="text-gray-400 line-through ml-2 text-sm">
              {course.originalPrice}
            </span>
          </div>
          <span className="text-green-600 text-sm font-medium">
            {course.discount}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Link 
            href={`/courses/${course.batchType}/${course.parentInd}/courseCard/${course.id-1}`}
            className="text-center py-2.5 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            EXPLORE
          </Link>
          <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white py-2.5 rounded-full font-medium hover:shadow-lg transition-shadow">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  )
}