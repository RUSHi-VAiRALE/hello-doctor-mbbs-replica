import Image from 'next/image'
import Link from 'next/link'

export default function BlogPost() {
  // Example of JSON formatted blog data
  const blogData = {
    title: "5 Tips to Crack CLAT 2025",
    image: "https://cdn.pixabay.com/photo/2015/07/28/21/58/student-865073_640.jpg",
    date: "March 15, 2024",
    author: "Legal Expert",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        content: "Preparing for CLAT (Common Law Admission Test) requires a strategic approach and consistent effort. Here are detailed tips to help you crack CLAT 2025 with excellence."
      },
      {
        type: "heading",
        content: "1. Understanding the Exam Pattern"
      },
      {
        type: "paragraph",
        content: "The first step towards successful CLAT preparation is understanding the exam pattern thoroughly. CLAT 2025 will test candidates on various sections including:"
      },
      {
        type: "list",
        items: [
          "English Language",
          "Current Affairs",
          "Legal Reasoning",
          "Logical Reasoning",
          "Quantitative Techniques"
        ]
      },
      {
        type: "heading",
        content: "2. Develop a Strong Reading Habit"
      },
      {
        type: "paragraph",
        content: "Reading comprehension plays a crucial role in CLAT. Make it a habit to read:"
      },
      {
        type: "list",
        items: [
          "Quality newspapers daily",
          "Legal magazines",
          "Current affairs journals",
          "Legal judgments and case laws"
        ]
      },
      {
        type: "heading",
        content: "3. Practice Mock Tests Regularly"
      },
      {
        type: "paragraph",
        content: "Regular practice with mock tests helps you understand the exam pattern better and improves your time management skills. Analyze your performance after each mock test to identify areas that need improvement."
      },
      {
        type: "heading",
        content: "4. Focus on Legal Reasoning"
      },
      {
        type: "paragraph",
        content: "Legal reasoning is one of the most important sections in CLAT. Practice solving legal problems and case studies regularly. Understanding the principles behind legal concepts is crucial for this section."
      },
      {
        type: "heading",
        content: "5. Time Management"
      },
      {
        type: "paragraph",
        content: "CLAT is a time-bound exam. Practice solving questions within the stipulated time. Develop strategies to tackle different sections efficiently without compromising on accuracy."
      },
      {
        type: "quote",
        content: "Success in CLAT comes from consistent practice and the right strategy. Focus on your weaknesses and turn them into your strengths."
      }
    ]
  }

  // Function to render different content types
  const renderContent = (section, index) => {
    switch (section.type) {
      case 'heading':
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-4">
            {section.content}
          </h2>
        )
      case 'paragraph':
        return (
          <p key={index} className="mb-6 text-gray-600 leading-relaxed">
            {section.content}
          </p>
        )
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )
      case 'quote':
        return (
          <div key={index} className="bg-gray-50 border-l-4 border-red-700 p-4 my-8">
            <p className="italic text-gray-700">{section.content}</p>
          </div>
        )
      default:
        return null
    }
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
              {blogData.readTime}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={blogData.image}
            alt={blogData.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
          {blogData.sections.map((section, index) => renderContent(section, index))}
        </div>

        {/* Share Section */}
        {/* <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Share this article</h3>
          <div className="flex justify-center gap-4">
            <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <i className="bi bi-facebook"></i>
            </button>
            <button className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors">
              <i className="bi bi-twitter-x"></i>
            </button>
            <button className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors">
              <i className="bi bi-whatsapp"></i>
            </button>
            <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>
        </div> */}
      </div>
    </article>
  )
} 