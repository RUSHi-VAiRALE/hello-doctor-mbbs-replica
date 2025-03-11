'use client'
import React, { useState, useEffect, useRef } from 'react'
import ExamHero from "../exam/ExamHero"
import ExamTabs from "../exam/ExamTabs"

// Create a separate component for displaying individual exam updates
const ExamUpdateSection = ({ update , examName}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">{examName}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left font-bold text-white">Timeline</th>
              <th className="px-4 py-3 text-left font-bold text-white">Update</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {update && update.map((update, index) => (
              <tr key={index}>
                <td className="px-4 py-3 text-sm text-gray-600">{update.date}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{update.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const examUpdates = {
    title : "All Law Entrance Exam Updates & Notifications",
    description : "Get real-time alerts on exam schedules, syllabus updates, and results and updates.",
    updates : [
        [
    { date: 'May 2025', description: 'CLAT 2026 notification expected to be released' },
    { date: 'Mid-July 2025', description: 'CLAT 2025 final admission lists released by all participating NLUs' },
    { date: 'January 20, 2025', description: 'Third CLAT 2025 counseling round completed' },
    { date: 'January 5, 2025', description: 'Second CLAT 2025 counseling round completed' },
    { date: 'December 28, 2024', description: 'First CLAT 2025 counseling round initiated' },
    { date: 'December 22, 2024', description: 'CLAT 2025 results declared; cutoffs announced for all NLUs' },
    { date: 'December 8, 2024', description: 'CLAT 2025 examination successfully conducted' },
    { date: 'November 30, 2024', description: 'CLAT 2025 admit cards released for download' }
  ],[
    { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ],
  [
    { "date": "March 8, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ],
  [
    { "date": "March 2025", "description": "Digital Testing Format: LSAT-India has fully transitioned to computer-based testing at designated centers." },
    { "date": "March 2025", "description": "Additional Test Dates: Starting 2025, LSAT-India is offering more flexible testing options throughout the year." },
    { "date": "March 2025", "description": "Score Validity: LSAT-India scores are now valid for two years from the test date." },
    { "date": "March 2025", "description": "New Participating Law Schools: Several additional law institutions have begun accepting LSAT-India scores." }
  ],
  [
    { date: 'March 5, 2025', description: 'NTA announces the tentative schedule for CUET Law 2025-26 admissions. Applications expected to open by end of March.' },
    { date: 'February 28, 2025', description: 'Two new Central Universities added to the list of participating institutions.' },
    { date: 'February 15, 2025', description: 'Revised syllabus announced for the Legal Reasoning section.' },
    { date: 'January 30, 2025', description: 'NTA launches new practice portal with free mock tests.' }
  ],[
    { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
  ]
    ]
}

const ExamUpdates = ({ exam }) => {
    const [activeTab, setActiveTab] = useState('CLAT')
    
    // Use the passed exam prop if available, otherwise use the default examUpdates
    const examData = exam || examUpdates;
    
    // Create refs for each section
    const sectionRefs = {
      "CLAT": useRef(null),
      "AILET": useRef(null),
      "MHCET-LAW": useRef(null),
      "LSAT": useRef(null),
      "CUET": useRef(null),
      "AIL-LET": useRef(null),
    }

    const tabs = [
      { id: 'CLAT', label: 'CLAT' },
      { id: 'AILET', label: 'AILET' },
      { id: 'MHCET-LAW', label: 'MHCET-LAW' },
      { id: 'LSAT', label: 'LSAT' },
      { id: 'CUET', label: 'CUET' },
      { id: 'AIL-LET', label: 'AIL-LET' },
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
      <div className="bg-[#E7EDFF] min-h-screen">
          <ExamHero exam={examData}/>
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
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Updates Section */}
            <div ref={sectionRefs.CLAT} className='bg-white mb-4 p-4 rounded-lg' id="CLAT">
              <ExamUpdateSection update={examData.updates[0]} examName={"CLAT"}/>
            </div>

            <div ref={sectionRefs.AILET} className='bg-white mb-4 p-4 rounded-lg' id="AILET">
              <ExamUpdateSection update={examData.updates[1]} examName={"AILET"}/>
            </div>

            <div ref={sectionRefs['MHCET-LAW']} className='bg-white mb-4 p-4 rounded-lg' id="MHCET-LAW">
              <ExamUpdateSection update={examData.updates[2]} examName={"MHCET-LAW"}/>
            </div>

            <div ref={sectionRefs.LSAT} className='bg-white mb-4 p-4 rounded-lg' id="LSAT">
              <ExamUpdateSection update={examData.updates[3]} examName={"LSAT"}/>
            </div>

            <div ref={sectionRefs.CUET} className='bg-white mb-4 p-4 rounded-lg' id="CUET">
              <ExamUpdateSection update={examData.updates[4]} examName={"CUET"}/>
            </div>

            <div ref={sectionRefs['AIL-LET']} className='bg-white mb-4 p-4 rounded-lg' id="AIL-LET">
              <ExamUpdateSection update={examData.updates[5]} examName={"AIL-LET"}/>
            </div>
        </div>
      </div>
    )
}

export default ExamUpdates