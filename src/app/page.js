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
import LearningResources from '@/components/LearningResources'
import StudentSection from '@/components/StudentSection'
import TeacherSection from '@/components/TeacherSection'
import Footer from '@/components/Footer'

export default function Home() {
  const faqs = [
    { 
      index: 0,
      question: "Scholarship Test Details",
      answer: "No. of Questions = 50 Time Duration = 50 min (For Online Test) & 60 min for (Offline Test)Timing = Online Test (24×7) & Offline Test 10:00am to 06:00pmMode of Test = Online and Offline"
    },
    {
      index: 1,
      question: "Eligibility for the Test",
      answer: "Any Candidate who want to appear for CLAT 2025/CLAT 2026."
    },
    {
      index: 2,
      question: "What are the Test Syllabus ?",
      answer: "Completely based on your Knowledge, Language and IQ. "
    },
    {
      index: 3,
      question: "What are the Subjects ?",
      answer: "Reading Comprehension – 20Q Legal Awareness – 10Q Logical Reasoning – 10Q General Awareness – 5Q General Maths – 5Q"
    },
    {
      index: 4,
      question: "Scholarship Test Benefits!",
      answer: "Upto 1o Marks – 10% Scholarship 11 to 15 Marks – 15% Scholarship 16 to 20 Marks – 20% Scholarship 21 to 25 Marks – 25% Scholarship 26 to 30 Marks – 30% Scholarship 31 to 35 Marks – 35% Scholarship 36 to 40 Marks – 40% Scholarship 41 to 45 Marks – 50% Scholarship 46 to 48 Marks – 70% Scholarship 49 to 50 Marks – 100% Scholarship"
    },
    // Add more FAQs...
  ]
  return (
    <main className="min-h-screen bg-white">
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
      <FAQ faqs={faqs}/>
      <SocialMedia />
    </main>
  )
}
