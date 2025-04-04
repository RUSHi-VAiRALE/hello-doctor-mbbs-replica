'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { app } from '@/firebase'

export default function BlogPost() {
  const [blogData, setBlogData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const params = useParams()
  
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const blogId = params.id
        
        const blogRef = doc(db, "blogs", blogId)
        const blogSnap = await getDoc(blogRef)
        
        if (blogSnap.exists()) {
          setBlogData({
            id: blogSnap.id,
            ...blogSnap.data()
          })
        } else {
          setError("Blog not found")
        }
      } catch (err) {
        console.error("Error fetching blog:", err)
        setError("Failed to load blog")
      } finally {
        setLoading(false)
      }
    }
    
    if (params.id) {
      fetchBlogData()
    }
  }, [params.id])

  // Function to render content from the blog data
  const renderContent = () => {
    if (!blogData) return null
    
    // Split content by new lines to create paragraphs
    const paragraphs = blogData.content.split('\n').filter(p => p.trim() !== '')
    
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-6 text-gray-600 leading-relaxed">
        {paragraph}
      </p>
    ))
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#fdf6f4]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
      </div>
    )
  }

  if (error || !blogData) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#fdf6f4]">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {error || "Blog not found"}
        </h1>
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-gray-600 hover:text-red-700"
        >
          <i className="bi bi-arrow-left mr-2"></i>
          Back to Blogs
        </Link>
      </div>
    )
  }

  return (
    <article className="bg-[#fdf6f4] min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 max-w-[1400px]">
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center text-gray-600 hover:text-red-700 mb-8 group"
        >
          <i className="bi bi-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
          Back to Blogs
        </Link>

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {blogData.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <i className="bi bi-person-circle mr-2"></i>
              {blogData.author}
            </div>
            <div className="flex items-center">
              <i className="bi bi-calendar3 mr-2"></i>
              {blogData.date}
            </div>
            <div className="flex items-center">
              <i className="bi bi-clock mr-2"></i>
              {blogData.readTime} min read
            </div>
            {blogData.category && (
              <div className="flex items-center">
                <i className="bi bi-tag mr-2"></i>
                {blogData.category}
              </div>
            )}
            {blogData.frequency && (
              <div className="flex items-center">
                <i className="bi bi-calendar-check mr-2"></i>
                {blogData.frequency}
              </div>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {blogData.image && (
          <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={blogData.image}
              alt={blogData.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
          {renderContent()}
        </div>
      </div>
    </article>
  )
}