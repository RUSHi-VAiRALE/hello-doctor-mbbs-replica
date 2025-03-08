export default function ExamUpdates({ exam }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Timeline</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {exam.updates.map((update, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-sm text-gray-600">{update.date}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{update.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 