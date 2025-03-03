'use client'
import { useState } from 'react'
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
  console.log(courseData.index)
  return (
    // In your main component
<div className="min-h-screen bg-[#E7EDFF]">
      <CourseHeader courseData={courseData.index}/>
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className='flex flex-col gap-4 relative'>
              {/* Sticky wrapper with proper styling */}
              <div className="sticky top-12 z-30 bg-[#E7EDFF] w-full py-1 bg">
                <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              
              <CourseFeatures />
              <CourseAbout />
              <CourseSchedule />
              <AppDownload />
              <FAQ />
            </div>
          </div>
          
          <CourseStickyCard courseData={courseData.index}/>
        </div>
      </div>
    </div>
  )
} 