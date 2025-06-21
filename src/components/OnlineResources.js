'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'

export default function OnlineResources() {
  const [activeTab, setActiveTab] = useState('studyMaterials')
  const [resourcesData, setResourcesData] = useState({
    studyMaterials: [],
    practicePapers: [],
    previousYearPapers: [],
    referenceBooks: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const data = { ...resourcesData }

        // Fetch study materials
        const studyMaterialsSnapshot = await getDocs(collection(db, "studyMaterials"))
        data.studyMaterials = studyMaterialsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        // Fetch practice papers
        const practicePapersSnapshot = await getDocs(collection(db, "practicePapers"))
        data.practicePapers = practicePapersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        // Fetch previous year papers
        const previousYearPapersSnapshot = await getDocs(collection(db, "previousPapers"))
        data.previousYearPapers = previousYearPapersSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        // Fetch reference books
        const referenceBooksSnapshot = await getDocs(collection(db, "referenceBooks"))
        data.referenceBooks = referenceBooksSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setResourcesData(data)
      } catch (error) {
        console.error("Error fetching resources:", error)
        // Keep the default data if there's an error
      } finally {
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  const renderResourceCard = (resource, type) => {
    if (type === 'referenceBooks') {
      return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="relative h-64 w-full flex items-center justify-center bg-gray-50">
            <img
              src={resource.image || "https://m.media-amazon.com/images/I/81L7+KTgnfL._SY425_.jpg"}
              alt={resource.title}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
            <p className="text-sm text-gray-500 mb-2">By {resource.author}</p>
            <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">₹ {resource.price}
                <span className='text-lg font-normal text-green-500 line-through ml-5'>₹ {resource.originalPrice}</span></span>
              <Link href={resource.purchaseLink} target="_blank">
                <button className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  Purchase
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
    }

    // In the renderResourceCard function, updating the download link behavior
    return (
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
            <i className={`bi ${resource.icon || "bi-file-pdf"} text-2xl text-blue-600`}></i>
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
              <span className="text-sm text-gray-500">{resource.type || "PDF"} • {resource.size || "N/A"}</span>
              {resource.isPremium ? (
                <button
                  className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <i className="bi bi-download mr-2"></i>
                  Upgrade to Download
                </button>
              ) : (
                <a
                  href={resource.downloadLink}
                  download={resource.title || "download"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white hover:opacity-90 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  <i className="bi bi-download mr-2"></i>
                  Download
                </a>
              )}
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
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#ad4a16] via-[#8f3a17] to-[#312518] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          /* Resources Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resourcesData[activeTab].length > 0 ? (
              resourcesData[activeTab].map((resource, index) => (
                <div key={resource.id || index}>
                  {renderResourceCard(resource, activeTab)}
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
                <p className="text-gray-500">No resources available in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}