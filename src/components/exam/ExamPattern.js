export default function ExamPattern({ exam }) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Exam Pattern</h2>

      {exam.patterns.map((pattern, index) => (
        <div key={index} className="space-y-4">
          <h3 className="text-xl font-semibold">{pattern.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Section</th>
                  <th className="px-4 py-3 text-left">Questions</th>
                  <th className="px-4 py-3 text-left">Marks</th>
                  <th className="px-4 py-3 text-left">Total Marks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {pattern.sections.map((section, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3">{section.name}</td>
                    <td className="px-4 py-3">{section.questions}</td>
                    <td className="px-4 py-3">{section.marksPerQuestion}</td>
                    <td className="px-4 py-3">{section.totalMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Marking Scheme:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {pattern.markingScheme.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
} 