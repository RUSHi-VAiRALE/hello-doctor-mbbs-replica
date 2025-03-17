'use client'
import { useState, useEffect, useRef } from 'react'
import CourseHeader from './CourseHeader'
import CourseTabs from './CourseTabs'
import CourseFeatures from './CourseFeatures'
import CourseAbout from './CourseAbout'
import CourseSchedule from './CourseSchedule'
import CourseStickyCard from './CourseStickyCard'
import AppDownload from '@/components/AppDownload'
import FAQ from '@/components/FAQ'
import MoreDetails from './MoreDetails'

export default function CourseDetails({courseData,details}) {
  const [activeTab, setActiveTab] = useState('features')
  const [price , setPrice] = useState('9,999')
console.log(courseData)

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
  // Create refs for each section
  const featuresRef = useRef(null)
  const aboutRef = useRef(null)
  const scheduleRef = useRef(null)
  const downloadRef = useRef(null)

  // Add moreDetailsRef
  const moreDetailsRef = useRef(null)

  // Update scrollToSection function
  const scrollToSection = (sectionId) => {
    const refs = {
      features: featuresRef,
      about: aboutRef,
      schedule: scheduleRef,
      download: downloadRef,
      moreDetails: moreDetailsRef // Add this line
    }
    
    const ref = refs[sectionId]
    if (ref?.current) {
      // Offset for the sticky header
      const offset = -200
      const elementPosition = ref.current.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle intersection observer for scroll spy
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-10px 0px -40% 0px', // Adjust these values to control when the highlighting happens
      threshold: 0
    }

    

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Get section id from the data attribute
          const sectionId = entry.target.getAttribute('data-section')
          setActiveTab(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)

    // Observe all sections
    const sections = [featuresRef.current, aboutRef.current, scheduleRef.current,moreDetailsRef.current,downloadRef.current]
    sections.forEach(section => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#E7EDFF]">
      <CourseHeader courseData={courseData}/>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className='flex flex-col relative'>
              <div className="sticky top-12 z-30 bg-white w-full py-1">
                <CourseTabs 
                  activeTab={activeTab} 
                  setActiveTab={(tab) => {
                    setActiveTab(tab)
                    scrollToSection(tab)
                  }} 
                />
              </div>
              
              <div ref={featuresRef} className='mb-5' data-section="features">
                <CourseFeatures setPriceHook={setPrice}/>
              </div>
              
              <div ref={aboutRef} className='mb-5' data-section="about">
                <CourseAbout />
              </div>
              
              <div ref={scheduleRef} className='mb-5' data-section="schedule">
                <CourseSchedule />
              </div>
              
              <div ref={moreDetailsRef} className='mb-5' data-section="moreDetails">
                <MoreDetails details={details}/>
              </div>

              <div ref={downloadRef} className='mb-5' data-section="download">
                <AppDownload />
              </div>
              <FAQ faqs={faqs}/>
            </div>
          </div>
          
          <CourseStickyCard courseData={courseData} coursePrice={price}/>
        </div>
      </div>
    </div>
  )
}