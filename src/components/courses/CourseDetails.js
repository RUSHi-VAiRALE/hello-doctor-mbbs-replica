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

export default function CourseDetails(courseData) {
  const [activeTab, setActiveTab] = useState('features')
  const [price , setPrice] = useState('9,999')
  
  // Create refs for each section
  const featuresRef = useRef(null)
  const aboutRef = useRef(null)
  const scheduleRef = useRef(null)

  // Function to handle scroll to section
  const scrollToSection = (sectionId) => {
    const refs = {
      features: featuresRef,
      about: aboutRef,
      schedule: scheduleRef
    }
    
    const ref = refs[sectionId]
    if (ref?.current) {
      // Offset for the sticky header
      const offset = 100
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
    const sections = [featuresRef.current, aboutRef.current, scheduleRef.current]
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
      <CourseHeader courseData={courseData.index}/>
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
              
              <AppDownload />
              <FAQ />
            </div>
          </div>
          
          <CourseStickyCard courseData={courseData.index} coursePrice={price}/>
        </div>
      </div>
    </div>
  )
} 