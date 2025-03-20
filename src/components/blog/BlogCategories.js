'use client'
import { useState } from 'react'
import LegalArticles from './LegalArticles'
import CurrentAffairs from './CurrentAffairs'
import ExamUpdates from '@/components/examUpdates/examUpdate'
import ExamUpdatesTips from './ExamUpdatesTips'

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState('legal')
  const [activeTab, setActiveTab] = useState('daily')
  const [activeTabLegal, setActiveTabLegal] = useState('recent')
  const [activeTabExam, setActiveTabExam] = useState('clat')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedYear, setSelectedYear] = useState('2024')

  const months = [
    { id: 'all', name: 'All Months' },
    { id: '01', name: 'January' },
    { id: '02', name: 'February' },
    { id: '03', name: 'March' },
    { id: '04', name: 'April' },
    { id: '05', name: 'May' },
    { id: '06', name: 'June' },
    { id: '07', name: 'July' },
    { id: '08', name: 'August' },
    { id: '09', name: 'September' },
    { id: '10', name: 'October' },
    { id: '11', name: 'November' },
    { id: '12', name: 'December' }
  ]

  const years = ['2024', '2025', '2026']

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

  const categories = [
    { 
      id: 'legal', 
      name: 'Legal Articles',
      icon: '⚖️',
      description: 'Latest updates in legal education and law'
    },
    { 
      id: 'current', 
      name: 'Current Affairs',
      icon: '🌏',
      description: 'Stay updated with daily news and events'
    },
    { 
      id: 'examUpdates', 
      name: 'Law Exam Preparation Tips',
      icon: '📝',
      description: 'Latest updates about law entrance exams'
    }
  ]

  const tabs = {
    "legal" :[
      { id: 'recent', name: 'Recent' },
      { id: 'judiciary', name: 'Judiciary' },
      { id: 'parliamentary', name: 'Parliamentary' },
    ],
    "currentAffairs" :[
    { id: 'daily', name: 'Daily' },
    { id: 'monthly', name: 'Monthly' },
  ],
  "exams" :[
    { id: 'clat', name: 'CLAT' },
    { id: 'ailet', name: 'AILET' },
    { id: 'cetlaw', name: 'MH CET-LAW' },
    { id: 'lsat', name: 'LSAT' },
    { id: 'cuet', name: 'CUET' },
    { id: 'aillet', name: 'AIL-LET' },
  ]
  }

  // Example blog data
  const blogPosts = {
    legal: {
      "recent": [
        {
          id: 1,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
            id: 2,
            title: "Understanding CLAT Pattern 2025",
            description: "Key changes and updates in the CLAT examination pattern...",
            image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
            date: "April 15, 2024",
            readTime: "5 min read"
          },{
            id: 3,
            title: "Understanding CLAT Pattern 2025",
            description: "Key changes and updates in the CLAT examination pattern...",
            image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
            date: "April 15, 2024",
            readTime: "5 min read"
          },{
            id: 4,
            title: "Understanding CLAT Pattern 2025",
            description: "Key changes and updates in the CLAT examination pattern...",
            image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
            date: "April 15, 2024",
            readTime: "5 min read"
          },{
            id: 5,
            title: "Understanding CLAT Pattern 2025",
            description: "Key changes and updates in the CLAT examination pattern...",
            image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
            date: "April 15, 2024",
            readTime: "5 min read"
          },{
            id: 6,
            title: "Understanding CLAT Pattern 2025",
            description: "Key changes and updates in the CLAT examination pattern...",
            image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
            date: "April 15, 2024",
            readTime: "5 min read"
          }
        // Add more posts...
      ],
      "judiciary": [{
        id: 1,
        title: "Understanding CLAT Pattern 2025",
        description: "Key changes and updates in the CLAT examination pattern...",
        image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
        date: "April 15, 2024",
        readTime: "5 min read"
      },{
          id: 2,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 3,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 4,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 5,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },],
      "parliamentary": [{
        id: 1,
        title: "Understanding CLAT Pattern 2025",
        description: "Key changes and updates in the CLAT examination pattern...",
        image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
        date: "April 15, 2024",
        readTime: "5 min read"
      },{
          id: 2,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 3,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 4,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },,],
    },
    current: {
      daily: [{
        id: 1,
        title: "Understanding CLAT Pattern 2025",
        description: "Key changes and updates in the CLAT examination pattern...",
        image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
        date: "April 15, 2024",
        readTime: "5 min read"
      },{
          id: 2,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 3,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 4,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 5,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },],
      weekly: [{
        id: 1,
        title: "Understanding CLAT Pattern 2025",
        description: "Key changes and updates in the CLAT examination pattern...",
        image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
        date: "April 15, 2024",
        readTime: "5 min read"
      },{
          id: 2,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 3,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 4,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 5,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },],
      monthly: [{
        id: 1,
        title: "Understanding CLAT Pattern 2025",
        description: "Key changes and updates in the CLAT examination pattern...",
        image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
        date: "April 15, 2024",
        readTime: "5 min read"
      },{
          id: 2,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 3,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 4,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 5,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },],
      yearly: [{
        id: 1,
        title: "Understanding CLAT Pattern 2025",
        description: "Key changes and updates in the CLAT examination pattern...",
        image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
        date: "April 15, 2024",
        readTime: "5 min read"
      },{
          id: 2,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 3,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },{
          id: 4,
          title: "Understanding CLAT Pattern 2025",
          description: "Key changes and updates in the CLAT examination pattern...",
          image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
          date: "April 15, 2024",
          readTime: "5 min read"
        },,]
    }
  }

  const renderContent = () => {
    switch (activeCategory) {
      case 'legal':
        return (<>
        
        <LegalArticles 
          posts={blogPosts.legal} 
          activeTabLegal={activeTabLegal}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          months={months}
          years={years}
          setSelectedMonth={setSelectedMonth}
          setSelectedYear={setSelectedYear}
          setActiveTabLegal={setActiveTabLegal}
          tabs={tabs}
        />
        </>)
      case 'current':
        return (
          <>
            <CurrentAffairs 
              posts={blogPosts.current}
              activeTab={activeTab}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
              months={months}
              years={years}
              setSelectedMonth={setSelectedMonth}
              setSelectedYear={setSelectedYear}
              setActiveTab={setActiveTab}
              tabs={tabs}
            />
          </>
        )
      case 'examUpdates':
        return <>
        <div className="bg-white rounded-2xl shadow-lg p-3 max-w-3xl mb-12 mx-auto">
              <div className="grid grid-cols-3 md:grid-cols-6">
                {tabs["exams"].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabExam(tab.id)}
                    className={`px-6 py-3 truncate rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTabExam === tab.id
                      ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white shadow-md'
                      : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
            </div>
        
        {/* Add the new ExamUpdatesTips component */}
        <ExamUpdatesTips activeTabExam={activeTabExam} />
        </>
      default:
        return null
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Category Selection - keep existing code */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                activeCategory === category.id
                ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:shadow-md'
              }`}
            >
              <div className="p-6 relative z-10">
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-sm opacity-80">{category.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Render content based on active category */}
        {renderContent()}
      </div>
    </section>
  )
}