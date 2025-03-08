export default function ExamOverview({ exam }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700">{exam.overview}</p>
      </div>
    </div>
  )
} 