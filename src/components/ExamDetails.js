'use client'
import React, { useState } from 'react'
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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'updates', label: 'Latest Updates' },
    { id: 'pattern', label: 'Exam Pattern' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'application', label: 'Application Process' },
    { id: 'universities', label: 'Universities' },
    { id: 'preparation', label: 'Preparation' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <ExamOverview exam={exam} />
      case 'updates':
        return <ExamUpdates exam={exam} />
      case 'pattern':
        return <ExamPattern exam={exam} />
      case 'eligibility':
        return <ExamEligibility exam={exam} />
      case 'syllabus':
        return <ExamSyllabus exam={exam} />
      case 'application':
        return <ExamApplication exam={exam} />
      case 'universities':
        return <ExamUniversities exam={exam} />
      case 'preparation':
        return <ExamPreparation exam={exam} />
      default:
        return <ExamOverview exam={exam} />
    }
  }

  return (
    <div className="bg-[#E7EDFF] min-h-screen">
      <ExamHero exam={exam} />
      <ExamTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default ExamDetails 