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

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState('features')

  return (
    <div className="min-h-screen bg-[#E7EDFF]">
      <CourseHeader />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px] pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />

            {activeTab === 'features' && <CourseFeatures />}
            {activeTab === 'about' && <CourseAbout />}
            {activeTab === 'schedule' && <CourseSchedule />}
            
            <AppDownload />
            <FAQ />
          </div>

          <CourseStickyCard />
        </div>
      </div>
    </div>
  )
} 