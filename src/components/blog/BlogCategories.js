'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState('legal')
  const [activeTab, setActiveTab] = useState('daily')

  const categories = [
    { 
      id: 'legal', 
      name: 'Legal Blogs',
      icon: '⚖️',
      description: 'Latest updates in legal education and law'
    },
    { 
      id: 'current', 
      name: 'Current Affairs',
      icon: '🌏',
      description: 'Stay updated with daily news and events'
    }
  ]

  const tabs = [
    { id: 'daily', name: 'Daily' },
    { id: 'weekly', name: 'Weekly' },
    { id: 'monthly', name: 'Monthly' },
    { id: 'yearly', name: 'Yearly' }
  ]

  // Example blog data
  const blogPosts = {
    legal: {
      daily: [
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
        },,],
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
        },,],
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

  return (
    <section className="py-16 bg-[#fdf6f4]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Category Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
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

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-3 mb-12 max-w-xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 sm:gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white shadow-md'
                  : 'hover:bg-gray-50 text-gray-600'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts[activeCategory][activeTab].map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm gap-4">
                    <span className="flex items-center">
                      <i className="bi bi-calendar3 mr-2"></i>
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <i className="bi bi-clock mr-2"></i>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.description}</p>
                <Link 
                  href={`/blogs/${post.id}`}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm group"
                >
                  Read More 
                  <i className="bi bi-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}