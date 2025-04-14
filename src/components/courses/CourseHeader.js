import { Corben } from 'next/font/google'
import Link from 'next/link'

export default function CourseHeader({courseData}) {
  console.log(courseData)
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] py-4">
        <div className="flex items-center text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-red-700">Home</Link>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <Link href="/courses" className="hover:text-red-700">Courses</Link>
          <span className="mx-1 sm:mx-2">{'>'}</span>
          <span className="text-gray-900">{courseData.courseName}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] py-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {courseData.title}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          {courseData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <i className="bi bi-people-fill text-red-700"></i>
            <span className="text-sm sm:text-base">{courseData.courseName}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="bi bi-calendar-event text-red-700"></i>
            <span className="text-sm sm:text-base">{`Starts on ${courseData.startDate} | Ends on ${courseData.endDate}`}</span>
          </div>
        </div>
      </div>
    </>
  )
} 