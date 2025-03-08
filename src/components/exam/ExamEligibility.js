export default function ExamEligibility({ exam }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
      
      {exam.eligibility.map((category, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
          <ul className="space-y-3">
            {category.criteria.map((criterion, idx) => (
              <li key={idx} className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-500 flex items-center justify-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-3 text-gray-700">{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
} 