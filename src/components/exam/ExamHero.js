export default function ExamHero({ exam }) {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {exam.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          {exam.description}
        </p>
      </div>
    </section>
  )
} 