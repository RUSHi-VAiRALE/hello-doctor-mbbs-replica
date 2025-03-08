export default function ExamApplication({ exam }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Application Process</h2>
      
      {/* Application Steps */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Steps to Apply</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {exam.applicationSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-semibold">
                  {index + 1}
                </span>
                <h4 className="ml-3 font-semibold">{step.title}</h4>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Dates */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Key Dates</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {exam.importantDates.map((date, index) => (
                <tr key={index}>
                  <td className="px-4 py-3">{date.event}</td>
                  <td className="px-4 py-3">{date.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Application Fees */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Application Fees</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {exam.applicationFees.map((fee, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-600 mb-2">{fee.category}</h4>
              <p className="text-2xl font-bold text-gray-800">₹{fee.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 