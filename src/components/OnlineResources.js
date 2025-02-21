'use client'
import React, { useState } from 'react'

const resourcesData = {
  studyMaterials: [
    {
      title: "CLAT Study Guide 2024",
      description: "Comprehensive study material covering all CLAT sections",
      type: "PDF",
      size: "25 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/materials/clat-guide-2024.pdf"
    },
    {
      title: "Legal Reasoning Handbook",
      description: "In-depth guide for legal reasoning preparation",
      type: "PDF",
      size: "18 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/materials/legal-reasoning.pdf"
    },
    {
      title: "Current Affairs Digest",
      description: "Monthly compilation of important current affairs",
      type: "PDF",
      size: "12 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/materials/current-affairs.pdf"
    }
  ],
  practicePapers: [
    {
      title: "Mock Test Series 2024",
      description: "Set of 10 full-length mock tests",
      type: "ZIP",
      size: "45 MB",
      icon: "bi-file-zip",
      isPremium: false,
      downloadLink: "/practice/mock-tests.zip"
    },
    {
      title: "Section-wise Practice Papers",
      description: "Topic-wise practice questions with solutions",
      type: "PDF",
      size: "30 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/practice/section-practice.pdf"
    }
  ],
  previousYearPapers: [
    {
      title: "CLAT 2023 Question Paper",
      description: "Official question paper with detailed solutions",
      type: "PDF",
      size: "8 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/pyq/clat-2023.pdf"
    },
    {
      title: "CLAT 2022 Question Paper",
      description: "Official question paper with detailed solutions",
      type: "PDF",
      size: "7 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/pyq/clat-2022.pdf"
    },
    {
      title: "CLAT 2021 Question Paper",
      description: "Official question paper with detailed solutions",
      type: "PDF",
      size: "7 MB",
      icon: "bi-file-pdf",
      isPremium: false,
      downloadLink: "/pyq/clat-2021.pdf"
    }
  ],
  referenceBooks: [
    {
      title: "Legal Aptitude Guide",
      author: "Dr. Sarah Johnson",
      description: "Comprehensive guide for legal reasoning and legal knowledge",
      price: "₹599",
      icon: "bi-book",
      purchaseLink: "/store/legal-aptitude-guide"
    },
    {
      title: "Logical Reasoning Master",
      author: "Prof. Robert Smith",
      description: "Advanced concepts and practice questions",
      price: "₹499",
      icon: "bi-book",
      purchaseLink: "/store/logical-reasoning"
    }
  ]
}

export default function OnlineResources() {
  const [activeTab, setActiveTab] = useState('studyMaterials')

  const renderResourceCard = (resource, type) => {
    if (type === 'referenceBooks') {
      return (
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
              <i className={`bi ${resource.icon} text-2xl text-blue-600`}></i>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
              <p className="text-sm text-gray-500 mb-2">By {resource.author}</p>
              <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">{resource.price}</span>
                <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
            <i className={`bi ${resource.icon} text-2xl text-blue-600`}></i>
          </div>
          <div className="flex-grow">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              {resource.isPremium && (
                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded">
                  Premium
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1 mb-4">{resource.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{resource.type} • {resource.size}</span>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  resource.isPremium 
                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white hover:opacity-90'
                }`}
              >
                <i className="bi bi-download mr-2"></i>
                {resource.isPremium ? 'Upgrade to Download' : 'Download'}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Online Resources
        </h1>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'studyMaterials', label: 'Study Materials' },
            { id: 'practicePapers', label: 'Practice Papers' },
            { id: 'previousYearPapers', label: 'Previous Year Papers' },
            { id: 'referenceBooks', label: 'Reference Books' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourcesData[activeTab].map((resource, index) => (
            <div key={index}>
              {renderResourceCard(resource, activeTab)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 