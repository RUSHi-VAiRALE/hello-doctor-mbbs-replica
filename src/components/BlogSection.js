'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { collection, getDocs, getFirestore, query, orderBy, limit } from 'firebase/firestore'
import { app } from '@/firebase'
import parse from 'html-react-parser'

export default function BlogSection() {
  const [blogs, setBlogs] = useState([])
  const [featuredBlog, setFeaturedBlog] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        const db = getFirestore(app)
        const blogsCollection = collection(db, "blogs")
        const blogsQuery = query(blogsCollection, orderBy("createdAt", "desc"), limit(7))
        const blogsSnapshot = await getDocs(blogsQuery)
        
        const blogsData = blogsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        
        if (blogsData.length > 0) {
          setFeaturedBlog(blogsData[0])
          setBlogs(blogsData.slice(1))
        } else {
          // Fallback data
          setFeaturedBlog({
            id: 'featured',
            title: 'The Role Of Online Tutors In Education',
            content: 'Libero integer duis facilisis magna etiam tempor orci. Sem et tortor consequat egestas tellus.',
            image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg',
            date: '2024-04-01',
            author: 'CLATians',
            readTime: '5'
          })
          setBlogs([])
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
        // Fallback data
        setFeaturedBlog({
          id: 'featured',
          title: 'The Role Of Online Tutors In Education',
          content: 'Libero integer duis facilisis magna etiam tempor orci. Sem et tortor consequat egestas tellus.',
          image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg',
          date: '2024-04-01',
          author: 'CLATians',
          readTime: '5'
        })
        setBlogs([])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Format date to display month and year
  const formatDate = (dateString) => {
    if (!dateString) return 'April 2024'
    
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    } catch (error) {
      return 'April 2024'
    }
  }

  // Truncate content for preview
  const truncateContent = (content, maxLength = 100) => {
    if (!content) return ''
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content
  }

  if (loading) {
    return (
      <section className="py-8 bg-[#e7edff]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">FEATURED</span> NEWS
            </h2>
            <p className="text-gray-600">Explore Latest Blogs From Here</p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 bg-[#e7edff]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 text-white px-4 py-2 rounded-md">FEATURED</span> NEWS
          </h2>
          <p className="text-gray-600">Explore Latest Blogs From Here</p>
        </div>

        {/* Mobile/Tablet View (Single Column) */}
        <div className="lg:hidden">
          {/* Featured Blog */}
          {featuredBlog && (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-[200px] sm:h-[300px]">
                <Image
                  src={featuredBlog.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(featuredBlog.date)}
                </div>
                <h3 className="text-xl font-bold mb-3">{featuredBlog.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {truncateContent(parse(featuredBlog.content))}
                </p>
                <div className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600">
                  <Link href={`/blogs/${featuredBlog.id}`} className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600">
                    <h5 className="font-bold mr-2 text-base">Read More</h5>
                    <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Horizontal Scroll for Recent Blogs */}
          <div className="mt-6 -mx-4 md:-mx-8 lg:-mx-16 px-4">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 px-4 md:px-8 lg:px-16">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <div 
                      key={blog.id} 
                      className="bg-white rounded-xl shadow-lg flex-shrink-0 w-[calc(100vw-32px)] md:w-[calc(50vw-48px)] max-w-full" 
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <div className="relative h-[200px] sm:h-[300px]">
                        <Image
                          src={blog.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"}
                          alt={blog.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-gray-500 text-sm mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(blog.date)}
                        </p>
                        <h5 className="text-xl font-bold mb-3">
                          {blog.title}
                        </h5>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-6">
                          {parse(blog.content)}
                        </p>
                        <div className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600">
                          <Link href={`/blogs/${blog.id}`} className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600">
                            <h5 className="font-bold mr-2 text-base">Read More</h5>
                            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 w-full">
                    <p className="text-gray-600">No blogs available at the moment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop View (Grid Layout) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
          {/* Featured Blog */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg h-[500px]">
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3">Featured News</h3>
              <p className="text-gray-600 mb-4 text-base">
                {truncateContent(parse(featuredBlog?.content), 80)}
              </p>
              
              <div className="relative flex-grow rounded-xl overflow-hidden">
                <Image
                  src={featuredBlog?.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"}
                  alt={featuredBlog?.title || "Featured Blog"}
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-white mb-2 flex items-center text-base">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {formatDate(featuredBlog?.date)}
                  </p>
                  <h5 className="text-white text-lg font-bold">
                    {featuredBlog?.title}
                  </h5>
                </div>
              </div>

              <Link href={featuredBlog ? `/blogs/${featuredBlog.id}` : "/blogs"} className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600 mt-2">
                <h5 className="font-bold mr-2 text-base">Read More</h5>
                <span className="transform group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Recent Blogs */}
          <div className="lg:col-span-3">
            <div className="h-[500px] overflow-y-auto pr-2">
              <div className="grid md:grid-cols-2 gap-4">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-[500px] min-h-[320px]">
                      <div className="relative h-56">
                        <Image
                          src={blog.image || "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg"}
                          alt={blog.title}
                          fill
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <p className="text-gray-500 text-sm mb-2 flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(blog.date)} | 
                          <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          {blog.readTime || '3'} min read
                        </p>
                        <h5 className="font-bold text-base mb-3">
                          {blog.title}
                        </h5>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-6">
                          {parse(blog.content)}
                        </p>
                        <Link href={`/blogs/${blog.id}`} className="group inline-flex items-center cursor-pointer text-orange-500 hover:text-orange-600 mt-auto">
                          <span className="transform group-hover:translate-x-2 transition-transform mr-2">→</span>
                          <p className="font-medium text-base">Read More</p>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 col-span-2">
                    <p className="text-gray-600">No blogs available at the moment.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}