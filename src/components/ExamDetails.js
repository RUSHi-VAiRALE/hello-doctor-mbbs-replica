'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import ExamHero from './exam/ExamHero'
import ExamTabs from './exam/ExamTabs'
import ExamOverview from './exam/ExamOverview'
import ExamUpdates from './exam/ExamUpdates'
import ExamPattern from './exam/ExamPattern'
import ExamEligibility from './exam/ExamEligibility'
import ExamSyllabus from './exam/ExamSyllabus'
import ExamApplication from './exam/ExamApplication'
import ExamUniversities from './exam/ExamUniversities'
import ExamPreparation from './exam/ExamPreparation'

const ExamDetails = ({ exam }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Create refs for each section
  const sectionRefs = {
    overview: useRef(null),
    updates: useRef(null),
    pattern: useRef(null),
    eligibility: useRef(null),
    syllabus: useRef(null),
    application: useRef(null),
    universities: useRef(null),
    preparation: useRef(null),
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'updates', label: 'Latest Updates' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'pattern', label: 'Exam Pattern' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'application', label: 'Application Process' },
    { id: 'preparation', label: 'Preparation' },
    { id: 'universities', label: 'Universities' },
  ]

  // Scroll to section when tab is clicked
  const scrollToSection = (tabId) => {
    const sectionRef = sectionRefs[tabId]
    if (sectionRef.current) {
      const navHeight = 140 // Adjust this value based on your navbar height
      const elementPosition = sectionRef.current.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200 // Offset for better UX

      // Find the current section in view
      for (const tab of tabs) {
        const section = sectionRefs[tab.id].current
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(tab.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <ExamHero exam={exam} />
      <div className="sticky top-14 z-40 bg-white shadow-md">
        <ExamTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={(tabId) => {
            setActiveTab(tabId)
            scrollToSection(tabId)
          }}
        />
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Overview Section */}
        <div ref={sectionRefs.overview} className='bg-white mb-4 p-4 rounded-lg' id="overview">
          <ExamOverview exam={exam} />
        </div>
        {/* Updates Section */}
        <div ref={sectionRefs.updates} className='bg-white mb-4 p-4 rounded-lg' id="updates">
          <ExamUpdates update={exam.updates} />
        </div>

        {/* Eligibility Section */}
        <div ref={sectionRefs.eligibility} className='bg-white mb-4 p-4 rounded-lg' id="eligibility">
          <ExamEligibility exam={exam} />
        </div>

        {/* Pattern Section */}
        <div ref={sectionRefs.pattern} className='bg-white mb-4 p-4 rounded-lg' id="pattern">
          <ExamPattern exam={exam} />
        </div>

        {/* Syllabus Section */}
        <div ref={sectionRefs.syllabus} className='bg-white mb-4 p-4 rounded-lg' id="syllabus">
          <ExamSyllabus exam={exam} />
        </div>

        {/* Application Section */}
        <div ref={sectionRefs.application} className='bg-white mb-4 p-4 rounded-lg' id="application">
          <ExamApplication exam={exam} />
        </div>

        {/* Preparation Section */}
        <div ref={sectionRefs.preparation} className='bg-white mb-4 p-4 rounded-lg' id="preparation">
          <ExamPreparation exam={exam} />
        </div>

        {/* Universities Section */}
        <div ref={sectionRefs.universities} className='bg-white mb-4 p-4 rounded-lg' id="universities">
          <ExamUniversities exam={exam} />
        </div>

      </div>
    </div>
  )
}

export default ExamDetails 