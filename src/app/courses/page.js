import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CoursesList from '@/components/courses/CoursesList'

export const metadata = {
  title: 'Law Entrance Exams 2025-26 | Clatians',
  description: 'Prepare for CLAT and other law entrance exams with our comprehensive courses'
}

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#e7edff]">
      <CoursesHero />
      <CourseCategories />
      <CoursesList />
    </main>
  )
}
