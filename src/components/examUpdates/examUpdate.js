'use client'
import React, { useState, useEffect, useRef } from 'react'
import ExamHero from "../exam/ExamHero"
import ExamTabs from "../exam/ExamTabs"
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from '@/firebase'

// Create a separate component for displaying individual exam updates
const ExamUpdateSection = ({ update, examName }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">{examName}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white">
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

// Default exam updates as fallback
const examUpdates = {
  title: "All Law Entrance Exam Updates & Notifications",
  description: "Get real-time alerts on exam schedules, syllabus updates, and results and updates.",
  updates: [
    // Default updates array
    [
      { date: 'May 2025', description: 'CLAT 2026 notification expected to be released' },
      { date: 'Mid-July 2025', description: 'CLAT 2025 final admission lists released by all participating NLUs' },
      { date: 'January 20, 2025', description: 'Third CLAT 2025 counseling round completed' },
      { date: 'January 5, 2025', description: 'Second CLAT 2025 counseling round completed' },
      { date: 'December 28, 2024', description: 'First CLAT 2025 counseling round initiated' },
      { date: 'December 22, 2024', description: 'CLAT 2025 results declared; cutoffs announced for all NLUs' },
      { date: 'December 8, 2024', description: 'CLAT 2025 examination successfully conducted' },
      { date: 'November 30, 2024', description: 'CLAT 2025 admit cards released for download' }
    ], [
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
    ], [
      { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
    ]
  ]
}

const ExamUpdates = ({ isHero }) => {
  const [activeTab, setActiveTab] = useState('CLAT')
  const [examData, setExamData] = useState(examUpdates)
  const [loading, setLoading] = useState(true)

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

  // Fetch exam updates from Firebase
  useEffect(() => {
    const fetchExamUpdates = async () => {

      try {
        setLoading(true)
        const db = getFirestore(app)
        const lawExamsCollection = collection(db, 'lawExams')
        const snapshot = await getDocs(lawExamsCollection)

        if (!snapshot.empty) {
          // Create an array to store updates for each exam
          const updatesArray = Array(6).fill([])

          // Process each document
          snapshot.docs.map((doc) => {
            console.log(doc.data().shortTitle, "-", doc.data().updates)
            const data = doc.data()
            // If the document has updates field, add it to the appropriate index
            const examIndex = getExamIndex(doc.data().shortTitle)
            console.log(examIndex)
            if (examIndex !== -1) {
              updatesArray[examIndex] = data.updates
            }
          })
          // snapshot.(doc => {

          // })

          // Create updated exam data
          const updatedExamData = {
            ...examUpdates,
            updates: updatesArray
          }
          console.log(updatedExamData)
          setExamData(updatedExamData)
        }
      } catch (error) {
        console.error('Error fetching exam updates:', error)
        // Keep using the default data if there's an error
      } finally {
        setLoading(false)
      }
    }

    // Helper function to determine the index for each exam
    const getExamIndex = (examName) => {
      if (!examName) return -1

      const name = examName.toUpperCase()
      if (name.includes('CLAT')) return 0
      if (name.includes('AILET') || name.includes('AI-LET') || name.includes('AI LET')) return 1
      if (name.includes('MHCET') || name.includes('MH CET') || name.includes('MH-CET LAW')) return 2
      if (name.includes('LSAT')) return 3
      if (name.includes('CUET')) return 4
      if (name.includes('AIL-LET') || name.includes('AIL LET')) return 5

      return -1
    }

    fetchExamUpdates()
  }, [])

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
      {(isHero) && <ExamHero exam={examData} />}
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
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        ) : (
          <>
            {/* Updates Section */}
            <div ref={sectionRefs.CLAT} className='bg-white mb-4 p-4 rounded-lg' id="CLAT">
              <ExamUpdateSection update={examData.updates[0]} examName={"CLAT"} />
            </div>

            <div ref={sectionRefs.AILET} className='bg-white mb-4 p-4 rounded-lg' id="AILET">
              <ExamUpdateSection update={examData.updates[1]} examName={"AILET"} />
            </div>

            <div ref={sectionRefs['MHCET-LAW']} className='bg-white mb-4 p-4 rounded-lg' id="MHCET-LAW">
              <ExamUpdateSection update={examData.updates[2]} examName={"MHCET-LAW"} />
            </div>

            <div ref={sectionRefs.LSAT} className='bg-white mb-4 p-4 rounded-lg' id="LSAT">
              <ExamUpdateSection update={examData.updates[3]} examName={"LSAT"} />
            </div>

            <div ref={sectionRefs.CUET} className='bg-white mb-4 p-4 rounded-lg' id="CUET">
              <ExamUpdateSection update={examData.updates[4]} examName={"CUET"} />
            </div>

            <div ref={sectionRefs['AIL-LET']} className='bg-white mb-4 p-4 rounded-lg' id="AIL-LET">
              <ExamUpdateSection update={examData.updates[5]} examName={"AIL-LET"} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ExamUpdates