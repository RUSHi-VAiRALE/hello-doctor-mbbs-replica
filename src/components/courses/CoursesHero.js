
export default function CoursesHero({exam}) {
  //const index = parseInt(ind);
  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {exam.examName}
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-7xl text-justify">
          {exam.examDescription}
        </p>
      </div>
    </div>
  )
} 