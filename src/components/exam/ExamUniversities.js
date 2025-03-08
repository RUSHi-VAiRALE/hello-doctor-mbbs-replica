import Link from "next/link"
export default function ExamUniversities({ exam }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Participating Universities</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Rank</th>
              <th className="px-4 py-3 text-left">University</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Established</th>
              <th className="px-4 py-3 text-left">Website</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {exam.universities.map((university, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">{university.rank}</td>
                <td className="px-4 py-3 font-medium">{university.name}</td>
                <td className="px-4 py-3">{university.location}</td>
                <td className="px-4 py-3">{university.established}</td>
                <td className="px-4 py-3">
                  <a
                    href={`https://${university.website}`}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 