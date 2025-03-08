import Link from "next/link"
export default function ExamPreparation({ exam }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Preparation Guide</h2>
      
      {/* Subject-wise Tips */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exam.preparationTips.map((subject, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <i className={`bi ${subject.icon} text-2xl text-red-600`}></i>
              <h3 className="ml-3 text-xl font-semibold">{subject.name}</h3>
            </div>
            <ul className="space-y-2">
              {subject.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Study Strategy */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Performance Improvement Strategies</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exam.strategies.map((strategy, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <h4 className="ml-3 font-semibold">{strategy.title}</h4>
              </div>
              <p className="text-gray-600">{strategy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Resources */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Official Resources</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exam.resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.link}
              target="_blank"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-semibold mb-2">{resource.title}</h4>
              <p className="text-gray-600 text-sm">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 