
import CourseCard from './CourseSingleCard'

export default function CoursesList({courseData,examName,batchType}) {
  //const [courses] = useState(courseData)
  //console.log(courseData.courses)
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h2 className="text-2xl font-bold mb-8">
          {batchType} Batches : <span className="text-blue-600">{examName}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {courseData.map((course) => (
            <div key={course.id} className="w-full max-w-md mx-auto">
              <CourseCard course={course} batchType={batchType}/>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center mx-auto gap-2">
            View All Batches
            <i className="bi bi-arrow-right"></i>
          </button>
        </div> */}
      </div>
    </div>
  )
} 