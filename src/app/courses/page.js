import CoursesHero from '@/components/courses/CoursesHero'
import CourseCategories from '@/components/courses/CourseCategories'
import CoursesList from '@/components/courses/CoursesList'
import LawEntranceExams from '@/components/courses/LawEntranceExams'
import FAQ from '@/components/FAQ'

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[#e7edff]">
      <CoursesHero />
      <CourseCategories />
      <CoursesList />
      <LawEntranceExams />
      <FAQ />
    </main>
  )
}
