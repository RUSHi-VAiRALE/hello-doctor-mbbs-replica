export default function ExamSyllabus({ exam }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Detailed Syllabus</h2>
      
      {exam.syllabus.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subjects.map((subject, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-3">{subject.name}</h4>
                <ul className="space-y-2">
                  {subject.topics.map((topic, topicIdx) => (
                    <li key={topicIdx} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 