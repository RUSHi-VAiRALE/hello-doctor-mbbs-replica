'use client'
import { useState } from 'react'
import AboutHero from "@/components/AboutHero"
import Link from 'next/link'
import { FaArrowRight, FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa'

export default function Blogs() {
    // Demo blog data
    const demoBlogs = [
        {
            id: '1',
            title: 'MBBS in Russia: Complete Guide 2025',
            excerpt: 'Everything you need to know about studying MBBS in Russia - admission process, fees, universities, and student life.',
            image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg',
            date: '2024-04-01',
            author: 'MBBSYatra',
            readTime: '8',
            category: 'MBBS Abroad'
        },
        {
            id: '2',
            title: 'Top Medical Colleges in Rajasthan',
            excerpt: 'Comprehensive list of the best government and private medical colleges in Rajasthan with admission details.',
            image: 'https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg',
            date: '2024-03-28',
            author: 'MBBSYatra',
            readTime: '6',
            category: 'MBBS in India'
        },
        {
            id: '3',
            title: 'NEET UG 2025: Preparation Strategy',
            excerpt: 'Expert tips and strategies to crack NEET UG 2025 and secure admission in top medical colleges.',
            image: 'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg',
            date: '2024-03-25',
            author: 'MBBSYatra',
            readTime: '10',
            category: 'Exam Prep'
        },
        {
            id: '4',
            title: 'MBBS in Georgia: Admission Process',
            excerpt: 'Step-by-step guide to study MBBS in Georgia - requirements, universities, fees, and career prospects.',
            image: 'https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg',
            date: '2024-03-20',
            author: 'MBBSYatra',
            readTime: '7',
            category: 'MBBS Abroad'
        },
        {
            id: '5',
            title: 'MBBS vs BAMS: Which to Choose?',
            excerpt: 'Detailed comparison between MBBS and BAMS courses to help you make an informed decision.',
            image: 'https://cdn.pixabay.com/photo/2019/07/03/09/41/national-history-museum-4314035_1280.jpg',
            date: '2024-03-15',
            author: 'MBBSYatra',
            readTime: '9',
            category: 'Career Guidance'
        },
        {
            id: '6',
            title: 'Medical College Admission Counseling',
            excerpt: 'How professional counseling can help you choose the right medical college and career path.',
            image: 'https://cdn.pixabay.com/photo/2020/05/05/12/12/coffee-5132832_640.jpg',
            date: '2024-03-10',
            author: 'MBBSYatra',
            readTime: '5',
            category: 'Admission Guidance'
        }
    ]

    return (
        <>
            <AboutHero route="Home" page="Blog" />

            <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                            LATEST ARTICLES
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                            Our Blog
                        </h1>
                        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                            Stay updated with the latest insights, tips, and news in medical education and MBBS admissions.
                        </p>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {demoBlogs.map((blog) => (
                            <article key={blog.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 overflow-hidden">
                                {/* Blog Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Blog Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    {/* Blog Meta */}
                                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                                        <div className="flex items-center">
                                            <FaUser className="mr-1" />
                                            {blog.author}
                                        </div>
                                        <div className="flex items-center">
                                            <FaCalendarAlt className="mr-1" />
                                            {new Date(blog.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </div>
                                        <div className="flex items-center">
                                            <FaClock className="mr-1" />
                                            {blog.readTime} min read
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <Link
                                        href={`/blogs/${blog.id}`}
                                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
                                    >
                                        Read More
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
