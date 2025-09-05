
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import StudentTestimonials from '@/components/StudentTestimonials'
import Events from '@/components/Events'
import FAQ from '@/components/FAQ'
import SocialMedia from '@/components/SocialMedia'

export default function Home() {
  const faqs = [
    {
      index: 0,
      question: "What are the eligibility criteria for MBBS abroad?",
      answer: "To pursue MBBS abroad, students must have completed 10+2 with Physics, Chemistry, and Biology with a minimum of 50% marks (45% for reserved categories). Additionally, qualifying NEET is mandatory for Indian students. Age requirements vary by country but generally range from 17-25 years at the time of admission."
    },
    {
      index: 1,
      question: "Which countries offer the best MBBS programs for Indian students?",
      answer: "Popular destinations for MBBS abroad include Russia, Ukraine, Kazakhstan, Kyrgyzstan, Georgia, Philippines, China, and Bangladesh. These countries offer quality medical education at affordable costs, with degrees recognized by MCI/NMC and WHO. Our consultancy helps you choose the best country based on your budget, preferences, and career goals."
    },
    {
      index: 2,
      question: "What is the total cost of studying MBBS abroad?",
      answer: "The total cost varies by country and university. Generally, it ranges from ₹15-50 lakhs for the entire course including tuition fees, accommodation, food, and other expenses. Countries like Russia, Ukraine, and Kazakhstan offer more affordable options, while countries like the Philippines and China may cost slightly more but offer English-medium instruction."
    },
    {
      index: 3,
      question: "Is NEET mandatory for studying MBBS abroad?",
      answer: "Yes, NEET qualification is mandatory for Indian students planning to study MBBS abroad. This requirement was implemented to ensure that students meet the minimum eligibility standards. Students must clear NEET to be eligible for admission to foreign medical universities and to practice medicine in India after graduation."
    },
    {
      index: 4,
      question: "What is the duration of MBBS abroad and what about internship?",
      answer: "MBBS abroad typically takes 5-6 years to complete, depending on the country and university. This includes 4-5 years of academic study and 1 year of mandatory internship. Some countries offer the option to complete internship in India, while others require it to be completed in the same country where you studied."
    },
    {
      index: 5,
      question: "How do I get admission to MBBS colleges in India?",
      answer: "Admission to MBBS colleges in India is through NEET (National Eligibility cum Entrance Test). Based on NEET scores and state/category quotas, students are allocated seats through centralized counseling processes like NEET UG counseling. We provide guidance on college selection, counseling procedures, and documentation required for smooth admission."
    },
    {
      index: 6,
      question: "What are the career prospects after completing MBBS abroad?",
      answer: "After completing MBBS abroad, graduates can practice in India by clearing the FMGE (Foreign Medical Graduate Examination) or NEXT exam. Career options include clinical practice, pursuing PG medical courses (MD/MS), working in hospitals, healthcare management, medical research, or even practicing in the country where they studied if they meet local licensing requirements."
    },
    {
      index: 7,
      question: "Do foreign MBBS degrees have the same value as Indian MBBS degrees?",
      answer: "Yes, MBBS degrees from MCI/NMC and WHO recognized universities abroad hold the same value as Indian MBBS degrees. However, graduates must clear the licensing examination (FMGE/NEXT) to practice in India. Our consultancy ensures you choose only from recognized universities to avoid any future complications."
    }
  ]

  const slides = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_1280.jpg",
      alt: "Slide 1"
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2014/03/31/17/50/class-302116_1280.jpg",
      alt: "Slide 2"
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2019/05/07/02/23/board-4184870_1280.jpg",
      alt: "Slide 3"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-green-50">
      <Hero slides={slides} height={"250px"} />
      {/* <WhyChooseUs /> */}
      <Features />
      {/* <CourseCards /> */}
      {/* <ExploreTopCourses /> */}
      {/* <Milestones /> */}
      {/* <LearningResources /> */}
      <StudentTestimonials />
      {/* <TeacherSection /> */}
      {/* <BlogSection /> */}
      {/* <AppDownload /> */}
      <Events />
      <FAQ faqs={faqs} />
      <SocialMedia />
    </main>
  )
}
