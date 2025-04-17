'use client'
import { useState, useEffect } from 'react'
import LegalArticles from './LegalArticles'
import CurrentAffairs from './CurrentAffairs'
import ExamUpdatesTips from './ExamUpdatesTips'
import { collection, getDocs, query, where, orderBy, limit, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState('legal')
  const [activeTab, setActiveTab] = useState('daily')
  const [activeTabLegal, setActiveTabLegal] = useState('recent')
  const [activeTabExam, setActiveTabExam] = useState('clat')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedYear, setSelectedYear] = useState('2024')
  const [loading, setLoading] = useState(true)
  const [blogData, setBlogData] = useState({
    legal: {
      recent: [],
      judiciary: [],
      parliamentary: []
    },
    current: {
      daily: [],
      monthly: [],
    },
    examUpdates: {
      clat: [],
      ailet: [],
      cetlaw: [],
      lsat: [],
      cuet: [],
      aillet: []
    }
  })

  // Fetch blog data from Firestore
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        
        // Fetch legal articles - simplified query to avoid index requirements
        const legalQuery = query(
          collection(db, "blogs"),
          where("category", "==", "legal"),
          orderBy("createdAt", "asc"),
          limit(20)
        )
        
        const legalSnapshot = await getDocs(legalQuery)
        
        let legalArticles = legalSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        // Only sort if there are articles
        if (legalArticles && legalArticles.length > 0) {
          // Sort client-side instead of using orderBy in the query
          legalArticles = legalArticles.sort((a, b) => {
            if (!a.createdAt || !b.createdAt) return 0;
            
            // Handle different formats of createdAt (string or Firestore timestamp)
            const dateA = typeof a.createdAt === 'string' ? new Date(a.createdAt) : a.createdAt.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            const dateB = typeof b.createdAt === 'string' ? new Date(b.createdAt) : b.createdAt.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            
            return dateB > dateA ? 1 : -1;
          });
        }
        
        // Fetch current affairs - simplified query
        const currentQuery = query(
          collection(db, "blogs"),
          where("category", "==", "current"),
          orderBy("createdAt", "asc"),
          limit(20)
        )
        
        const currentSnapshot = await getDocs(currentQuery)
        
        let currentAffairs = currentSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        // Process current affairs for daily and monthly views
        const currentByFrequency = {
          daily: [],
          monthly: []
        }
        
        if (currentAffairs && currentAffairs.length > 0) {
          // Get current date for comparison
          const currentDate = new Date()
          
          // Process each article
          currentAffairs.forEach(article => {
            // Convert createdAt to Date object
            
            let createdAtDate
            if (article.createdAt) {
              createdAtDate = typeof article.createdAt === 'string' 
                ? new Date(article.createdAt) 
                : article.createdAt.toDate 
                  ? article.createdAt.toDate() 
                  : new Date(article.createdAt)
            } else {
              // If no createdAt, use current date as fallback
              createdAtDate = new Date()
            }
            
            // Add to daily view (all articles)
            
            
            // Check if article was created within the last 30 days for monthly view
            const timeDiff = currentDate.getTime() - createdAtDate.getTime()
            
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
            if (daysDiff >= 30) {
              currentByFrequency.monthly.push(article)
            }else{
              currentByFrequency.daily.push(article)
            }
          })
          
          // Sort both arrays by date (newest first)
          currentByFrequency.daily.sort((a, b) => {
            const dateA = typeof a.createdAt === 'string' ? new Date(a.createdAt) : a.createdAt.toDate ? a.createdAt.toDate() : new Date(a.createdAt)
            const dateB = typeof b.createdAt === 'string' ? new Date(b.createdAt) : b.createdAt.toDate ? b.createdAt.toDate() : new Date(b.createdAt)
            return dateB - dateA
          })
          
          currentByFrequency.monthly.sort((a, b) => {
            const dateA = typeof a.createdAt === 'string' ? new Date(a.createdAt) : a.createdAt.toDate ? a.createdAt.toDate() : new Date(a.createdAt)
            const dateB = typeof b.createdAt === 'string' ? new Date(b.createdAt) : b.createdAt.toDate ? b.createdAt.toDate() : new Date(b.createdAt)
            return dateB - dateA
          })
        }
        
        // Fetch exam updates - simplified query
        const examUpdatesQuery = query(
          collection(db, "blogs"),
          where("category", "==", "examUpdates"),
          orderBy("createdAt", "asc"),
          limit(30)
        )
        
        const examUpdatesSnapshot = await getDocs(examUpdatesQuery)
        let examUpdatesArticles = examUpdatesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        // Only sort if there are articles
        // if (examUpdatesArticles && examUpdatesArticles.length > 0) {
        //   // Sort client-side
        //   examUpdatesArticles = examUpdatesArticles.sort((a, b) => {
        //     if (!a.createdAt || !b.createdAt) return 0;
            
        //     // Handle different formats of createdAt (string or Firestore timestamp)
        //     const dateA = typeof a.createdAt === 'string' ? new Date(a.createdAt) : a.createdAt.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
        //     const dateB = typeof b.createdAt === 'string' ? new Date(b.createdAt) : b.createdAt.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            
        //     return dateB > dateA ? 1 : -1;
        //   });
        // }
        
        // Initialize subcategory objects with empty arrays
        const legalBySubcategory = {
          recent: [],
          judiciary: [],
          parliamentary: []
        }
        
        // Only organize if there are legal articles
        if (legalArticles && legalArticles.length > 0) {
          // Add recent articles - no need to slice if we want all articles
          legalBySubcategory.recent = legalArticles;
          
          // Add judiciary articles if they exist
          const judiciaryArticles = legalArticles.filter(article => article.subcategory === "judiciary");
          if (judiciaryArticles.length > 0) {
            // Only slice if there are enough articles
            legalBySubcategory.judiciary = judiciaryArticles;
          }
          
          // Add parliamentary articles if they exist
          const parliamentaryArticles = legalArticles.filter(article => article.subcategory === "parliamentary");
          if (parliamentaryArticles.length > 0) {
            // Only slice if there are enough articles
            legalBySubcategory.parliamentary = parliamentaryArticles;
          }
        }
        
        // Initialize frequency objects with empty arrays
        // const currentByFrequency = {
        //   daily: [],
        //   monthly: []
        // }
        
        // Only organize if there are current affairs articles
        // if (currentAffairs && currentAffairs.length > 0) {
        //   // Add daily articles if they exist
        //   const dailyArticles = currentAffairs.filter(article => article.frequency === "daily");
        //   if (dailyArticles.length > 0) {
        //     currentByFrequency.daily = dailyArticles;
        //   }
          
        //   // Add weekly articles if they exist
          
          
        //   // Add monthly articles if they exist
        //   const monthlyArticles = currentAffairs.filter(article => article.frequency === "monthly");
        //   if (monthlyArticles.length > 0) {
        //     currentByFrequency.monthly = monthlyArticles;
        //   }
          
        //   // Add yearly articles if they exist
          
        // }
        
        // Initialize exam type objects with empty arrays
        const examUpdatesByType = {
          clat: [],
          ailet: [],
          cetlaw: [],
          lsat: [],
          cuet: [],
          aillet: []
        }
        
        // Only organize if there are exam updates articles
        if (examUpdatesArticles && examUpdatesArticles.length > 0) {
          // Add clat articles if they exist
          const clatArticles = examUpdatesArticles.filter(article => article.exam.id === "clat");
          if (clatArticles.length > 0) {
            examUpdatesByType.clat = clatArticles;
          }
          
          // Add ailet articles if they exist
          const ailetArticles = examUpdatesArticles.filter(article => article.exam.id  === "ailet");
          if (ailetArticles.length > 0) {
            examUpdatesByType.ailet = ailetArticles;
          }
          
          // Add cetlaw articles if they exist
          const cetlawArticles = examUpdatesArticles.filter(article => article.exam.id  === "cetlaw");
          if (cetlawArticles.length > 0) {
            examUpdatesByType.cetlaw = cetlawArticles;
          }
          
          // Add lsat articles if they exist
          const lsatArticles = examUpdatesArticles.filter(article => article.exam.id  === "lsat");
          if (lsatArticles.length > 0) {
            examUpdatesByType.lsat = lsatArticles;
          }
          
          // Add cuet articles if they exist
          const cuetArticles = examUpdatesArticles.filter(article => article.exam.id  === "cuet");
          if (cuetArticles.length > 0) {
            examUpdatesByType.cuet = cuetArticles;
          }
          
          // Add aillet articles if they exist
          const ailletArticles = examUpdatesArticles.filter(article => article.exam.id  === "aillet");
          if (ailletArticles.length > 0) {
            examUpdatesByType.aillet = ailletArticles;
          }
        }
        
        // Update state with fetched data
        setBlogData({
          legal: legalBySubcategory,
          current: currentByFrequency, // Use the processed current affairs data
          examUpdates: examUpdatesByType
        })
      } catch (error) {
        console.error("Error fetching blog data:", error)
        // Keep using the default data if there's an error
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlogData()
  }, [])

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

  // Update examUpdates to use Firebase data when available
  const examUpdates = {
    title: "All Law Entrance Exam Updates & Notifications",
    description: "Get real-time alerts on exam schedules, syllabus updates, and results and updates.",
    updates: [
      // Map the Firebase data to the format expected by the ExamUpdates component
      blogData.examUpdates.clat.length > 0 
        ? blogData.examUpdates.clat.map(item => ({ 
            date: item.date, 
            description: item.description || item.title 
          }))
        : [
            { date: 'May 2025', description: 'CLAT 2026 notification expected to be released' },
            { date: 'Mid-July 2025', description: 'CLAT 2025 final admission lists released by all participating NLUs' },
            { date: 'January 20, 2025', description: 'Third CLAT 2025 counseling round completed' },
            { date: 'January 5, 2025', description: 'Second CLAT 2025 counseling round completed' },
            { date: 'December 28, 2024', description: 'First CLAT 2025 counseling round initiated' },
            { date: 'December 22, 2024', description: 'CLAT 2025 results declared; cutoffs announced for all NLUs' },
            { date: 'December 8, 2024', description: 'CLAT 2025 examination successfully conducted' },
            { date: 'November 30, 2024', description: 'CLAT 2025 admit cards released for download' }
          ],
      
      blogData.examUpdates.ailet.length > 0
        ? blogData.examUpdates.ailet.map(item => ({ 
            date: item.date, 
            description: item.description || item.title 
          }))
        : [
            { "date": "March 10, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
          ],
      
      blogData.examUpdates.cetlaw.length > 0
        ? blogData.examUpdates.cetlaw.map(item => ({ 
            date: item.date, 
            description: item.description || item.title 
          }))
        : [
            { "date": "March 8, 2025", "description": "Initial guide published with tentative information based on previous years' patterns." }
          ],
      
      blogData.examUpdates.lsat.length > 0
        ? blogData.examUpdates.lsat.map(item => ({ 
            date: item.date, 
            description: item.description || item.title 
          }))
        : [
            { "date": "March 2025", "description": "Digital Testing Format: LSAT-India has fully transitioned to computer-based testing at designated centers." },
            // ... other fallback LSAT updates
          ],
      
      blogData.examUpdates.cuet.length > 0
        ? blogData.examUpdates.cuet.map(item => ({ 
            date: item.date, 
            description: item.description || item.title 
          }))
        : [
            { date: 'March 5, 2025', description: 'NTA announces the tentative schedule for CUET Law 2025-26 admissions. Applications expected to open by end of March.' },
            // ... other fallback CUET updates
          ],
      
      blogData.examUpdates.aillet.length > 0
        ? blogData.examUpdates.aillet.map(item => ({ 
            date: item.date, 
            description: item.description || item.title 
          }))
        : [
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
  

  const renderContent = () => {
    switch (activeCategory) {
      case 'legal':
        return (<>
        
        <LegalArticles 
          posts={blogData.legal} 
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
              posts={blogData.current}
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
        <ExamUpdatesTips activeTabExam={activeTabExam} examTips={blogData.examUpdates} />
        </>
      default:
        return null
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center mb-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {/* Category Selection */}
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