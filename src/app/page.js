import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/WhyChooseUs'
import Features from '@/components/Features'
import CourseCards from '@/components/CourseCards'
import ExploreTopCourses from '@/components/ExploreTopCourses'
import Milestones from '@/components/Milestones'
//import Testimonials from '@/components/Testimonials'
//import OurTeachers from '@/components/OurTeachers'
import BlogSection from '@/components/BlogSection'
import AppDownload from '@/components/AppDownload'
import Events from '@/components/Events'
import FAQ from '@/components/FAQ'
import SocialMedia from '@/components/SocialMedia'
//import Footer from '@/components/Footer'
import LearningResources from '@/components/LearningResources'
import StudentSection from '@/components/StudentSection'
import TeacherSection from '@/components/TeacherSection'
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Features />
      <CourseCards />
      <ExploreTopCourses />
      <Milestones />
      <LearningResources />
      <StudentSection />
      <TeacherSection />
      <BlogSection />
      <AppDownload />
      <Events />
      <FAQ />
      <SocialMedia />
      {/* <Testimonials />
      <OurTeachers />
      <Footer /> */}
    </main>
  )
}
